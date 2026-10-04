<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS language="nb" version="2.1">
  <context>
    <name>AboutData</name>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="17"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</source>
      <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="20"/>
      <source>Thanks to &lt;a href="https://calamares.io/team/"&gt;the Calamares team&lt;/a&gt; and the &lt;a href="https://app.transifex.com/calamares/calamares/"&gt;Calamares translators team&lt;/a&gt;.</source>
      <translation>Takk til &lt;a href="https://calamares.io/team/"&gt;Calamares-laget&lt;/a&gt; og &lt;a href="https://app.transifex.com/calamares/calamares/"&gt;Calamares-oversettelseslaget&lt;/a&gt;.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="34"/>
      <source>Copyright %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</source>
      <extracomment>Copyright year-year Name &lt;email-address&gt;</extracomment>
      <translation>Opphavsrett %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</translation>
    </message>
  </context>
  <context>
    <name>ActiveDirectoryJob</name>
    <message>
      <location filename="../src/modules/users/ActiveDirectoryJob.cpp" line="39"/>
      <source>Enroll system in Active Directory</source>
      <comment>@label</comment>
      <translation>Registrer systemet i Active Directory</translation>
    </message>
    <message>
      <location filename="../src/modules/users/ActiveDirectoryJob.cpp" line="45"/>
      <source>Enrolling system in Active Directory…</source>
      <comment>@status</comment>
      <translation>Registrerer systemet i Active Directory …</translation>
    </message>
  </context>
  <context>
    <name>AutoMountManagementJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
      <source>Managing auto-mount settings…</source>
      <comment>@status</comment>
      <translation>Behandler auto-montering innstillinger …</translation>
    </message>
  </context>
  <context>
    <name>BootInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="60"/>
      <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
      <translation>&lt;strong&gt;Oppstartsmiljøet&lt;/strong&gt; til dette systemet.&lt;br&gt;&lt;br&gt;Eldre x86-systemer støtter bare &lt;strong&gt;«BIOS»&lt;/strong&gt;.&lt;br&gt;Moderne systemer bruker vanligvis &lt;strong&gt;«EFI»&lt;/strong&gt;, men vises kanskje som «BIOS» hvis startet i kompatibilitetsmodus.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="70"/>
      <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
      <translation>Dette systemet startet med et &lt;strong&gt;«EFI»&lt;/strong&gt;-oppstartsmiljø.&lt;br&gt;&lt;br&gt;For å sette opp oppstart fra et «EFI»-miljø, trenger dette installasjonsprogrammet en oppstartslaster, som &lt;strong&gt;GRUB&lt;/strong&gt; eller &lt;strong&gt;systemd-boot&lt;/strong&gt; på et &lt;strong&gt;«EFI»-systempartisjon&lt;/strong&gt;. Dette skjer automatisk, med mindre du velger manuell partisjonering, i det tilfellet må du velge dette eller lage det selv.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="82"/>
      <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
      <translation>Dette systemet startet med et &lt;strong&gt;«BIOS»&lt;/strong&gt;-oppstartsmiljø.&lt;br&gt;&lt;br&gt;For å sette opp oppstart fra et «BIOS»-miljø, trenger dette installasjonsprogrammet en oppstartslaster, som &lt;strong&gt;GRUB&lt;/strong&gt;, enten ved begynnelsen av en partisjon eller på &lt;strong&gt;hovedpartisjonssektoren/«MBR»&lt;/strong&gt;nær begynnelsen av partisjonstabellen  (anbefalt). Dette skjer automatisk, med mindre du velger manuell partisjonering, i det tilfellet må du velge dette eller lage det selv.</translation>
    </message>
  </context>
  <context>
    <name>BootLoaderModel</name>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="60"/>
      <source>Master Boot Record of %1</source>
      <comment>@info</comment>
      <translation>Hovedpartisjonssektor/«MBR» til %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
      <source>Boot Partition</source>
      <comment>@info</comment>
      <translation>Oppstartspartisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
      <source>System Partition</source>
      <comment>@info</comment>
      <translation>Systempartisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="131"/>
      <source>Do not install a boot loader</source>
      <comment>@label</comment>
      <translation>Ikke installer en oppstartslaster</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="148"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::BlankViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="61"/>
      <source>Blank Page</source>
      <translation>Blank side</translation>
    </message>
  </context>
  <context>
    <name>Calamares::DebugWindow</name>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="28"/>
      <source>GlobalStorage</source>
      <translation>Global lagring</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="38"/>
      <source>JobQueue</source>
      <translation>Oppgavekø</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="48"/>
      <source>Modules</source>
      <translation>Moduler</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="61"/>
      <source>Type:</source>
      <translation>Type:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="68"/>
      <location filename="../src/calamares/DebugWindow.ui" line="82"/>
      <source>none</source>
      <translation>ingen</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="75"/>
      <source>Interface:</source>
      <translation>Grensesnitt:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="102"/>
      <source>Crashes Calamares, so that Dr. Konqi can look at it.</source>
      <translation>Krasjer Calamares, slik at Dr. Konqi kan ta en titt.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="115"/>
      <source>Reloads the stylesheet from the branding directory.</source>
      <translation>Laster om stilsett fra merkevare mappa.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="118"/>
      <source>Reload Stylesheet</source>
      <translation>Last om stilsett</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="128"/>
      <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
      <translation>Viser treet med skjermelementnavn i loggen (for stilsett feilsøking).</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="131"/>
      <source>Widget Tree</source>
      <translation>Skjermelement tre</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="141"/>
      <source>Uploads the session log to the configured pastebin.</source>
      <translation>Laster opp øktloggen til den oppsatte innliminstjenesten/«pastebin».</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="144"/>
      <source>Send Session Log</source>
      <translation>Send øktloggen</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="166"/>
      <source>Debug Information</source>
      <comment>@title</comment>
      <translation>Feilsøkingsinformasjon</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="77"/>
      <source>%p%</source>
      <comment>Progress percentage indicator: %p is where the number 0..100 is placed</comment>
      <translation>%p %</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="117"/>
      <source>Set Up</source>
      <comment>@label</comment>
      <translation>Sett opp</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="117"/>
      <source>Install</source>
      <comment>@label</comment>
      <translation>Installer</translation>
    </message>
  </context>
  <context>
    <name>Calamares::FailJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
      <source>Job failed (%1)</source>
      <translation>Feil ved oppgave (%1)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
      <source>Programmed job failure was explicitly requested.</source>
      <translation>Programmert oppgavefeil ble eksplisitt forespurt.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::JobThread</name>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="369"/>
      <source>Done</source>
      <translation>Ferdig</translation>
    </message>
  </context>
  <context>
    <name>Calamares::NamedJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
      <source>Example job (%1)</source>
      <translation>Eksempel oppgave (%1)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ProcessJob</name>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="49"/>
      <source>Running command %1 in target system…</source>
      <comment>@status</comment>
      <translation>Kjører kommandoen %1 i målsystemet …</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="53"/>
      <source>Running command %1…</source>
      <comment>@status</comment>
      <translation>Kjører kommandoen %1 …</translation>
    </message>
  </context>
  <context>
    <name>Calamares::Python::Job</name>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="219"/>
      <source>Running %1 operation.</source>
      <translation>Kjører operasjonen %1.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="234"/>
      <source>Bad working directory path</source>
      <translation>Feil filsti til arbeidsmappe</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="235"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <translation>Arbeidsmappa %1 for Python-oppgaven %2 er ikke lesbar.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="243"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="319"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="345"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="362"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="370"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="378"/>
      <source>Bad main script file</source>
      <translation>Ugyldig hovedskriptfil</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="244"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <translation>Hovedskriptfila %1 for Python-oppgaven %2 er ikke lesbar.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="305"/>
      <source>Bad internal script</source>
      <translation>Feil ved internt skript</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="306"/>
      <source>Internal script for python job %1 raised an exception.</source>
      <translation>Internt skript for Python-oppgaven %1 genererte et unntak.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="320"/>
      <source>Main script file %1 for python job %2 could not be loaded because it raised an  exception.</source>
      <translation>Hovedskriptfila %1 for Pythonoppgaven %2 klarte ikke lastes fordi den genererte et unntak.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="346"/>
      <source>Main script file %1 for python job %2 raised an exception.</source>
      <translation>Hovedskriptfila %1 for Python-oppgaven %2 genererte et unntak.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="363"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="371"/>
      <source>Main script file %1 for python job %2 returned invalid results.</source>
      <translation>Hovedskriptfila %1 for Python-oppgaven %2 returnerte feil resultater.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="379"/>
      <source>Main script file %1 for python job %2 does not contain a run() function.</source>
      <translation>Hovedskriptfila %1 for Python-oppgaven %2 inneholder ikke en «run()»-funksjon.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::PythonJob</name>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="238"/>
      <source>Running %1 operation…</source>
      <comment>@status</comment>
      <translation>Kjører operasjonen %1 …</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="266"/>
      <source>Bad working directory path</source>
      <comment>@error</comment>
      <translation>Feil filsti til arbeidsmappe</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="267"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <comment>@error</comment>
      <translation>Arbeidsmappa %1 for Python-oppgaven %2 er ikke lesbar.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="275"/>
      <source>Bad main script file</source>
      <comment>@error</comment>
      <translation>Feil ved hovedskriptfila</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="276"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <comment>@error</comment>
      <translation>Hovedskriptfila %1 for Python-oppgaven %2 er ikke lesbar.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="348"/>
      <source>Boost.Python error in job "%1"</source>
      <comment>@error</comment>
      <translation>Feil med «Boost.Python» i jobben «%1»</translation>
    </message>
  </context>
  <context>
    <name>Calamares::QmlViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="73"/>
      <source>Loading…</source>
      <comment>@status</comment>
      <translation>Laster …</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="100"/>
      <source>QML step &lt;i&gt;%1&lt;/i&gt;.</source>
      <comment>@label</comment>
      <translation>QML-steg &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="286"/>
      <source>Loading failed.</source>
      <comment>@info</comment>
      <translation>Feil ved lasting.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::RequirementsChecker</name>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="100"/>
      <source>Requirements checking for module '%1' is complete.</source>
      <comment>@info</comment>
      <translation>Kontroll av krav for modulen «%1» er fullført.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="124"/>
      <source>Waiting for %n module(s)…</source>
      <comment>@status</comment>
      <translation>
        <numerusform>Venter på %n modul …</numerusform>
        <numerusform>Venter på %n moduler …</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="125"/>
      <source>(%n second(s))</source>
      <comment>@status</comment>
      <translation>
        <numerusform>(%n sekund)</numerusform>
        <numerusform>(%n sekunder)</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="130"/>
      <source>System-requirements checking is complete.</source>
      <comment>@info</comment>
      <translation>Kontroll av systemkrav er fullført.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ViewManager</name>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="165"/>
      <source>The upload was unsuccessful. No web-paste was done.</source>
      <translation>Feil ved opplasting. Ingenting ble sendt til en nettadresse.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="177"/>
      <source>Install log posted to

%1

Link copied to clipboard</source>
      <translation>Opplastet installasjonsloggen til

%1

Lenka kopiert til utklippstavla</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="183"/>
      <source>Install Log Paste URL</source>
      <translation>Nettadresse for sending av installasjonsloggen</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
      <source>&amp;Yes</source>
      <translation>&amp;Ja</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
      <source>&amp;No</source>
      <translation>&amp;Nei</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
      <source>&amp;Close</source>
      <translation>&amp;Lukk</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="155"/>
      <source>Setup Failed</source>
      <comment>@title</comment>
      <translation>Feil ved oppsett</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
      <source>Installation Failed</source>
      <comment>@title</comment>
      <translation>Feil ved installasjonen</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="159"/>
      <source>Error</source>
      <comment>@title</comment>
      <translation>Feil</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="188"/>
      <source>Calamares Initialization Failed</source>
      <comment>@title</comment>
      <translation>Feil ved klargjøring av Calamares</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
      <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
      <comment>@info</comment>
      <translation>Klarte ikke installere %1. Calamares klarte ikke laste alle de oppsatte modulene. Dette er et problem med måten Calamares er satt opp av distribusjonen.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="196"/>
      <source>&lt;br/&gt;The following modules could not be loaded:</source>
      <comment>@info</comment>
      <translation>&lt;br/&gt;Klarte ikke laste følgende moduler:</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="336"/>
      <source>Continue with Setup?</source>
      <comment>@title</comment>
      <translation>Fortsette med oppsettet?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="337"/>
      <source>Continue with Installation?</source>
      <comment>@title</comment>
      <translation>Fortsette med installasjonen?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="339"/>
      <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <comment>%1 is short product name, %2 is short product name with version</comment>
      <translation>Oppsettsprogrammet %1 er i ferd med å gjøre endringer på harddisken din, for å sette opp %2.&lt;br/&gt;&lt;strong&gt;Du kan ikke gjøre om disse endringene.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="343"/>
      <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <comment>%1 is short product name, %2 is short product name with version</comment>
      <translation>Installasjonsprogrammet %1 er i ferd med å gjøre endringer på harddisken din, for å sette opp %2.&lt;br/&gt;&lt;strong&gt;Du kan ikke gjøre om disse endringene.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
      <source>&amp;Set Up Now</source>
      <comment>@button</comment>
      <translation>&amp;Sett opp nå</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
      <source>&amp;Install Now</source>
      <comment>@button</comment>
      <translation>&amp;Installer nå</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="355"/>
      <source>Go &amp;Back</source>
      <comment>@button</comment>
      <translation>Gå &amp;tilbake</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="402"/>
      <source>&amp;Set Up</source>
      <comment>@button</comment>
      <translation>&amp;Sett opp</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="402"/>
      <source>&amp;Install</source>
      <comment>@button</comment>
      <translation>&amp;Installer</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="404"/>
      <source>Setup is complete. Close the setup program.</source>
      <comment>@tooltip</comment>
      <translation>Oppsettet er fullført. Lukk oppsettsprogrammet.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="405"/>
      <source>The installation is complete. Close the installer.</source>
      <comment>@tooltip</comment>
      <translation>Installasjonen er fullført. Lukk installasjonsprogrammet.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="407"/>
      <source>Cancel the setup process without changing the system.</source>
      <comment>@tooltip</comment>
      <translation>Avbryt oppsett-prosessen uten endringer på systemet.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="408"/>
      <source>Cancel the installation process without changing the system.</source>
      <comment>@tooltip</comment>
      <translation>Avbryt installasjons-prosessen uten endringer på systemet.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="418"/>
      <source>&amp;Next</source>
      <comment>@button</comment>
      <translation>&amp;Neste</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="423"/>
      <source>&amp;Back</source>
      <comment>@button</comment>
      <translation>&amp;Tilbake</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="429"/>
      <source>&amp;Done</source>
      <comment>@button</comment>
      <translation>&amp;Ferdig</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="448"/>
      <source>&amp;Cancel</source>
      <comment>@button</comment>
      <translation>&amp;Avbryt</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="524"/>
      <source>Cancel Setup?</source>
      <comment>@title</comment>
      <translation>Avbryt oppsettet?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="524"/>
      <source>Cancel Installation?</source>
      <comment>@title</comment>
      <translation>Avbryt installasjonen?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="525"/>
      <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
      <translation>Vil du virkelig avbryte oppsettet?
Oppsettsprogrammet vil avsluttes og alle endringer vil gå tapt.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="527"/>
      <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
      <translation>Vil du virkelig avbryte installasjonen?
Installasjonsprogrammet vil avsluttes og alle endringer vil gå tapt.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresPython::Helper</name>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="309"/>
      <source>Unknown exception type</source>
      <comment>@error</comment>
      <translation>Ukjent unntakstype</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="327"/>
      <source>Unparseable Python error</source>
      <comment>@error</comment>
      <translation>Klarte ikke tolke Python feil</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="371"/>
      <source>Unparseable Python traceback</source>
      <comment>@error</comment>
      <translation>Klarte ikke tolke Python tilbakesporing</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="378"/>
      <source>Unfetchable Python error</source>
      <comment>@error</comment>
      <translation>Klarte ikke hente Python feil</translation>
    </message>
  </context>
  <context>
    <name>CalamaresWindow</name>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="405"/>
      <source>%1 Setup Program</source>
      <translation>%1 oppsettsprogram</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="406"/>
      <source>%1 Installer</source>
      <translation>%1 installasjonsprogram</translation>
    </message>
  </context>
  <context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="34"/>
      <source>Set filesystem label on %1</source>
      <comment>@title</comment>
      <translation>Sett filsystem merkelapp på %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="41"/>
      <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Sett filsystem merkelappen &lt;strong&gt;%1&lt;/strong&gt; til partisjonen &lt;strong&gt;%2&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="50"/>
      <source>Setting filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Setter filsystem merkelappen &lt;strong&gt;%1&lt;/strong&gt; til partisjonen &lt;strong&gt;%2&lt;/strong&gt; …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="72"/>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="84"/>
      <source>The installer failed to update partition table on disk '%1'.</source>
      <comment>@info</comment>
      <translation>Feil ved oppdatering av partisjonstabellen på disk «%1».</translation>
    </message>
  </context>
  <context>
    <name>CheckerContainer</name>
    <message>
      <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
      <source>Gathering system information...</source>
      <translation>Henter systeminformasjon …</translation>
    </message>
  </context>
  <context>
    <name>ChoicePage</name>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="137"/>
      <source>Select storage de&amp;vice:</source>
      <comment>@label</comment>
      <translation>Velg lagrings&amp;enhet:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1040"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1100"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1153"/>
      <source>Current:</source>
      <comment>@label</comment>
      <translation>Gjeldende:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
      <source>After:</source>
      <comment>@label</comment>
      <translation>Etter:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="897"/>
      <source>Reuse %1 as home partition for %2</source>
      <comment>@label</comment>
      <translation>Gjenbruk %1 som hjemmepartisjon for %2</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1041"/>
      <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
      <translation>&lt;strong&gt;Velg en partisjon å forminske, deretter dra bunnlinja for å endre størrelse&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1065"/>
      <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
      <comment>@info, %1 is partition name, %4 is product name</comment>
      <translation>%1 vil forminskes til %2 MiB og en ny %3 MiB partisjon vil opprettes for %4.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1144"/>
      <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Velg en partisjon å installere til&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1204"/>
      <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <comment>@info, %1 is product name</comment>
      <translation>Fant ikke en «EFI»-systempartisjon på dette systemet. Gå tilbake og bruk manuell partisjonering for oppsett av %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1213"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <comment>@info, %1 is partition path, %2 is product name</comment>
      <translation>«EFI»-systempartisjonen på %1 vil brukes for oppstart av %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1222"/>
      <source>EFI system partition:</source>
      <comment>@label</comment>
      <translation>«EFI»-systempartisjon:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1712"/>
      <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Denne lagringsenheten har ikke et operativsystem. Hva ønsker du å gjøre?&lt;br/&gt;Du vil kunne se gjennom og bekrefte dine valg, før det gjøres noen endringer på lagringsenheten.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1717"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1744"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1764"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1786"/>
      <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color="red"&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
      <translation>&lt;strong&gt;Slett disken&lt;/strong&gt;&lt;br/&gt;Dette vil &lt;font color="red"&gt;slette&lt;/font&gt; alle nåværende data på den valgte lagringsenheten.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1721"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1740"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1760"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1782"/>
      <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
      <translation>&lt;strong&gt;Installer ved siden av&lt;/strong&gt;&lt;br/&gt;Installasjonsprogrammet vil forminske en partisjon for å gjøre plass til %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1725"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1748"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1768"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1790"/>
      <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
      <translation>&lt;strong&gt;Erstatt en partisjon&lt;/strong&gt;&lt;br/&gt;Erstatter en partisjon med %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1734"/>
      <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Denne lagringsenheten har %1 på den. Hva ønsker du å gjøre?&lt;br/&gt;Du vil kunne se gjennom og bekrefte dine valg, før det gjøres noen endringer på lagringsenheten.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1755"/>
      <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Denne lagringsenheten har allerede et operativsystem. Hva ønsker du å gjøre?&lt;br/&gt;Du vil kunne se gjennom og bekrefte dine valg, før det gjøres noen endringer på lagringsenheten.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1777"/>
      <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Denne lagringsenheten har flere operativsystemer. Hva ønsker du å gjøre?&lt;br/&gt;Du vil kunne se gjennom og bekrefte dine valg, før det gjøres noen endringer på lagringsenheten.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1423"/>
      <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
      <translation>Denne lagringsenheten har allerede et operativsystem, men partisjonstabellen &lt;strong&gt;%1&lt;/strong&gt; er forskjellig fra det som trengs &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1447"/>
      <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>Denne lagringsenheten har ett av dens partisjoner &lt;strong&gt;montert&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1452"/>
      <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
      <comment>@info</comment>
      <translation>Denne lagringsenheten er del av en &lt;strong&gt;inaktiv RAID&lt;/strong&gt;-enhet.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1570"/>
      <source>No swap</source>
      <comment>@label</comment>
      <translation>Ingen veksleminne</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1579"/>
      <source>Reuse swap</source>
      <comment>@label</comment>
      <translation>Gjenbruk veksleminne</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1582"/>
      <source>Swap (no Hibernate)</source>
      <comment>@label</comment>
      <translation>Veksleminne (ingen dvalemodus)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1585"/>
      <source>Swap (with Hibernate)</source>
      <comment>@label</comment>
      <translation>Veksleminne (med dvalemodus)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1588"/>
      <source>Swap to file</source>
      <comment>@label</comment>
      <translation>Vekslefil</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1601"/>
      <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
      <translation>&lt;strong&gt;Manuell partisjonering&lt;/strong&gt;&lt;br/&gt;Du kan opprette eller endre størrelse på partisjoner selv.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1629"/>
      <source>Bootloader location:</source>
      <comment>@label</comment>
      <translation>Plassering av oppstartslaster:</translation>
    </message>
  </context>
  <context>
    <name>ClearMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="267"/>
      <source>Successfully unmounted %1.</source>
      <translation>Avmonterte %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="274"/>
      <source>Successfully disabled swap %1.</source>
      <translation>Tok veksleminne %1 ut av bruk.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="300"/>
      <source>Successfully cleared swap %1.</source>
      <translation>Tømte veksleminne %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="314"/>
      <source>Successfully closed mapper device %1.</source>
      <translation>Kartleggingsenheten %1 ble lukket.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="327"/>
      <source>Successfully disabled volume group %1.</source>
      <translation>Tok dataområde %1 ut av bruk.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="366"/>
      <source>Clear mounts for partitioning operations on %1</source>
      <comment>@title</comment>
      <translation>Fjern monteringspunkt for partisjonering av %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="372"/>
      <source>Clearing mounts for partitioning operations on %1…</source>
      <comment>@status</comment>
      <translation>Fjerner monteringspunkt for partisjonering av %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="391"/>
      <source>Cleared all mounts for %1</source>
      <translation>Fjernet alle monteringspunkt for %1</translation>
    </message>
  </context>
  <context>
    <name>ClearTempMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
      <source>Clearing all temporary mounts…</source>
      <comment>@status</comment>
      <translation>Fjerner alle midlertidige monteringspunkt …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
      <source>Cleared all temporary mounts.</source>
      <translation>Fjernet alle midlertidige monteringspunkt.</translation>
    </message>
  </context>
  <context>
    <name>CommandList</name>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="235"/>
      <source>Could not run command.</source>
      <translation>Klarte ikke kjøre kommandoen.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="236"/>
      <source>The commands use variables that are not defined. Missing variables are: %1.</source>
      <translation>Kommandoen bruker variabler som ikke er definert. Manglende variabler er: %1.</translation>
    </message>
  </context>
  <context>
    <name>Config</name>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="142"/>
      <source>Setup Failed</source>
      <comment>@title</comment>
      <translation>Feil ved oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="143"/>
      <source>Installation Failed</source>
      <comment>@title</comment>
      <translation>Feil ved installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="145"/>
      <source>The setup of %1 did not complete successfully.</source>
      <comment>@info</comment>
      <translation>Feil ved oppsett av %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="146"/>
      <source>The installation of %1 did not complete successfully.</source>
      <comment>@info</comment>
      <translation>Feil ved installasjon av %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="150"/>
      <source>Setup Complete</source>
      <comment>@title</comment>
      <translation>Oppsettet er fullført</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="151"/>
      <source>Installation Complete</source>
      <comment>@title</comment>
      <translation>Installasjon fullført</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="153"/>
      <source>The setup of %1 is complete.</source>
      <comment>@info</comment>
      <translation>Oppsettet av %1 er fullført</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="154"/>
      <source>The installation of %1 is complete.</source>
      <comment>@info</comment>
      <translation>Installasjonen av %1 er fullført.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="583"/>
      <source>Keyboard model has been set to %1.</source>
      <comment>@label, %1 is keyboard model, as in Apple Magic Keyboard</comment>
      <translation>Tastaturmodellen er satt til %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="591"/>
      <source>Keyboard layout has been set to %1/%2.</source>
      <comment>@label, %1 is layout, %2 is layout variant</comment>
      <translation>Tastaturutforming er satt til %1/%2.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="381"/>
      <source>Set timezone to %1.</source>
      <comment>@action</comment>
      <translation>Sett tidssonen til %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="418"/>
      <source>The system language will be set to %1.</source>
      <comment>@info</comment>
      <translation>Systemspråket vil bli satt til %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="425"/>
      <source>The numbers and dates locale will be set to %1.</source>
      <comment>@info</comment>
      <translation>Tall og dato lokale vil bli satt til %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="53"/>
      <source>Network Installation. (Disabled: Incorrect configuration)</source>
      <translation>Nettverkinstallasjon. (Avslått: feil ved oppsett)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="55"/>
      <source>Network Installation. (Disabled: Received invalid groups data)</source>
      <translation>Nettverkinstallasjon. (Avslått: mottok ugyldige gruppedata)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="57"/>
      <source>Network Installation. (Disabled: Internal error)</source>
      <translation>Nettverkinstallasjon. (Avslått: intern feil)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="59"/>
      <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
      <translation>Nettverkinstallasjon. (Avslått: klarte ikke hente pakkelista, sjekk Internet-forbindelsen)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="61"/>
      <source>Network Installation. (Disabled: No package list)</source>
      <translation>Nettverkinstallasjon. (Avslått: ingen pakkeliste)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="76"/>
      <source>Package selection</source>
      <translation>Valg av pakker</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="110"/>
      <source>Package Selection</source>
      <translation>Valg av pakker</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="112"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation>Velg et produkt fra lista. Det valgte produktet vil bli installert.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="241"/>
      <source>Packages</source>
      <translation>Pakker</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="247"/>
      <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
      <translation>Installeringsvalg: &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="247"/>
      <source>None</source>
      <translation>Ingen</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="35"/>
      <source>Summary</source>
      <comment>@label</comment>
      <translation>Oppsummering</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="39"/>
      <source>This is an overview of what will happen once you start the setup procedure.</source>
      <translation>Dette er en oppsummering av hva som vil skje ved oppsettsprosessen.</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="44"/>
      <source>This is an overview of what will happen once you start the install procedure.</source>
      <translation>Dette er en oppsummering av hva som vil skje ved installasjonsprosessen.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="237"/>
      <source>Your username is too long.</source>
      <translation>Brukernavnet ditt er for langt.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="243"/>
      <source>Your username must start with a lowercase letter or underscore.</source>
      <translation>Brukernavnet ditt må begynne med små bokstav eller understrek.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="247"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Kun små bokstaver, tall, understrek eller bindestrek tillates.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="253"/>
      <source>'%1' is not allowed as username.</source>
      <translation>«%1» tillates ikke som brukernavn.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="302"/>
      <source>Your hostname is too short.</source>
      <translation>Vertsnavnet ditt er for kort.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="306"/>
      <source>Your hostname is too long.</source>
      <translation>Vertsnavnet ditt er for langt.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="312"/>
      <source>'%1' is not allowed as hostname.</source>
      <translation>«%1» tillates ikke som vertsnavn.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="317"/>
      <source>Only letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Kun bokstaver, understrek og bindestrek tillates.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="598"/>
      <source>Your passwords do not match!</source>
      <translation>Passordene dine samsvarer ikke!</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="612"/>
      <source>OK!</source>
      <translation>OK!</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="57"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue.</source>
      <translation>Denne datamaskinen oppfyller ikke minste-kravene for oppsett av %1.&lt;br/&gt;Oppsettet kan ikke fortsette.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="60"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue.</source>
      <translation>Denne datamaskinen oppfyller ikke minste-kravene for installering av %1.&lt;br/&gt;Installasjonen kan ikke fortsette.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="66"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation>Denne datamaskinen oppfyller ikke alle minste-kravene for oppsett av %1.&lt;br/&gt;Oppsettet kan fortsette, men noen funksjoner er kanskje slått av.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="70"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation>Denne datamaskinen oppfyller ikke alle minste-kravene for installering av %1.&lt;br/&gt;Oppsettet kan fortsette, men noen funksjoner er kanskje slått av.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="80"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation>Dette programmet vil spørre deg noen spørsmål og sette opp %2 på din datamaskin.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="264"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Velkommen til Calamares-oppsettsprogrammet for %1&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="265"/>
      <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Velkommen til %1-oppsettet&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="269"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Velkommen til Calamares-installasjonsprogrammet for %1&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="270"/>
      <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Velkommen til %1-installasjonsprogrammet&lt;/h1&gt;</translation>
    </message>
  </context>
  <context>
    <name>ContextualProcessJob</name>
    <message>
      <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="88"/>
      <source>Performing contextual processes' job…</source>
      <comment>@status</comment>
      <translation>Utfører sammenhengende oppgaver …</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
      <source>Create a Partition</source>
      <translation>Opprett en partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
      <source>Si&amp;ze:</source>
      <translation>St&amp;ørrelse:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
      <source>Partition &amp;Type:</source>
      <translation>Partisjons&amp;type:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
      <source>Primar&amp;y</source>
      <translation>Primæ&amp;r</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
      <source>E&amp;xtended</source>
      <translation>U&amp;tvidet</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
      <source>Fi&amp;le System:</source>
      <translation>Fil&amp;system:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
      <source>LVM LV name</source>
      <translation>LVM logiskdataområde navn</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
      <source>&amp;Mount Point:</source>
      <translation>&amp;Monteringspunkt:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
      <source>Flags:</source>
      <translation>Flagg:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="224"/>
      <source>Label for the filesystem</source>
      <translation>Merkelapp for filsytemet</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="234"/>
      <source>FS Label:</source>
      <translation>FS-merkelapp:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="67"/>
      <source>En&amp;crypt</source>
      <comment>@action</comment>
      <translation>Kr&amp;ypter</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="195"/>
      <source>Logical</source>
      <comment>@label</comment>
      <translation>Logisk</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="200"/>
      <source>Primary</source>
      <comment>@label</comment>
      <translation>Primær</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="219"/>
      <source>GPT</source>
      <comment>@label</comment>
      <translation>GPT</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="91"/>
      <source>Mountpoint already in use. Please select another one.</source>
      <comment>@info</comment>
      <translation>Monteringspunktet er allerede i bruk. Velg et annet.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="96"/>
      <source>Mountpoint must start with a &lt;tt&gt;/&lt;/tt&gt;.</source>
      <comment>@info</comment>
      <translation>Monteringspunktet må begynne med en &lt;tt&gt;/&lt;/tt&gt;.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="181"/>
      <source>Create new %1MiB partition on %3 (%2) with entries %4</source>
      <comment>@title</comment>
      <translation>Opprett ny %1 MiB partisjon på %3 (%2) med oppføringer %4</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
      <source>Create new %1MiB partition on %3 (%2)</source>
      <comment>@title</comment>
      <translation>Opprett ny %1 MiB partisjon på %3 (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="196"/>
      <source>Create new %2MiB partition on %4 (%3) with file system %1</source>
      <comment>@title</comment>
      <translation>Opprett ny %2 MiB partisjon på %4 (%3) med filsystemet %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="212"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Opprett ny &lt;strong&gt;%1 MiB&lt;/strong&gt; partisjon på &lt;strong&gt;%3&lt;/strong&gt; (%2) med oppføringer &lt;em&gt;%4&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="222"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2)</source>
      <comment>@info</comment>
      <translation>Opprett ny &lt;strong&gt;%1 MiB&lt;/strong&gt; partisjon på &lt;strong&gt;%3&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="229"/>
      <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Opprett ny &lt;strong&gt;%2 MiB&lt;/strong&gt; partisjon på &lt;strong&gt;%4&lt;/strong&gt; (%3) med filsystemet &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="254"/>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="257"/>
      <source>Creating new %1 partition on %2…</source>
      <comment>@status</comment>
      <translation>Oppretter nytt %1 partisjon på %2 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="274"/>
      <source>The installer failed to create partition on disk '%1'.</source>
      <comment>@info</comment>
      <translation>Feil ved oppretting av partisjon på disken «%1».</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
      <source>Create Partition Table</source>
      <translation>Opprett partisjonstabell</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
      <source>Creating a new partition table will delete all existing data on the disk.</source>
      <translation>Opprettelse av en ny partisjonstabell vil slette alle nåværende data på disken.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
      <source>What kind of partition table do you want to create?</source>
      <translation>Hva slags partisjonstabell ønsker du å opprette?</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
      <source>Master Boot Record (MBR)</source>
      <translation>Hovedpartisjonssektor (MBR)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
      <source>GUID Partition Table (GPT)</source>
      <translation>GUID-partisjonstabell (GPT)</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="58"/>
      <source>Creating new %1 partition table on %2…</source>
      <comment>@status</comment>
      <translation>Oppretter ny %1 partisjonstabell på %2 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
      <source>Creating new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3)…</source>
      <comment>@status</comment>
      <translation>Oppretter ny &lt;strong&gt;%1&lt;/strong&gt; partisjonstabell på &lt;strong&gt;%2&lt;/strong&gt; (%3) …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="86"/>
      <source>The installer failed to create a partition table on %1.</source>
      <translation>Feil ved opprettelse av partisjonstabell på %1.</translation>
    </message>
  </context>
  <context>
    <name>CreateUserJob</name>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="33"/>
      <source>Create user %1</source>
      <translation>Opprett bruker %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="39"/>
      <source>Create user &lt;strong&gt;%1&lt;/strong&gt;</source>
      <translation>Opprett bruker &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="45"/>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="143"/>
      <source>Creating user %1…</source>
      <comment>@status</comment>
      <translation>Oppretter bruker %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="126"/>
      <source>Preserving home directory…</source>
      <comment>@status</comment>
      <translation>Bevarer hjemmemappa …</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="152"/>
      <source>Configuring user %1</source>
      <comment>@status</comment>
      <translation>Setter opp bruker %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="160"/>
      <source>Setting file permissions…</source>
      <comment>@status</comment>
      <translation>Setter opp filtillatelser …</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
      <source>Create Volume Group</source>
      <comment>@title</comment>
      <translation>Opprett dataområde-grupper</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
      <source>Creating new volume group named %1…</source>
      <comment>@status</comment>
      <translation>Oppretter ny dataområde-gruppe ved navn %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
      <source>Creating new volume group named &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Oppretter ny dataområde-gruppe ved navn &lt;strong&gt;%1&lt;/strong&gt; …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
      <source>The installer failed to create a volume group named '%1'.</source>
      <translation>Feil ved opprettelse av dataområde-gruppe ved navn «%1».</translation>
    </message>
  </context>
  <context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
      <source>Deactivating volume group named %1…</source>
      <comment>@status</comment>
      <translation>Tar dataområde-gruppe ved navn %1 ut av bruk …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
      <source>Deactivating volume group named &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Tar dataområde-gruppe ved navn &lt;strong&gt;%1&lt;/strong&gt; ut av bruk …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
      <source>The installer failed to deactivate a volume group named %1.</source>
      <translation>Feil ved forsøk på å ta dataområde-gruppa %1 ut av bruk.</translation>
    </message>
  </context>
  <context>
    <name>DeletePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
      <source>Deleting partition %1…</source>
      <comment>@status</comment>
      <translation>Sletter partisjon %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="79"/>
      <source>Deleting partition &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Sletter partisjon &lt;strong&gt;%1&lt;/strong&gt; …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="99"/>
      <source>The installer failed to delete partition %1.</source>
      <translation>Feil ved sletting av partisjon %1.</translation>
    </message>
  </context>
  <context>
    <name>DeviceInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="78"/>
      <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
      <translation>&lt;br&gt;&lt;br&gt;Denne type partisjonstabell anbefales kun på eldre datamaskiner fra et &lt;strong&gt;BIOS&lt;/strong&gt;-oppstartsmiljø. GPT er anbefalt i fleste tilfeller.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Advarsel:&lt;/strong&gt; MBR-partisjonstabellen er av en foreldet MS-DOS standard.&lt;br&gt;Kun 4 &lt;em&gt;primær&lt;/em&gt; partisjoner kan opprettes, og av de 4, én kan være en &lt;em&gt;utvidet&lt;/em&gt;-partisjon, som igjen kan inneholde mange &lt;em&gt;logiske&lt;/em&gt;-partisjoner.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="89"/>
      <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
      <translation>&lt;br&gt;&lt;br&gt;Dette er den anbefalte partisjonstabellen for moderne datamaskiner som starter fra et &lt;strong&gt;EFI&lt;/strong&gt;-oppstartsmiljø.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="95"/>
      <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
      <translation>Dette er en &lt;strong&gt;sløyfe&lt;/strong&gt;enhet.&lt;br&gt;&lt;br&gt;Det er en pseudoenhet med ingen partisjontabell, som gjør en fil tilgjengelig som en blokkenhet. Denne type oppsett inneholder vanligvis kun et filsystem.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
      <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
      <translation>Dette installasjonsprogrammet &lt;strong&gt;kan ikke oppdage en partisjonstabell&lt;/strong&gt; på den valgte lagringsenhet.&lt;br&gt;&lt;br&gt;Enheten har enten ingen partisjonstabell, eller partisjonstabellen er korrupt eller av en ukjent type.&lt;br&gt;Dette installasjonsprogrammet kan opprette en ny partisjonstabell for deg, enten automatisk eller ved manuell partisjonering.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="139"/>
      <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
      <translation>Denne enheten har en &lt;strong&gt;%1&lt;/strong&gt;-partisjonstabell.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="147"/>
      <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
      <translation>Denne type &lt;strong&gt;partisjonstabell&lt;/strong&gt; på den valgte lagringsenheten.&lt;br&gt;&lt;br&gt;Den eneste veien å endre partisjonstabell typen, er å slette og opprette en ny partisjonstabell på nytt, noe som ødelegger all data på lagringsenheten.&lt;br&gt;Dette installasjonsprogrammet vil beholde gjeldende partisjonstabell med mindre du eksplisitt velger noe annet.&lt;br&gt;Hvis usikker, på moderne systemer anbefales det GPT.</translation>
    </message>
  </context>
  <context>
    <name>DeviceModel</name>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="82"/>
      <source>%1 - %2 (%3)</source>
      <extracomment>device[name] - size[number] (device-node[name])</extracomment>
      <translation>%1 – %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="93"/>
      <source>%1 - (%2)</source>
      <extracomment>device[name] - (device-node[name])</extracomment>
      <translation>%1 – (%2)</translation>
    </message>
  </context>
  <context>
    <name>DracutLuksCfgJob</name>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="117"/>
      <source>Writing LUKS configuration for Dracut to %1…</source>
      <comment>@status</comment>
      <translation>Skriver LUKS-oppsett for dracut til %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="121"/>
      <source>Skipping writing LUKS configuration for Dracut: "/" partition is not encrypted</source>
      <comment>@info</comment>
      <translation>Hopper over skriving av LUKS-oppsett for dracut: «/» partisjonen er ikke kryptert</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="138"/>
      <source>Failed to open %1</source>
      <comment>@error</comment>
      <translation>Feil ved åpning av %1</translation>
    </message>
  </context>
  <context>
    <name>DummyCppJob</name>
    <message>
      <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="35"/>
      <source>Performing dummy C++ job…</source>
      <comment>@status</comment>
      <translation>Utfører dum C++-oppgave …</translation>
    </message>
  </context>
  <context>
    <name>EditExistingPartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
      <source>Edit Existing Partition</source>
      <translation>Rediger gjeldende partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
      <source>Con&amp;tent:</source>
      <translation>Inn&amp;hold:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
      <source>&amp;Keep</source>
      <translation>&amp;Behold</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
      <source>Format</source>
      <translation>Formater</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
      <source>Warning: Formatting the partition will erase all existing data.</source>
      <translation>Advarsel: Formatering av partisjonen vil slette alle eksisterende data.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
      <source>&amp;Mount Point:</source>
      <translation>&amp;Monteringspunkt:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
      <source>Si&amp;ze:</source>
      <translation>St&amp;ørrelse:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
      <source>Fi&amp;le System:</source>
      <translation>Fil&amp;system:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
      <source>Flags:</source>
      <translation>Flagg:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="179"/>
      <source>Label for the filesystem</source>
      <translation>Merkelapper for filsystemet</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="189"/>
      <source>FS Label:</source>
      <translation>FS-merkelapp:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="280"/>
      <source>Passphrase for existing partition</source>
      <translation>Passord for eksisterende partisjoner</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="281"/>
      <source>Partition %1 could not be decrypted with the given passphrase.&lt;br/&gt;&lt;br/&gt;Edit the partition again and give the correct passphrase or delete and create a new encrypted partition.</source>
      <translation>Feil ved kryptering av %1 med det angitte passordet.&lt;br/&gt;&lt;br/&gt;Rediger partisjonen igjen og skriv inn det riktige passordet eller slett og opprett en ny kryptert partisjon.</translation>
    </message>
  </context>
  <context>
    <name>EncryptWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
      <source>En&amp;crypt system</source>
      <translation>Kryp&amp;ter systemet</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
      <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
      <translation>Ditt system ser ikke ut til å støtte kryptering bra nok for å kryptere hele systemet. Du kan kryptere, men ytelsen kan forverres.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
      <source>Passphrase</source>
      <translation>Passord</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
      <source>Confirm passphrase</source>
      <translation>Bekreft passord</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="165"/>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="181"/>
      <source>Please enter the same passphrase in both boxes.</source>
      <comment>@tooltip</comment>
      <translation>Skriv inn samme passord i begge felt.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="171"/>
      <source>Password must be a minimum of %1 characters.</source>
      <comment>@tooltip</comment>
      <translation>Passordet må være minst %1 tegn.</translation>
    </message>
  </context>
  <context>
    <name>ErrorDialog</name>
    <message>
      <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="40"/>
      <source>Details:</source>
      <translation>Detaljer:</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="56"/>
      <source>Would you like to paste the install log to the web?</source>
      <translation>Ønsker du å laste opp installasjonsloggen på nettet?</translation>
    </message>
  </context>
  <context>
    <name>FSArchiverRunner</name>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="47"/>
      <source>Missing tools</source>
      <translation>Mangler verktøy</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="48"/>
      <source>The &lt;i&gt;%1&lt;/i&gt; tool is not installed on the system.</source>
      <translation>Verktøyet &lt;i&gt;%1&lt;/i&gt; er ikke installert på systemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="55"/>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="69"/>
      <source>Invalid fsarchiver configuration</source>
      <translation>Ugyldig fsarchiver-oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="56"/>
      <source>The source archive &lt;i&gt;%1&lt;/i&gt; does not exist.</source>
      <translation>Fant ikke kildearkivet &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="70"/>
      <source>No destination could be found for &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Fant ikke mappa til &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
  </context>
  <context>
    <name>FillGlobalStorageJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="179"/>
      <source>Set partition information</source>
      <comment>@title</comment>
      <translation>Sett partisjonsinformasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="208"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Installer %1 på en &lt;strong&gt;ny&lt;/strong&gt; %2-systempartisjon med funksjoner &lt;em&gt;%3&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="217"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition</source>
      <comment>@info</comment>
      <translation>Installer %1 på en &lt;strong&gt;ny&lt;/strong&gt; %2-systempartisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="226"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Sett opp en &lt;strong&gt;ny&lt;/strong&gt; %2-partisjon med monteringspunktet &lt;strong&gt;%1&lt;/strong&gt; og funksjoner &lt;em&gt;%3&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="235"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3</source>
      <comment>@info</comment>
      <translation>Sett opp en &lt;strong&gt;ny&lt;/strong&gt; %2-partisjon med monteringspunktet &lt;strong&gt;%1&lt;/strong&gt;%3</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="250"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Installer %2 på %3-systempartisjon &lt;strong&gt;%1&lt;/strong&gt; med funksjoner &lt;em&gt;%4&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="260"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Installer %2 på %3-systempartisjon &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="270"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Setter opp %3 partisjon &lt;strong&gt;%1&lt;/strong&gt; med monteringspunktet &lt;strong&gt;%2&lt;/strong&gt; og funksjoner &lt;em&gt;%4&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="280"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4…</source>
      <comment>@info</comment>
      <translation>Setter opp %3 partisjon &lt;strong&gt;%1&lt;/strong&gt; med monteringspunkt &lt;strong&gt;%2&lt;/strong&gt;%4 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="296"/>
      <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@info</comment>
      <translation>Installer oppstartslaster på &lt;strong&gt;%1&lt;/strong&gt; …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="305"/>
      <source>Setting up mount points…</source>
      <comment>@status</comment>
      <translation>Setter opp monteringspunkter …</translation>
    </message>
  </context>
  <context>
    <name>FinishedPage</name>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
      <source>&amp;Restart now</source>
      <translation>&amp;Start på nytt nå</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="75"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
      <comment>@info</comment>
      <translation>&lt;h1&gt;Ferdig.&lt;/h1&gt;&lt;br/&gt;%1 er satt opp på din datamaskin.&lt;br/&gt;Du kan nå begynne å bruke det nye systemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="80"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <comment>@tooltip</comment>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Når den boksen er krysset av, startes systemet ditt på nytt med én gang du trykker på &lt;span style="font-style:italic;"&gt;Fullfør&lt;/span&gt; eller lukker oppsettsprogrammet.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="89"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
      <comment>@info</comment>
      <translation>&lt;h1&gt;Ferdig.&lt;/h1&gt;&lt;br/&gt;%1 er installert på din datamaskin.&lt;br/&gt;Du kan nå starte på nytt rett inn i ditt nye system, eller fortsette å bruke testmiljøet %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="95"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <comment>@tooltip</comment>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Når den boksen er krysset av, startes systemet ditt på nytt med én gang du trykker på &lt;span style="font-style:italic;"&gt;Fullfør&lt;/span&gt; eller lukker installasjonsprogrammet.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="109"/>
      <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
      <comment>@info, %1 is product name with version</comment>
      <translation>&lt;h1&gt;Feil ved oppsett&lt;/h1&gt;&lt;br/&gt;%1 er ikke satt opp på ditt system.&lt;br/&gt;Feilkoden er: %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="118"/>
      <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
      <comment>@info, %1 is product name with version</comment>
      <translation>&lt;h1&gt;Innnstallasjonen mislyktes&lt;/h1&gt;&lt;br/&gt;%1 har ikke blitt installert på datamaskinen din.&lt;br/&gt;Feilmeldingen var: %2.</translation>
    </message>
  </context>
  <context>
    <name>FinishedQmlViewStep</name>
    <message>
      <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
      <source>Finish</source>
      <comment>@label</comment>
      <translation>Fullfør</translation>
    </message>
  </context>
  <context>
    <name>FinishedViewStep</name>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
      <source>Finish</source>
      <comment>@label</comment>
      <translation>Fullfør</translation>
    </message>
  </context>
  <context>
    <name>FormatPartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
      <source>Format partition %1 (file system: %2, size: %3 MiB) on %4</source>
      <comment>@title</comment>
      <translation>Formater partisjonen %1 (filsystem: %2 størrelse: %3 MiB) på %4</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
      <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Formater &lt;strong&gt;%3 MiB&lt;/strong&gt; partisjon &lt;strong&gt;%1&lt;/strong&gt; med filsystemet &lt;strong&gt;%2&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="62"/>
      <source>%1 (%2)</source>
      <comment>partition label %1 (device path %2)</comment>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="64"/>
      <source>Formatting partition %1 with file system %2…</source>
      <comment>@status</comment>
      <translation>Formaterer partisjonen %1 med filsystemet %2 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="73"/>
      <source>The installer failed to format partition %1 on disk '%2'.</source>
      <translation>Feil ved formatering av partisjon %1 på disk «%2».</translation>
    </message>
  </context>
  <context>
    <name>GeneralRequirements</name>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="160"/>
      <source>Please ensure the system has at least %1 GiB available drive space.</source>
      <translation>Kontroller at systemet har minst %1 GiB tilgjengelig diskplass.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="162"/>
      <source>Available drive space is all of the hard disks and SSDs connected to the system.</source>
      <translation>Tilgjengelig diskplass er alle harddiskene og SSD-ene som er koblet til systemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="165"/>
      <source>There is not enough drive space. At least %1 GiB is required.</source>
      <translation>Det er ikke nok diskplass. Det trengs minst %1 GiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="173"/>
      <source>has at least %1 GiB working memory</source>
      <translation>har minst %1 GiB arbeidsminne</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="175"/>
      <source>The system does not have enough working memory. At least %1 GiB is required.</source>
      <translation>Systemet har ikke nok arbeidsminne. Det kreves minst %1 GiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="184"/>
      <source>is plugged in to a power source</source>
      <translation>er koblet til en strømkilde</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
      <source>The system is not plugged in to a power source.</source>
      <translation>Systemet er ikke koblet til en strømkilde.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="192"/>
      <source>is connected to the Internet</source>
      <translation>er tilkoblet Internett</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
      <source>The system is not connected to the Internet.</source>
      <translation>Systemet er ikke tilkoblet Internett.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="200"/>
      <source>is running the installer as an administrator (root)</source>
      <translation>kjører installasjonsprogrammet som administrator (rot)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="204"/>
      <source>The setup program is not running with administrator rights.</source>
      <translation>Oppsettsprogrammet kjøres ikke med administratortillatelser.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
      <source>The installer is not running with administrator rights.</source>
      <translation>Installasjonsprogrammet kjøres ikke med administratortillatelser.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="213"/>
      <source>has a screen large enough to show the whole installer</source>
      <translation>har en skjerm stor nok for å vise hele installasjonsprogrammet</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="217"/>
      <source>The screen is too small to display the setup program.</source>
      <translation>Skjermen er for liten for å vise oppsettsprogrammet.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="218"/>
      <source>The screen is too small to display the installer.</source>
      <translation>Skjermen er for liten for å vise installasjonsprogrammet.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="227"/>
      <source>is always false</source>
      <translation>er alltid usant</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="228"/>
      <source>The computer says no.</source>
      <translation>Datamaskinen sier nei.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="236"/>
      <source>is always false (slowly)</source>
      <translation>er alltid usant (sakte)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="237"/>
      <source>The computer says no (slowly).</source>
      <translation>Datamaskinen sier nei (sakte).</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="244"/>
      <source>is always true</source>
      <translation>er alltid sant</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="245"/>
      <source>The computer says yes.</source>
      <translation>Datamaskinen sier ja.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="253"/>
      <source>is always true (slowly)</source>
      <translation>er alltid sant (sakte)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="254"/>
      <source>The computer says yes (slowly).</source>
      <translation>Datamaskinen sier ja (sakte).</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="262"/>
      <source>is checked three times.</source>
      <translation>sjekkes tre ganger.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="265"/>
      <source>The snark has not been checked three times.</source>
      <comment>The (some mythological beast) has not been checked three times.</comment>
      <translation>Snarken har ikke blitt sjekket tre ganger.</translation>
    </message>
  </context>
  <context>
    <name>HostInfoJob</name>
    <message>
      <location filename="../src/modules/hostinfo/HostInfoJob.cpp" line="39"/>
      <source>Collecting information about your machine…</source>
      <comment>@status</comment>
      <translation>Innhenter informasjon om ditt system …</translation>
    </message>
  </context>
  <context>
    <name>IDJob</name>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="30"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="39"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="52"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
      <source>OEM Batch Identifier</source>
      <translation>OEM utsendelse-ID</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
      <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Klarte ikke opprette mappene &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
      <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Klarte ikke åpne fila &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
      <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Klarte ikke skrive til fila &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
  </context>
  <context>
    <name>InitcpioJob</name>
    <message>
      <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
      <source>Creating initramfs with mkinitcpio…</source>
      <comment>@status</comment>
      <translation>Oppretter initramfs med mkinitcpio …</translation>
    </message>
  </context>
  <context>
    <name>InitramfsJob</name>
    <message>
      <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="27"/>
      <source>Creating initramfs…</source>
      <comment>@status</comment>
      <translation>Oppretter initramfs …</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalPage</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="51"/>
      <source>Konsole not installed.</source>
      <comment>@error</comment>
      <translation>Konsole er ikke installert.</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="52"/>
      <source>Please install KDE Konsole and try again!</source>
      <comment>@info</comment>
      <translation>Installer KDE Konsole og prøv på nytt!</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="127"/>
      <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
      <comment>@info</comment>
      <translation>Kjører skript: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalViewStep</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="40"/>
      <source>Script</source>
      <comment>@label</comment>
      <translation>Skript</translation>
    </message>
  </context>
  <context>
    <name>KeyboardQmlViewStep</name>
    <message>
      <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
      <source>Keyboard</source>
      <comment>@label</comment>
      <translation>Tastatur</translation>
    </message>
  </context>
  <context>
    <name>KeyboardViewStep</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="41"/>
      <source>Keyboard</source>
      <comment>@label</comment>
      <translation>Tastatur</translation>
    </message>
  </context>
  <context>
    <name>LCLocaleDialog</name>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
      <source>System Locale Setting</source>
      <comment>@title</comment>
      <translation>Innstilling for systemlokale</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
      <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>Systemlokale påvirker språket og tegnsett for noen kommandolinje brukergrensesnitt elementer.&lt;br/&gt;Gjeldende språk er &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
      <source>&amp;Cancel</source>
      <comment>@button</comment>
      <translation>&amp;Avbryt</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="56"/>
      <source>&amp;OK</source>
      <comment>@button</comment>
      <translation>&amp;OK</translation>
    </message>
  </context>
  <context>
    <name>LOSHJob</name>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="35"/>
      <source>Configuring encrypted swap.</source>
      <translation>Setter opp kryptert veksleminne.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="87"/>
      <source>No target system available.</source>
      <translation>Ingen målsystem tilgjengelig.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="95"/>
      <source>No rootMountPoint is set.</source>
      <translation>Ingen «rootMountPoint» er satt.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="100"/>
      <source>No configFilePath is set.</source>
      <translation>Ingen «configFilePath» er satt.</translation>
    </message>
  </context>
  <context>
    <name>LicensePage</name>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="26"/>
      <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Lisensavtale&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
      <source>I accept the terms and conditions above.</source>
      <comment>@info</comment>
      <translation>Jeg godtar vilkårene og betingelsene ovenfor.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="144"/>
      <source>Please review the End User License Agreements (EULAs).</source>
      <comment>@info</comment>
      <translation>Les gjennom sluttbrukeravtalen.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
      <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
      <comment>@info</comment>
      <translation>Denne oppsettsprosessen vil installere proprietær programvare som er underlagt lisensvilkår.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="154"/>
      <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
      <comment>@info</comment>
      <translation>Hvis du ikke godtar disse vilkårene, kan ikke oppsettsprosessen fortsette.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="159"/>
      <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
      <comment>@info</comment>
      <translation>Denne oppsettsprosessen kan installere proprietær programvare som er underlagt lisensvilkår for å gi ytterligere funksjoner og forbedre brukeropplevelsen.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="165"/>
      <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
      <comment>@info</comment>
      <translation>Hvis du ikke godtar disse vilkårene, vil ikke proprietær programvare installeres, og åpen kildekode alternativer vil brukes i stedet.</translation>
    </message>
  </context>
  <context>
    <name>LicenseViewStep</name>
    <message>
      <location filename="../src/modules/license/LicenseViewStep.cpp" line="45"/>
      <source>License</source>
      <comment>@label</comment>
      <translation>Lisens</translation>
    </message>
  </context>
  <context>
    <name>LicenseWidget</name>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
      <source>URL: %1</source>
      <comment>@label</comment>
      <translation>Nettadresse: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
      <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
      <translation>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;fra %2</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="117"/>
      <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
      <translation>&lt;strong&gt;%1 grafikkdriver&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;fra %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="124"/>
      <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;%1 nettlesertillegg&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;fra %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="131"/>
      <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;%1 kodek&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;fra %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="138"/>
      <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;%1 pakke&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;fra %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="145"/>
      <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;fra %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="169"/>
      <source>File: %1</source>
      <comment>@label</comment>
      <translation>Fil: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="192"/>
      <source>Hide the license text</source>
      <comment>@tooltip</comment>
      <translation>Skjul lisensteksten</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="193"/>
      <source>Show the license text</source>
      <comment>@tooltip</comment>
      <translation>Vis lisensteksten</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="197"/>
      <source>Open the license agreement in browser</source>
      <comment>@tooltip</comment>
      <translation>Åpne lisensavtalen i nettleseren</translation>
    </message>
  </context>
  <context>
    <name>LocalePage</name>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
      <source>Region:</source>
      <comment>@label</comment>
      <translation>Region:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
      <source>Zone:</source>
      <comment>@label</comment>
      <translation>Sone:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
      <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
      <source>&amp;Change…</source>
      <comment>@button</comment>
      <translation>&amp;Endre …</translation>
    </message>
  </context>
  <context>
    <name>LocaleQmlViewStep</name>
    <message>
      <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
      <source>Location</source>
      <comment>@label</comment>
      <translation>Plassering</translation>
    </message>
  </context>
  <context>
    <name>LocaleTests</name>
    <message>
      <location filename="../src/libcalamares/locale/Tests.cpp" line="272"/>
      <source>Quit</source>
      <translation>Avslutt</translation>
    </message>
  </context>
  <context>
    <name>LocaleViewStep</name>
    <message>
      <location filename="../src/modules/locale/LocaleViewStep.cpp" line="71"/>
      <source>Location</source>
      <comment>@label</comment>
      <translation>Plassering</translation>
    </message>
  </context>
  <context>
    <name>LuksBootKeyFileJob</name>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="33"/>
      <source>Configuring LUKS key file.</source>
      <translation>Setter opp LUKS-nøkkelfil.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="254"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="262"/>
      <source>No partitions are defined.</source>
      <translation>Ingen partisjoner er valgt.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="297"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="304"/>
      <source>Encrypted rootfs setup error</source>
      <translation>Feil ved oppsett av rootfs kryptering</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="298"/>
      <source>Root partition %1 is LUKS but no passphrase has been set.</source>
      <translation>Rotpartisjonen %1 bruker LUKS men har ikke passord.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="305"/>
      <source>Could not create LUKS key file for root partition %1.</source>
      <translation>Klarte ikke opprette LUKS-nøkkelfil for rotpartisjonen %1.</translation>
    </message>
  </context>
  <context>
    <name>MachineIdJob</name>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="55"/>
      <source>Generate machine-id.</source>
      <translation>Generer maskin-ID.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="71"/>
      <source>Configuration Error</source>
      <translation>Feil ved oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="72"/>
      <source>No root mount point is set for MachineId.</source>
      <translation>Ingen rotmonteringspunkt er satt for «MachineID».</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="63"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="71"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="75"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="92"/>
      <source>File not found</source>
      <translation>Fant ikke fila</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
      <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
      <translation>Stien for &lt;pre&gt;%1&lt;/pre&gt; må være en fullstendig sti.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation>Klarte ikke opprette ny tilfeldig fil &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
  </context>
  <context>
    <name>Map</name>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="237"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Tidssone: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="258"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <comment>@info</comment>
      <translation>Velg ønsket sted på kartet, slik at installasjonsprogrammet kan foreslå lokale
            og tidssone innstillinger for deg. Du kan finjustere de foreslåtte innstillingene nedenfor. Let i kartet med å dra
            for å flytte og bruk «+ og -»-knappene for å skalere inn og ut eller bruk muserulling for skalering.</translation>
    </message>
  </context>
  <context>
    <name>Map-qt6</name>
    <message>
      <location filename="../src/modules/localeq/Map-qt6.qml" line="261"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Tidssone: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map-qt6.qml" line="282"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <comment>@label</comment>
      <translation>Velg ønsket sted på kartet, slik at installasjonsprogrammet kan foreslå lokale
            og tidssone innstillinger for deg. Du kan finjustere de foreslåtte innstillingene nedenfor. Let i kartet med å dra
            for å flytte og bruk «+ og -»-knappene for å skalere inn og ut eller bruk muserulling for skalering.</translation>
    </message>
  </context>
  <context>
    <name>NetInstallViewStep</name>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="50"/>
      <source>Package selection</source>
      <translation>Valg av pakker</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="51"/>
      <source>Office software</source>
      <translation>Kontorprogramvare</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="52"/>
      <source>Office package</source>
      <translation>Kontorpakke</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="53"/>
      <source>Browser software</source>
      <translation>Nettleserprogramvare</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
      <source>Browser package</source>
      <translation>Nettleserpakke</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="55"/>
      <source>Web browser</source>
      <translation>Nettleser</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="56"/>
      <source>Kernel</source>
      <comment>label for netinstall module, Linux kernel</comment>
      <translation>Kjerne</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="57"/>
      <source>Services</source>
      <comment>label for netinstall module, system services</comment>
      <translation>Tjenester</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="58"/>
      <source>Login</source>
      <comment>label for netinstall module, choose login manager</comment>
      <translation>Logg inn</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="59"/>
      <source>Desktop</source>
      <comment>label for netinstall module, choose desktop environment</comment>
      <translation>Skrivebord</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="60"/>
      <source>Applications</source>
      <translation>Programmer</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="61"/>
      <source>Communication</source>
      <comment>label for netinstall module</comment>
      <translation>Kommunikasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="62"/>
      <source>Development</source>
      <comment>label for netinstall module</comment>
      <translation>Utvikling</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="63"/>
      <source>Office</source>
      <comment>label for netinstall module</comment>
      <translation>Kontor</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="64"/>
      <source>Multimedia</source>
      <comment>label for netinstall module</comment>
      <translation>Multimedia</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="65"/>
      <source>Internet</source>
      <comment>label for netinstall module</comment>
      <translation>Internett</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="66"/>
      <source>Theming</source>
      <comment>label for netinstall module</comment>
      <translation>Tematisering</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="67"/>
      <source>Gaming</source>
      <comment>label for netinstall module</comment>
      <translation>Spilling</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="68"/>
      <source>Utilities</source>
      <comment>label for netinstall module</comment>
      <translation>Verktøy</translation>
    </message>
  </context>
  <context>
    <name>NotesQmlViewStep</name>
    <message>
      <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
      <source>Notes</source>
      <translation>Notater</translation>
    </message>
  </context>
  <context>
    <name>OEMPage</name>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
      <source>Ba&amp;tch:</source>
      <translation>Ut&amp;sendelse:</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Skriv inn en utsendelse-ID her. Dette vil lagres i målsystemet.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM-oppsett&lt;/h1&gt;&lt;p&gt;Calamares vil bruke OEM-innstillingene ved oppsett av målsystemet.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
  </context>
  <context>
    <name>OEMViewStep</name>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="118"/>
      <source>OEM Configuration</source>
      <translation>OEM-oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="124"/>
      <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Sett OEM utsendelse-ID til &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
  </context>
  <context>
    <name>Offline</name>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="47"/>
      <source>Select your preferred region, or use the default settings</source>
      <comment>@label</comment>
      <translation>Velg ønsket region, eller bruk standardinnstillinger.</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="103"/>
      <location filename="../src/modules/localeq/Offline.qml" line="180"/>
      <location filename="../src/modules/localeq/Offline.qml" line="224"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Tidssone: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="120"/>
      <source>Select your preferred zone within your region</source>
      <comment>@label</comment>
      <translation>Velg ønsket sone innenfor din region</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="193"/>
      <source>Zones</source>
      <comment>@button</comment>
      <translation>Soner</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="240"/>
      <source>You can fine-tune language and locale settings below</source>
      <comment>@label</comment>
      <translation>Du kan finjustere språk og lokale innstillinger nedenfor</translation>
    </message>
  </context>
  <context>
    <name>Offline-qt6</name>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="47"/>
      <source>Select your preferred region, or use the default settings</source>
      <comment>@label</comment>
      <translation>Velg ønsket region, eller bruk standardinnstillinger.</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="103"/>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="180"/>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="224"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Tidssone: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="120"/>
      <source>Select your preferred zone within your region</source>
      <comment>@label</comment>
      <translation>Velg ønsket sone innenfor din region</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="193"/>
      <source>Zones</source>
      <comment>@button</comment>
      <translation>Soner</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="240"/>
      <source>You can fine-tune language and locale settings below</source>
      <comment>@label</comment>
      <translation>Du kan finjustere språk og lokale innstillinger nedenfor</translation>
    </message>
  </context>
  <context>
    <name>PWQ</name>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="52"/>
      <source>Password is too short</source>
      <translation>Passordet er for kort</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="68"/>
      <source>Password is too long</source>
      <translation>Passordet er for langt</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="189"/>
      <source>Password is too weak</source>
      <translation>Passordet er for svakt</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="197"/>
      <source>Memory allocation error when setting '%1'</source>
      <translation>Feil ved tildeling av minne ved innstilling av «%1»</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
      <source>Memory allocation error</source>
      <translation>Feil ved minne tildeling</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
      <source>The password is the same as the old one</source>
      <translation>Passordet er det samme som det gamle</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="204"/>
      <source>The password is a palindrome</source>
      <translation>Passordet er et palindrom</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
      <source>The password differs with case changes only</source>
      <translation>Passordet varierer bare ved endring av store og små bokstaver</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="208"/>
      <source>The password is too similar to the old one</source>
      <translation>Passordet likner for mye på det gamle</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
      <source>The password contains the user name in some form</source>
      <translation>Passordet inneholder brukernavnet i en eller annen form</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="212"/>
      <source>The password contains words from the real name of the user in some form</source>
      <translation>Passordet inneholder ord fra det ekte navnet fra brukeren i en eller annen form</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="215"/>
      <source>The password contains forbidden words in some form</source>
      <translation>Passordet inneholder forbudte ord i en eller annen form</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
      <source>The password contains fewer than %n digits</source>
      <translation>
        <numerusform>Passordet inneholder mindre enn %n siffer</numerusform>
        <numerusform>Passordet inneholder mindre enn %n siffer</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
      <source>The password contains too few digits</source>
      <translation>Passordet inneholder for få siffer</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="226"/>
      <source>The password contains fewer than %n uppercase letters</source>
      <translation>
        <numerusform>Passordet inneholder mindre enn %n store bokstaver</numerusform>
        <numerusform>Passordet inneholder mindre enn %n store bokstaver</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="229"/>
      <source>The password contains too few uppercase letters</source>
      <translation>Passordet inneholder for få store bokstaver</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="233"/>
      <source>The password contains fewer than %n lowercase letters</source>
      <translation>
        <numerusform>Passordet inneholder mindre enn %n små bokstaver</numerusform>
        <numerusform>Passordet inneholder mindre enn %n små bokstaver</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="236"/>
      <source>The password contains too few lowercase letters</source>
      <translation>Passordet inneholder for få små bokstaver</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="240"/>
      <source>The password contains fewer than %n non-alphanumeric characters</source>
      <translation>
        <numerusform>Passordet inneholder færre enn %n ikke-alfanumeriske tegn</numerusform>
        <numerusform>Passordet inneholder færre enn %n ikke-alfanumeriske tegn</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
      <source>The password contains too few non-alphanumeric characters</source>
      <translation>Passordet inneholder for få ikke-alfanumeriske tegn</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
      <source>The password is shorter than %n characters</source>
      <translation>
        <numerusform>Passordet er kortere enn %n tegn</numerusform>
        <numerusform>Passordet er kortere enn %n tegn</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="250"/>
      <source>The password is too short</source>
      <translation>Passordet er for kort</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="252"/>
      <source>The password is a rotated version of the previous one</source>
      <translation>Passordet er en rotert versjon av det forrige</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="256"/>
      <source>The password contains fewer than %n character classes</source>
      <translation>
        <numerusform>Passordet inneholder færre enn %n tegnklasser</numerusform>
        <numerusform>Passordet inneholder færre enn %n tegnklasser</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="259"/>
      <source>The password does not contain enough character classes</source>
      <translation>Passordet inneholder ikke nok tegnklasser</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
      <source>The password contains more than %n same characters consecutively</source>
      <translation>
        <numerusform>Passordet inneholder mer enn %n like tegn etter hverandre</numerusform>
        <numerusform>Passordet inneholder mer enn %n like tegn etter hverandre</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="266"/>
      <source>The password contains too many same characters consecutively</source>
      <translation>Passordet inneholder for mange like tegn etter hverandre</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="270"/>
      <source>The password contains more than %n characters of the same class consecutively</source>
      <translation>
        <numerusform>Passordet inneholder mer enn %n like tegn av samme klasse etter hverandre</numerusform>
        <numerusform>Passordet inneholder mer enn %n like tegn av samme klasse etter hverandre</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="276"/>
      <source>The password contains too many characters of the same class consecutively</source>
      <translation>Passordet inneholder for mange like tegn av samme klasse etter hverandre</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="281"/>
      <source>The password contains monotonic sequence longer than %n characters</source>
      <translation>
        <numerusform>Passordet inneholder en monoton sekvens som er lengre enn %n tegn</numerusform>
        <numerusform>Passordet inneholder en monoton sekvens som er lengre enn %n tegn</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="287"/>
      <source>The password contains too long of a monotonic character sequence</source>
      <translation>Passordet inneholder for lange monotone tegnsekvenser</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="290"/>
      <source>No password supplied</source>
      <translation>Ingen passord oppgitt</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="292"/>
      <source>Cannot obtain random numbers from the RNG device</source>
      <translation>Klarte ikke hente tilfeldige tall fra tallgeneratoren</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="294"/>
      <source>Password generation failed - required entropy too low for settings</source>
      <translation>Feil ved passordgenerering – nødvendig entropi nivå er for lavt</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="299"/>
      <source>The password fails the dictionary check - %1</source>
      <translation>Passordet passerer ikke ordbokkontrollen – %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="302"/>
      <source>The password fails the dictionary check</source>
      <translation>Passordet passerer ikke ordbokkontrollen</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="306"/>
      <source>Unknown setting - %1</source>
      <translation>Ukjent innstilling – %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="308"/>
      <source>Unknown setting</source>
      <translation>Ukjent innstilling</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="312"/>
      <source>Bad integer value of setting - %1</source>
      <translation>Feil ved heltall for innstillingen – %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="314"/>
      <source>Bad integer value</source>
      <translation>Feil ved heltall verdi</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="318"/>
      <source>Setting %1 is not of integer type</source>
      <translation>%1 innstillingen er ikke et heltall</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="320"/>
      <source>Setting is not of integer type</source>
      <translation>Innstillingen er ikke et heltall</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="324"/>
      <source>Setting %1 is not of string type</source>
      <translation>%1 innstillingen er ikke en tekst</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="326"/>
      <source>Setting is not of string type</source>
      <translation>Innstillingen er ikke en tekst</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="328"/>
      <source>Opening the configuration file failed</source>
      <translation>Feil ved åpning av oppsettsfila</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="330"/>
      <source>The configuration file is malformed</source>
      <translation>Oppsettsfila er ødelagt</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="332"/>
      <source>Fatal failure</source>
      <translation>Alvorlig feil</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="334"/>
      <source>Unknown error</source>
      <translation>Ukjent feil</translation>
    </message>
  </context>
  <context>
    <name>PackageChooserPage</name>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
      <source>Product Name</source>
      <translation>Produktnavn</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
      <source>TextLabel</source>
      <translation>Tekst merkelapp</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
      <source>Long Product Description</source>
      <translation>Lang produkt beskrivelse</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
      <source>Package Selection</source>
      <translation>Valg av pakker</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation>Velg et produkt fra lista. Det valgte produktet vil bli installert.</translation>
    </message>
  </context>
  <context>
    <name>PackageModel</name>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="206"/>
      <source>Name</source>
      <translation>Navn</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="206"/>
      <source>Description</source>
      <translation>Beskrivelse</translation>
    </message>
  </context>
  <context>
    <name>Page_Keyboard</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
      <source>Keyboard model:</source>
      <translation>Tastaturmodell:</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="146"/>
      <source>Type here to test your keyboard</source>
      <translation>Skriv her for å teste tastaturet ditt</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="153"/>
      <source>Switch Keyboard:</source>
      <extracomment>shortcut for switching between keyboard layouts</extracomment>
      <translation>Bytt tastatur:</translation>
    </message>
  </context>
  <context>
    <name>Page_UserSetup</name>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
      <source>What is your name?</source>
      <translation>Hva heter du?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
      <source>Your Full Name</source>
      <translation>Ditt fulle navn</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
      <source>What name do you want to use to log in?</source>
      <translation>Hvilket navn vil du bruke for å logge inn?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
      <source>login</source>
      <translation>Logg inn</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
      <source>What is the name of this computer?</source>
      <translation>Hva er navnet på denne datamaskinen?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
      <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Dette navnet vil brukes hvis du synliggjør denne datamaskinen til andre over nettverket.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
      <source>Computer Name</source>
      <translation>Datamaskinnavn</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Velg et passord for å holde kontoen trygg.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Skriv inn det samme passordet to ganger, slik at det ikke blir feil. Et bra passord inneholder flere forskjellige bokstaver, tall og tegnsett – burde helst bestå av åtte symboler, og byttes jevnlig.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
      <source>Password</source>
      <translation>Passord</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
      <source>Repeat Password</source>
      <translation>Gjenta passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Når den boksen er krysset av, sjekkes styrken av passordet og du vil ikke kunne bruke et svakt passord.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
      <source>Require strong passwords.</source>
      <translation>Krev strenge passord.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
      <source>Log in automatically without asking for the password.</source>
      <translation>Logg inn automatisk uten å spørre om passordet.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Bruk samme passord for administrator-kontoen.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
      <source>Choose a password for the administrator account.</source>
      <translation>Velg et passord for administrator-kontoen.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Skriv inn det samme passordet to ganger, slik at det ikke blir feil.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="627"/>
      <source>Use Active Directory</source>
      <translation>Bruk Active Directory</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="638"/>
      <source>Domain:</source>
      <translation>Domene:</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="652"/>
      <source>Domain Administrator:</source>
      <translation>Domene administrator:</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="662"/>
      <source>Password:</source>
      <translation>Passord:</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="680"/>
      <source>IP Address (optional):</source>
      <translation>IP-adresse (frivillig):</translation>
    </message>
  </context>
  <context>
    <name>PartitionLabelsView</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="178"/>
      <source>Root</source>
      <translation>Rot</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="182"/>
      <source>Home</source>
      <comment>@label</comment>
      <translation>Hjem</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="186"/>
      <source>Boot</source>
      <comment>@label</comment>
      <translation>Oppstart</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
      <source>EFI system</source>
      <comment>@label</comment>
      <translation>EFI-system</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="195"/>
      <source>Swap</source>
      <comment>@label</comment>
      <translation>Veksleminne</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
      <source>New partition for %1</source>
      <comment>@label</comment>
      <translation>Ny partisjon for %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
      <source>New partition</source>
      <comment>@label</comment>
      <translation>Ny partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="228"/>
      <source>%1  %2</source>
      <extracomment>size[number] filesystem[name]</extracomment>
      <translation>%1  %2</translation>
    </message>
  </context>
  <context>
    <name>PartitionModel</name>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="157"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="201"/>
      <source>Free Space</source>
      <comment>@title</comment>
      <translation>Ledig plass</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
      <source>New Partition</source>
      <comment>@title</comment>
      <translation>Ny partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="307"/>
      <source>Name</source>
      <comment>@title</comment>
      <translation>Navn</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="309"/>
      <source>File System</source>
      <comment>@title</comment>
      <translation>Filsystem</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="311"/>
      <source>File System Label</source>
      <comment>@title</comment>
      <translation>Filsystem-merkelapp</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="313"/>
      <source>Mount Point</source>
      <comment>@title</comment>
      <translation>Monteringspunkt</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="315"/>
      <source>Size</source>
      <comment>@title</comment>
      <translation>Størrelse</translation>
    </message>
  </context>
  <context>
    <name>PartitionPage</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
      <source>Storage de&amp;vice:</source>
      <translation>Lagrings&amp;enhet:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
      <source>&amp;Revert All Changes</source>
      <translation>&amp;Tilbakestill alle endringer</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
      <source>New Partition &amp;Table</source>
      <translation>Ny partisjons&amp;tabell</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
      <source>Cre&amp;ate</source>
      <translation>Opp&amp;rett</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
      <source>&amp;Edit</source>
      <translation>&amp;Rediger</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
      <source>&amp;Delete</source>
      <translation>&amp;Slett</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
      <source>New Volume Group</source>
      <translation>Ny dataområde-gruppe</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
      <source>Resize Volume Group</source>
      <translation>Endre størrelse på dataområde-gruppe</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
      <source>Deactivate Volume Group</source>
      <translation>Ta dataområde-gruppe ut av bruk</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
      <source>Remove Volume Group</source>
      <translation>Fjern dataområde-gruppe</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
      <source>I&amp;nstall boot loader on:</source>
      <translation>I&amp;nstaller oppstartslaster på:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="227"/>
      <source>Are you sure you want to create a new partition table on %1?</source>
      <translation>Er du sikker at du vil opprette en ny partisjonstabell på %1?</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="262"/>
      <source>Can not create new partition</source>
      <translation>Klarte ikke opprette ny partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="263"/>
      <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
      <translation>Partisjonstabellen på %1 har allerede %2 primærpartisjoner, og ingen flere kan legges til. Fjern én primærpartisjon og legg til en utvidet partisjon i stedet.</translation>
    </message>
  </context>
  <context>
    <name>PartitionViewStep</name>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
      <source>Gathering system information…</source>
      <comment>@status</comment>
      <translation>Henter systeminformasjon …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="107"/>
      <source>Partitions</source>
      <comment>@label</comment>
      <translation>Partisjoner</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="144"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system</source>
      <comment>@label</comment>
      <translation>Installer %1 &lt;strong&gt;ved siden av&lt;/strong&gt; et annet operativsystem</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="148"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Slett&lt;/strong&gt; disk og installer %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="152"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Erstatt&lt;/strong&gt; en partisjon med %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="157"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Manuell&lt;/strong&gt; partisjonering</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="179"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3)</source>
      <comment>@info</comment>
      <translation>Installer %1 &lt;strong&gt;ved siden av&lt;/strong&gt; et annet operativsystem på disk &lt;strong&gt;%2&lt;/strong&gt; (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="188"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1</source>
      <comment>@info</comment>
      <translation>&lt;strong&gt;Slett&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) og installer %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="195"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1</source>
      <comment>@info</comment>
      <translation>&lt;strong&gt;Erstatt&lt;/strong&gt; en partisjon på disk &lt;strong&gt;%2&lt;/strong&gt; (%3) med %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="204"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
      <comment>@info</comment>
      <translation>&lt;strong&gt;Manuell&lt;/strong&gt; partisjonering på disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="214"/>
      <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
      <comment>@info</comment>
      <translation>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="239"/>
      <source>Create a swap file.</source>
      <translation>Opprett ei vekslefil.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="268"/>
      <source>Unsafe partition actions are enabled.</source>
      <translation>Utrygge partisjonshandlinger er i bruk.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="271"/>
      <source>Partitioning is configured to &lt;b&gt;always&lt;/b&gt; fail.</source>
      <translation>Partisjonering er satt opp til å &lt;b&gt;alltid&lt;/b&gt; feile.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="274"/>
      <source>No partitions will be changed.</source>
      <translation>Ingen partisjoner vil bli endret.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="314"/>
      <source>Current:</source>
      <comment>@label</comment>
      <translation>Gjeldende:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="332"/>
      <source>After:</source>
      <comment>@label</comment>
      <translation>Etter:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="555"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
      <translation>En EFI-systempartisjon er nødvendig for å begynne %1.&lt;br/&gt;&lt;br/&gt;For å sette opp en EFI-systempartisjon, gå tilbake og velg eller opprett et passende filsystem.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="561"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;The EFI system partition does not meet recommendations. It is recommended to go back and select or create a suitable filesystem.</source>
      <translation>En EFI-systempartisjon er nødvendig for å begynne %1.&lt;br/&gt;&lt;br/&gt;EFI-systempartisjonen møter ikke kravene. Det er anbefalt å gå tilbake og velg eller opprett et passende filsystem.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="569"/>
      <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Filsystemet må monteres på &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
      <source>The filesystem must have type FAT32.</source>
      <translation>Filsystemet må være av typen FAT32.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="571"/>
      <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
      <translation>Filsystemet må ha flagget &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="579"/>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="581"/>
      <source>The filesystem must be at least %1 MiB in size.</source>
      <translation>Filsystemet må være minst %1 MiB i størrelse.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="583"/>
      <source>The minimum recommended size for the filesystem is %1 MiB.</source>
      <translation>Minste anbefalte størrelse for filsystemet er %1 MiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="585"/>
      <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
      <translation>Du kan fortsette uten å sette opp en EFI-systempartisjon men systemet starter kanskje ikke opp.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="587"/>
      <source>You can continue with this EFI system partition configuration but your system may fail to start.</source>
      <translation>Du kan fortsette med dette EFI-systempartisjonoppsettet men systemet starter kanskje ikke opp.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="599"/>
      <source>No EFI system partition configured</source>
      <translation>Ingen EFI-systempartisjon er satt opp</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="607"/>
      <source>EFI system partition configured incorrectly</source>
      <translation>Feil ved oppsett av EFI-systempartisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="627"/>
      <source>EFI system partition recommendation</source>
      <translation>EFI-systempartisjon anbefales</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="646"/>
      <source>Option to use GPT on BIOS</source>
      <translation>Innstilling for å bruk GPT på BIOS</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="647"/>
      <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;%2&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
      <translation>En GPT-partisjonstabell er det beste valget for alle systemer. Dette installasjonsprogrammet støtter sånne oppsett for BIOS-systemer også.&lt;br/&gt;&lt;br/&gt;For å sette opp en GPT-partisjonstabell på BIOS, (hvis ikke allerede gjort) gå tilbake og sett partisjonstabellen til GPT, så oppretter man en 8 MB uformatert partisjon med &lt;strong&gt;%2&lt;/strong&gt; flagget.&lt;br/&gt;&lt;br/&gt;En uformatert 8 MB partisjon er nødvendig for å starte %1 på et BIOS-system med GPT.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="669"/>
      <source>Boot partition not encrypted</source>
      <translation>Oppstartspartisjonen er ikke kryptert</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="670"/>
      <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
      <translation>En separat oppstartspartisjon ble satt opp sammen med en kryptert rotpartisjon, men rotpartisjonen er ikke kryptert.&lt;br/&gt;&lt;br/&gt;Sånne oppsett har sikkerhets problemer, fordi viktige systemfiler lagres på en ikke-kryptert partisjon.&lt;br/&gt;Du kan fortsette hvis du ønsker, men opplåsing av filsystemet vil skje senere ved systemoppstart.&lt;br/&gt;For å kryptere oppstartspartisjonen, gå tilbake og opprett en ny en, velg &lt;strong&gt;Krypter&lt;/strong&gt;i partisjonsopprettelses-vinduet.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="762"/>
      <source>has at least one disk device available.</source>
      <translation>har minst én lagringsenhet tilgjengelig.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="763"/>
      <source>There are no partitions to install on.</source>
      <translation>Det er ingen partisjoner å installere i.</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfJob</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="33"/>
      <source>Applying Plasma Look-and-Feel…</source>
      <comment>@status</comment>
      <translation>Tar i bruk Plasma utseende og følelse …</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="57"/>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="58"/>
      <source>Could not select KDE Plasma Look-and-Feel package</source>
      <translation>Klarte ikke velge pakkene for Plasma utseende og følelse</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfPage</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="80"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Velg utseende og følelse for KDE Plasma-skrivebordet. Du kan også hoppe over dette steget og sette opp utsende og følelse når systemet er satt opp. Ved å trykke på utseende- og følelse-utvalget vil du få forhåndsvisning av det utseende og følelsen.</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="87"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Velg utseende og følelse for KDE Plasma-skrivebordet. Du kan også hoppe over dette steget og sette opp utsende og følelse når systemet er installert. Ved å trykke på utseende- og følelse-utvalget vil du få forhåndsvisning av det utseende og følelsen.</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfViewStep</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="43"/>
      <source>Look-and-Feel</source>
      <comment>@label</comment>
      <translation>Utseende og følelse</translation>
    </message>
  </context>
  <context>
    <name>PowerManagementInterface</name>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="138"/>
      <source>Calamares</source>
      <translation>Calamares</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="138"/>
      <source>Installation in progress</source>
      <comment>@status</comment>
      <translation>Installasjonen pågår</translation>
    </message>
  </context>
  <context>
    <name>PreserveFiles</name>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="56"/>
      <source>Saving files for later…</source>
      <comment>@status</comment>
      <translation>Lagrer filer for senere …</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="64"/>
      <source>No files configured to save for later.</source>
      <translation>Ingen filer er satt opp for lagring senere.</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="88"/>
      <source>Not all of the configured files could be preserved.</source>
      <translation>Klarte ikke bevare alle oppsettsfilene.</translation>
    </message>
  </context>
  <context>
    <name>ProcessResult</name>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="301"/>
      <source>
There was no output from the command.</source>
      <translation>
Det var ingen utdata for kommandoen.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="302"/>
      <source>
Output:
</source>
      <translation>
Utdata:
</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="307"/>
      <source>External command crashed.</source>
      <translation>Ekstern kommando krasjet.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="308"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
      <translation>Kommandoen &lt;i&gt;%1&lt;/i&gt; krasjet.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="315"/>
      <source>External command failed to start.</source>
      <translation>Feil ved oppstart av ekstern kommando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="316"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
      <translation>Feil ved oppstart av kommandoen &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="322"/>
      <source>Internal error when starting command.</source>
      <translation>Intern feil ved oppstart av kommando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="323"/>
      <source>Bad parameters for process job call.</source>
      <translation>Ugyldige parametere for prosessens oppgavekall</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="329"/>
      <source>External command failed to finish.</source>
      <translation>Feil ved fullføring av ekstern kommando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="330"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
      <translation>Feil ved kommandoen &lt;i&gt;%1&lt;/i&gt;, klarte ikke fullføre på %2 sekunder.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="338"/>
      <source>External command finished with errors.</source>
      <translation>Ekstern kommando fullførte med feil.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="339"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
      <translation>Kommandoen &lt;i&gt;%1&lt;/i&gt; fullførte med avsluttningskoden %2.</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/libcalamares/locale/Translation.cpp" line="170"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="31"/>
      <source>unknown</source>
      <comment>@partition info</comment>
      <translation>ukjent</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
      <source>extended</source>
      <comment>@partition info</comment>
      <translation>utvidet</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
      <source>unformatted</source>
      <comment>@partition info</comment>
      <translation>ikke formatert</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
      <source>swap</source>
      <comment>@partition info</comment>
      <translation>veksleminne</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="145"/>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="192"/>
      <source>Default</source>
      <translation>Standard</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="101"/>
      <source>Directory not found</source>
      <translation>Fant ikke mappa</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="102"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation>Klarte ikke opprette ny tilfeldig fil &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
      <source>No product</source>
      <translation>Ingen produkt</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
      <source>No description provided.</source>
      <translation>Ingen beskrivelse oppgitt.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
      <source>(no mount point)</source>
      <translation>(ingen monteringspunkt)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="39"/>
      <source>Unpartitioned space or unknown partition table</source>
      <comment>@info</comment>
      <translation>Ikke partisjonert plass eller ukjent partisjonstabell</translation>
    </message>
  </context>
  <context>
    <name>Recommended</name>
    <message>
      <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Denne datamaskinen oppfyller ikke alle minste-kravene for oppsett av %1.&lt;br/&gt;
        Oppsettet kan fortsette, men noen funksjoner er kanskje slått av.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>RemoveUserJob</name>
    <message>
      <location filename="../src/modules/removeuser/RemoveUserJob.cpp" line="32"/>
      <source>Removing live user from the target system…</source>
      <comment>@status</comment>
      <translation>Fjerner testbrukeren fra målsystemet …</translation>
    </message>
  </context>
  <context>
    <name>RemoveVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
      <source>Removing Volume Group named %1…</source>
      <comment>@status</comment>
      <translation>Fjerner dataområde-gruppa ved navn %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
      <source>Removing Volume Group named &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Fjerner dataområde-gruppa ved navn &lt;strong&gt;%1&lt;/strong&gt; …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
      <source>The installer failed to remove a volume group named '%1'.</source>
      <translation>Feil ved fjerning av dataområde-gruppa ved navn «%1».</translation>
    </message>
  </context>
  <context>
    <name>Requirements</name>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="37"/>
      <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Denne datamaskinen oppfyller ikke minste-kravene for installering av %1.&lt;br/&gt;
        Installasjonen kan ikke fortsette.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="39"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Denne datamaskinen oppfyller ikke alle minste-kravene for oppsett av %1.&lt;br/&gt;
        Oppsettet kan fortsette, men noen funksjoner er kanskje slått av.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>ResizeFSJob</name>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="43"/>
      <source>Performing file system resize…</source>
      <comment>@status</comment>
      <translation>Utfører størrelsesendring av filsystemet …</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="162"/>
      <source>Invalid configuration</source>
      <comment>@error</comment>
      <translation>Ugyldig oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="163"/>
      <source>The file-system resize job has an invalid configuration and will not run.</source>
      <comment>@error</comment>
      <translation>Feil ved størrelsesendring-oppgave på grunn av feil med oppsettet.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="170"/>
      <source>KPMCore not available</source>
      <comment>@error</comment>
      <translation>KPMCore er ikke tilgjengelig</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="171"/>
      <source>Calamares cannot start KPMCore for the file system resize job.</source>
      <comment>@error</comment>
      <translation>Calamares klarte ikke starte KPMCore for størrelsesendringen av filsystemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="180"/>
      <source>Resize failed.</source>
      <comment>@error</comment>
      <translation>Feil ved endring av størrelse.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="182"/>
      <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
      <comment>@info</comment>
      <translation>Fant ikke filsystemet %1 på dette systemet, og størrelsen kan ikke endres.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="184"/>
      <source>The device %1 could not be found in this system, and cannot be resized.</source>
      <comment>@info</comment>
      <translation>Fant ikke enheten %1 på dette systemet, og størrelsen kan ikke endres.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="193"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="205"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="215"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="234"/>
      <source>Resize Failed</source>
      <comment>@error</comment>
      <translation>Feil ved størrelsesendring</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="194"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
      <source>The filesystem %1 cannot be resized.</source>
      <comment>@error</comment>
      <translation>Klarte ikke endre størrelse på filsystemet %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="195"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
      <source>The device %1 cannot be resized.</source>
      <comment>@error</comment>
      <translation>Klarte ikke endre størrelse på enheten %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="216"/>
      <source>The file system %1 must be resized, but cannot.</source>
      <comment>@info</comment>
      <translation>Klarte ikke endre størrelsen på filsystemet %1, men det trengs.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="217"/>
      <source>The device %1 must be resized, but cannot</source>
      <comment>@info</comment>
      <translation>Klarte ikke endre størrelsen på enheten %1, men det trengs.</translation>
    </message>
  </context>
  <context>
    <name>ResizePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="39"/>
      <source>Resize partition %1</source>
      <comment>@title</comment>
      <translation>Endre størrelse på partisjon %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="45"/>
      <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Endre størrelse på &lt;strong&gt;%2 MiB&lt;/strong&gt; partisjon &lt;strong&gt;%1&lt;/strong&gt; til &lt;strong&gt;%3 MiB&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="54"/>
      <source>Resizing %2MiB partition %1 to %3MiB…</source>
      <comment>@status</comment>
      <translation>Endrer størrelse på %2 MiB partisjon %1 til %3 MiB …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="70"/>
      <source>The installer failed to resize partition %1 on disk '%2'.</source>
      <translation>Feil ved størrelsesendring av partisjon %1 på disk «%2».</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
      <source>Resize Volume Group</source>
      <comment>@title</comment>
      <translation>Endre størrelse på dataområde-gruppe</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
      <source>Resize volume group named %1 from %2 to %3</source>
      <comment>@title</comment>
      <translation>Endre størrelse på dataområde-gruppa ved navn %1 fra %2 til %3</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
      <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Endre størrelse på dataområde-gruppa ved navn &lt;strong&gt;%1&lt;/strong&gt; fra &lt;strong&gt;%2&lt;/strong&gt; til &lt;strong&gt;%3&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="47"/>
      <source>Resizing volume group named %1 from %2 to %3…</source>
      <comment>@status</comment>
      <translation>Endrer størrelse på dataområde-gruppa ved navn %1 fra %2 til %3 …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="58"/>
      <source>The installer failed to resize a volume group named '%1'.</source>
      <translation>Feil ved størrelsesendring av dataområde-gruppa ved navn «%1».</translation>
    </message>
  </context>
  <context>
    <name>ResultsListWidget</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="47"/>
      <source>Checking requirements again in a few seconds ...</source>
      <translation>Kontrollerer krav igjen om få sekunder …</translation>
    </message>
  </context>
  <context>
    <name>ScanningDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="69"/>
      <source>Scanning storage devices…</source>
      <comment>@status</comment>
      <translation>Skanner lagringsenheter …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="69"/>
      <source>Partitioning…</source>
      <comment>@status</comment>
      <translation>Partisjonerer …</translation>
    </message>
  </context>
  <context>
    <name>SetHostNameJob</name>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="36"/>
      <source>Set hostname %1</source>
      <translation>Sett vertsnavnet til %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="42"/>
      <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Sett vertsnavnet til &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="48"/>
      <source>Setting hostname %1…</source>
      <comment>@status</comment>
      <translation>Setter vertsnavnet til %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="121"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="128"/>
      <source>Internal Error</source>
      <translation>Intern feil</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="139"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="156"/>
      <source>Cannot write hostname to target system</source>
      <translation>Klarte ikke skrive vertsnavnet til målsystemet</translation>
    </message>
  </context>
  <context>
    <name>SetKeyboardLayoutJob</name>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="66"/>
      <source>Setting keyboard model to %1, layout as %2-%3…</source>
      <comment>@status, %1 model, %2 layout, %3 variant</comment>
      <translation>Setter tastaturmodellen til %1, utforming som %2-%3 …</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="371"/>
      <source>Failed to write keyboard configuration for the virtual console.</source>
      <comment>@error</comment>
      <translation>Feil ved skriving av tastaturoppsettet for den virtuelle konsollen.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="372"/>
      <source>Failed to write to %1</source>
      <comment>@error, %1 is virtual console configuration path</comment>
      <translation>Feil ved skriving til %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="399"/>
      <source>Failed to write keyboard configuration for X11.</source>
      <comment>@error</comment>
      <translation>Feil ved skriving av tastaturoppsettet for X11.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="400"/>
      <source>Failed to write to %1</source>
      <comment>@error, %1 is keyboard configuration path</comment>
      <translation>Feil ved skriving til %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="416"/>
      <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
      <comment>@error</comment>
      <translation>Feil ved skriving av tastaturoppsettet for eksisterende «/etc/default»-mappa.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="417"/>
      <source>Failed to write to %1</source>
      <comment>@error, %1 is default keyboard path</comment>
      <translation>Feil ved skriving til %1</translation>
    </message>
  </context>
  <context>
    <name>SetPartFlagsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="44"/>
      <source>Set flags on partition %1</source>
      <comment>@title</comment>
      <translation>Sett flagg til partisjon %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="50"/>
      <source>Set flags on %1MiB %2 partition</source>
      <comment>@title</comment>
      <translation>Sett flagg på %1 MiB %2 partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="54"/>
      <source>Set flags on new partition</source>
      <comment>@title</comment>
      <translation>Sett flagg på ny partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
      <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Fjern flagg på partisjon &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
      <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition</source>
      <comment>@info</comment>
      <translation>Fjern flagg på %1 MiB &lt;strong&gt;%2&lt;/strong&gt; partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
      <source>Clear flags on new partition</source>
      <comment>@info</comment>
      <translation>Fjern flagg på ny partisjon</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
      <source>Set flags on partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%2&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Sett flagg på partisjon &lt;strong&gt;%1&lt;/strong&gt; til &lt;strong&gt;%2&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="88"/>
      <source>Set flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition to &lt;strong&gt;%3&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Sett flagg på %1 MiB &lt;strong&gt;%2&lt;/strong&gt; partisjon til &lt;strong&gt;%3&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="94"/>
      <source>Set flags on new partition to &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Sett nye flagg på partisjon til &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="105"/>
      <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Fjerner flagg på partisjon &lt;strong&gt;%1&lt;/strong&gt; …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="112"/>
      <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition…</source>
      <comment>@status</comment>
      <translation>Fjerner flagg på %1 MiB &lt;strong&gt;%2&lt;/strong&gt; partisjon …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="117"/>
      <source>Clearing flags on new partition…</source>
      <comment>@status</comment>
      <translation>Fjerner flagg på ny partisjon …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="122"/>
      <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Setter flagg &lt;strong&gt;%2&lt;/strong&gt; på partisjon &lt;strong&gt;%1&lt;/strong&gt;  …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="130"/>
      <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition…</source>
      <comment>@status</comment>
      <translation>Setter flagg &lt;strong&gt;%3&lt;/strong&gt; på %1 MiB &lt;strong&gt;%2&lt;/strong&gt; partisjon …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="136"/>
      <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition…</source>
      <comment>@status</comment>
      <translation>Setter flagg &lt;strong&gt;%1&lt;/strong&gt; på ny partisjon …</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="149"/>
      <source>The installer failed to set flags on partition %1.</source>
      <translation>Feil ved setting av flagg på partisjon %1.</translation>
    </message>
  </context>
  <context>
    <name>SetPasswordJob</name>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="38"/>
      <source>Set password for user %1</source>
      <translation>Sett passord for bruker %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="44"/>
      <source>Setting password for user %1…</source>
      <comment>@status</comment>
      <translation>Setter passord for bruker %1 …</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="80"/>
      <source>Bad destination system path.</source>
      <translation>Feil sti for målsystemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
      <source>rootMountPoint is %1</source>
      <translation>«rootMountPoint» er %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
      <source>Cannot disable root account.</source>
      <translation>Klarte ikke ta rotbrukeren ut av bruk.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="90"/>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="108"/>
      <source>usermod terminated with error code %1.</source>
      <translation>«usermod» avsluttet med feilkode %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="107"/>
      <source>Cannot set password for user %1.</source>
      <translation>Klarte ikke sette passord for brukeren %1.</translation>
    </message>
  </context>
  <context>
    <name>SetTimezoneJob</name>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="32"/>
      <source>Setting timezone to %1/%2…</source>
      <comment>@status</comment>
      <translation>Setter tidssona til %1/%2 …</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="60"/>
      <source>Cannot access selected timezone path.</source>
      <comment>@error</comment>
      <translation>Klarte ikke få tilgang til mappa for tidssona.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="61"/>
      <source>Bad path: %1</source>
      <comment>@error</comment>
      <translation>Feil sti: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="70"/>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="80"/>
      <source>Cannot set timezone.</source>
      <comment>@error</comment>
      <translation>Klarte ikke sette tidssone.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
      <source>Link creation failed, target: %1; link name: %2</source>
      <comment>@info</comment>
      <translation>Feil ved lenkeopprettelse, mål: %1; lenkenavn: %2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="81"/>
      <source>Cannot open /etc/timezone for writing</source>
      <comment>@info</comment>
      <translation>Klarte ikke åpne /etc/timezone for skriving</translation>
    </message>
  </context>
  <context>
    <name>SetupGroupsJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="181"/>
      <source>Preparing groups…</source>
      <comment>@status</comment>
      <translation>Forbereder gruppene …</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="193"/>
      <location filename="../src/modules/users/MiscJobs.cpp" line="198"/>
      <source>Could not create groups in target system</source>
      <translation>Klarte ikke opprette gruppene i målsystemet</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="199"/>
      <source>These groups are missing in the target system: %1</source>
      <translation>Disse gruppene mangler i målsystemet: %1</translation>
    </message>
  </context>
  <context>
    <name>SetupSudoJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="34"/>
      <source>Configuring &lt;pre&gt;sudo&lt;/pre&gt; users…</source>
      <comment>@status</comment>
      <translation>Setter opp &lt;pre&gt;sudo&lt;/pre&gt;-brukere …</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="70"/>
      <source>Cannot chmod sudoers file.</source>
      <translation>Klarte ikke endre «sudoers»-fila.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="75"/>
      <source>Cannot create sudoers file for writing.</source>
      <translation>Klarte ikke opprette «sudoers»-fila for skriving.</translation>
    </message>
  </context>
  <context>
    <name>ShellProcessJob</name>
    <message>
      <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="38"/>
      <source>Running shell processes…</source>
      <comment>@status</comment>
      <translation>Kjører skallprosesser …</translation>
    </message>
  </context>
  <context>
    <name>SlideCounter</name>
    <message>
      <location filename="../src/qml/calamares-qt5/slideshow/SlideCounter.qml" line="27"/>
      <location filename="../src/qml/calamares-qt6/slideshow/SlideCounter.qml" line="27"/>
      <source>%L1 / %L2</source>
      <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
      <translation>%L1 / %L2</translation>
    </message>
  </context>
  <context>
    <name>StandardButtons</name>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="23"/>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="24"/>
      <source>&amp;Yes</source>
      <translation>&amp;Ja</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="25"/>
      <source>&amp;No</source>
      <translation>&amp;Nei</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="26"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Avbryt</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="27"/>
      <source>&amp;Close</source>
      <translation>&amp;Lukk</translation>
    </message>
  </context>
  <context>
    <name>TarballRunner</name>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="26"/>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="45"/>
      <source>Invalid tarball configuration</source>
      <translation>Ugyldig tar-fil oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="27"/>
      <source>The source archive &lt;i&gt;%1&lt;/i&gt; does not exist.</source>
      <translation>Fant ikke kildearkivet &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="36"/>
      <source>Missing tools</source>
      <translation>Mangler verktøy</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="37"/>
      <source>The &lt;i&gt;%1&lt;/i&gt; tool is not installed on the system.</source>
      <translation>Verktøyet &lt;i&gt;%1&lt;/i&gt; er ikke installert på systemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="46"/>
      <source>No destination could be found for &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Fant ikke mappa til &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="84"/>
      <source>Tarball extract file %1</source>
      <translation>Tar-fil pakket ut fila %1</translation>
    </message>
  </context>
  <context>
    <name>TrackingInstallJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="100"/>
      <source>Installation feedback</source>
      <translation>Tilbakemelding om installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="106"/>
      <source>Sending installation feedback…</source>
      <comment>@status</comment>
      <translation>Sender tilbakemelding om installasjon …</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="124"/>
      <source>Internal error in install-tracking.</source>
      <translation>Intern feil ved installasjon sporing.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="125"/>
      <source>HTTP request timed out.</source>
      <translation>HTTP-forespørselen ble tidsavbrutt.</translation>
    </message>
  </context>
  <context>
    <name>TrackingKUserFeedbackJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="192"/>
      <source>KDE user feedback</source>
      <translation>KDE tilbakemeldinger</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="198"/>
      <source>Configuring KDE user feedback…</source>
      <comment>@status</comment>
      <translation>Setter opp KDE tilbakemeldinger …</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="220"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="228"/>
      <source>Error in KDE user feedback configuration.</source>
      <translation>Feil ved oppsett av KDE tilbakemeldinger.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="221"/>
      <source>Could not configure KDE user feedback correctly, script error %1.</source>
      <translation>Klarte ikke sette opp KDE tilbakemeldinger på riktig vis, skriptfeil %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="229"/>
      <source>Could not configure KDE user feedback correctly, Calamares error %1.</source>
      <translation>Klarte ikke sette opp KDE tilbakemeldinger på riktig vis, Calamares-feil %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingMachineUpdateManagerJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="135"/>
      <source>Machine feedback</source>
      <translation>Tilbakemelding fra maskin</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="141"/>
      <source>Configuring machine feedback…</source>
      <comment>@status</comment>
      <translation>Setter opp tilbakemelding fra maskin …</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="164"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="173"/>
      <source>Error in machine feedback configuration.</source>
      <translation>Feil ved oppsett av tilbakemelding fra maskin.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="166"/>
      <source>Could not configure machine feedback correctly, script error %1.</source>
      <translation>Klarte ikke sette opp tilbakemelding fra maskin på riktig vis, skriptfeil %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="175"/>
      <source>Could not configure machine feedback correctly, Calamares error %1.</source>
      <translation>Klarte ikke sette opp tilbakemelding fra maskin på riktig vis, Calamares-feil %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingPage</name>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="28"/>
      <source>Placeholder</source>
      <translation>Plassholder</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="76"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click here to send &lt;span style=" font-weight:600;"&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Trykk her for å sende &lt;span style=" font-weight:600;"&gt;ingen informasjon&lt;/span&gt; om din installasjon.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="275"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Trykk her for mer informasjon om bruker tilbakemeldinger&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="95"/>
      <source>Tracking helps %1 to see how often it is installed, what hardware it is installed on and which applications are used. To see what will be sent, please click the help icon next to each area.</source>
      <translation>Sporing hjelper %1 å se hvor ofte det installeres, hvilket maskinvare det er installert på og hvilke programmer som brukes. For å se hva som sendes, trykk på hjelpeikonet ved siden av hvert område.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="100"/>
      <source>By selecting this you will send information about your installation and hardware. This information will only be sent &lt;b&gt;once&lt;/b&gt; after the installation finishes.</source>
      <translation>Ved å velge dette vil du sende informasjon om din installasjon og maskinvare. Denne informasjonen sendes bare &lt;b&gt;én gang&lt;/b&gt; etter installasjonen fullfører.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="103"/>
      <source>By selecting this you will periodically send information about your &lt;b&gt;machine&lt;/b&gt; installation, hardware and applications, to %1.</source>
      <translation>Ved å velge dette vil du sende informasjon om din &lt;b&gt;maskin&lt;/b&gt; installasjon, maskinvare og programmer til %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="107"/>
      <source>By selecting this you will regularly send information about your &lt;b&gt;user&lt;/b&gt; installation, hardware, applications and application usage patterns, to %1.</source>
      <translation>Ved å velge dette vil du sende informasjon om din &lt;b&gt;bruker&lt;/b&gt; installasjon, maskinvare, programmer og bruksmønstre for programmer til %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingViewStep</name>
    <message>
      <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="49"/>
      <source>Feedback</source>
      <comment>@title</comment>
      <translation>Tilbakemelding</translation>
    </message>
  </context>
  <context>
    <name>UmountJob</name>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="39"/>
      <source>Unmounting file systems…</source>
      <comment>@status</comment>
      <translation>Avmonterer filsystemer …</translation>
    </message>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="135"/>
      <source>No target system available.</source>
      <translation>Ingen målsystem tilgjengelig.</translation>
    </message>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="143"/>
      <source>No rootMountPoint is set.</source>
      <translation>Ingen «rootMountPoint» er satt.</translation>
    </message>
  </context>
  <context>
    <name>UnpackFSCJob</name>
    <message>
      <location filename="../src/modules/unpackfsc/UnpackFSCJob.cpp" line="61"/>
      <source>Unpack filesystems</source>
      <translation>Pakk ut filsystemer</translation>
    </message>
  </context>
  <context>
    <name>UnsquashRunner</name>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="26"/>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="45"/>
      <source>Invalid unsquash configuration</source>
      <translation>Ugyldig unsquash-oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="27"/>
      <source>The source archive &lt;i&gt;%1&lt;/i&gt; does not exist.</source>
      <translation>Fant ikke kildearkivet &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="36"/>
      <source>Missing tools</source>
      <translation>Mangler verktøy</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="37"/>
      <source>The &lt;i&gt;%1&lt;/i&gt; tool is not installed on the system.</source>
      <translation>Verktøyet &lt;i&gt;%1&lt;/i&gt; er ikke installert på systemet.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="46"/>
      <source>No destination could be found for &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Fant ikke mappa til &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="98"/>
      <source>Unsquash file %1</source>
      <translation>Unsquash-fila %1</translation>
    </message>
  </context>
  <context>
    <name>UsersPage</name>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="199"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Hvis mer enn én person ønsker å bruke denne datamaskinen, kan du opprette flere brukere etter oppsett.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="205"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Hvis mer enn én person ønsker å bruke denne datamaskinen, kan du opprette flere brukere etter installasjon.&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>UsersQmlViewStep</name>
    <message>
      <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
      <source>Users</source>
      <translation>Brukere</translation>
    </message>
  </context>
  <context>
    <name>UsersViewStep</name>
    <message>
      <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
      <source>Users</source>
      <translation>Brukere</translation>
    </message>
  </context>
  <context>
    <name>VariantModel</name>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="246"/>
      <source>Key</source>
      <comment>Column header for key/value</comment>
      <translation>Nøkkel</translation>
    </message>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="250"/>
      <source>Value</source>
      <comment>Column header for key/value</comment>
      <translation>Verdi</translation>
    </message>
  </context>
  <context>
    <name>VolumeGroupBaseDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
      <source>Create Volume Group</source>
      <translation>Opprett dataområde-gruppe</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
      <source>List of Physical Volumes</source>
      <translation>Liste over lagringsenheter</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
      <source>Volume Group Name:</source>
      <translation>Dataområde-gruppe navn:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
      <source>Volume Group Type:</source>
      <translation>Dataområde-gruppe type:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
      <source>Physical Extent Size:</source>
      <translation>Fysisk utstrekning størrelse:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
      <source>Total Size:</source>
      <translation>Total størrelse:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
      <source>Used Size:</source>
      <translation>Brukte størrelse:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
      <source>Total Sectors:</source>
      <translation>Totalt antall sektorer:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
      <source>Quantity of LVs:</source>
      <translation>Antall logiske dataområder:</translation>
    </message>
  </context>
  <context>
    <name>WelcomePage</name>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
      <source>Select application and system language</source>
      <translation>Velg program- og systemspråk</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
      <source>Open donations website</source>
      <translation>Åpne donasjonsnettside</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="143"/>
      <source>&amp;Donate</source>
      <translation>&amp;Gi pengegave</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
      <source>Open help and support website</source>
      <translation>Åpne hjelp- og støttenettsiden</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="156"/>
      <source>&amp;Support</source>
      <translation>&amp;Støtte</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="166"/>
      <source>Open issues and bug-tracking website</source>
      <translation>Åpne saker- og feilsporingsnettside</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="169"/>
      <source>&amp;Known issues</source>
      <translation>&amp;Kjente problemer</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="179"/>
      <source>Open release notes website</source>
      <translation>Åpne versjonsnotater på nettsiden</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="182"/>
      <source>&amp;Release notes</source>
      <translation>&amp;Versjonsnotater</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="237"/>
      <source>About %1 Setup</source>
      <comment>@title</comment>
      <translation>Om %1-oppsett</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="238"/>
      <source>About %1 Installer</source>
      <comment>@title</comment>
      <translation>Om %1-installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="213"/>
      <source>%1 Support</source>
      <comment>@action</comment>
      <translation>%1-støtte</translation>
    </message>
  </context>
  <context>
    <name>WelcomeQmlViewStep</name>
    <message>
      <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
      <source>Welcome</source>
      <comment>@title</comment>
      <translation>Velkommen</translation>
    </message>
  </context>
  <context>
    <name>WelcomeViewStep</name>
    <message>
      <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
      <source>Welcome</source>
      <comment>@title</comment>
      <translation>Velkommen</translation>
    </message>
  </context>
  <context>
    <name>ZfsJob</name>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="102"/>
      <source>Creating ZFS pools and datasets…</source>
      <comment>@status</comment>
      <translation>Oppretter ZFS-samling og datasett …</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="162"/>
      <source>Failed to create zpool on </source>
      <translation>Klarte ikke opprette zpool på </translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="180"/>
      <source>Configuration Error</source>
      <translation>Feil ved oppsett</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="181"/>
      <source>No partitions are available for ZFS.</source>
      <translation>Ingen partisjoner er tilgjengelige for ZFS.</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
      <source>Internal data missing</source>
      <translation>Mangler intern data</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="264"/>
      <source>Failed to create zpool</source>
      <translation>Klarte ikke opprette zpool</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="336"/>
      <source>Failed to create dataset</source>
      <translation>Klarte ikke opprette datasett</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="337"/>
      <source>The output was: </source>
      <translation>Utdataen er:</translation>
    </message>
  </context>
  <context>
    <name>calamares-sidebar</name>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="89"/>
      <source>About</source>
      <translation>Om</translation>
    </message>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="115"/>
      <source>Debug</source>
      <translation>Feilsøking</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="157"/>
      <source>About</source>
      <comment>@button</comment>
      <translation>Om</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="159"/>
      <source>Show information about Calamares</source>
      <comment>@tooltip</comment>
      <translation>Vis informasjon om Calamares</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="173"/>
      <source>Debug</source>
      <comment>@button</comment>
      <translation>Feilsøking</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="175"/>
      <source>Show debug information</source>
      <comment>@tooltip</comment>
      <translation>Vis feilsøkingsinformasjon</translation>
    </message>
  </context>
  <context>
    <name>finishedq</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="36"/>
      <source>Installation Completed</source>
      <translation>Installasjon fullført</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
      <translation>%1 er installert på din datamaskin.&lt;br/&gt;
            Du kan nå starte på nytt rett inn i ditt nye system, eller fortsette å bruke testmiljøet.</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="65"/>
      <source>Close Installer</source>
      <translation>Lukk installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="71"/>
      <source>Restart System</source>
      <translation>Start på nytt</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="89"/>
      <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to /var/log/installation.log of the target system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;En full logg av installasjonen er tilgjengelig som «installation.log»-fil i hjemmemappa til testbrukeren.&lt;br/&gt;
            Denne loggen kopieres til /var/log/installation.log i målsystemet.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>finishedq-qt6</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="35"/>
      <source>Installation Completed</source>
      <comment>@title</comment>
      <translation>Installasjon fullført</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="42"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
      <comment>@info, %1 is the product name</comment>
      <translation>%1 er installert på din datamaskin.&lt;br/&gt;
            Du kan nå starte på nytt rett inn i ditt nye system, eller fortsette å bruke testmiljøet.</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="65"/>
      <source>Close Installer</source>
      <comment>@button</comment>
      <translation>Lukk installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="71"/>
      <source>Restart System</source>
      <comment>@button</comment>
      <translation>Start på nytt</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="89"/>
      <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to /var/log/installation.log of the target system.&lt;/p&gt;</source>
      <comment>@info</comment>
      <translation>&lt;p&gt;En full logg av installasjonen er tilgjengelig som «installation.log»-fil i hjemmemappa til testbrukeren.&lt;br/&gt;
            Denne loggen kopieres til /var/log/installation.log i målsystemet.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>finishedq@mobile</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="36"/>
      <source>Installation Completed</source>
      <comment>@title</comment>
      <translation>Installasjon fullført</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
      <comment>@info, %1 is the product name</comment>
      <translation>%1 er installert på din datamaskin.&lt;br/&gt;
            Du kan nå starte enheten på nytt.</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="66"/>
      <source>Close</source>
      <comment>@button</comment>
      <translation>Lukk</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="72"/>
      <source>Restart</source>
      <comment>@button</comment>
      <translation>Start på nytt</translation>
    </message>
  </context>
  <context>
    <name>keyboardq</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="61"/>
      <source>Select a layout to activate keyboard preview</source>
      <comment>@label</comment>
      <translation>Velg en utforming for å teste ut tastaturet</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="144"/>
      <source>&lt;b&gt;Keyboard model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
      <comment>@label</comment>
      <translation>&lt;b&gt;Tastaturmodell:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="185"/>
      <source>Layout</source>
      <comment>@label</comment>
      <translation>Utforming</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="258"/>
      <source>Variant</source>
      <comment>@label</comment>
      <translation>Variant</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="311"/>
      <source>Type here to test your keyboard…</source>
      <comment>@label</comment>
      <translation>Skriv her for å teste ut ditt tastatur …</translation>
    </message>
  </context>
  <context>
    <name>keyboardq-qt6</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="61"/>
      <source>Select a layout to activate keyboard preview</source>
      <comment>@label</comment>
      <translation>Velg en utforming for å teste ut tastaturet</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="144"/>
      <source>&lt;b&gt;Keyboard model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
      <comment>@label</comment>
      <translation>&lt;b&gt;Tastaturmodell:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="185"/>
      <source>Layout</source>
      <comment>@label</comment>
      <translation>Utforming</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="258"/>
      <source>Variant</source>
      <comment>@label</comment>
      <translation>Variant</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="311"/>
      <source>Type here to test your keyboard…</source>
      <comment>@label</comment>
      <translation>Skriv her for å teste ut ditt tastatur …</translation>
    </message>
  </context>
  <context>
    <name>localeq</name>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="76"/>
      <location filename="../src/modules/localeq/localeq.qml" line="106"/>
      <source>Change</source>
      <comment>@button</comment>
      <translation>Endre</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="142"/>
      <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Språk&lt;/h3&gt; &lt;/br&gt;
                            Systemlokale påvirker språket og tegnsettene for noen kommandolinje brukergrensesnitt elementer. Gjeldende språk er &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="213"/>
      <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Lokale&lt;/h3&gt; &lt;/br&gt;
                                Systemlokale påvirker tall- og datoformatene. Gjeldende format er &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
  </context>
  <context>
    <name>localeq-qt6</name>
    <message>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="76"/>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="106"/>
      <source>Change</source>
      <comment>@button</comment>
      <translation>Endre</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="142"/>
      <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Språk&lt;/h3&gt; &lt;/br&gt;
                            Systemlokale påvirker språket og tegnsettene for noen kommandolinje brukergrensesnitt elementer. Gjeldende språk er &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="213"/>
      <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Lokale&lt;/h3&gt; &lt;/br&gt;
                                Systemlokale påvirker tall- og datoformatene. Gjeldende format er &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
  </context>
  <context>
    <name>notesqml</name>
    <message>
      <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;Dette er eksempel versjonsnotater.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>packagechooserq</name>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
      <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
      <translation>Libreoffice er en kraftfull og gratis kontorprogrampakke, brukt av millioner av mennesker rundt om i verden. Det inneholder flere programmer som gjøre det til den enkleste fri kildekode kontorprogrammet på markedet.&lt;br/&gt;
                    Standard valg.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
      <source>LibreOffice</source>
      <translation>LibreOffice</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="108"/>
      <source>If you don't want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
      <translation>Hvis du ikke ønsker å installere kontorprogram, velg «Ingen kontorprogram». Du kan alltid installere én (eller flere) senere etter installasjonen når det trengs.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="121"/>
      <source>No Office Suite</source>
      <translation>Ingen kontorprogram</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="172"/>
      <source>Create a minimal Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
      <translation>Lag et minimalt skrivebordsinstallasjon, fjern alle unødige programmer og velg senere hva du ønsker å installere. Eksempel vis hva som ikke installeres er kontorprogram, medieavspillere, bildevisere eller skriverstøtte. Det blir bare et skrivebord, filbehandler, pakkebehandler, skriveprogram og en enkel nettleser.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="185"/>
      <source>Minimal Install</source>
      <translation>Minimal installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="233"/>
      <source>Please select an option for your install, or use the default: LibreOffice included.</source>
      <translation>Ta et valg for din installasjon, eller bruk standarden: med LibreOffice.</translation>
    </message>
  </context>
  <context>
    <name>packagechooserq-qt6</name>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="45"/>
      <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
      <translation>Libreoffice er en kraftfull og gratis kontorprogrampakke, brukt av millioner av mennesker rundt om i verden. Det inneholder flere programmer som gjøre det til den enkleste fri kildekode kontorprogrammet på markedet.&lt;br/&gt;
                    Standard valg.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="59"/>
      <source>LibreOffice</source>
      <translation>LibreOffice</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="108"/>
      <source>If you don't want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
      <translation>Hvis du ikke ønsker å installere kontorprogram, velg «Ingen kontorprogram». Du kan alltid installere én (eller flere) senere etter installasjonen når det trengs.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="121"/>
      <source>No Office Suite</source>
      <translation>Ingen kontorprogram</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="172"/>
      <source>Create a minimal Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
      <translation>Create a minimal Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="185"/>
      <source>Minimal Install</source>
      <translation>Minimal installasjon</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="233"/>
      <source>Please select an option for your install, or use the default: LibreOffice included.</source>
      <translation>Please select an option for your install, or use the default: LibreOffice included.</translation>
    </message>
  </context>
  <context>
    <name>release_notes</name>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="45"/>
      <source>### %1
This an example QML file, showing options in Markdown with Flickable content.

QML with RichText can use HTML tags, with Markdown it uses the simple Markdown syntax, Flickable content is useful for touchscreens.

**This is bold text**

*This is italic text*

_This is underlined text_

&gt; blockquote

~~This is strikethrough~~

Code example:
```
ls -l /home
```

**Lists:**
 * Intel CPU systems
 * AMD CPU systems

The vertical scrollbar is adjustable, current width set to 10.</source>
      <translation>### %1
Dette er et eksempel på en QML-fil, med innstillinger i  Markdown med Flickable-innhold.

QML med RichText kan bruke HTML-emneknagg, med Markdown bruker man enkel Markdown-syntaks, Flickable-innhold er hjelpsomt for trykkskjermer.

**Dette er halvfet tekst**

*Dette er kursiv tekst*

_Dette er tekst med understrek_

&gt; paragraf

~~Dette er stryket tekst~~

Kode eksempel:
```
ls -l /home
```

**Liste:**
 * Intel prosessor systemer
 * AMD prosessor systemer

Den vertikale rullelinja er justerbar, gjeldende bredde er 10.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="80"/>
      <source>Back</source>
      <translation>Tilbake</translation>
    </message>
  </context>
  <context>
    <name>usersq</name>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="43"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation>Velg ditt brukernavn og passord for å logge inn og utføre administrator-oppgaver</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="56"/>
      <source>What is your name?</source>
      <translation>Hva heter du?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="63"/>
      <source>Your full name</source>
      <translation>Ditt fulle navn</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="80"/>
      <source>What name do you want to use to log in?</source>
      <translation>Hvilket navn vil du bruke for å logge inn?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="87"/>
      <source>Login name</source>
      <translation>Innlogginsnavn</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="116"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation>Hvis mer enn én person ønsker å bruke denne datamaskinen, kan du opprette flere brukere etter installasjon.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="129"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Kun små bokstaver, tall, understrek eller bindestrek tillates.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="138"/>
      <source>root is not allowed as username.</source>
      <translation>«root» tillates ikke som brukernavn.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="147"/>
      <source>What is the name of this computer?</source>
      <translation>Hva er navnet på denne datamaskinen?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="153"/>
      <source>Computer name</source>
      <translation>Datamaskinnavn</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="180"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation>Dette navnet vil brukes hvis du synliggjør denne datamaskinen til andre over nettverket.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="193"/>
      <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
      <translation>Kun bokstaver, tall, understrek og bindestrek tillates, minst to tegn.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="202"/>
      <source>localhost is not allowed as hostname.</source>
      <translation>«localhost» tillates ikke som vertsnavn.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="211"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Velg et passord for å holde kontoen trygg.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="221"/>
      <source>Password</source>
      <translation>Passord</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="238"/>
      <source>Repeat password</source>
      <translation>Gjenta passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="265"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation>Skriv inn det samme passordet to ganger, slik at det ikke blir feil. Et bra passord inneholder flere forskjellige bokstaver, tall og tegnsett – burde helst bestå av åtte symboler, og byttes jevnlig.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="297"/>
      <source>Reuse user password as root password</source>
      <translation>Bruk brukerpassordet på nytt som rotpassord</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="305"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Bruk samme passord for administrator-kontoen.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="318"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation>Velg et rotpassord for å holde kontoen trygg.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="328"/>
      <source>Root password</source>
      <translation>Rotpassord</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="346"/>
      <source>Repeat root password</source>
      <translation>Gjenta rotpassordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="372"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation>Skriv inn det samme passordet to ganger, slik at det ikke blir feil.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="402"/>
      <source>Log in automatically without asking for the password</source>
      <translation>Logg inn automatisk uten å spørre om passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="410"/>
      <source>Validate passwords quality</source>
      <translation>Kontroller kvaliteten av passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="420"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Når den boksen er krysset av, sjekkes styrken av passordet og du vil ikke kunne bruke et svakt passord.</translation>
    </message>
  </context>
  <context>
    <name>usersq-qt6</name>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="42"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation>Velg ditt brukernavn og passord for å logge inn og utføre administrator-oppgaver</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="55"/>
      <source>What is your name?</source>
      <translation>Hva heter du?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="62"/>
      <source>Your full name</source>
      <translation>Ditt fulle navn</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="79"/>
      <source>What name do you want to use to log in?</source>
      <translation>Hvilket navn vil du bruke for å logge inn?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="86"/>
      <source>Login name</source>
      <translation>Innlogginsnavn</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="115"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation>Hvis mer enn én person ønsker å bruke denne datamaskinen, kan du opprette flere brukere etter installasjon.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="128"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Kun små bokstaver, tall, understrek eller bindestrek tillates.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="137"/>
      <source>root is not allowed as username.</source>
      <translation>«root» tillates ikke som brukernavn.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="146"/>
      <source>What is the name of this computer?</source>
      <translation>Hva er navnet på denne datamaskinen?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="152"/>
      <source>Computer name</source>
      <translation>Datamaskinnavn</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="179"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation>Dette navnet vil brukes hvis du synliggjør denne datamaskinen til andre over nettverket.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="192"/>
      <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
      <translation>Kun bokstaver, tall, understrek og bindestrek tillates, minst to tegn.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="201"/>
      <source>localhost is not allowed as hostname.</source>
      <translation>«localhost» tillates ikke som vertsnavn.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="210"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Velg et passord for å holde kontoen trygg.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="220"/>
      <source>Password</source>
      <translation>Passord</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="237"/>
      <source>Repeat password</source>
      <translation>Gjenta passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="264"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation>Skriv inn det samme passordet to ganger, slik at det ikke blir feil. Et bra passord inneholder flere forskjellige bokstaver, tall og tegnsetting – burde helst bestå av åtte symboler, og byttes jevnlig.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="296"/>
      <source>Reuse user password as root password</source>
      <translation>Bruk brukerpassordet på nytt som rotpassord</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="304"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Bruk samme passord for administrator-kontoen.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="317"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation>Velg et rotpassord for å holde kontoen trygg.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="327"/>
      <source>Root password</source>
      <translation>Rotpassord</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="345"/>
      <source>Repeat root password</source>
      <translation>Gjenta rotpassordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="371"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation>Skriv inn det samme passordet to ganger, slik at det ikke blir feil.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="401"/>
      <source>Log in automatically without asking for the password</source>
      <translation>Logg inn automatisk uten å spørre om passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="409"/>
      <source>Validate passwords quality</source>
      <translation>Kontroller kvaliteten av passordet</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="419"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Når den boksen er krysset av, sjekkes styrken av passordet og du vil ikke kunne bruke et svakt passord.</translation>
    </message>
  </context>
  <context>
    <name>welcomeq</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="38"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;Velkommen til %1 &lt;quote&gt;%2&lt;/quote&gt;-installasjonsprogrammet&lt;/h3&gt;
            &lt;p&gt;Dette programmet vil spørre deg noen spørsmål og sette opp %1 på din datamaskin.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="69"/>
      <source>Support</source>
      <translation>Støtte</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="80"/>
      <source>Known Issues</source>
      <translation>Kjente problemer</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="91"/>
      <source>Release Notes</source>
      <translation>Versjonsnotater</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="103"/>
      <source>Donate</source>
      <translation>Gi pengegave</translation>
    </message>
  </context>
  <context>
    <name>welcomeq-qt6</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="38"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;Velkommen til %1 &lt;quote&gt;%2&lt;/quote&gt;-installasjonsprogrammet&lt;/h3&gt;
            &lt;p&gt;Dette programmet vil spørre deg noen spørsmål og sette opp %1 på din datamaskin.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="69"/>
      <source>Support</source>
      <translation>Støtte</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="80"/>
      <source>Known Issues</source>
      <translation>Kjente problemer</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="91"/>
      <source>Release Notes</source>
      <translation>Versjonsnotater</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="103"/>
      <source>Donate</source>
      <translation>Gi pengegave</translation>
    </message>
  </context>
</TS>
