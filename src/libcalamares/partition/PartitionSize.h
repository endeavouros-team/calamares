/* === This file is part of Calamares - <https://calamares.io> ===
 *
 *   SPDX-FileCopyrightText: 2019 Collabora Ltd <arnaud.ferraris@collabora.com>
 *   SPDX-FileCopyrightText: 2019 Adriaan de Groot <groot@kde.org>
 *   SPDX-License-Identifier: GPL-3.0-or-later
 *
 *   Calamares is Free Software: see the License-Identifier above.
 *
 *
 */

#ifndef PARTITION_PARTITIONSIZE_H
#define PARTITION_PARTITIONSIZE_H

#include "DllMacro.h"
#include "utils/NamedSuffix.h"
#include "utils/Units.h"

// Qt
#include <QString>

namespace Calamares
{
namespace Partition
{

enum class SizeUnit
{
    None,
    Percent,
    Byte,
    KB,
    KiB,
    MB,
    MiB,
    GB,
    GiB
};

/** @brief Partition size expressions
 *
 * Sizes can be specified in bytes, KiB, MiB, GiB or percent (of
 * the available drive space are on). This class handles parsing
 * of such strings from the config file.
 */
class DLLEXPORT PartitionSize : public NamedSuffix< SizeUnit, SizeUnit::None >
{
public:
    PartitionSize()
        : NamedSuffix()
    {
    }
    PartitionSize( int v, SizeUnit u )
        : NamedSuffix( v, u )
    {
    }
    PartitionSize( const QString& );

    bool isValid() const { return ( unit() != SizeUnit::None ) && ( value() > 0 ); }

    bool operator<( const PartitionSize& other ) const;
    bool operator>( const PartitionSize& other ) const;
    bool operator==( const PartitionSize& other ) const;

    /** @brief Convert the size to the number of sectors @p totalSectors .
     *
     * Each sector has size @p sectorSize, for converting sizes in Bytes,
     * KiB, MiB or GiB to sector counts.
     *
     * @return  the number of sectors needed, or -1 for invalid sizes.
     */
    qint64 toSectors( qint64 totalSectors, qint64 sectorSize ) const;

    /** @brief Convert the size to bytes.
     *
     * The device's sectors count @p totalSectors and sector size
     * @p sectoreSize are used to calculated the total size, which
     * is then used to calculate the size when using Percent.
     *
     * @return  the size in bytes, or -1 for invalid sizes.
     */
    qint64 toBytes( qint64 totalSectors, qint64 sectorSize ) const;

    /** @brief Convert the size to bytes.
     *
     * Total size @p totalBytes is needed for sizes in Percent. This
     * parameter is unused in any other case.
     *
     * @return  the size in bytes, or -1 for invalid sizes.
     */
    qint64 toBytes( qint64 totalBytes ) const;

    /** @brief Convert the size to bytes.
     *
     * This method is only valid for sizes in Bytes, KiB, MiB or GiB.
     * It will return -1 in any other case. Note that 0KiB and 0MiB and
     * 0GiB are considered **invalid** sizes and return -1.
     *
     * @return  the size in bytes, or -1 if it cannot be calculated.
     */
    qint64 toBytes() const;

    /** @brief Are the units comparable?
     *
     * None units cannot be compared with anything. Percentages can
     * be compared with each other, and all the explicit sizes (KiB, ...)
     * can be compared with each other.
     */
    static constexpr bool unitsComparable( const SizeUnit u1, const SizeUnit u2 )
    {
        return !( ( u1 == SizeUnit::None || u2 == SizeUnit::None )
                  || ( u1 == SizeUnit::Percent && u2 != SizeUnit::Percent )
                  || ( u1 != SizeUnit::Percent && u2 == SizeUnit::Percent ) );
    }
};

/** @brief Adjusts @p start_sector to a 4K boundary
 *
 * Given a @p logicalSize of each sector, returns a sector-number to use (instead of)
 * @p start_sector such that that sector is 4K-aligned. If @p logicalSize is not
 * 512 (traditional block size) the device is assumed to be special in some way
 * and no adjustment is done.
 *
 * The start sector is at the start (e.g. the 0th 512-byte sector) of a 4K area.
 */
inline quint64
alignStartSectorTo4K( const qint64 logicalSize, const quint64 startSector )
{
    if ( logicalSize != 512 )
    {
        // RAID or non standard setup or already aligned
        return startSector;
    }

    // We round sectors number to value that align to 4K.
    // For 512 sector size, sector number must be divisible by 8.
    quint64 const rem = ( startSector - 1 ) % 8;
    return ( startSector - rem + 7 );
}

/** @bief Adjusts @p end_sector to a 4K boundary
 *
 * Given a @p logicalSize of each sector, returns a sector-number to use (instead of)
 * @p end_sector such that that sector is 4K-aligned. If @p logicalSize is not
 * 512 (traditional block size) the device is assumed to be special in some way
 * and no adjustment is done.
 *
 * The end sector is at the end (e.g. the 7th 512-byte sector) of a 4K area.
 */
inline quint64
alignEndSectorTo4K( const qint64 logicalSize, const quint64 endSector )
{
    if ( logicalSize != 512 )
    {
        // RAID or non standard setup or already aligned
        return endSector;
    }

    // We round sectors number to a value referring to the last 512-byte
    // sector in a 4K page. For 512 sector size, sector number must be 7 (mod 8).
    quint64 const rem = ( endSector + 1 ) % 8;
    return ( endSector - rem );
}

/** @brief Adjusts a partition sector range for LUKS2 (cryptsetup --sector-size 4096).
 *
 * On 512-byte logical sectors, both @p firstSector and @p lastSector are adjusted
 * so that the partition size is a multiple of 4096 bytes. If the range becomes
 * invalid, @p firstSector is moved down to form the smallest valid 4K-aligned range.
 */
inline void
alignSectorRangeTo4K( const qint64 logicalSize, qint64& firstSector, qint64& lastSector )
{
    if ( logicalSize != 512 )
    {
        return;
    }

    firstSector = alignStartSectorTo4K( logicalSize, firstSector );
    lastSector = alignEndSectorTo4K( logicalSize, lastSector );
    if ( firstSector > lastSector )
    {
        firstSector = lastSector >= 7 ? lastSector - 7 : lastSector;
        firstSector = alignStartSectorTo4K( logicalSize, firstSector );
    }
}

}  // namespace Partition
}  // namespace Calamares

#endif  // PARTITION_PARTITIONSIZE_H
