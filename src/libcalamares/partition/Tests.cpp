/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2019 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 *
 */

#include "Global.h"
#include "PartitionSize.h"

#include "GlobalStorage.h"
#include "utils/Logger.h"

#include <QObject>
#include <QtTest/QtTest>

using SizeUnit = Calamares::Partition::SizeUnit;
using PartitionSize = Calamares::Partition::PartitionSize;

Q_DECLARE_METATYPE( SizeUnit )

class PartitionServiceTests : public QObject
{
    Q_OBJECT
public:
    PartitionServiceTests();
    ~PartitionServiceTests() override;

private Q_SLOTS:
    void initTestCase();

    void testUnitComparison_data();
    void testUnitComparison();

    void testUnitNormalisation_data();
    void testUnitNormalisation();

    void testFilesystemGS();

    void testAlignment();
};

PartitionServiceTests::PartitionServiceTests() {}

PartitionServiceTests::~PartitionServiceTests() {}

void
PartitionServiceTests::initTestCase()
{
}

void
PartitionServiceTests::testUnitComparison_data()
{
    QTest::addColumn< SizeUnit >( "u1" );
    QTest::addColumn< SizeUnit >( "u2" );
    QTest::addColumn< bool >( "comparable" );

    QTest::newRow( "nones" ) << SizeUnit::None << SizeUnit::None << false;
    QTest::newRow( "none+%" ) << SizeUnit::None << SizeUnit::Percent << false;
    QTest::newRow( "%+none" ) << SizeUnit::Percent << SizeUnit::None << false;
    QTest::newRow( "KiB+none" ) << SizeUnit::KiB << SizeUnit::None << false;
    QTest::newRow( "none+MiB" ) << SizeUnit::None << SizeUnit::MiB << false;

    QTest::newRow( "KiB+KiB" ) << SizeUnit::KiB << SizeUnit::KiB << true;
    QTest::newRow( "KiB+MiB" ) << SizeUnit::KiB << SizeUnit::MiB << true;
    QTest::newRow( "KiB+GiB" ) << SizeUnit::KiB << SizeUnit::GiB << true;
    QTest::newRow( "MiB+MiB" ) << SizeUnit::MiB << SizeUnit::MiB << true;
    QTest::newRow( "MiB+GiB" ) << SizeUnit::MiB << SizeUnit::GiB << true;
    QTest::newRow( "GiB+GiB" ) << SizeUnit::GiB << SizeUnit::GiB << true;

    QTest::newRow( "%+None" ) << SizeUnit::Percent << SizeUnit::None << false;
    QTest::newRow( "%+%" ) << SizeUnit::Percent << SizeUnit::Percent << true;
    QTest::newRow( "%+KiB" ) << SizeUnit::Percent << SizeUnit::KiB << false;
}


static bool
original_compare( SizeUnit m_unit, SizeUnit other_m_unit )
{
    if ( ( m_unit == SizeUnit::None || other_m_unit == SizeUnit::None )
         || ( m_unit == SizeUnit::Percent && other_m_unit != SizeUnit::Percent )
         || ( m_unit != SizeUnit::Percent && other_m_unit == SizeUnit::Percent ) )
    {
        return false;
    }
    return true;
}

void
PartitionServiceTests::testUnitComparison()
{
    QFETCH( SizeUnit, u1 );
    QFETCH( SizeUnit, u2 );
    QFETCH( bool, comparable );

    if ( comparable )
    {
        QVERIFY( PartitionSize::unitsComparable( u1, u2 ) );
        QVERIFY( PartitionSize::unitsComparable( u2, u1 ) );
    }
    else
    {
        QVERIFY( !PartitionSize::unitsComparable( u1, u2 ) );
        QVERIFY( !PartitionSize::unitsComparable( u2, u1 ) );
    }

    QCOMPARE( original_compare( u1, u2 ), PartitionSize::unitsComparable( u1, u2 ) );
}

/* Operator to make the table in testUnitNormalisation_data easier to write */
constexpr qint64 operator""_qi( unsigned long long m )
{
    return qint64( m );
}

void
PartitionServiceTests::testUnitNormalisation_data()
{
    QTest::addColumn< SizeUnit >( "u1" );
    QTest::addColumn< int >( "v" );
    QTest::addColumn< qint64 >( "bytes" );

    QTest::newRow( "none" ) << SizeUnit::None << 16 << -1_qi;
    QTest::newRow( "none" ) << SizeUnit::None << 0 << -1_qi;
    QTest::newRow( "none" ) << SizeUnit::None << -2 << -1_qi;

    QTest::newRow( "percent" ) << SizeUnit::Percent << 0 << -1_qi;
    QTest::newRow( "percent" ) << SizeUnit::Percent << 16 << -1_qi;
    QTest::newRow( "percent" ) << SizeUnit::Percent << -2 << -1_qi;

    QTest::newRow( "KiB" ) << SizeUnit::KiB << 0 << -1_qi;
    QTest::newRow( "KiB" ) << SizeUnit::KiB << 1 << 1024_qi;
    QTest::newRow( "KiB" ) << SizeUnit::KiB << 1000 << 1024000_qi;
    QTest::newRow( "KiB" ) << SizeUnit::KiB << 1024 << 1024 * 1024_qi;
    QTest::newRow( "KiB" ) << SizeUnit::KiB << -2 << -1_qi;

    QTest::newRow( "MiB" ) << SizeUnit::MiB << 0 << -1_qi;
    QTest::newRow( "MiB" ) << SizeUnit::MiB << 1 << 1024 * 1024_qi;
    QTest::newRow( "MiB" ) << SizeUnit::MiB << 1000 << 1024 * 1024000_qi;
    QTest::newRow( "MiB" ) << SizeUnit::MiB << 1024 << 1024 * 1024 * 1024_qi;
    QTest::newRow( "MiB" ) << SizeUnit::MiB << -2 << -1_qi;

    QTest::newRow( "GiB" ) << SizeUnit::GiB << 0 << -1_qi;
    QTest::newRow( "GiB" ) << SizeUnit::GiB << 1 << 1024_qi * 1024 * 1024_qi;
    // This one overflows 32-bits, which is why we want 64-bits for the whole table
    QTest::newRow( "GiB" ) << SizeUnit::GiB << 2 << 2048_qi * 1024 * 1024_qi;
}

void
PartitionServiceTests::testUnitNormalisation()
{
    QFETCH( SizeUnit, u1 );
    QFETCH( int, v );
    QFETCH( qint64, bytes );

    QCOMPARE( PartitionSize( v, u1 ).toBytes(), bytes );
}

void
PartitionServiceTests::testFilesystemGS()
{
    using Calamares::Partition::isFilesystemUsedGS;
    using Calamares::Partition::useFilesystemGS;

    // Some filesystems names, they don't have to be real
    const QStringList fsNames { "ext4", "zfs", "berries", "carrot" };
    // Predicate to return whether we consider this FS in use
    auto pred = []( const QString& s ) { return !s.startsWith( 'z' ); };

    // Fill the GS
    Calamares::GlobalStorage gs;
    for ( const auto& s : fsNames )
    {
        useFilesystemGS( &gs, s, pred( s ) );
    }

    QVERIFY( gs.contains( "filesystem_use" ) );
    {
        const auto map = gs.value( "filesystem_use" ).toMap();
        QCOMPARE( map.count(), fsNames.count() );
    }

    for ( const auto& s : fsNames )
    {
        QCOMPARE( isFilesystemUsedGS( &gs, s ), pred( s ) );
    }
    QCOMPARE( isFilesystemUsedGS( &gs, QStringLiteral( "derp" ) ), false );
    QCOMPARE( isFilesystemUsedGS( &gs, QString() ), false );
    // But I can set a value for QString!
    useFilesystemGS( &gs, QString(), true );
    QCOMPARE( isFilesystemUsedGS( &gs, QString() ), true );
    // .. and replace it again
    useFilesystemGS( &gs, QString(), false );
    QCOMPARE( isFilesystemUsedGS( &gs, QString() ), false );
    // Now there is one more key
    {
        const auto map = gs.value( "filesystem_use" ).toMap();
        QCOMPARE( map.count(), fsNames.count() + 1 );
    }

    // The API says that it it case-insensitive
    QVERIFY( !isFilesystemUsedGS( &gs, "ZFS" ) );
    QVERIFY( isFilesystemUsedGS( &gs, "EXT4" ) );
    QCOMPARE( isFilesystemUsedGS( &gs, "ZFS" ), isFilesystemUsedGS( &gs, "zfs" ) );
    QCOMPARE( isFilesystemUsedGS( &gs, "EXT4" ), isFilesystemUsedGS( &gs, "ext4" ) );

    useFilesystemGS( &gs, "EXT4", false );
    QVERIFY( !isFilesystemUsedGS( &gs, "EXT4" ) );
    QCOMPARE( isFilesystemUsedGS( &gs, "EXT4" ), isFilesystemUsedGS( &gs, "ext4" ) );
    useFilesystemGS( &gs, "ext4", true );
    QVERIFY( isFilesystemUsedGS( &gs, "EXT4" ) );

    Calamares::Partition::clearFilesystemGS( &gs );
    QVERIFY( !isFilesystemUsedGS( &gs, "ZFS" ) );
    QVERIFY( !isFilesystemUsedGS( &gs, "EXT4" ) );
    QVERIFY( !isFilesystemUsedGS( &gs, "ext4" ) );
}


void
PartitionServiceTests::testAlignment()
{
    using namespace Calamares::Partition;
constexpr auto LOGICAL_SIZE = 512;

    // 0 is 4K aligned; all other blocks need to jump to next multiple of 4K.
    // Start sectors move **forward** (i.e. to larger sector-numbers) on-disk,
    // possibly making the partition slightly smaller.
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 0 ), 0 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 1 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 2 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 3 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 4 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 5 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 6 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 7 ), 8 );
    QCOMPARE( alignStartSectorTo4K( LOGICAL_SIZE, 8 ), 8 );

    // End sectors are the last-block-of-the-partition, so it's OK to end on 7 (mod 8)
    // because then we are snug up against the start of the next partition. End sectors
    // move **back** (i.e. to smaller sector-numbers) on-disk, possible making the
    // partition slightly smaller.
    //
    // Ending on 0..6 just isn't possible: when we round down to the nearest 7 (mod 8)
    // we wrap around. Since these sectors would be in the GPT table anyway, assume
    // that it never happens.
    QCOMPARE( alignEndSectorTo4K( LOGICAL_SIZE, 0 ), quint64(-1) );
    QCOMPARE( alignEndSectorTo4K( LOGICAL_SIZE, 6 ), quint64(-1) );
    QCOMPARE( alignEndSectorTo4K( LOGICAL_SIZE, 7 ), 7 );
    QCOMPARE( alignEndSectorTo4K( LOGICAL_SIZE, 8 ), 7 ); // First value to round down sensibly

    qint64 first = 2048;
    qint64 last = 41943039;  // typical misaligned GPT last sector
    alignSectorRangeTo4K( LOGICAL_SIZE, first, last );
    QCOMPARE( first, 2048 );
    QCOMPARE( last % 8, 7 );
    QCOMPARE( ( last - first + 1 ) % 8, 0 );

    first = 50;
    last = 100;
    alignSectorRangeTo4K( LOGICAL_SIZE, first, last );
    QVERIFY( first <= last );
    QCOMPARE( first % 8, 0 );
    QCOMPARE( last % 8, 7 );
}

QTEST_GUILESS_MAIN( PartitionServiceTests )

#include "utils/moc-warnings.h"

#include "Tests.moc"
