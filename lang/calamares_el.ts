<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS language="el" version="2.1">
  <context>
    <name>AboutData</name>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="17"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</source>
      <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;Έκδοση %2&lt;br/&gt; για το %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="20"/>
      <source>Thanks to &lt;a href="https://calamares.io/team/"&gt;the Calamares team&lt;/a&gt; and the &lt;a href="https://app.transifex.com/calamares/calamares/"&gt;Calamares translators team&lt;/a&gt;.</source>
      <translation>Ευχαριστίες στην &lt;a href="https://calamares.io/team/"&gt;ομάδα του Calamares&lt;/a&gt; και στην &lt;a href="https://app.transifex.com/calamares/calamares/"&gt;ομάδα μεταφραστών του Calamares&lt;/a&gt;.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="34"/>
      <source>Copyright %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</source>
      <extracomment>Copyright year-year Name &lt;email-address&gt;</extracomment>
      <translation>Πνευματικά δικαιώματα %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</translation>
    </message>
  </context>
  <context>
    <name>ActiveDirectoryJob</name>
    <message>
      <location filename="../src/modules/users/ActiveDirectoryJob.cpp" line="39"/>
      <source>Enroll system in Active Directory</source>
      <comment>@label</comment>
      <translation>Εγγραφή συστήματος στην υπηρεσία Active Directory</translation>
    </message>
    <message>
      <location filename="../src/modules/users/ActiveDirectoryJob.cpp" line="45"/>
      <source>Enrolling system in Active Directory…</source>
      <comment>@status</comment>
      <translation>Εγγραφή συστήματος στην υπηρεσία Active Directory…</translation>
    </message>
  </context>
  <context>
    <name>AutoMountManagementJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
      <source>Managing auto-mount settings…</source>
      <comment>@status</comment>
      <translation>Διαχείριση ρυθμίσεων αυτόματης προσάρτησης…</translation>
    </message>
  </context>
  <context>
    <name>BootInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="60"/>
      <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
      <translation>Το &lt;strong&gt;περιβάλλον εκκίνησης&lt;/strong&gt; αυτού του συστήματος.&lt;br&gt;&lt;br&gt;Τα παλαιότερα συστήματα x86 υποστηρίζουν μόνο &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Τα σύγχρονα συστήματα συνήθως χρησιμοποιούν &lt;strong&gt;EFI&lt;/strong&gt;, αλλά ενδέχεται να εμφανίζονται ως BIOS εάν έχουν εκκινηθεί σε λειτουργία συμβατότητας.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="70"/>
      <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
      <translation>Αυτό το σύστημα εκκινήθηκε με περιβάλλον εκκίνησης &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Για τη ρύθμιση της εκκίνησης από περιβάλλον EFI, το πρόγραμμα εγκατάστασης πρέπει να αναπτύξει μια εφαρμογή φορτωτή εκκίνησης, όπως το &lt;strong&gt;GRUB&lt;/strong&gt; ή το &lt;strong&gt;systemd-boot&lt;/strong&gt; σε ένα &lt;strong&gt;διαμέρισμα συστήματος EFI&lt;/strong&gt;. Αυτό γίνεται αυτόματα, εκτός κι αν επιλέξετε τη μέθοδο χειροκίνητης διαμέρισης, στην οποία περίπτωση θα πρέπει να επιλέξετε το διαμέρισμα ή να το δημιουργήσετε μόνοι σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="82"/>
      <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
      <translation>Αυτό το σύστημα εκκινήθηκε με περιβάλλον εκκίνησης &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Για τη ρύθμιση της εκκίνησης από περιβάλλον BIOS, το πρόγραμμα εγκατάστασης πρέπει να εγκαταστήσει έναν φορτωτή εκκίνησης, όπως το &lt;strong&gt;GRUB&lt;/strong&gt;, είτε στην αρχή ενός διαμερίσματος είτε στην &lt;strong&gt;Κύρια εγγραφή εκκίνησης&lt;/strong&gt; κοντά στην αρχή του πίνακα διαμερισμάτων (προτιμότερο). Αυτό γίνεται αυτόματα, εκτός κι αν επιλέξετε τη μέθοδο χειροκίνητης διαμέρισης, στην οποία περίπτωση θα πρέπει να το κάνετε μόνοι σας.</translation>
    </message>
  </context>
  <context>
    <name>BootLoaderModel</name>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="60"/>
      <source>Master Boot Record of %1</source>
      <comment>@info</comment>
      <translation>Κύρια εγγραφή εκκίνησης του %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
      <source>Boot Partition</source>
      <comment>@info</comment>
      <translation>Διαμέρισμα εκκίνησης</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
      <source>System Partition</source>
      <comment>@info</comment>
      <translation>Διαμέρισμα συστήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="131"/>
      <source>Do not install a boot loader</source>
      <comment>@label</comment>
      <translation>Χωρίς εγκατάσταση φορτωτή εκκίνησης</translation>
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
      <translation>Κενή σελίδα</translation>
    </message>
  </context>
  <context>
    <name>Calamares::DebugWindow</name>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="28"/>
      <source>GlobalStorage</source>
      <translation>GlobalStorage</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="38"/>
      <source>JobQueue</source>
      <translation>JobQueue</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="48"/>
      <source>Modules</source>
      <translation>Αρθρώματα</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="61"/>
      <source>Type:</source>
      <translation>Τύπος:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="68"/>
      <location filename="../src/calamares/DebugWindow.ui" line="82"/>
      <source>none</source>
      <translation>χωρίς</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="75"/>
      <source>Interface:</source>
      <translation>Διεπαφή:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="102"/>
      <source>Crashes Calamares, so that Dr. Konqi can look at it.</source>
      <translation>Θα γίνει κατάρρευση του Calamares, ώστε να εξεταστεί από το Dr. Konqi.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="115"/>
      <source>Reloads the stylesheet from the branding directory.</source>
      <translation>Φορτώνει εκ νέου το φύλλο μορφοποίησης από τον κατάλογο επωνυμίας.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="118"/>
      <source>Reload Stylesheet</source>
      <translation>Επαναφόρτωση φύλλου μορφοποίησης</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="128"/>
      <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
      <translation>Εμφανίζει το δέντρο ονομάτων των γραφικών στοιχείων στο αρχείο καταγραφής (για εντοπισμό σφαλμάτων στο φύλλο μορφοποίησης).</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="131"/>
      <source>Widget Tree</source>
      <translation>Δέντρο γραφικών στοιχείων</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="141"/>
      <source>Uploads the session log to the configured pastebin.</source>
      <translation>Μεταφορτώνει το αρχείο καταγραφής της συνεδρίας στον ρυθμισμένο ιστότοπο επικόλλησης.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="144"/>
      <source>Send Session Log</source>
      <translation>Αποστολή αρχείου καταγραφής συνεδρίας</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="166"/>
      <source>Debug Information</source>
      <comment>@title</comment>
      <translation>Πληροφορίες εντοπισμού σφαλμάτων</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="77"/>
      <source>%p%</source>
      <comment>Progress percentage indicator: %p is where the number 0..100 is placed</comment>
      <translation>%p%</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="117"/>
      <source>Set Up</source>
      <comment>@label</comment>
      <translation>Εγκατάσταση</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="117"/>
      <source>Install</source>
      <comment>@label</comment>
      <translation>Εγκατάσταση</translation>
    </message>
  </context>
  <context>
    <name>Calamares::FailJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
      <source>Job failed (%1)</source>
      <translation>Αποτυχία εργασίας (%1)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
      <source>Programmed job failure was explicitly requested.</source>
      <translation>Ζητήθηκε ρητά προγραμματισμένη αποτυχία της εργασίας.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::JobThread</name>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="369"/>
      <source>Done</source>
      <translation>Τέλος</translation>
    </message>
  </context>
  <context>
    <name>Calamares::NamedJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
      <source>Example job (%1)</source>
      <translation>Παράδειγμα εργασίας (%1)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ProcessJob</name>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="49"/>
      <source>Running command %1 in target system…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση εντολής %1 στο σύστημα προορισμού…</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="53"/>
      <source>Running command %1…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση εντολής %1…</translation>
    </message>
  </context>
  <context>
    <name>Calamares::Python::Job</name>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="219"/>
      <source>Running %1 operation.</source>
      <translation>Εκτέλεση λειτουργίας %1.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="234"/>
      <source>Bad working directory path</source>
      <translation>Εσφαλμένη διαδρομή καταλόγου εργασίας</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="235"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <translation>Ο κατάλογος εργασίας %1 για την εργασία Python %2 δεν είναι αναγνώσιμος.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="243"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="319"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="345"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="362"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="370"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="378"/>
      <source>Bad main script file</source>
      <translation>Εσφαλμένο κύριο αρχείο σεναρίου</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="244"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <translation>Το κύριο αρχείο σεναρίου %1 για την εργασία Python %2 δεν είναι αναγνώσιμο.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="305"/>
      <source>Bad internal script</source>
      <translation>Εσφαλμένο εσωτερικό σενάριο</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="306"/>
      <source>Internal script for python job %1 raised an exception.</source>
      <translation>Το εσωτερικό σενάριο για την εργασία Python %1 παρουσίασε εξαίρεση.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="320"/>
      <source>Main script file %1 for python job %2 could not be loaded because it raised an  exception.</source>
      <translation>Δεν ήταν δυνατή η φόρτωση του κύριου αρχείου σεναρίου %1 για την εργασία Python %2 επειδή παρουσίασε εξαίρεση.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="346"/>
      <source>Main script file %1 for python job %2 raised an exception.</source>
      <translation>Το κύριο αρχείο σεναρίου %1 για την εργασία Python %2 παρουσίασε εξαίρεση.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="363"/>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="371"/>
      <source>Main script file %1 for python job %2 returned invalid results.</source>
      <translation>Το κύριο αρχείο σεναρίου %1 για την εργασία Python %2 επέστρεψε μη έγκυρα αποτελέσματα.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/python/PythonJob.cpp" line="379"/>
      <source>Main script file %1 for python job %2 does not contain a run() function.</source>
      <translation>Το κύριο αρχείο σεναρίου %1 για την εργασία Python %2 δεν περιέχει συνάρτηση run().</translation>
    </message>
  </context>
  <context>
    <name>Calamares::PythonJob</name>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="238"/>
      <source>Running %1 operation…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση λειτουργίας %1…</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="266"/>
      <source>Bad working directory path</source>
      <comment>@error</comment>
      <translation>Εσφαλμένη διαδρομή καταλόγου εργασίας</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="267"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <comment>@error</comment>
      <translation>Ο κατάλογος εργασίας %1 για την εργασία Python %2 δεν είναι αναγνώσιμος.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="275"/>
      <source>Bad main script file</source>
      <comment>@error</comment>
      <translation>Εσφαλμένο κύριο αρχείο σεναρίου</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="276"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <comment>@error</comment>
      <translation>Το κύριο αρχείο σεναρίου %1 για την εργασία Python %2 δεν είναι αναγνώσιμο.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="348"/>
      <source>Boost.Python error in job "%1"</source>
      <comment>@error</comment>
      <translation>Σφάλμα Boost.Python στην εργασία «%1»</translation>
    </message>
  </context>
  <context>
    <name>Calamares::QmlViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="73"/>
      <source>Loading…</source>
      <comment>@status</comment>
      <translation>Φόρτωση…</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="100"/>
      <source>QML step &lt;i&gt;%1&lt;/i&gt;.</source>
      <comment>@label</comment>
      <translation>Βήμα &lt;i&gt;%1&lt;/i&gt; QML.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="286"/>
      <source>Loading failed.</source>
      <comment>@info</comment>
      <translation>Η φόρτωση απέτυχε.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::RequirementsChecker</name>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="100"/>
      <source>Requirements checking for module '%1' is complete.</source>
      <comment>@info</comment>
      <translation>Ο έλεγχος απαιτήσεων για το άρθρωμα «%1» έχει ολοκληρωθεί.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="124"/>
      <source>Waiting for %n module(s)…</source>
      <comment>@status</comment>
      <translation>
        <numerusform>Αναμονή για %n άρθρωμα…</numerusform>
        <numerusform>Αναμονή για %n αρθρώματα…</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="125"/>
      <source>(%n second(s))</source>
      <comment>@status</comment>
      <translation>
        <numerusform>(%n δευτερόλεπτο)</numerusform>
        <numerusform>(%n δευτερόλεπτα)</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="130"/>
      <source>System-requirements checking is complete.</source>
      <comment>@info</comment>
      <translation>Ο έλεγχος των απαιτήσεων συστήματος έχει ολοκληρωθεί.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ViewManager</name>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="165"/>
      <source>The upload was unsuccessful. No web-paste was done.</source>
      <translation>Η μεταφόρτωση ήταν ανεπιτυχής. Δεν έγινε επικόλληση στο διαδίκτυο.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="177"/>
      <source>Install log posted to

%1

Link copied to clipboard</source>
      <translation>Το αρχείο καταγραφής εγκατάστασης αναρτήθηκε στο:

%1

Ο σύνδεσμος αντιγράφηκε στο πρόχειρο</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="183"/>
      <source>Install Log Paste URL</source>
      <translation>URL για επικόλληση του αρχείου καταγραφής εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
      <source>&amp;Yes</source>
      <translation>&amp;Ναι</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
      <source>&amp;No</source>
      <translation>Ό&amp;χι</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
      <source>&amp;Close</source>
      <translation>&amp;Κλείσιμο</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="155"/>
      <source>Setup Failed</source>
      <comment>@title</comment>
      <translation>Αποτυχία εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
      <source>Installation Failed</source>
      <comment>@title</comment>
      <translation>Αποτυχία εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="159"/>
      <source>Error</source>
      <comment>@title</comment>
      <translation>Σφάλμα</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="188"/>
      <source>Calamares Initialization Failed</source>
      <comment>@title</comment>
      <translation>Αποτυχία αρχικοποίησης του Calamares</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
      <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
      <comment>@info</comment>
      <translation>Δεν είναι δυνατή η εγκατάσταση του %1. Το Calamares δεν μπόρεσε να φορτώσει όλα τα διαμορφωμένα αρθρώματα. Αυτό το πρόβλημα οφείλεται στον τρόπο χρήσης του Calamares από τη διανομή.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="196"/>
      <source>&lt;br/&gt;The following modules could not be loaded:</source>
      <comment>@info</comment>
      <translation>&lt;br/&gt;Δεν ήταν δυνατή η φόρτωση των εξής αρθρωμάτων:</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="336"/>
      <source>Continue with Setup?</source>
      <comment>@title</comment>
      <translation>Συνέχεια με την εγκατάσταση;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="337"/>
      <source>Continue with Installation?</source>
      <comment>@title</comment>
      <translation>Συνέχεια με την εγκατάσταση;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="339"/>
      <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <comment>%1 is short product name, %2 is short product name with version</comment>
      <translation>Το πρόγραμμα εγκατάστασης %1 πρόκειται να κάνει αλλαγές στον δίσκο για την εγκατάσταση του %2.&lt;br/&gt;&lt;strong&gt;Δεν θα είναι δυνατή η αναίρεση αυτών των αλλαγών.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="343"/>
      <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <comment>%1 is short product name, %2 is short product name with version</comment>
      <translation>Το πρόγραμμα εγκατάστασης %1 πρόκειται να κάνει αλλαγές στον δίσκο για την εγκατάσταση του %2.&lt;br/&gt;&lt;strong&gt;Δεν θα είναι δυνατή η αναίρεση αυτών των αλλαγών.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
      <source>&amp;Set Up Now</source>
      <comment>@button</comment>
      <translation>Ε&amp;γκατάσταση τώρα</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
      <source>&amp;Install Now</source>
      <comment>@button</comment>
      <translation>Ε&amp;γκατάσταση τώρα</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="355"/>
      <source>Go &amp;Back</source>
      <comment>@button</comment>
      <translation>Επιστρο&amp;φή</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="402"/>
      <source>&amp;Set Up</source>
      <comment>@button</comment>
      <translation>Ε&amp;γκατάσταση</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="402"/>
      <source>&amp;Install</source>
      <comment>@button</comment>
      <translation>Ε&amp;γκατάσταση</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="404"/>
      <source>Setup is complete. Close the setup program.</source>
      <comment>@tooltip</comment>
      <translation>Η εγκατάσταση ολοκληρώθηκε. Κλείστε το πρόγραμμα εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="405"/>
      <source>The installation is complete. Close the installer.</source>
      <comment>@tooltip</comment>
      <translation>Η εγκτάσταση ολοκληρώθηκε. Κλείστε το πρόγραμμα εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="407"/>
      <source>Cancel the setup process without changing the system.</source>
      <comment>@tooltip</comment>
      <translation>Ακύρωση της διαδικασίας εγκατάστασης χωρίς αλλαγή του συστήματος.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="408"/>
      <source>Cancel the installation process without changing the system.</source>
      <comment>@tooltip</comment>
      <translation>Ακύρωση της διαδικασίας εγκατάστασης χωρίς αλλαγή του συστήματος.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="418"/>
      <source>&amp;Next</source>
      <comment>@button</comment>
      <translation>&amp;Επόμενο</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="423"/>
      <source>&amp;Back</source>
      <comment>@button</comment>
      <translation>&amp;Προηγούμενο</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="429"/>
      <source>&amp;Done</source>
      <comment>@button</comment>
      <translation>&amp;Τέλος</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="448"/>
      <source>&amp;Cancel</source>
      <comment>@button</comment>
      <translation>&amp;Ακύρωση</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="524"/>
      <source>Cancel Setup?</source>
      <comment>@title</comment>
      <translation>Ακύρωση εγκατάστασης;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="524"/>
      <source>Cancel Installation?</source>
      <comment>@title</comment>
      <translation>Ακύρωση εγκατάστασης;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="525"/>
      <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
      <translation>Θέλετε σίγουρα να ακυρώσετε την τρέχουσα διαδικασία εγκατάστασης;
Το πρόγραμμα εγκατάστασης θα τερματιστεί και όλες οι αλλαγές θα χαθούν.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="527"/>
      <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
      <translation>Θέλετε σίγουρα να ακυρώσετε την τρέχουσα διαδικασία εγκατάστασης;
Το πρόγραμμα εγκατάστασης θα τερματιστεί και όλες οι αλλαγές θα χαθούν.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresPython::Helper</name>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="309"/>
      <source>Unknown exception type</source>
      <comment>@error</comment>
      <translation>Άγνωστος τύπος εξαίρεσης</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="327"/>
      <source>Unparseable Python error</source>
      <comment>@error</comment>
      <translation>Μη αναλύσιμο σφάλμα Python</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="371"/>
      <source>Unparseable Python traceback</source>
      <comment>@error</comment>
      <translation>Μη αναλύσιμη ιχνηλάτηση Python</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="378"/>
      <source>Unfetchable Python error</source>
      <comment>@error</comment>
      <translation>Μη ανακτήσιμο σφάλμα Python</translation>
    </message>
  </context>
  <context>
    <name>CalamaresWindow</name>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="405"/>
      <source>%1 Setup Program</source>
      <translation>Πρόγραμμα εγκατάστασης %1</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="406"/>
      <source>%1 Installer</source>
      <translation>Πρόγραμμα εγκατάστασης %1</translation>
    </message>
  </context>
  <context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="34"/>
      <source>Set filesystem label on %1</source>
      <comment>@title</comment>
      <translation>Ορισμός ετικέτας συστήματος αρχείων στο %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="41"/>
      <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Ορισμός ετικέτας συστήματος αρχείων &lt;strong&gt;%1&lt;/strong&gt; στο διαμέρισμα &lt;strong&gt;%2&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="50"/>
      <source>Setting filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Ορισμός ετικέτας συστήματος αρχείων &lt;strong&gt;%1&lt;/strong&gt; στο διαμέρισμα &lt;strong&gt;%2&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="72"/>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="84"/>
      <source>The installer failed to update partition table on disk '%1'.</source>
      <comment>@info</comment>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να ενημερώσει τον πίνακα διαμερισμάτων στον δίσκο «%1».</translation>
    </message>
  </context>
  <context>
    <name>CheckerContainer</name>
    <message>
      <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
      <source>Gathering system information...</source>
      <translation>Συλλογή πληροφοριών συστήματος...</translation>
    </message>
  </context>
  <context>
    <name>ChoicePage</name>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="137"/>
      <source>Select storage de&amp;vice:</source>
      <comment>@label</comment>
      <translation>Επιλογή σ&amp;υσκευής αποθήκευσης:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1040"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1100"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1153"/>
      <source>Current:</source>
      <comment>@label</comment>
      <translation>Τώρα:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
      <source>After:</source>
      <comment>@label</comment>
      <translation>Μετά:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="897"/>
      <source>Reuse %1 as home partition for %2</source>
      <comment>@label</comment>
      <translation>Επαναχρησιμοποίηση %1 ως διαμερίσματος προσωπικού καταλόγου για το %2</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1041"/>
      <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
      <translation>&lt;strong&gt;Επιλέξτε ένα διαμέρισμα για συρρίκνωση και σύρετε την κάτω μπάρα για αλλαγή του μεγέθους&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1065"/>
      <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
      <comment>@info, %1 is partition name, %4 is product name</comment>
      <translation>Το %1 θα συρρικνωθεί σε %2MiB και θα δημιουργηθεί ένα νέο διαμέρισμα μεγέθους %3MiB για το %4.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1144"/>
      <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Επιλέξτε διαμέρισμα για την εγκατάσταση&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1204"/>
      <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <comment>@info, %1 is product name</comment>
      <translation>Δεν βρέθηκε διαμέρισμα συστήματος EFI σε αυτό το σύστημα. Επιστρέψτε και χρησιμοποιήστε τη χειροκίνητη διαμέριση για να ρυθμίσετε το %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1213"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <comment>@info, %1 is partition path, %2 is product name</comment>
      <translation>Το διαμέρισμα συστήματος EFI στο %1 θα χρησιμοποιείται για την εκκίνηση του %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1222"/>
      <source>EFI system partition:</source>
      <comment>@label</comment>
      <translation>Διαμέρισμα συστήματος EFI:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1712"/>
      <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Αυτή η συσκευή αποθήκευσης δεν φαίνεται να διαθέτει κάποιο λειτουργικό σύστημα. Τι θέλετε να κάνετε;&lt;br/&gt;Θα έχετε τη δυνατότητα να ελέγξετε και να επιβεβαιώσετε τις επιλογές σας πριν πραγματοποιηθεί οποιαδήποτε στη συσκευή αποθήκευσης.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1717"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1744"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1764"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1786"/>
      <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color="red"&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
      <translation>&lt;strong&gt;Διαγραφή δίσκου&lt;/strong&gt;&lt;br/&gt;Αυτή η ενέργεια θα &lt;font color="red"&gt;διαγράψει&lt;/font&gt; όλα τα υπάρχοντα δεδομένα στην επιλεγμένη συσκευή αποθήκευσης.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1721"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1740"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1760"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1782"/>
      <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
      <translation>&lt;strong&gt;Παράλληλη εγκατάσταση&lt;/strong&gt;&lt;br/&gt;Το πρόγραμμα εγκατάστασης θα συρρικνώσει ένα διαμέρισμα για να δημιουργήσει χώρο για το %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1725"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1748"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1768"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1790"/>
      <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
      <translation>&lt;strong&gt;Αντικατάσταση διαμερίσματος&lt;/strong&gt;&lt;br/&gt;Αυτή η ενέργεια αντικαθιστά ένα διαμέρισμα με το %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1734"/>
      <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Αυτή η συσκευή αποθήκευσης διαθέτει το λειτουργικό σύστημα %1. Τι θέλετε να κάνετε;&lt;br/&gt;Θα έχετε τη δυνατότητα να ελέγξετε και να επιβεβαιώσετε τις επιλογές σας πριν πραγματοποιηθεί οποιαδήποτε στη συσκευή αποθήκευσης.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1755"/>
      <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Αυτή η συσκευή αποθήκευσης διαθέτει ήδη ένα λειτουργικό σύστημα. Τι θέλετε να κάνετε;&lt;br/&gt;Θα έχετε τη δυνατότητα να ελέγξετε και να επιβεβαιώσετε τις επιλογές σας πριν πραγματοποιηθεί οποιαδήποτε στη συσκευή αποθήκευσης.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1777"/>
      <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Αυτή η συσκευή αποθήκευσης διαθέτει πολλαπλά λειτουργικά συστήματα. Τι θέλετε να κάνετε;&lt;br/&gt;Θα έχετε τη δυνατότητα να ελέγξετε και να επιβεβαιώσετε τις επιλογές σας πριν πραγματοποιηθεί οποιαδήποτε στη συσκευή αποθήκευσης.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1423"/>
      <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
      <translation>Αυτή η συσκευή αποθήκευσης διαθέτει ήδη ένα λειτουργικό σύστημα, αλλά ο πίνακας διαμερισμάτων&lt;strong&gt;%1&lt;/strong&gt; διαφέρει από τον απαιτούμενο τύπο &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1447"/>
      <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>Ένα από τα διαμερίσματα αυτής της συσκευής έχει &lt;strong&gt;προσαρτηθεί&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1452"/>
      <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
      <comment>@info</comment>
      <translation>Αυτή η συσκευή αποθήκευσης αποτελεί μέρος μιας &lt;strong&gt;ανενεργής συσκευής RAID&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1570"/>
      <source>No swap</source>
      <comment>@label</comment>
      <translation>Χωρίς swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1579"/>
      <source>Reuse swap</source>
      <comment>@label</comment>
      <translation>Επαναχρησιμοποίηση swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1582"/>
      <source>Swap (no Hibernate)</source>
      <comment>@label</comment>
      <translation>Swap (χωρίς αδρανοποίηση)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1585"/>
      <source>Swap (with Hibernate)</source>
      <comment>@label</comment>
      <translation>Swap (με αδρανοποίηση)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1588"/>
      <source>Swap to file</source>
      <comment>@label</comment>
      <translation>Swap σε αρχείο</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1601"/>
      <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
      <translation>&lt;strong&gt;Χειροκίνητη διαμέριση&lt;/strong&gt;&lt;br/&gt;Μπορείτε να δημιουργήσετε διαμερίσματα ή να αλλάξετε τα μεγέθη τους μόνοι σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1629"/>
      <source>Bootloader location:</source>
      <comment>@label</comment>
      <translation>Θέση φορτωτή εκκίνησης:</translation>
    </message>
  </context>
  <context>
    <name>ClearMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="267"/>
      <source>Successfully unmounted %1.</source>
      <translation>Το %1 αποπροσαρτήθηκε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="274"/>
      <source>Successfully disabled swap %1.</source>
      <translation>Η swap %1 απενεργοποιήθηκε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="300"/>
      <source>Successfully cleared swap %1.</source>
      <translation>Η swap %1 απαλείφθηκε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="314"/>
      <source>Successfully closed mapper device %1.</source>
      <translation>Η συσκευή αντιστοίχισης %1 έκλεισε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="327"/>
      <source>Successfully disabled volume group %1.</source>
      <translation>Η ομάδα τόμων %1 απενεργοποιήθηκε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="366"/>
      <source>Clear mounts for partitioning operations on %1</source>
      <comment>@title</comment>
      <translation>Απαλοιφή προσαρτήσεων για λειτουργίες διαμέρισης στο %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="372"/>
      <source>Clearing mounts for partitioning operations on %1…</source>
      <comment>@status</comment>
      <translation>Απαλοιφή προσαρτήσεων για λειτουργίες διαμέρισης στο %1…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="391"/>
      <source>Cleared all mounts for %1</source>
      <translation>Απαλείφθηκαν όλες οι προσαρτήσεις για το %1</translation>
    </message>
  </context>
  <context>
    <name>ClearTempMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
      <source>Clearing all temporary mounts…</source>
      <comment>@status</comment>
      <translation>Απαλοιφή όλων των προσωρινών προσαρτήσεων…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
      <source>Cleared all temporary mounts.</source>
      <translation>Απαλείφθηκαν όλες οι προσωρινές προσαρτήσεις.</translation>
    </message>
  </context>
  <context>
    <name>CommandList</name>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="235"/>
      <source>Could not run command.</source>
      <translation>Δεν ήταν δυνατή η εκτέλεση της εντολής.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="236"/>
      <source>The commands use variables that are not defined. Missing variables are: %1.</source>
      <translation>Οι εντολές χρησιμοποιούν μεταβλητές που δεν έχουν οριστεί. Απουσιάζουν οι εξής μεταβλητές: %1.</translation>
    </message>
  </context>
  <context>
    <name>Config</name>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="142"/>
      <source>Setup Failed</source>
      <comment>@title</comment>
      <translation>Αποτυχία εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="143"/>
      <source>Installation Failed</source>
      <comment>@title</comment>
      <translation>Αποτυχία εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="145"/>
      <source>The setup of %1 did not complete successfully.</source>
      <comment>@info</comment>
      <translation>Η εγκατάσταση του %1 δεν ολοκληρώθηκε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="146"/>
      <source>The installation of %1 did not complete successfully.</source>
      <comment>@info</comment>
      <translation>Η εγκατάσταση του %1 δεν ολοκληρώθηκε επιτυχώς.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="150"/>
      <source>Setup Complete</source>
      <comment>@title</comment>
      <translation>Η εγκατάσταση ολοκληρώθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="151"/>
      <source>Installation Complete</source>
      <comment>@title</comment>
      <translation>Η εγκατάσταση ολοκληρώθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="153"/>
      <source>The setup of %1 is complete.</source>
      <comment>@info</comment>
      <translation>Η εγκατάσταση του %1 ολοκληρώθηκε.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="154"/>
      <source>The installation of %1 is complete.</source>
      <comment>@info</comment>
      <translation>Η εγκατάσταση του %1 ολοκληρώθηκε.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="583"/>
      <source>Keyboard model has been set to %1.</source>
      <comment>@label, %1 is keyboard model, as in Apple Magic Keyboard</comment>
      <translation>Το μοντέλο πληκτρολογίου έχει οριστεί σε %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="591"/>
      <source>Keyboard layout has been set to %1/%2.</source>
      <comment>@label, %1 is layout, %2 is layout variant</comment>
      <translation>Η διάταξη πληκτρολογίου έχει οριστεί σε %1/%2.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="381"/>
      <source>Set timezone to %1.</source>
      <comment>@action</comment>
      <translation>Ορισμός της ζώνης ώρας σε: %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="418"/>
      <source>The system language will be set to %1.</source>
      <comment>@info</comment>
      <translation>Η γλώσσα του συστήματος θα οριστεί σε: %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="425"/>
      <source>The numbers and dates locale will be set to %1.</source>
      <comment>@info</comment>
      <translation>Οι τοπικές ρυθμίσεις αριθμών και ημερομηνιών θα οριστούν σε: %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="53"/>
      <source>Network Installation. (Disabled: Incorrect configuration)</source>
      <translation>Εγκατάσταση δικτύου. (Απενεργοποιημένη: Εσφαλμένη διαμόρφωση)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="55"/>
      <source>Network Installation. (Disabled: Received invalid groups data)</source>
      <translation>Εγκατάσταση δικτύου. (Απενεργοποιημένη: Ελήφθησαν μη έγκυρα δεδομένα ομάδων)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="57"/>
      <source>Network Installation. (Disabled: Internal error)</source>
      <translation>Εγκατάσταση δικτύου. (Απενεργοποιημένη: Εσωτερικό σφαλμα)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="59"/>
      <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
      <translation>Εγκατάσταση δικτύου. (Απενεργοποιημένη: Δεν είναι δυνατή η ανάκτηση λιστών πακέτων, ελέγξτε τη σύνδεση δικτύου σας)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="61"/>
      <source>Network Installation. (Disabled: No package list)</source>
      <translation>Εγκατάσταση δικτύου. (Απενεργοποιημένη: Δεν υπάρχει λίστα πακέτων)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="76"/>
      <source>Package selection</source>
      <translation>Επιλογή πακέτων</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="110"/>
      <source>Package Selection</source>
      <translation>Επιλογή πακέτων</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="112"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation>Επιλέξτε ένα προϊόν από τη λίστα. Το επιλεγμένο προϊόν θα εγκατασταθεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="241"/>
      <source>Packages</source>
      <translation>Πακέτα</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="247"/>
      <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
      <translation>Επιλογή εγκατάστασης: &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="247"/>
      <source>None</source>
      <translation>Κανένα</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="35"/>
      <source>Summary</source>
      <comment>@label</comment>
      <translation>Σύνοψη</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="39"/>
      <source>This is an overview of what will happen once you start the setup procedure.</source>
      <translation>Ακολουθεί μια επισκόπηση των ενεργειών που θα εκτελεστούν μόλις ξεκινήσετε τη διαδικασία εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="44"/>
      <source>This is an overview of what will happen once you start the install procedure.</source>
      <translation>Ακολουθεί μια επισκόπηση των ενεργειών που θα εκτελεστούν μόλις ξεκινήσετε τη διαδικασία εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="237"/>
      <source>Your username is too long.</source>
      <translation>Το όνομα χρήστη είναι πολύ μεγάλο.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="243"/>
      <source>Your username must start with a lowercase letter or underscore.</source>
      <translation>Το όνομα χρήστη πρέπει να ξεκινά με πεζό γράμμα ή κάτω παύλα.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="247"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Επιτρέπονται μόνο πεζά γράμματα, αριθμοί, κάτω παύλα και παύλα.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="253"/>
      <source>'%1' is not allowed as username.</source>
      <translation>Το «%1» δεν επιτρέπεται ως όνομα χρήστη.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="302"/>
      <source>Your hostname is too short.</source>
      <translation>Το όνομα υπολογιστή είναι πολύ μικρό.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="306"/>
      <source>Your hostname is too long.</source>
      <translation>Το όνομα υπολογιστή είναι πολύ μεγάλο.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="312"/>
      <source>'%1' is not allowed as hostname.</source>
      <translation>Το «%1» δεν επιτρέπεται ως όνομα υπολογιστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="317"/>
      <source>Only letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Επιτρέπονται μόνο γράμματα, αριθμοί, κάτω παύλα και παύλα.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="598"/>
      <source>Your passwords do not match!</source>
      <translation>Οι κωδικοί πρόσβασης δεν ταιριάζουν!</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="612"/>
      <source>OK!</source>
      <translation>OK!</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="57"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue.</source>
      <translation>Αυτός ο υπολογιστής δεν πληροί τις ελάχιστες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;Η εγκατάσταση δεν μπορεί να συνεχιστεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="60"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue.</source>
      <translation>Αυτός ο υπολογιστής δεν πληροί τις ελάχιστες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;Η εγκατάσταση δεν μπορεί να συνεχιστεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="66"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation>Αυτός ο υπολογιστής δεν πληροί ορισμένες από τις προτεινόμενες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;Η εγκατάσταση μπορεί να συνεχιστεί, αλλά ορισμένες λειτουργίες ενδέχεται να απενεργοποιηθούν.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="70"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation>Αυτός ο υπολογιστής δεν πληροί ορισμένες από τις προτεινόμενες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;Η εγκατάσταση μπορεί να συνεχιστεί, αλλά ορισμένες λειτουργίες ενδέχεται να απενεργοποιηθούν.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="80"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation>Αυτό το πρόγραμμα θα σας κάνει μερικές ερωτήσεις και θα εγκαταστήσει το %2 στον υπολογιστή σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="264"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Καλώς ορίσατε στο Calamares, το πρόγραμμα εγκατάστασης του %1&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="265"/>
      <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Καλώς ορίσατε στην εγκατάσταση του %1&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="269"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Καλώς ορίσατε στο Calamares, το πρόγραμμα εγκατάστασης του %1&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="270"/>
      <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Καλώς ορίσατε στο πρόγραμμα εγκατάστασης του %1&lt;/h1&gt;</translation>
    </message>
  </context>
  <context>
    <name>ContextualProcessJob</name>
    <message>
      <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="88"/>
      <source>Performing contextual processes' job…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση εργασίας σχετικών διεργασιών…</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
      <source>Create a Partition</source>
      <translation>Δημιουργία διαμερίσματος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
      <source>Si&amp;ze:</source>
      <translation>&amp;Μέγεθος:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
      <source>Partition &amp;Type:</source>
      <translation>Τύ&amp;πος διαμερίσματος:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
      <source>Primar&amp;y</source>
      <translation>Πρ&amp;ωτεύον</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
      <source>E&amp;xtended</source>
      <translation>Ε&amp;κτεταμένο</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
      <source>Fi&amp;le System:</source>
      <translation>Σύστημα αρχ&amp;είων:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
      <source>LVM LV name</source>
      <translation>Όνομα λογικού τόμου LVM</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
      <source>&amp;Mount Point:</source>
      <translation>Σημείο π&amp;ροσάρτησης:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
      <source>Flags:</source>
      <translation>Σημαίες:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="224"/>
      <source>Label for the filesystem</source>
      <translation>Ετικέτα για το σύστημα αρχείων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="234"/>
      <source>FS Label:</source>
      <translation>Ετικέτα συστήματος αρχείων:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="67"/>
      <source>En&amp;crypt</source>
      <comment>@action</comment>
      <translation>&amp;Κρυπτογράφηση</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="195"/>
      <source>Logical</source>
      <comment>@label</comment>
      <translation>Λογικό</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="200"/>
      <source>Primary</source>
      <comment>@label</comment>
      <translation>Πρωτεύον</translation>
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
      <translation>Το σημείο προσάρτησης χρησιμοποιείται ήδη. Επιλέξτε ένα άλλο.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="96"/>
      <source>Mountpoint must start with a &lt;tt&gt;/&lt;/tt&gt;.</source>
      <comment>@info</comment>
      <translation>Το σημείο προσάρτησης πρέπει να ξεκινά με &lt;tt&gt;/&lt;/tt&gt;.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="181"/>
      <source>Create new %1MiB partition on %3 (%2) with entries %4</source>
      <comment>@title</comment>
      <translation>Δημιουργία νέου διαμερίσματος μεγέθους %1MiB στο %3 (%2) με καταχωρήσεις %4</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
      <source>Create new %1MiB partition on %3 (%2)</source>
      <comment>@title</comment>
      <translation>Δημιουργία νέου διαμερίσματος μεγέθους %1MiB στο %3 (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="196"/>
      <source>Create new %2MiB partition on %4 (%3) with file system %1</source>
      <comment>@title</comment>
      <translation>Δημιουργία νέου διαμερίσματος μεγέθους %2MiB στο %4 (%3) με σύστημα αρχείων %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="212"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Δημιουργία νέου διαμερίσματος μεγέθους &lt;strong&gt;%1MiB&lt;/strong&gt; στο &lt;strong&gt;%3&lt;/strong&gt; (%2) με καταχωρήσεις &lt;em&gt;%4&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="222"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2)</source>
      <comment>@info</comment>
      <translation>Δημιουργία νέου διαμερίσματος μεγέθους &lt;strong&gt;%1MiB&lt;/strong&gt; στο &lt;strong&gt;%3&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="229"/>
      <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Δημιουργία νέου διαμερίσματος μεγέθους &lt;strong&gt;%2MiB&lt;/strong&gt; στο &lt;strong&gt;%4&lt;/strong&gt; (%3) με σύστημα αρχείων &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="254"/>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="257"/>
      <source>Creating new %1 partition on %2…</source>
      <comment>@status</comment>
      <translation>Δημιουργία νέου διαμερίσματος %1 στο %2…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="274"/>
      <source>The installer failed to create partition on disk '%1'.</source>
      <comment>@info</comment>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να δημιουργήσει διαμέρισμα στον δίσκο «%1».</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
      <source>Create Partition Table</source>
      <translation>Δημιουργία πίνακα διαμερισμάτων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
      <source>Creating a new partition table will delete all existing data on the disk.</source>
      <translation>Η δημιουργία ενός νέου πίνακα διαμερισμάτων θα διαγράψει όλα τα υπάρχοντα δεδομένα στον δίσκο.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
      <source>What kind of partition table do you want to create?</source>
      <translation>Τι είδους πίνακα διαμερισμάτων θέλετε να δημιουργήσετε;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
      <source>Master Boot Record (MBR)</source>
      <translation>Κύρια εγγραφή εκκίνησης (MBR)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
      <source>GUID Partition Table (GPT)</source>
      <translation>Πίνακας διαμερισμάτων GUID (GPT)</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="58"/>
      <source>Creating new %1 partition table on %2…</source>
      <comment>@status</comment>
      <translation>Δημιουργία νέου πίνακα διαμερισμάτων %1 στο %2…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
      <source>Creating new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3)…</source>
      <comment>@status</comment>
      <translation>Δημιουργία νέου πίνακα διαμερισμάτων &lt;strong&gt;%1&lt;/strong&gt; στο &lt;strong&gt;%2&lt;/strong&gt; (%3)…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="86"/>
      <source>The installer failed to create a partition table on %1.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να δημιουργήσει έναν πίνακα διαμερισμάτων στο %1.</translation>
    </message>
  </context>
  <context>
    <name>CreateUserJob</name>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="33"/>
      <source>Create user %1</source>
      <translation>Δημιουργία χρήστη %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="39"/>
      <source>Create user &lt;strong&gt;%1&lt;/strong&gt;</source>
      <translation>Δημιουργία χρήστη &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="45"/>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="143"/>
      <source>Creating user %1…</source>
      <comment>@status</comment>
      <translation>Δημιουργία χρήστη %1…</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="126"/>
      <source>Preserving home directory…</source>
      <comment>@status</comment>
      <translation>Διατήρηση προσωπικού καταλόγου…</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="152"/>
      <source>Configuring user %1</source>
      <comment>@status</comment>
      <translation>Ρύθμιση χρήστη %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="160"/>
      <source>Setting file permissions…</source>
      <comment>@status</comment>
      <translation>Ορισμός δικαιωμάτων αρχείων…</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
      <source>Create Volume Group</source>
      <comment>@title</comment>
      <translation>Δημιουργία ομάδας τόμων</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
      <source>Creating new volume group named %1…</source>
      <comment>@status</comment>
      <translation>Δημιουργία νέας ομάδας τόμων με το όνομα «%1»…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
      <source>Creating new volume group named &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Δημιουργία νέας ομάδας τόμων με το όνομα &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
      <source>The installer failed to create a volume group named '%1'.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να δημιουργήσει μια ομάδα τόμων με το όνομα «%1».</translation>
    </message>
  </context>
  <context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
      <source>Deactivating volume group named %1…</source>
      <comment>@status</comment>
      <translation>Απενεργοποίηση ομάδας τόμων με το όνομα «%1»…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
      <source>Deactivating volume group named &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Απενεργοποίηση ομάδας τόμων με το όνομα &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
      <source>The installer failed to deactivate a volume group named %1.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να απενεργοποιήσει μια ομάδα τόμων με το όνομα «%1».</translation>
    </message>
  </context>
  <context>
    <name>DeletePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
      <source>Deleting partition %1…</source>
      <comment>@status</comment>
      <translation>Διαγραφή διαμερίσματος %1…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="79"/>
      <source>Deleting partition &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Διαγραφή διαμερίσματος &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="99"/>
      <source>The installer failed to delete partition %1.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να διαγράψει το διαμέρισμα %1.</translation>
    </message>
  </context>
  <context>
    <name>DeviceInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="78"/>
      <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
      <translation>&lt;br&gt;&lt;br&gt;Αυτός ο τύπος πίνακα διαμερισμάτων συνιστάται μόνο σε παλαιότερα συστήματα που εκκινούν από περιβάλλον εκκίνησης &lt;strong&gt;BIOS&lt;/strong&gt;. Το GPT προτείνεται στις περισσότερες άλλες περιπτώσεις.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Προειδοποίηση:&lt;/strong&gt; ο πίνακας διαμερισμάτων MBR είναι ένα παρωχημένο πρότυπο από την εποχή του MS-DOS.&lt;br&gt;Μπορείτε να δημιουργήσετε μόνο 4 &lt;em&gt;πρωτεύοντα&lt;/em&gt; διαμερίσματα και από αυτά τα 4, το ένα μπορεί να είναι &lt;em&gt;εκτεταμένο&lt;/em&gt;, το οποίο με τη σειρά του μπορεί να περιέχει πολλά &lt;em&gt;λογικά&lt;/em&gt; διαμερίσματα.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="89"/>
      <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
      <translation>&lt;br&gt;&lt;br&gt;Αυτός είναι ο προτεινόμενος τύπος πίνακα διαμερισμάτων για σύγχρονα συστήματα που εκκινούν από περιβάλλον εκκίνησης &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="95"/>
      <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
      <translation>Αυτή είναι μια συσκευή &lt;strong&gt;βρόχου&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Είναι μια ψευδοσυσκευή χωρίς πίνακα διαμερισμάτων που κάνει ένα αρχείο προσβάσιμο ως συσκευή μπλοκ. Αυτό το είδος εγκατάστασης συνήθως περιέχει μόνο ένα σύστημα αρχείων.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
      <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
      <translation>Το πρόγραμμα εγκατάστασης &lt;strong&gt;δεν μπορεί να εντοπίσει κάποιο πίνακα διαμερισμάτων&lt;/strong&gt; στην επιλεγμένη συσκευή αποθήκευσης.&lt;br&gt;&lt;br&gt;Η συσκευή είτε δεν διαθέτει πίνακα διαμερισμάτων είτε αυτός είναι κατεστραμμένος ή αγνώστου τύπου.&lt;br&gt;Το πρόγραμμα εγκατάστασης μπορεί να δημιουργήσει έναν νέο πίνακα διαμερισμάτων, είτε αυτόματα είτε μέσω της σελίδας χειροκίνητης διαμέρισης.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="139"/>
      <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
      <translation>Αυτή η συσκευή διαθέτει πίνακα διαμερισμάτων &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="147"/>
      <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
      <translation>Ο τύπος του &lt;strong&gt;πίνακα διαμερισμάτων&lt;/strong&gt; στην επιλεγμένη συσκευή αποθήκευσης.&lt;br&gt;&lt;br&gt;Ο μόνος τρόπος για να αλλάξετε τον τύπο του πίνακα διαμερισμάτων είναι να διαγράψετε και να δημιουργήσετε τον πίνακα διαμερισμάτων από την αρχή, κάτι που καταστρέφει όλα τα δεδομένα στη συσκευή αποθήκευσης.&lt;br&gt;Το πρόγραμμα εγκατάστασης θα διατηρήσει τον τρέχοντα πίνακα διαμερισμάτων, εκτός εάν επιλέξετε ρητά το αντίθετο.&lt;br&gt;Εάν δεν είστε σίγουροι, στα σύγχρονα συστήματα προτιμάται το GPT.</translation>
    </message>
  </context>
  <context>
    <name>DeviceModel</name>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="82"/>
      <source>%1 - %2 (%3)</source>
      <extracomment>device[name] - size[number] (device-node[name])</extracomment>
      <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="93"/>
      <source>%1 - (%2)</source>
      <extracomment>device[name] - (device-node[name])</extracomment>
      <translation>%1 - (%2)</translation>
    </message>
  </context>
  <context>
    <name>DracutLuksCfgJob</name>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="117"/>
      <source>Writing LUKS configuration for Dracut to %1…</source>
      <comment>@status</comment>
      <translation>Εγγραφή διαμόρφωσης LUKS για το Dracut στο %1…</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="121"/>
      <source>Skipping writing LUKS configuration for Dracut: "/" partition is not encrypted</source>
      <comment>@info</comment>
      <translation>Παράλειψη εγγραφής της διαμόρφωσης LUKS για το Dracut: το διαμέρισμα «/» δεν είναι κρυπτογραφημένο</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="138"/>
      <source>Failed to open %1</source>
      <comment>@error</comment>
      <translation>Αποτυχία ανοίγματος του %1</translation>
    </message>
  </context>
  <context>
    <name>DummyCppJob</name>
    <message>
      <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="35"/>
      <source>Performing dummy C++ job…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση εικονικής εργασίας C++…</translation>
    </message>
  </context>
  <context>
    <name>EditExistingPartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
      <source>Edit Existing Partition</source>
      <translation>Επεξεργασία υπάρχοντος διαμερίσματος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
      <source>Con&amp;tent:</source>
      <translation>Περιε&amp;χόμενο:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
      <source>&amp;Keep</source>
      <translation>Δ&amp;ιατήρηση</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
      <source>Format</source>
      <translation>Διαμόρφωση</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
      <source>Warning: Formatting the partition will erase all existing data.</source>
      <translation>Προειδοποίηση: Η διαμόρφωση του διαμερίσματος θα διαγράψει όλα τα υπάρχοντα δεδομένα.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
      <source>&amp;Mount Point:</source>
      <translation>Σημείο π&amp;ροσάρτησης:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
      <source>Si&amp;ze:</source>
      <translation>&amp;Μέγεθος:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
      <source>Fi&amp;le System:</source>
      <translation>Σύστημα αρ&amp;χείων:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
      <source>Flags:</source>
      <translation>Σημαίες:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="179"/>
      <source>Label for the filesystem</source>
      <translation>Ετικέτα για το σύστημα αρχείων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="189"/>
      <source>FS Label:</source>
      <translation>Ετικέτα:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="280"/>
      <source>Passphrase for existing partition</source>
      <translation>Φράση πρόσβασης για υπάρχον διαμέρισμα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="281"/>
      <source>Partition %1 could not be decrypted with the given passphrase.&lt;br/&gt;&lt;br/&gt;Edit the partition again and give the correct passphrase or delete and create a new encrypted partition.</source>
      <translation>Δεν ήταν δυνατή η αποκρυπτογράφηση του διαμερίσματος %1 με αυτήν τη φράση πρόσβασης.&lt;br/&gt;&lt;br/&gt;Επεξεργαστείτε ξανά το διαμέρισμα και πληκτρολογήστε τη σωστή φράση πρόσβασης ή delete and create a new encrypted partition.</translation>
    </message>
  </context>
  <context>
    <name>EncryptWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
      <source>En&amp;crypt system</source>
      <translation>&amp;Κρυπτογράφηση συστήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
      <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
      <translation>Το σύστημά σας δεν φαίνεται να υποστηρίζει την κρυπτογράφηση επαρκώς ώστε να κρυπτογραφηθεί ολόκληρο. Μπορείτε να ενεργοποιήσετε την κρυπτογράφηση, αλλά η απόδοση ενδέχεται να επηρεαστεί αρνητικά.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
      <source>Passphrase</source>
      <translation>Φράση πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
      <source>Confirm passphrase</source>
      <translation>Επιβεβαίωση φράσης πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="165"/>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="181"/>
      <source>Please enter the same passphrase in both boxes.</source>
      <comment>@tooltip</comment>
      <translation>Εισαγάγετε την ίδια φράση πρόσβασης και στα δύο πλαίσια.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="171"/>
      <source>Password must be a minimum of %1 characters.</source>
      <comment>@tooltip</comment>
      <translation>Ο κωδικός πρόσβασης πρέπει να αποτελείται από τουλάχιστον %1 χαρακτήρες.</translation>
    </message>
  </context>
  <context>
    <name>ErrorDialog</name>
    <message>
      <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="40"/>
      <source>Details:</source>
      <translation>Λεπτομέρειες:</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="56"/>
      <source>Would you like to paste the install log to the web?</source>
      <translation>Θέλετε να επικολλήσετε το αρχείο καταγραφής της εγκατάστασης στο διαδίκτυο;</translation>
    </message>
  </context>
  <context>
    <name>FSArchiverRunner</name>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="47"/>
      <source>Missing tools</source>
      <translation>Απουσία εργαλείων</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="48"/>
      <source>The &lt;i&gt;%1&lt;/i&gt; tool is not installed on the system.</source>
      <translation>Το εργαλείο &lt;i&gt;%1&lt;/i&gt; δεν είναι εγκατεστημένο στο σύστημα.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="55"/>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="69"/>
      <source>Invalid fsarchiver configuration</source>
      <translation>Μη έγκυρη διαμόρφωση fsarchiver</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="56"/>
      <source>The source archive &lt;i&gt;%1&lt;/i&gt; does not exist.</source>
      <translation>Το αρχείο προέλευσης &lt;i&gt;%1&lt;/i&gt; δεν υπάρχει.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/FSArchiverRunner.cpp" line="70"/>
      <source>No destination could be found for &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Δεν ήταν δυνατή η εύρεση προορισμού για το &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
  </context>
  <context>
    <name>FillGlobalStorageJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="179"/>
      <source>Set partition information</source>
      <comment>@title</comment>
      <translation>Ορισμός πληροφοριών διαμερίσματος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="208"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Εγκατάσταση του %1 στο &lt;strong&gt;νέο&lt;/strong&gt; διαμέρισμα συστήματος %2 με δυνατότητες &lt;em&gt;%3&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="217"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition</source>
      <comment>@info</comment>
      <translation>Εγκατάσταση του %1 στο &lt;strong&gt;νέο&lt;/strong&gt; διαμέρισμα συστήματος %2</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="226"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Δημιουργία &lt;strong&gt;νέου&lt;/strong&gt; διαμερίσματος %2 με σημείο προσάρτησης &lt;strong&gt;%1&lt;/strong&gt; και δυνατότητες &lt;em&gt;%3&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="235"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3</source>
      <comment>@info</comment>
      <translation>Δημιουργία &lt;strong&gt;νέου&lt;/strong&gt; διαμερίσματος %2 με σημείο προσάρτησης &lt;strong&gt;%1&lt;/strong&gt;%3</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="250"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Εγκατάσταση του %2 στο διαμέρισμα συστήματος %3 &lt;strong&gt;%1&lt;/strong&gt; με δυνατότητες &lt;em&gt;%4&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="260"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Εγκατάσταση του %2 στο διαμέρισμα συστήματος %3 &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="270"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;</source>
      <comment>@info</comment>
      <translation>Δημιουργία διαμερίσματος %3 &lt;strong&gt;%1&lt;/strong&gt; με σημείο προσάρτησης &lt;strong&gt;%2&lt;/strong&gt; και δυνατότητες &lt;em&gt;%4&lt;/em&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="280"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4…</source>
      <comment>@info</comment>
      <translation>Δημιουργία διαμερίσματος %3 &lt;strong&gt;%1&lt;/strong&gt; με σημείο προσάρτησης &lt;strong&gt;%2&lt;/strong&gt;%4…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="296"/>
      <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@info</comment>
      <translation>Εγκατάσταση του φορτωτή εκκίνησης στο &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="305"/>
      <source>Setting up mount points…</source>
      <comment>@status</comment>
      <translation>Ρύθμιση σημείων προσάρτησης…</translation>
    </message>
  </context>
  <context>
    <name>FinishedPage</name>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
      <source>&amp;Restart now</source>
      <translation>Επανεκκίν&amp;ηση τώρα</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="75"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
      <comment>@info</comment>
      <translation>&lt;h1&gt;Αυτό ήταν!&lt;/h1&gt;&lt;br/&gt;Το %1 έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;Μπορείτε να ξεκινήσετε να χρησιμοποιείτε το νέο σας σύστημα.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="80"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <comment>@tooltip</comment>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Εάν είναι ενεργοποιημένη αυτή η επιλογή, το σύστημά σας θα επανεκκινηθεί αμέσως μόλις κάνετε κλικ στο &lt;span style="font-style:italic;"&gt;Τέλος&lt;/span&gt; ή κλείσετε το πρόγραμμα εγκατάστασης.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="89"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
      <comment>@info</comment>
      <translation>&lt;h1&gt;Αυτό ήταν!&lt;/h1&gt;&lt;br/&gt;Το %1 έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;Μπορείτε τώρα να κάνετε επανεκκίνηση στο νέο σας σύστημα ή να συνεχίσετε να χρησιμοποιείτε το Live περιβάλλον του %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="95"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <comment>@tooltip</comment>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Εάν είναι ενεργοποιημένη αυτή η επιλογή, το σύστημά σας θα επανεκκινηθεί αμέσως μόλις κάνετε κλικ στο &lt;span style="font-style:italic;"&gt;Τέλος&lt;/span&gt; ή κλείσετε το πρόγραμμα εγκατάστασης.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="109"/>
      <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
      <comment>@info, %1 is product name with version</comment>
      <translation>&lt;h1&gt;Αποτυχία εγκατάστασης&lt;/h1&gt;&lt;br/&gt;Το %1 δεν έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;Μήνυμα σφάλματος: %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="118"/>
      <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
      <comment>@info, %1 is product name with version</comment>
      <translation>&lt;h1&gt;Αποτυχία εγκατάστασης&lt;/h1&gt;&lt;br/&gt;Το %1 δεν έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;Μήνυμα σφάλματος: %2.</translation>
    </message>
  </context>
  <context>
    <name>FinishedQmlViewStep</name>
    <message>
      <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
      <source>Finish</source>
      <comment>@label</comment>
      <translation>Ολοκλήρωση</translation>
    </message>
  </context>
  <context>
    <name>FinishedViewStep</name>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
      <source>Finish</source>
      <comment>@label</comment>
      <translation>Ολοκλήρωση</translation>
    </message>
  </context>
  <context>
    <name>FormatPartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
      <source>Format partition %1 (file system: %2, size: %3 MiB) on %4</source>
      <comment>@title</comment>
      <translation>Διαμόρφωση διαμερίσματος %1 (σύστημα αρχείων: %2, μέγεθος: %3 MiB) στο %4</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
      <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Διαμόρφωση του διαμερίσματος &lt;strong&gt;%1&lt;/strong&gt; μεγέθους &lt;strong&gt;%3MiB&lt;/strong&gt; με το σύστημα αρχείων &lt;strong&gt;%2&lt;/strong&gt;</translation>
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
      <translation>Διαμόρφωση διαμερίσματος %1 με σύστημα αρχείων %2…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="73"/>
      <source>The installer failed to format partition %1 on disk '%2'.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να διαμορφώσει το διαμέρισμα %1 στον δίσκο «%2».</translation>
    </message>
  </context>
  <context>
    <name>GeneralRequirements</name>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="160"/>
      <source>Please ensure the system has at least %1 GiB available drive space.</source>
      <translation>Βεβαιωθείτε ότι το σύστημα διαθέτει τουλάχιστον %1 GiB διαθέσιμου χώρου στη μονάδα δίσκου.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="162"/>
      <source>Available drive space is all of the hard disks and SSDs connected to the system.</source>
      <translation>Ο διαθέσιμος χώρος μονάδων είναι όλοι οι σκληροί δίσκοι και οι SSD που είναι συνδεδεμένοι στο σύστημα.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="165"/>
      <source>There is not enough drive space. At least %1 GiB is required.</source>
      <translation>Δεν υπάρχει επαρκής χώρος στη μονάδα δίσκου. Απαιτούνται τουλάχιστον %1 GiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="173"/>
      <source>has at least %1 GiB working memory</source>
      <translation>διαθέτει τουλάχιστον %1 GiB λειτουργικής μνήμης</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="175"/>
      <source>The system does not have enough working memory. At least %1 GiB is required.</source>
      <translation>Το σύστημα δεν διαθέτει επαρκή λειτουργική μνήμη. Απαιτούνται τουλάχιστον %1 GiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="184"/>
      <source>is plugged in to a power source</source>
      <translation>είναι συνδεδεμένο σε πηγή ρεύματος</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
      <source>The system is not plugged in to a power source.</source>
      <translation>Το σύστημα δεν είναι συνδεδεμένο σε πηγή ρεύματος.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="192"/>
      <source>is connected to the Internet</source>
      <translation>είναι συνδεδεμένο στο διαδίκτυο</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
      <source>The system is not connected to the Internet.</source>
      <translation>Το σύστημα δεν είναι συνδεδεμένο στο διαδίκτυο.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="200"/>
      <source>is running the installer as an administrator (root)</source>
      <translation>εκτελεί το πρόγραμμα εγκατάστασης ως διαχειριστής (root)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="204"/>
      <source>The setup program is not running with administrator rights.</source>
      <translation>Το πρόγραμμα εγκατάστασης δεν εκτελείται με δικαιώματα διαχειριστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
      <source>The installer is not running with administrator rights.</source>
      <translation>Το πρόγραμμα εγκατάστασης δεν εκτελείται με δικαιώματα διαχειριστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="213"/>
      <source>has a screen large enough to show the whole installer</source>
      <translation>διαθέτει αρκετά μεγάλη οθόνη για να εμφανίζεται ολόκληρο το πρόγραμμα εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="217"/>
      <source>The screen is too small to display the setup program.</source>
      <translation>Η οθόνη είναι πολύ μικρή για να εμφανιστεί το πρόγραμμα εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="218"/>
      <source>The screen is too small to display the installer.</source>
      <translation>Η οθόνη είναι πολύ μικρή για να εμφανιστεί το πρόγραμμα εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="227"/>
      <source>is always false</source>
      <translation>είναι πάντα ψευδές</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="228"/>
      <source>The computer says no.</source>
      <translation>Ο υπολογιστής λέει όχι.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="236"/>
      <source>is always false (slowly)</source>
      <translation>είναι πάντα ψευδές (αργά)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="237"/>
      <source>The computer says no (slowly).</source>
      <translation>Ο υπολογιστής λέει όχι (αργά).</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="244"/>
      <source>is always true</source>
      <translation>είναι πάντα αληθές</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="245"/>
      <source>The computer says yes.</source>
      <translation>Ο υπολογιστής λέει ναι.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="253"/>
      <source>is always true (slowly)</source>
      <translation>είναι πάντα αληθές (αργά)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="254"/>
      <source>The computer says yes (slowly).</source>
      <translation>Ο υπολογιστής λέει ναι (αργά).</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="262"/>
      <source>is checked three times.</source>
      <translation>ελέγχεται τρεις φορές.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="265"/>
      <source>The snark has not been checked three times.</source>
      <comment>The (some mythological beast) has not been checked three times.</comment>
      <translation>Το snark δεν έχει ελεγχθεί τρεις φορές.</translation>
    </message>
  </context>
  <context>
    <name>HostInfoJob</name>
    <message>
      <location filename="../src/modules/hostinfo/HostInfoJob.cpp" line="39"/>
      <source>Collecting information about your machine…</source>
      <comment>@status</comment>
      <translation>Συλλογή πληροφοριών για το μηχάνημά σας…</translation>
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
      <translation>Αναγνωριστικό παρτίδας OEM</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
      <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Δεν ήταν δυνατή η δημιουργία καταλόγων &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
      <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Δεν ήταν δυνατό το άνοιγμα του αρχείου &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
      <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Δεν ήταν δυνατή η εγγραφή στο αρχείο &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
  </context>
  <context>
    <name>InitcpioJob</name>
    <message>
      <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
      <source>Creating initramfs with mkinitcpio…</source>
      <comment>@status</comment>
      <translation>Δημιουργία initramfs με το mkinitcpio…</translation>
    </message>
  </context>
  <context>
    <name>InitramfsJob</name>
    <message>
      <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="27"/>
      <source>Creating initramfs…</source>
      <comment>@status</comment>
      <translation>Δημιουργία initramfs…</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalPage</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="51"/>
      <source>Konsole not installed.</source>
      <comment>@error</comment>
      <translation>Το Konsole δεν είναι εγκατεστημένο.</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="52"/>
      <source>Please install KDE Konsole and try again!</source>
      <comment>@info</comment>
      <translation>Εγκαταστήστε το KDE Konsole και δοκιμάστε ξανά!</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="127"/>
      <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
      <comment>@info</comment>
      <translation>Εκτέλεση σεναρίου: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalViewStep</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="40"/>
      <source>Script</source>
      <comment>@label</comment>
      <translation>Σενάριο</translation>
    </message>
  </context>
  <context>
    <name>KeyboardQmlViewStep</name>
    <message>
      <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
      <source>Keyboard</source>
      <comment>@label</comment>
      <translation>Πληκτρολόγιο</translation>
    </message>
  </context>
  <context>
    <name>KeyboardViewStep</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="41"/>
      <source>Keyboard</source>
      <comment>@label</comment>
      <translation>Πληκτρολόγιο</translation>
    </message>
  </context>
  <context>
    <name>LCLocaleDialog</name>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
      <source>System Locale Setting</source>
      <comment>@title</comment>
      <translation>Ορισμός τοπικών ρυθμίσεων συστήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
      <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>Οι τοπικές ρυθμίσεις του συστήματος επηρεάζουν τη γλώσσα και το σύνολο χαρακτήρων για ορισμένα στοιχεία του περιβάλλοντος χρήστη στη γραμμή εντολών.&lt;br/&gt;Η τρέχουσα ρύθμιση είναι: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
      <source>&amp;Cancel</source>
      <comment>@button</comment>
      <translation>&amp;Ακύρωση</translation>
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
      <translation>Διαμόρφωση κρυπτογραφημένης swap.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="87"/>
      <source>No target system available.</source>
      <translation>Δεν διατίθεται σύστημα προορισμού.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="95"/>
      <source>No rootMountPoint is set.</source>
      <translation>Δεν έχει οριστεί rootMountPoint.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="100"/>
      <source>No configFilePath is set.</source>
      <translation>Δεν έχει οριστεί configFilePath.</translation>
    </message>
  </context>
  <context>
    <name>LicensePage</name>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="26"/>
      <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Άδεια χρήσης&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
      <source>I accept the terms and conditions above.</source>
      <comment>@info</comment>
      <translation>Αποδέχομαι τους παραπάνω όρους και προϋποθέσεις.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="144"/>
      <source>Please review the End User License Agreements (EULAs).</source>
      <comment>@info</comment>
      <translation>Διαβάστε τις Άδειες χρήσης τελικού χρήστη (EULA).</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
      <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
      <comment>@info</comment>
      <translation>Αυτή η διαδικασία εγκατάστασης θα εγκαταστήσει ιδιοταγές λογισμικό που υπόκειται σε όρους αδειοδότησης.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="154"/>
      <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
      <comment>@info</comment>
      <translation>Εάν δεν συμφωνείτε με τους όρους, η διαδικασία εγκατάστασης δεν μπορεί να συνεχιστεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="159"/>
      <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
      <comment>@info</comment>
      <translation>Αυτή η διαδικασία εγκατάστασης μπορεί να εγκαταστήσει ιδιοταγές λογισμικό που υπόκειται σε όρους αδειοδότησης, με σκοπό την παροχή επιπλέον δυνατοτήτων και τη βελτίωση της εμπειρίας χρήσης.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="165"/>
      <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
      <comment>@info</comment>
      <translation>Εάν δεν συμφωνείτε με τους όρους, το ιδιοταγές λογισμικό δεν θα εγκατασταθεί και αντ' αυτού, θα χρησιμοποιηθούν εναλλακτικές λύσεις ανοικτού κώδικα.</translation>
    </message>
  </context>
  <context>
    <name>LicenseViewStep</name>
    <message>
      <location filename="../src/modules/license/LicenseViewStep.cpp" line="45"/>
      <source>License</source>
      <comment>@label</comment>
      <translation>Άδεια χρήσης</translation>
    </message>
  </context>
  <context>
    <name>LicenseWidget</name>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
      <source>URL: %1</source>
      <comment>@label</comment>
      <translation>URL: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
      <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
      <translation>&lt;strong&gt;Οδηγός %1&lt;/strong&gt;&lt;br/&gt;από %2</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="117"/>
      <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
      <translation>&lt;strong&gt;Οδηγός κάρτας γραφικών %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;από %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="124"/>
      <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;Πρόσθετο προγράμματος περιήγησης %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;από %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="131"/>
      <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;Κωδικοποιητής %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;από %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="138"/>
      <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;Πακέτο %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;από %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="145"/>
      <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <comment>@label, %1 is product name, %2 is product vendor</comment>
      <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;από %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="169"/>
      <source>File: %1</source>
      <comment>@label</comment>
      <translation>Αρχείο: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="192"/>
      <source>Hide the license text</source>
      <comment>@tooltip</comment>
      <translation>Απόκρυψη του κειμένου της άδειας χρήσης</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="193"/>
      <source>Show the license text</source>
      <comment>@tooltip</comment>
      <translation>Εμφάνιση του κειμένου της άδειας χρήσης</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="197"/>
      <source>Open the license agreement in browser</source>
      <comment>@tooltip</comment>
      <translation>Άνοιγμα της άδειας χρήσης στο πρόγραμμα περιήγησης</translation>
    </message>
  </context>
  <context>
    <name>LocalePage</name>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
      <source>Region:</source>
      <comment>@label</comment>
      <translation>Περιοχή:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
      <source>Zone:</source>
      <comment>@label</comment>
      <translation>Ζώνη:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
      <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
      <source>&amp;Change…</source>
      <comment>@button</comment>
      <translation>Α&amp;λλαγή…</translation>
    </message>
  </context>
  <context>
    <name>LocaleQmlViewStep</name>
    <message>
      <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
      <source>Location</source>
      <comment>@label</comment>
      <translation>Τοποθεσία</translation>
    </message>
  </context>
  <context>
    <name>LocaleTests</name>
    <message>
      <location filename="../src/libcalamares/locale/Tests.cpp" line="272"/>
      <source>Quit</source>
      <translation>Έξοδος</translation>
    </message>
  </context>
  <context>
    <name>LocaleViewStep</name>
    <message>
      <location filename="../src/modules/locale/LocaleViewStep.cpp" line="71"/>
      <source>Location</source>
      <comment>@label</comment>
      <translation>Τοποθεσία</translation>
    </message>
  </context>
  <context>
    <name>LuksBootKeyFileJob</name>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="33"/>
      <source>Configuring LUKS key file.</source>
      <translation>Διαμόρφωση αρχείου κλειδιού LUKS.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="254"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="262"/>
      <source>No partitions are defined.</source>
      <translation>Δεν έχουν οριστεί διαμερίσματα.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="297"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="304"/>
      <source>Encrypted rootfs setup error</source>
      <translation>Σφάλμα ρύθμισης κρυπτογραφημένου rootfs</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="298"/>
      <source>Root partition %1 is LUKS but no passphrase has been set.</source>
      <translation>Το διαμέρισμα ρίζας %1 είναι LUKS, αλλά δεν έχει οριστεί φράση πρόσβασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="305"/>
      <source>Could not create LUKS key file for root partition %1.</source>
      <translation>Δεν ήταν δυνατή η δημιουργία αρχείου κλειδιού LUKS για το διαμέρισμα ρίζας %1.</translation>
    </message>
  </context>
  <context>
    <name>MachineIdJob</name>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="55"/>
      <source>Generate machine-id.</source>
      <translation>Δημιουργία αναγνωριστικού μηχανήματος.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="71"/>
      <source>Configuration Error</source>
      <translation>Σφάλμα διαμόρφωσης</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="72"/>
      <source>No root mount point is set for MachineId.</source>
      <translation>Δεν έχει οριστεί σημείο προσάρτησης ρίζας για το αναγνωριστικό μηχανήματος.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="63"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="71"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="75"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="92"/>
      <source>File not found</source>
      <translation>Το αρχείο δεν βρέθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
      <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
      <translation>Η διαδρομή &lt;pre&gt;%1&lt;/pre&gt; πρέπει να είναι απόλυτη.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation>Δεν ήταν δυνατή η δημιουργία νέου τυχαίου αρχείου &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
  </context>
  <context>
    <name>Map</name>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="237"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Ζώνη ώρας: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="258"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <comment>@info</comment>
      <translation>Επιλέξτε την προτιμώμενη τοποθεσία σας στον χάρτη, ώστε το πρόγραμμα εγκατάστασης να μπορέσει να προτείνει τοπικές ρυθμίσεις
            και ρυθμίσεις ζώνης ώρας. Μπορείτε να προσαρμόσετε τις προτεινόμενες ρυθμίσεις παρακάτω. Κάντε αναζήτηση στον χάρτη
            κάνοντας ολίσθηση για μετακίνηση και κύλιση (ή τα κουμπιά +/-) για μεγέθυνση/σμίκρυνση.</translation>
    </message>
  </context>
  <context>
    <name>Map-qt6</name>
    <message>
      <location filename="../src/modules/localeq/Map-qt6.qml" line="261"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Ζώνη ώρας: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map-qt6.qml" line="282"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <comment>@label</comment>
      <translation>Επιλέξτε την προτιμώμενη τοποθεσία σας στον χάρτη, ώστε το πρόγραμμα εγκατάστασης να μπορέσει να προτείνει τοπικές ρυθμίσεις
            και ρυθμίσεις ζώνης ώρας. Μπορείτε να προσαρμόσετε τις προτεινόμενες ρυθμίσεις παρακάτω. Κάντε αναζήτηση στον χάρτη
            κάνοντας ολίσθηση για μετακίνηση και κύλιση (ή τα κουμπιά +/-) για μεγέθυνση/σμίκρυνση.</translation>
    </message>
  </context>
  <context>
    <name>NetInstallViewStep</name>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="50"/>
      <source>Package selection</source>
      <translation>Επιλογή πακέτων</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="51"/>
      <source>Office software</source>
      <translation>Λογισμικό γραφείου</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="52"/>
      <source>Office package</source>
      <translation>Πακέτο γραφείου</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="53"/>
      <source>Browser software</source>
      <translation>Λογισμικό προγράμματος περιήγησης</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
      <source>Browser package</source>
      <translation>Πακέτο προγράμματος περιήγησης</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="55"/>
      <source>Web browser</source>
      <translation>Πρόγραμμα περιήγησης ιστού</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="56"/>
      <source>Kernel</source>
      <comment>label for netinstall module, Linux kernel</comment>
      <translation>Πυρήνας</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="57"/>
      <source>Services</source>
      <comment>label for netinstall module, system services</comment>
      <translation>Υπηρεσίες</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="58"/>
      <source>Login</source>
      <comment>label for netinstall module, choose login manager</comment>
      <translation>Σύνδεση</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="59"/>
      <source>Desktop</source>
      <comment>label for netinstall module, choose desktop environment</comment>
      <translation>Επιφάνεια εργασίας</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="60"/>
      <source>Applications</source>
      <translation>Εφαρμογές</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="61"/>
      <source>Communication</source>
      <comment>label for netinstall module</comment>
      <translation>Επικοινωνία</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="62"/>
      <source>Development</source>
      <comment>label for netinstall module</comment>
      <translation>Ανάπτυξη</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="63"/>
      <source>Office</source>
      <comment>label for netinstall module</comment>
      <translation>Γραφείο</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="64"/>
      <source>Multimedia</source>
      <comment>label for netinstall module</comment>
      <translation>Πολυμέσα</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="65"/>
      <source>Internet</source>
      <comment>label for netinstall module</comment>
      <translation>Διαδίκτυο</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="66"/>
      <source>Theming</source>
      <comment>label for netinstall module</comment>
      <translation>Θέματα</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="67"/>
      <source>Gaming</source>
      <comment>label for netinstall module</comment>
      <translation>Παιχνίδια</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="68"/>
      <source>Utilities</source>
      <comment>label for netinstall module</comment>
      <translation>Βοηθήματα</translation>
    </message>
  </context>
  <context>
    <name>NotesQmlViewStep</name>
    <message>
      <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
      <source>Notes</source>
      <translation>Σημειώσεις</translation>
    </message>
  </context>
  <context>
    <name>OEMPage</name>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
      <source>Ba&amp;tch:</source>
      <translation>Παρτί&amp;δα:</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Εισαγάγετε ένα αναγνωριστικό παρτίδας εδώ. Αυτό θα αποθηκευτεί στο σύστημα προορισμού.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;Διαμόρφωση OEM&lt;/h1&gt;&lt;p&gt;Το Calamares θα χρησιμοποιήσει τις ρυθμίσεις κατασκευαστή (OEM) κατά τη διαμόρφωση του συστήματος προορισμού.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
  </context>
  <context>
    <name>OEMViewStep</name>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="118"/>
      <source>OEM Configuration</source>
      <translation>Διαμόρφωση OEM</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="124"/>
      <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Ορισμός του αναγνωριστικού παρτίδας OEM σε: &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
  </context>
  <context>
    <name>Offline</name>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="47"/>
      <source>Select your preferred region, or use the default settings</source>
      <comment>@label</comment>
      <translation>Επιλέξτε την προτιμώμενη περιοχή σας ή χρησιμοποιήστε τις προεπιλεγμένες ρυθμίσεις</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="103"/>
      <location filename="../src/modules/localeq/Offline.qml" line="180"/>
      <location filename="../src/modules/localeq/Offline.qml" line="224"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Ζώνη ώρας: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="120"/>
      <source>Select your preferred zone within your region</source>
      <comment>@label</comment>
      <translation>Επιλέξτε την προτιμώμενη ζώνη εντός της περιοχής σας</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="193"/>
      <source>Zones</source>
      <comment>@button</comment>
      <translation>Ζώνες</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="240"/>
      <source>You can fine-tune language and locale settings below</source>
      <comment>@label</comment>
      <translation>Μπορείτε να προσαρμόσετε με ακρίβεια τις γλωσσικές και τοπικές ρυθμίσεις παρακάτω</translation>
    </message>
  </context>
  <context>
    <name>Offline-qt6</name>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="47"/>
      <source>Select your preferred region, or use the default settings</source>
      <comment>@label</comment>
      <translation>Επιλέξτε την προτιμώμενη περιοχή σας ή χρησιμοποιήστε τις προεπιλεγμένες ρυθμίσεις</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="103"/>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="180"/>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="224"/>
      <source>Timezone: %1</source>
      <comment>@label</comment>
      <translation>Ζώνη ώρας: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="120"/>
      <source>Select your preferred zone within your region</source>
      <comment>@label</comment>
      <translation>Επιλέξτε την προτιμώμενη ζώνη εντός της περιοχής σας</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="193"/>
      <source>Zones</source>
      <comment>@button</comment>
      <translation>Ζώνες</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline-qt6.qml" line="240"/>
      <source>You can fine-tune language and locale settings below</source>
      <comment>@label</comment>
      <translation>Μπορείτε να προσαρμόσετε με ακρίβεια τις γλωσσικές και τοπικές ρυθμίσεις παρακάτω</translation>
    </message>
  </context>
  <context>
    <name>PWQ</name>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="52"/>
      <source>Password is too short</source>
      <translation>Ο κωδικός πρόσβασης είναι πολύ μικρός</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="68"/>
      <source>Password is too long</source>
      <translation>Ο κωδικός πρόσβασης είναι πολύ μεγάλος</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="189"/>
      <source>Password is too weak</source>
      <translation>Ο κωδικός πρόσβασης είναι πολύ αδύναμος</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="197"/>
      <source>Memory allocation error when setting '%1'</source>
      <translation>Σφάλμα εκχώρησης μνήμης κατά τη ρύθμιση του «%1»</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
      <source>Memory allocation error</source>
      <translation>Σφάλμα εκχώρησης μνήμης</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
      <source>The password is the same as the old one</source>
      <translation>Ο κωδικός πρόσβασης είναι ίδιος με τον παλιό</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="204"/>
      <source>The password is a palindrome</source>
      <translation>Ο κωδικός πρόσβασης είναι καρκινική φράση</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
      <source>The password differs with case changes only</source>
      <translation>Ο κωδικός πρόσβασης διαφέρει μόνο με αλλαγές πεζών-κεφαλαίων</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="208"/>
      <source>The password is too similar to the old one</source>
      <translation>Ο κωδικός πρόσβασης είναι πολύ παρόμοιος με τον παλιό</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
      <source>The password contains the user name in some form</source>
      <translation>Ο κωδικός πρόσβασης περιέχει το όνομα χρήστη σε κάποια μορφή</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="212"/>
      <source>The password contains words from the real name of the user in some form</source>
      <translation>Ο κωδικός πρόσβασης περιέχει λέξεις από το πραγματικό όνομα του χρήστη σε κάποια μορφή</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="215"/>
      <source>The password contains forbidden words in some form</source>
      <translation>Ο κωδικός πρόσβασης περιέχει απαγορευμένες λέξεις σε κάποια μορφή</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
      <source>The password contains fewer than %n digits</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερα από %n ψηφίο</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερα από %n ψηφία</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
      <source>The password contains too few digits</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πολύ λίγα ψηφία</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="226"/>
      <source>The password contains fewer than %n uppercase letters</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερα από %n κεφαλαίο γράμμα</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερα από %n κεφαλαία γράμματα</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="229"/>
      <source>The password contains too few uppercase letters</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πολύ λίγα κεφαλαία γράμματα</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="233"/>
      <source>The password contains fewer than %n lowercase letters</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερα από %n πεζό γράμμα</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερα από %n πεζά γράμματα</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="236"/>
      <source>The password contains too few lowercase letters</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πολύ λίγα πεζά γράμματα</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="240"/>
      <source>The password contains fewer than %n non-alphanumeric characters</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερους από %n μη αλφαριθμητικό χαρακτήρα</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερους από %n μη αλφαριθμητικούς χαρακτήρες</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
      <source>The password contains too few non-alphanumeric characters</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πολύ λίγους μη αλφαριθμητικούς χαρακτήρες</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
      <source>The password is shorter than %n characters</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης είναι μικρότερος από %n χαρακτήρα</numerusform>
        <numerusform>Ο κωδικός πρόσβασης είναι μικρότερος από %n χαρακτήρες</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="250"/>
      <source>The password is too short</source>
      <translation>Ο κωδικός πρόσβασης είναι πολύ μικρός</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="252"/>
      <source>The password is a rotated version of the previous one</source>
      <translation>Ο κωδικός πρόσβασης είναι μια παραλλαγή του προηγούμενου με μετατόπιση χαρακτήρων</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="256"/>
      <source>The password contains fewer than %n character classes</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερες από %n κλάση χαρακτήρων</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει λιγότερες από %n κλάσεις χαρακτήρων</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="259"/>
      <source>The password does not contain enough character classes</source>
      <translation>Ο κωδικός πρόσβασης δεν περιέχει αρκετές κατηγορίες χαρακτήρων</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
      <source>The password contains more than %n same characters consecutively</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει περισσότερους από %n ίδιο χαρακτήρα διαδοχικά</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει περισσότερους από %n ίδιους χαρακτήρες διαδοχικά</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="266"/>
      <source>The password contains too many same characters consecutively</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πάρα πολλούς ίδιους χαρακτήρες διαδοχικά</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="270"/>
      <source>The password contains more than %n characters of the same class consecutively</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει περισσότερους από %n χαρακτήρα της ίδιας κλάσης διαδοχικά</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει περισσότερους από %n χαρακτήρες της ίδιας κλάσης διαδοχικά</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="276"/>
      <source>The password contains too many characters of the same class consecutively</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πάρα πολλούς χαρακτήρες της ίδιας κλάσης διαδοχικά</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="281"/>
      <source>The password contains monotonic sequence longer than %n characters</source>
      <translation>
        <numerusform>Ο κωδικός πρόσβασης περιέχει μονοτονική ακολουθία μεγαλύτερη από %n χαρακτήρα</numerusform>
        <numerusform>Ο κωδικός πρόσβασης περιέχει μονοτονική ακολουθία μεγαλύτερη από %n χαρακτήρες</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="287"/>
      <source>The password contains too long of a monotonic character sequence</source>
      <translation>Ο κωδικός πρόσβασης περιέχει πολύ μεγάλη μονοτονική ακολουθία χαρακτήρων</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="290"/>
      <source>No password supplied</source>
      <translation>Δεν δόθηκε κωδικός πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="292"/>
      <source>Cannot obtain random numbers from the RNG device</source>
      <translation>Δεν είναι δυνατή η λήψη τυχαίων αριθμών από τη συσκευή RNG</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="294"/>
      <source>Password generation failed - required entropy too low for settings</source>
      <translation>Η δημιουργία κωδικού πρόσβασης απέτυχε - η απαιτούμενη εντροπία είναι πολύ χαμηλή για τις ρυθμίσεις</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="299"/>
      <source>The password fails the dictionary check - %1</source>
      <translation>Ο κωδικός πρόσβασης αποτυγχάνει στον έλεγχο λεξικού - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="302"/>
      <source>The password fails the dictionary check</source>
      <translation>Ο κωδικός πρόσβασης αποτυγχάνει στον έλεγχο λεξικού</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="306"/>
      <source>Unknown setting - %1</source>
      <translation>Άγνωστη ρύθμιση - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="308"/>
      <source>Unknown setting</source>
      <translation>Άγνωστη ρύθμιση</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="312"/>
      <source>Bad integer value of setting - %1</source>
      <translation>Εσφαλμένη ακέραια τιμή ρύθμισης - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="314"/>
      <source>Bad integer value</source>
      <translation>Εσφαλμένη ακέραια τιμή</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="318"/>
      <source>Setting %1 is not of integer type</source>
      <translation>Η ρύθμιση %1 δεν είναι ακέραιου τύπου</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="320"/>
      <source>Setting is not of integer type</source>
      <translation>Η ρύθμιση δεν είναι ακέραιου τύπου</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="324"/>
      <source>Setting %1 is not of string type</source>
      <translation>Η ρύθμιση %1 δεν είναι τύπου συμβολοσειράς</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="326"/>
      <source>Setting is not of string type</source>
      <translation>Η ρύθμιση δεν είναι τύπου συμβολοσειράς</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="328"/>
      <source>Opening the configuration file failed</source>
      <translation>Το άνοιγμα του αρχείου διαμόρφωσης απέτυχε</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="330"/>
      <source>The configuration file is malformed</source>
      <translation>Το αρχείο διαμόρφωσης δεν έχει σωστή μορφή</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="332"/>
      <source>Fatal failure</source>
      <translation>Κρίσιμη αποτυχία</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="334"/>
      <source>Unknown error</source>
      <translation>Άγνωστο σφάλμα</translation>
    </message>
  </context>
  <context>
    <name>PackageChooserPage</name>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
      <source>Product Name</source>
      <translation>Όνομα προϊόντος</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
      <source>TextLabel</source>
      <translation>TextLabel</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
      <source>Long Product Description</source>
      <translation>Μεγάλη περιγραφή προϊόντος</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
      <source>Package Selection</source>
      <translation>Επιλογή πακέτων</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation>Επιλέξτε ένα προϊόν από τη λίστα. Το επιλεγμένο προϊόν θα εγκατασταθεί.</translation>
    </message>
  </context>
  <context>
    <name>PackageModel</name>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="206"/>
      <source>Name</source>
      <translation>Όνομα</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="206"/>
      <source>Description</source>
      <translation>Περιγραφή</translation>
    </message>
  </context>
  <context>
    <name>Page_Keyboard</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
      <source>Keyboard model:</source>
      <translation>Μοντέλο πληκτρολογίου:</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="146"/>
      <source>Type here to test your keyboard</source>
      <translation>Πληκτρολογήστε εδώ για να δοκιμάσετε το πληκτρολόγιό σας</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="153"/>
      <source>Switch Keyboard:</source>
      <extracomment>shortcut for switching between keyboard layouts</extracomment>
      <translation>Εναλλαγή διάταξης:</translation>
    </message>
  </context>
  <context>
    <name>Page_UserSetup</name>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
      <source>What is your name?</source>
      <translation>Ποιο είναι το όνομά σας;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
      <source>Your Full Name</source>
      <translation>Το ονοματεπώνυμό σας</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
      <source>What name do you want to use to log in?</source>
      <translation>Ποιο όνομα θέλετε να χρησιμοποιείτε για τη σύνδεση;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
      <source>login</source>
      <translation>όνομα σύνδεσης</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
      <source>What is the name of this computer?</source>
      <translation>Ποιο είναι το όνομα του υπολογιστή;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
      <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Αυτό το όνομα θα χρησιμοποιείται εάν κάνετε τον υπολογιστή ορατό στις υπόλοιπες συσκευές ενός δικτύου.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
      <source>Computer Name</source>
      <translation>Όνομα υπολογιστή</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Επιλέξτε έναν κωδικό πρόσβασης για την προστασία του λογαριασμού σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Εισαγάγετε τον ίδιο κωδικό πρόσβασης δύο φορές, ώστε να ελεγχθεί για τυπογραφικά λάθη. Ένας καλός κωδικός πρόσβασης θα πρέπει να περιέχει ένα μείγμα γραμμάτων, αριθμών και σημείων στίξης, να αποτελείται από τουλάχιστον οκτώ χαρακτήρες, ενώ θα πρέπει και να τον αλλάζετε ανά τακτά χρονικά διαστήματα.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
      <source>Password</source>
      <translation>Κωδικός πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
      <source>Repeat Password</source>
      <translation>Επανάληψη κωδικού πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Όταν είναι ενεργοποιημένη αυτή η επιλογή, θα γίνεται έλεγχος της ισχύος του κωδικού πρόσβασης και δεν θα μπορείτε να χρησιμοποιήσετε έναν αδύναμο κωδικό πρόσβασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
      <source>Require strong passwords.</source>
      <translation>Απαίτηση ισχυρών κωδικών πρόσβασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
      <source>Log in automatically without asking for the password.</source>
      <translation>Αυτόματη σύνδεση χωρίς απαίτηση κωδικού πρόσβασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Θα χρησιμοποιηθεί ο ίδιος κωδικός πρόσβασης για τον λογαριασμό διαχειριστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
      <source>Choose a password for the administrator account.</source>
      <translation>Επιλέξτε έναν κωδικό πρόσβασης για τον λογαριασμό διαχειριστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Εισαγάγετε τον ίδιο κωδικό πρόσβασης δύο φορές, ώστε να ελεγχθεί για τυπογραφικά λάθη.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="627"/>
      <source>Use Active Directory</source>
      <translation>Χρήση Active Directory</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="638"/>
      <source>Domain:</source>
      <translation>Τομέας:</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="652"/>
      <source>Domain Administrator:</source>
      <translation>Διαχειριστής τομέα:</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="662"/>
      <source>Password:</source>
      <translation>Κωδικός πρόσβασης:</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="680"/>
      <source>IP Address (optional):</source>
      <translation>Διεύθυνση IP (προαιρετικό):</translation>
    </message>
  </context>
  <context>
    <name>PartitionLabelsView</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="178"/>
      <source>Root</source>
      <translation>Ρίζα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="182"/>
      <source>Home</source>
      <comment>@label</comment>
      <translation>Προσωπικός κατάλογος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="186"/>
      <source>Boot</source>
      <comment>@label</comment>
      <translation>Εκκίνηση</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
      <source>EFI system</source>
      <comment>@label</comment>
      <translation>Σύστημα EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="195"/>
      <source>Swap</source>
      <comment>@label</comment>
      <translation>Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
      <source>New partition for %1</source>
      <comment>@label</comment>
      <translation>Νέο διαμέρισμα για %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
      <source>New partition</source>
      <comment>@label</comment>
      <translation>Νέο διαμέρισμα</translation>
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
      <translation>Ελεύθερος χώρος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
      <source>New Partition</source>
      <comment>@title</comment>
      <translation>Νέο διαμέρισμα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="307"/>
      <source>Name</source>
      <comment>@title</comment>
      <translation>Όνομα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="309"/>
      <source>File System</source>
      <comment>@title</comment>
      <translation>Σύστημα αρχείων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="311"/>
      <source>File System Label</source>
      <comment>@title</comment>
      <translation>Ετικέτα συστήματος αρχείων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="313"/>
      <source>Mount Point</source>
      <comment>@title</comment>
      <translation>Σημείο προσάρτησης</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="315"/>
      <source>Size</source>
      <comment>@title</comment>
      <translation>Μέγεθος</translation>
    </message>
  </context>
  <context>
    <name>PartitionPage</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
      <source>Storage de&amp;vice:</source>
      <translation>Συσκευή απο&amp;θήκευσης:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
      <source>&amp;Revert All Changes</source>
      <translation>Επανα&amp;φορά όλων των αλλαγών</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
      <source>New Partition &amp;Table</source>
      <translation>Νέος πί&amp;νακας διαμερισμάτων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
      <source>Cre&amp;ate</source>
      <translation>Δη&amp;μιουργία</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
      <source>&amp;Edit</source>
      <translation>Επε&amp;ξεργασία</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
      <source>&amp;Delete</source>
      <translation>&amp;Διαγραφή</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
      <source>New Volume Group</source>
      <translation>Νέα ομάδα τόμων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
      <source>Resize Volume Group</source>
      <translation>Αλλαγή μεγέθους ομάδας τόμων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
      <source>Deactivate Volume Group</source>
      <translation>Απενεργοποίηση ομάδας τόμων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
      <source>Remove Volume Group</source>
      <translation>Κατάργηση ομάδας τόμων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
      <source>I&amp;nstall boot loader on:</source>
      <translation>Ε&amp;γκατάσταση φορτωτή εκκίνησης σε:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="227"/>
      <source>Are you sure you want to create a new partition table on %1?</source>
      <translation>Θέλετε σίγουρα να δημιουργήσετε έναν νέο πίνακα διαμερισμάτων στο %1;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="262"/>
      <source>Can not create new partition</source>
      <translation>Δεν είναι δυνατή η δημιουργία νέου διαμερίσματος</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="263"/>
      <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
      <translation>Ο πίνακας διαμερισμάτων στο %1 διαθέτει ήδη %2 πρωτεύοντα διαμερίσματα και δεν μπορούν να προστεθούν περισσότερα. Καταργήστε ένα πρωτεύον διαμέρισμα και αντ' αυτού, προσθέστε ένα εκτεταμένο διαμέρισμα.</translation>
    </message>
  </context>
  <context>
    <name>PartitionViewStep</name>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
      <source>Gathering system information…</source>
      <comment>@status</comment>
      <translation>Συλλογή πληροφοριών συστήματος…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="107"/>
      <source>Partitions</source>
      <comment>@label</comment>
      <translation>Διαμερίσματα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="144"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system</source>
      <comment>@label</comment>
      <translation>Εγκατάσταση του %1 &lt;strong&gt;παράλληλα&lt;/strong&gt; με κάποιο άλλο λειτουργικό σύστημα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="148"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Διαγραφή&lt;/strong&gt; δίσκου και εγκατάσταση του %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="152"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Αντικατάσταση&lt;/strong&gt; διαμερίσματος με το %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="157"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning</source>
      <comment>@label</comment>
      <translation>&lt;strong&gt;Χειροκίνητη&lt;/strong&gt; διαμέριση</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="179"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3)</source>
      <comment>@info</comment>
      <translation>Εγκατάσταση του %1 &lt;strong&gt;παράλληλα&lt;/strong&gt; με κάποιο άλλο λειτουργικό σύστημα στον δίσκο &lt;strong&gt;%2&lt;/strong&gt; (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="188"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1</source>
      <comment>@info</comment>
      <translation>&lt;strong&gt;Διαγραφή&lt;/strong&gt; του δίσκου &lt;strong&gt;%2&lt;/strong&gt; (%3) και εγκατάσταση του %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="195"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1</source>
      <comment>@info</comment>
      <translation>&lt;strong&gt;Αντικατάσταση&lt;/strong&gt; διαμερίσματος στον δίσκο &lt;strong&gt;%2&lt;/strong&gt; (%3) με το %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="204"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
      <comment>@info</comment>
      <translation>&lt;strong&gt;Χειροκίνητη&lt;/strong&gt; διαμέριση στον δίσκο &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="214"/>
      <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
      <comment>@info</comment>
      <translation>Δίσκος &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="239"/>
      <source>Create a swap file.</source>
      <translation>Δημιουργία αρχείου swap.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="268"/>
      <source>Unsafe partition actions are enabled.</source>
      <translation>Έχουν ενεργοποιηθεί μη ασφαλείς ενέργειες διαμερισμάτων.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="271"/>
      <source>Partitioning is configured to &lt;b&gt;always&lt;/b&gt; fail.</source>
      <translation>Η διαμέριση είναι ρυθμισμένη έτσι, ώστε να αποτυγχάνει &lt;b&gt;πάντα&lt;/b&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="274"/>
      <source>No partitions will be changed.</source>
      <translation>Δεν θα τροποποιηθεί κανένα διαμέρισμα.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="314"/>
      <source>Current:</source>
      <comment>@label</comment>
      <translation>Τώρα:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="332"/>
      <source>After:</source>
      <comment>@label</comment>
      <translation>Μετά:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="555"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
      <translation>Ένα διαμέρισμα συστήματος EFI είναι απαραίτητο για την εκκίνηση του %1.&lt;br/&gt;&lt;br/&gt;Για να διαμορφώσετε ένα διαμέρισμα συστήματος EFI, επιστρέψτε και επιλέξτε ή δημιουργήστε ένα κατάλληλο σύστημα αρχείων.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="561"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;The EFI system partition does not meet recommendations. It is recommended to go back and select or create a suitable filesystem.</source>
      <translation>Ένα διαμέρισμα συστήματος EFI είναι απαραίτητο για την εκκίνηση του %1.&lt;br/&gt;&lt;br/&gt;Το διαμέρισμα συστήματος EFI δεν πληροί τις προτάσεις. Συνιστάται να επιστρέψετε και να επιλέξετε ή να δημιουργήσετε ένα κατάλληλο σύστημα αρχείων.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="569"/>
      <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Το σύστημα αρχείων πρέπει να προσαρτηθεί στο &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="570"/>
      <source>The filesystem must have type FAT32.</source>
      <translation>Το σύστημα αρχείων πρέπει να έχει τύπο FAT32.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="571"/>
      <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
      <translation>Πρέπει να οριστεί η σημαία &lt;strong&gt;%1&lt;/strong&gt; στο σύστημα αρχείων.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="579"/>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="581"/>
      <source>The filesystem must be at least %1 MiB in size.</source>
      <translation>Το σύστημα αρχείων πρέπει να έχει μέγεθος τουλάχιστον %1 MiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="583"/>
      <source>The minimum recommended size for the filesystem is %1 MiB.</source>
      <translation>Το ελάχιστο συνιστώμενο μέγεθος για το σύστημα αρχείων είναι %1 MiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="585"/>
      <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
      <translation>Μπορείτε να συνεχίσετε χωρίς να διαμορφώσετε ένα διαμέρισμα συστήματος EFI, αλλά η εκκίνηση του συστήματός σας ενδέχεται να αποτύχει.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="587"/>
      <source>You can continue with this EFI system partition configuration but your system may fail to start.</source>
      <translation>Μπορείτε να συνεχίσετε με αυτήν τη διαμόρφωση διαμερίσματος συστήματος EFI, αλλά η εκκίνηση του συστήματός σας ενδέχεται να αποτύχει.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="599"/>
      <source>No EFI system partition configured</source>
      <translation>Δεν έχει διαμορφωθεί διαμέρισμα συστήματος EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="607"/>
      <source>EFI system partition configured incorrectly</source>
      <translation>Το διαμέρισμα συστήματος EFI δεν έχει διαμορφωθεί σωστά</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="627"/>
      <source>EFI system partition recommendation</source>
      <translation>Πρόταση διαμερίσματος συστήματος EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="646"/>
      <source>Option to use GPT on BIOS</source>
      <translation>Επιλογή για χρήση GPT σε σύστημα BIOS</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="647"/>
      <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;%2&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
      <translation>Ένας πίνακας διαμερισμάτων GPT είναι η καλύτερη επιλογή για όλα τα συστήματα. Αυτό το πρόγραμμα εγκατάστασης υποστηρίζει μια τέτοια διαμόρφωση και για συστήματα BIOS.&lt;br/&gt;&lt;br/&gt;Για να διαμορφώσετε έναν πίνακα διαμερισμάτων GPT σε BIOS, (αν δεν το έχετε κάνει ήδη) επιστρέψτε και ορίστε τον πίνακα διαμερισμάτων σε GPT. Στη συνέχεια, δημιουργήστε ένα μη διαμορφωμένο διαμέρισμα μεγέθους 8 MB με ενεργοποιημένη τη σημαία &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;Ένα μη διαμορφωμένο διαμέρισμα 8 MB είναι απαραίτητο για την εκκίνηση του %1 σε ένα σύστημα BIOS με GPT.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="669"/>
      <source>Boot partition not encrypted</source>
      <translation>Το διαμέρισμα εκκίνησης δεν είναι κρυπτογραφημένο</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="670"/>
      <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
      <translation>Έχει ρυθμιστεί ένα ξεχωριστό διαμέρισμα εκκίνησης (boot) μαζί με ένα κρυπτογραφημένο διαμέρισμα ρίζας (root), αλλά το διαμέρισμα εκκίνησης δεν είναι κρυπτογραφημένο.&lt;br/&gt;&lt;br/&gt;Υπάρχουν ανησυχίες ασφαλείας σε αυτού του είδους τη διαμόρφωση, επειδή σημαντικά αρχεία του συστήματος διατηρούνται σε ένα μη κρυπτογραφημένο διαμέρισμα.&lt;br/&gt;Μπορείτε να συνεχίσετε εάν το επιθυμείτε, αλλά το ξεκλείδωμα του συστήματος αρχείων θα πραγματοποιηθεί αργότερα κατά την εκκίνηση του συστήματος.&lt;br/&gt;Για να κρυπτογραφήσετε το διαμέρισμα εκκίνησης, επιστρέψτε και δημιουργήστε το ξανά, επιλέγοντας &lt;strong&gt;Κρυπτογράφηση&lt;/strong&gt; στο παράθυρο δημιουργίας διαμερισμάτων.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="762"/>
      <source>has at least one disk device available.</source>
      <translation>διαθέτει τουλάχιστον μία συσκευή δίσκου.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="763"/>
      <source>There are no partitions to install on.</source>
      <translation>Δεν υπάρχουν διαμερίσματα για την εγκατάσταση.</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfJob</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="33"/>
      <source>Applying Plasma Look-and-Feel…</source>
      <comment>@status</comment>
      <translation>Εφαρμογή εμφάνισης και αίσθησης στο Plasma…</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="57"/>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="58"/>
      <source>Could not select KDE Plasma Look-and-Feel package</source>
      <translation>Δεν ήταν δυνατή η επιλογή πακέτου εμφάνισης και αίσθησης για το KDE Plasma</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfPage</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="80"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Επιλέξτε μια εμφάνιση και αίσθηση για το KDE Plasma Desktop. Μπορείτε επίσης να παραλείψετε αυτό το βήμα και να ορίσετε αυτές τις ρυθμίσεις μόλις εγκατασταθεί στο σύστημα. Κάνοντας κλικ σε μια επιλογή, θα εμφανιστεί μια ζωντανή προεπισκόπηση της αντίστοιχης εμφάνισης και αίσθησης.</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="87"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Επιλέξτε μια εμφάνιση και αίσθηση για το KDE Plasma Desktop. Μπορείτε επίσης να παραλείψετε αυτό το βήμα και να ορίσετε αυτές τις ρυθμίσεις μόλις εγκατασταθεί στο σύστημα. Κάνοντας κλικ σε μια επιλογή, θα εμφανιστεί μια ζωντανή προεπισκόπηση της αντίστοιχης εμφάνισης και αίσθησης.</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfViewStep</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="43"/>
      <source>Look-and-Feel</source>
      <comment>@label</comment>
      <translation>Εμφάνιση και αίσθηση</translation>
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
      <translation>Εγκατάσταση σε εξέλιξη</translation>
    </message>
  </context>
  <context>
    <name>PreserveFiles</name>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="56"/>
      <source>Saving files for later…</source>
      <comment>@status</comment>
      <translation>Αποθήκευση αρχείων για αργότερα…</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="64"/>
      <source>No files configured to save for later.</source>
      <translation>Δεν έχουν ρυθμιστεί αρχεία για αποθήκευση για αργότερα.</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="88"/>
      <source>Not all of the configured files could be preserved.</source>
      <translation>Δεν ήταν δυνατή η διατήρηση όλων των διαμορφωμένων αρχείων.</translation>
    </message>
  </context>
  <context>
    <name>ProcessResult</name>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="301"/>
      <source>
There was no output from the command.</source>
      <translation>
Δεν προέκυψε έξοδος από την εντολή.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="302"/>
      <source>
Output:
</source>
      <translation>
Έξοδος:
</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="307"/>
      <source>External command crashed.</source>
      <translation>Η εξωτερική εντολή κατέρρευσε.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="308"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
      <translation>Η εντολή &lt;i&gt;%1&lt;/i&gt; κατέρρευσε.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="315"/>
      <source>External command failed to start.</source>
      <translation>Η εκκίνηση της εξωτερικής εντολής απέτυχε.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="316"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
      <translation>Η εκκίνηση της &lt;i&gt;εντολής %1&lt;/i&gt; απέτυχε.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="322"/>
      <source>Internal error when starting command.</source>
      <translation>Εσωτερικό σφάλμα κατά την εκκίνηση της εντολής.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="323"/>
      <source>Bad parameters for process job call.</source>
      <translation>Εσφαλμένοι παράμετροι για την κλήση εργασίας.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="329"/>
      <source>External command failed to finish.</source>
      <translation>Η εξωτερική εντολή απέτυχε να ολοκληρωθεί.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="330"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
      <translation>Η εντολή &lt;i&gt;%1&lt;/i&gt; απέτυχε να ολοκληρωθεί σε %2 δευτερόλεπτα.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="338"/>
      <source>External command finished with errors.</source>
      <translation>Η εξωτερική εντολή ολοκληρώθηκε με σφάλματα.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="339"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
      <translation>Η εντολή &lt;i&gt;%1&lt;/i&gt; ολοκληρώθηκε με κωδικό εξόδου %2.</translation>
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
      <translation>άγνωστο</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
      <source>extended</source>
      <comment>@partition info</comment>
      <translation>εκτεταμένο</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
      <source>unformatted</source>
      <comment>@partition info</comment>
      <translation>μη διαμορφωμένο</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
      <source>swap</source>
      <comment>@partition info</comment>
      <translation>swap</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="145"/>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="192"/>
      <source>Default</source>
      <translation>Προεπιλογή</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="101"/>
      <source>Directory not found</source>
      <translation>Ο κατάλογος δεν βρέθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="102"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation>Δεν ήταν δυνατή η δημιουργία νέου τυχαίου αρχείου &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
      <source>No product</source>
      <translation>Κανένα προϊόν</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
      <source>No description provided.</source>
      <translation>Δεν παρέχεται περιγραφή.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
      <source>(no mount point)</source>
      <translation>(χωρίς σημείο προσάρτησης)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="39"/>
      <source>Unpartitioned space or unknown partition table</source>
      <comment>@info</comment>
      <translation>Μη κατανεμημένος χώρος ή άγνωστος πίνακας διαμερισμάτων</translation>
    </message>
  </context>
  <context>
    <name>Recommended</name>
    <message>
      <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Αυτός ο υπολογιστής δεν πληροί ορισμένες από τις προτεινόμενες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;
        Η εγκατάσταση μπορεί να συνεχιστεί, αλλά ορισμένες λειτουργίες ενδέχεται να απενεργοποιηθούν.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>RemoveUserJob</name>
    <message>
      <location filename="../src/modules/removeuser/RemoveUserJob.cpp" line="32"/>
      <source>Removing live user from the target system…</source>
      <comment>@status</comment>
      <translation>Κατάργηση live χρήστη από το σύστημα προορισμού…</translation>
    </message>
  </context>
  <context>
    <name>RemoveVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
      <source>Removing Volume Group named %1…</source>
      <comment>@status</comment>
      <translation>Κατάργηση ομάδας τόμων με το όνομα «%1»…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
      <source>Removing Volume Group named &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Κατάργηση ομάδας τόμων με το όνομα &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
      <source>The installer failed to remove a volume group named '%1'.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να καταργήσει μια ομάδα τόμων με το όνομα «%1».</translation>
    </message>
  </context>
  <context>
    <name>Requirements</name>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="37"/>
      <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Αυτός ο υπολογιστής δεν πληροί τις ελάχιστες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;
        Η εγκατάσταση δεν μπορεί να συνεχιστεί.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="39"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Αυτός ο υπολογιστής δεν πληροί ορισμένες από τις προτεινόμενες απαιτήσεις για την εγκατάσταση του %1.&lt;br/&gt;
        Η εγκατάσταση μπορεί να συνεχιστεί, αλλά ορισμένες λειτουργίες ενδέχεται να απενεργοποιηθούν.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>ResizeFSJob</name>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="43"/>
      <source>Performing file system resize…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση αλλαγής μεγέθους στο σύστημα αρχείων…</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="162"/>
      <source>Invalid configuration</source>
      <comment>@error</comment>
      <translation>Μη έγκυρη διαμόρφωση</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="163"/>
      <source>The file-system resize job has an invalid configuration and will not run.</source>
      <comment>@error</comment>
      <translation>Η εργασία αλλαγής μεγέθους του συστήματος αρχείων δεν έχει έγκυρη διαμόρφωση και δεν θα εκτελεστεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="170"/>
      <source>KPMCore not available</source>
      <comment>@error</comment>
      <translation>Μη διαθέσιμο KPMCore</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="171"/>
      <source>Calamares cannot start KPMCore for the file system resize job.</source>
      <comment>@error</comment>
      <translation>Το Calamares δεν μπορεί να εκκινήσει το KPMCore για την εργασία αλλαγής μεγέθους του συστήματος αρχείων.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="180"/>
      <source>Resize failed.</source>
      <comment>@error</comment>
      <translation>Η αλλαγή μεγέθους απέτυχε.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="182"/>
      <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
      <comment>@info</comment>
      <translation>Δεν ήταν δυνατή η εύρεση του συστήματος αρχείων %1 σε αυτό το σύστημα και δεν είναι δυνατή η αλλαγή του μεγέθους του.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="184"/>
      <source>The device %1 could not be found in this system, and cannot be resized.</source>
      <comment>@info</comment>
      <translation>Δεν ήταν δυνατή η εύρεση της συσκευής %1 σε αυτό το σύστημα και δεν είναι δυνατή η αλλαγή του μεγέθους της.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="193"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="205"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="215"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="234"/>
      <source>Resize Failed</source>
      <comment>@error</comment>
      <translation>Αποτυχία αλλαγής μεγέθους</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="194"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
      <source>The filesystem %1 cannot be resized.</source>
      <comment>@error</comment>
      <translation>Δεν είναι δυνατή η αλλαγή του μεγέθους του συστήματος αρχείων %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="195"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
      <source>The device %1 cannot be resized.</source>
      <comment>@error</comment>
      <translation>Δεν είναι δυνατή η αλλαγή του μεγέθους της συσκευής %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="216"/>
      <source>The file system %1 must be resized, but cannot.</source>
      <comment>@info</comment>
      <translation>Το μέγεθος του συστήματος αρχείων %1 πρέπει να αλλάξει, αλλά αυτό δεν είναι δυνατό.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="217"/>
      <source>The device %1 must be resized, but cannot</source>
      <comment>@info</comment>
      <translation>Το μέγεθος της συσκευής %1 πρέπει να αλλάξει, αλλά αυτό δεν είναι δυνατό.</translation>
    </message>
  </context>
  <context>
    <name>ResizePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="39"/>
      <source>Resize partition %1</source>
      <comment>@title</comment>
      <translation>Αλλαγή μεγέθους διαμερίσματος %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="45"/>
      <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Αλλαγή μεγέθους του διαμερίσματος &lt;strong&gt;%1&lt;/strong&gt; μεγέθους &lt;strong&gt;%2MiB&lt;/strong&gt; σε &lt;strong&gt;%3MiB&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="54"/>
      <source>Resizing %2MiB partition %1 to %3MiB…</source>
      <comment>@status</comment>
      <translation>Αλλαγή μεγέθους διαμερίσματος %1 μεγέθους %2MiB σε %3MiB…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="70"/>
      <source>The installer failed to resize partition %1 on disk '%2'.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να αλλάξει το μέγεθος του διαμερίσματος %1 στον δίσκο «%2».</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
      <source>Resize Volume Group</source>
      <comment>@title</comment>
      <translation>Αλλαγή μεγέθους ομάδας τόμων</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
      <source>Resize volume group named %1 from %2 to %3</source>
      <comment>@title</comment>
      <translation>Αλλαγή μεγέθους ομάδας τόμων με όνομα %1 από %2 σε %3</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
      <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Αλλαγή μεγέθους της ομάδας τόμου με όνομα &lt;strong&gt;%1&lt;/strong&gt; από &lt;strong&gt;%2&lt;/strong&gt; σε &lt;strong&gt;%3&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="47"/>
      <source>Resizing volume group named %1 from %2 to %3…</source>
      <comment>@status</comment>
      <translation>Αλλαγή μεγέθους ομάδας τόμων με όνομα %1 από %2 σε %3…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="58"/>
      <source>The installer failed to resize a volume group named '%1'.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να αλλάξει το μέγεθος μιας ομάδας τόμων με το όνομα «%1».</translation>
    </message>
  </context>
  <context>
    <name>ResultsListWidget</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="47"/>
      <source>Checking requirements again in a few seconds ...</source>
      <translation>Έλεγχος απαιτήσεων ξανά σε λίγα δευτερόλεπτα...</translation>
    </message>
  </context>
  <context>
    <name>ScanningDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="69"/>
      <source>Scanning storage devices…</source>
      <comment>@status</comment>
      <translation>Σάρωση συσκευών αποθήκευσης…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="69"/>
      <source>Partitioning…</source>
      <comment>@status</comment>
      <translation>Διαμέριση…</translation>
    </message>
  </context>
  <context>
    <name>SetHostNameJob</name>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="36"/>
      <source>Set hostname %1</source>
      <translation>Ορισμός ονόματος υπολογιστή %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="42"/>
      <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Ορισμός ονόματος υπολογιστή &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="48"/>
      <source>Setting hostname %1…</source>
      <comment>@status</comment>
      <translation>Ορισμός ονόματος υπολογιστή %1…</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="121"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="128"/>
      <source>Internal Error</source>
      <translation>Εσωτερικό σφάλμα</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="139"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="156"/>
      <source>Cannot write hostname to target system</source>
      <translation>Δεν είναι δυνατή η εγγραφή του ονόματος υπολογιστή στο σύστημα προορισμού</translation>
    </message>
  </context>
  <context>
    <name>SetKeyboardLayoutJob</name>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="66"/>
      <source>Setting keyboard model to %1, layout as %2-%3…</source>
      <comment>@status, %1 model, %2 layout, %3 variant</comment>
      <translation>Ορισμός μοντέλου πληκτρολογίου σε %1, με διάταξη: %2-%3…</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="371"/>
      <source>Failed to write keyboard configuration for the virtual console.</source>
      <comment>@error</comment>
      <translation>Η εγγραφή της διαμόρφωσης πληκτρολογίου για την εικονική κονσόλα απέτυχε.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="372"/>
      <source>Failed to write to %1</source>
      <comment>@error, %1 is virtual console configuration path</comment>
      <translation>Αποτυχία εγγραφής στο %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="399"/>
      <source>Failed to write keyboard configuration for X11.</source>
      <comment>@error</comment>
      <translation>Η εγγραφή της διαμόρφωσης πληκτρολογίου για το X11 απέτυχε.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="400"/>
      <source>Failed to write to %1</source>
      <comment>@error, %1 is keyboard configuration path</comment>
      <translation>Αποτυχία εγγραφής στο %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="416"/>
      <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
      <comment>@error</comment>
      <translation>Η εγγραφή της διαμόρφωσης πληκτρολογίου στον υπάρχοντα κατάλογο /etc/default απέτυχε.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="417"/>
      <source>Failed to write to %1</source>
      <comment>@error, %1 is default keyboard path</comment>
      <translation>Αποτυχία εγγραφής στο %1</translation>
    </message>
  </context>
  <context>
    <name>SetPartFlagsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="44"/>
      <source>Set flags on partition %1</source>
      <comment>@title</comment>
      <translation>Ορισμός σημαιών στο διαμέρισμα %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="50"/>
      <source>Set flags on %1MiB %2 partition</source>
      <comment>@title</comment>
      <translation>Ορισμός σημαιών στο διαμέρισμα %2 μεγέθους %1MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="54"/>
      <source>Set flags on new partition</source>
      <comment>@title</comment>
      <translation>Ορισμός σημαιών στο νέο διαμέρισμα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
      <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Απαλοιφή των σημαιών στο διαμέρισμα &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
      <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition</source>
      <comment>@info</comment>
      <translation>Απαλοιφή των σημαιών στο διαμέρισμα &lt;strong&gt;%2&lt;/strong&gt; μεγέθους %1MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
      <source>Clear flags on new partition</source>
      <comment>@info</comment>
      <translation>Απαλοιφή των σημαιών στο νέο διαμέρισμα</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
      <source>Set flags on partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%2&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Ορισμός σημαιών στο διαμέρισμα &lt;strong&gt;%1&lt;/strong&gt; για &lt;strong&gt;%2&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="88"/>
      <source>Set flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition to &lt;strong&gt;%3&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Ορισμός σημαιών στο διαμέρισμα &lt;strong&gt;%2&lt;/strong&gt; μεγέθους %1MiB για &lt;strong&gt;%3&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="94"/>
      <source>Set flags on new partition to &lt;strong&gt;%1&lt;/strong&gt;</source>
      <comment>@info</comment>
      <translation>Ορισμός σημαιών στο νέο διαμέρισμα για &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="105"/>
      <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Απαλοιφή σημαιών στο διαμέρισμα &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="112"/>
      <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition…</source>
      <comment>@status</comment>
      <translation>Απαλοιφή σημαιών στο διαμέρισμα &lt;strong&gt;%2&lt;/strong&gt; μεγέθους %1MiB…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="117"/>
      <source>Clearing flags on new partition…</source>
      <comment>@status</comment>
      <translation>Απαλοιφή σημαιών στο νέο διαμέρισμα…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="122"/>
      <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;…</source>
      <comment>@status</comment>
      <translation>Ορισμός σημαιών &lt;strong&gt;%2&lt;/strong&gt; στο διαμέρισμα &lt;strong&gt;%1&lt;/strong&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="130"/>
      <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition…</source>
      <comment>@status</comment>
      <translation>Ορισμός σημαιών &lt;strong&gt;%3&lt;/strong&gt; στο διαμέρισμα &lt;strong&gt;%2&lt;/strong&gt; μεγέθους %1MiB…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="136"/>
      <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition…</source>
      <comment>@status</comment>
      <translation>Ορισμός σημαιών &lt;strong&gt;%1&lt;/strong&gt; στο νέο διαμέρισμα…</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="149"/>
      <source>The installer failed to set flags on partition %1.</source>
      <translation>Το πρόγραμμα εγκατάστασης απέτυχε να ορίσει σημαίες στο διαμέρισμα %1.</translation>
    </message>
  </context>
  <context>
    <name>SetPasswordJob</name>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="38"/>
      <source>Set password for user %1</source>
      <translation>Ορισμός κωδικού πρόσβασης για τον χρήστη %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="44"/>
      <source>Setting password for user %1…</source>
      <comment>@status</comment>
      <translation>Ορισμός κωδικού πρόσβασης για τον χρήστη %1…</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="80"/>
      <source>Bad destination system path.</source>
      <translation>Εσφαλμένη διαδρομή συστήματος προορισμού.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
      <source>rootMountPoint is %1</source>
      <translation>Το rootMountPoint είναι %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
      <source>Cannot disable root account.</source>
      <translation>Δεν είναι δυνατή η απενεργοποίηση του λογαριασμού root.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="90"/>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="108"/>
      <source>usermod terminated with error code %1.</source>
      <translation>Το usermod τερματίστηκε με κωδικό σφάλματος %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="107"/>
      <source>Cannot set password for user %1.</source>
      <translation>Δεν είναι δυνατός ο ορισμός κωδικού πρόσβασης για τον χρήστη %1.</translation>
    </message>
  </context>
  <context>
    <name>SetTimezoneJob</name>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="32"/>
      <source>Setting timezone to %1/%2…</source>
      <comment>@status</comment>
      <translation>Ορισμός ζώνης ώρας σε %1/%2…</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="60"/>
      <source>Cannot access selected timezone path.</source>
      <comment>@error</comment>
      <translation>Δεν είναι δυνατή η πρόσβαση στην επιλεγμένη διαδρομή ζώνης ώρας.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="61"/>
      <source>Bad path: %1</source>
      <comment>@error</comment>
      <translation>Εσφαλμένη διαδρομή: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="70"/>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="80"/>
      <source>Cannot set timezone.</source>
      <comment>@error</comment>
      <translation>Δεν είναι δυνατός ο ορισμός της ζώνης ώρας.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
      <source>Link creation failed, target: %1; link name: %2</source>
      <comment>@info</comment>
      <translation>Η δημιουργία συνδέσμου απέτυχε, προορισμός: %1· όνομα συνδέσμου: %2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="81"/>
      <source>Cannot open /etc/timezone for writing</source>
      <comment>@info</comment>
      <translation>Δεν είναι δυνατό το άνοιγμα του /etc/timezone για εγγραφή</translation>
    </message>
  </context>
  <context>
    <name>SetupGroupsJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="181"/>
      <source>Preparing groups…</source>
      <comment>@status</comment>
      <translation>Προετοιμασία ομάδων…</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="193"/>
      <location filename="../src/modules/users/MiscJobs.cpp" line="198"/>
      <source>Could not create groups in target system</source>
      <translation>Δεν ήταν δυνατή η δημιουργία ομάδων στο σύστημα προορισμού</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="199"/>
      <source>These groups are missing in the target system: %1</source>
      <translation>Αυτές οι ομάδες λείπουν από το σύστημα προορισμού: %1</translation>
    </message>
  </context>
  <context>
    <name>SetupSudoJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="34"/>
      <source>Configuring &lt;pre&gt;sudo&lt;/pre&gt; users…</source>
      <comment>@status</comment>
      <translation>Διαμόρφωση χρηστών &lt;pre&gt;sudo&lt;/pre&gt;…</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="70"/>
      <source>Cannot chmod sudoers file.</source>
      <translation>Δεν είναι δυνατή η εκτέλεση chmod στο αρχείο sudoers.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="75"/>
      <source>Cannot create sudoers file for writing.</source>
      <translation>Δεν είναι δυνατή η δημιουργία αρχείου sudoers για εγγραφή.</translation>
    </message>
  </context>
  <context>
    <name>ShellProcessJob</name>
    <message>
      <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="38"/>
      <source>Running shell processes…</source>
      <comment>@status</comment>
      <translation>Εκτέλεση διεργασιών κελύφους…</translation>
    </message>
  </context>
  <context>
    <name>SlideCounter</name>
    <message>
      <location filename="../src/qml/calamares-qt5/slideshow/SlideCounter.qml" line="27"/>
      <location filename="../src/qml/calamares-qt6/slideshow/SlideCounter.qml" line="27"/>
      <source>%L1 / %L2</source>
      <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
      <translation>%L1/%L2</translation>
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
      <translation>&amp;Ναι</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="25"/>
      <source>&amp;No</source>
      <translation>Ό&amp;χι</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="26"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Ακύρωση</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="27"/>
      <source>&amp;Close</source>
      <translation>&amp;Κλείσιμο</translation>
    </message>
  </context>
  <context>
    <name>TarballRunner</name>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="26"/>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="45"/>
      <source>Invalid tarball configuration</source>
      <translation>Μη έγκυρη διαμόρφωση tarball</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="27"/>
      <source>The source archive &lt;i&gt;%1&lt;/i&gt; does not exist.</source>
      <translation>Το αρχείο προέλευσης &lt;i&gt;%1&lt;/i&gt; δεν υπάρχει.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="36"/>
      <source>Missing tools</source>
      <translation>Απουσία εργαλείων</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="37"/>
      <source>The &lt;i&gt;%1&lt;/i&gt; tool is not installed on the system.</source>
      <translation>Το εργαλείο &lt;i&gt;%1&lt;/i&gt; δεν είναι εγκατεστημένο στο σύστημα.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="46"/>
      <source>No destination could be found for &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Δεν ήταν δυνατή η εύρεση προορισμού για το &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/TarballRunner.cpp" line="84"/>
      <source>Tarball extract file %1</source>
      <translation>Αποσυμπίεση αρχείου tarball %1</translation>
    </message>
  </context>
  <context>
    <name>TrackingInstallJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="100"/>
      <source>Installation feedback</source>
      <translation>Σχόλια εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="106"/>
      <source>Sending installation feedback…</source>
      <comment>@status</comment>
      <translation>Αποστολή σχολίων εγκατάστασης…</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="124"/>
      <source>Internal error in install-tracking.</source>
      <translation>Εσωτερικό σφάλμα στην παρακολούθηση της εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="125"/>
      <source>HTTP request timed out.</source>
      <translation>Το χρονικό όριο του αιτήματος HTTP έληξε.</translation>
    </message>
  </context>
  <context>
    <name>TrackingKUserFeedbackJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="192"/>
      <source>KDE user feedback</source>
      <translation>Σχόλια χρηστών KDE</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="198"/>
      <source>Configuring KDE user feedback…</source>
      <comment>@status</comment>
      <translation>Ρύθμιση σχολίων χρήστη KDE…</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="220"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="228"/>
      <source>Error in KDE user feedback configuration.</source>
      <translation>Σφάλμα στη διαμόρφωση σχολίων χρήστη του KDE.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="221"/>
      <source>Could not configure KDE user feedback correctly, script error %1.</source>
      <translation>Δεν ήταν δυνατή η σωστή ρύθμιση των σχολίων χρήστη KDE, σφάλμα σεναρίου %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="229"/>
      <source>Could not configure KDE user feedback correctly, Calamares error %1.</source>
      <translation>Δεν ήταν δυνατή η σωστή ρύθμιση των σχολίων χρήστη KDE, σφάλμα Calamares %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingMachineUpdateManagerJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="135"/>
      <source>Machine feedback</source>
      <translation>Ανατροφοδότηση μηχανήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="141"/>
      <source>Configuring machine feedback…</source>
      <comment>@status</comment>
      <translation>Διαμόρφωση ανατροφοδότησης μηχανήματος…</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="164"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="173"/>
      <source>Error in machine feedback configuration.</source>
      <translation>Σφάλμα στη διαμόρφωση της ανατροφοδότησης του μηχανήματος.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="166"/>
      <source>Could not configure machine feedback correctly, script error %1.</source>
      <translation>Δεν ήταν δυνατή η σωστή ρύθμιση της ανατροφοδότησης μηχανήματος, σφάλμα σεναρίου %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="175"/>
      <source>Could not configure machine feedback correctly, Calamares error %1.</source>
      <translation>Δεν ήταν δυνατή η σωστή ρύθμιση της ανατροφοδότησης μηχανήματος, σφάλμα Calamares %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingPage</name>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="28"/>
      <source>Placeholder</source>
      <translation>Σύμβολο κράτησης θέσης</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="76"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click here to send &lt;span style=" font-weight:600;"&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Κάντε κλικ εδώ για να μην στείλετε &lt;span style=" font-weight:600;"&gt;καμία πληροφορία&lt;/span&gt; σχετικά με την εγκατάστασή σας.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="275"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Κάντε κλικ εδώ για περισσότερες πληροφορίες σχετικά με τα σχόλια των χρηστών&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="95"/>
      <source>Tracking helps %1 to see how often it is installed, what hardware it is installed on and which applications are used. To see what will be sent, please click the help icon next to each area.</source>
      <translation>Η παρακολούθηση βοηθά το %1 να δει πόσο συχνά εγκαθίσταται, σε τι υλικό γίνεται η εγκατάσταση και ποιες εφαρμογές χρησιμοποιούνται. Για να δείτε τι πρόκειται να σταλεί, κάντε κλικ στο εικονίδιο βοήθειας δίπλα σε κάθε ενότητα.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="100"/>
      <source>By selecting this you will send information about your installation and hardware. This information will only be sent &lt;b&gt;once&lt;/b&gt; after the installation finishes.</source>
      <translation>Αυτή η επιλογή θα στείλει πληροφορίες σχετικά με την εγκατάσταση και το υλικό σας. Αυτές οι πληροφορίες θα σταλούν μόνο &lt;b&gt;μία φορά&lt;/b&gt; μετά την ολοκλήρωση της εγκατάστασης.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="103"/>
      <source>By selecting this you will periodically send information about your &lt;b&gt;machine&lt;/b&gt; installation, hardware and applications, to %1.</source>
      <translation>Αυτή η επιλογή θα στέλνει περιοδικά πληροφορίες σχετικά με την εγκατάσταση, το υλικό και τις εφαρμογές του &lt;b&gt;μηχανήματος&lt;/b&gt;, στο %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="107"/>
      <source>By selecting this you will regularly send information about your &lt;b&gt;user&lt;/b&gt; installation, hardware, applications and application usage patterns, to %1.</source>
      <translation>Αυτή η επιλογή θα στέλνει τακτικά πληροφορίες σχετικά με την εγκατάσταση &lt;b&gt;χρήστη&lt;/b&gt;, το υλικό, τις εφαρμογές και τα μοτίβα χρήσης των εφαρμογών, στο %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingViewStep</name>
    <message>
      <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="49"/>
      <source>Feedback</source>
      <comment>@title</comment>
      <translation>Σχόλια</translation>
    </message>
  </context>
  <context>
    <name>UmountJob</name>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="39"/>
      <source>Unmounting file systems…</source>
      <comment>@status</comment>
      <translation>Αποπροσάρτηση συστημάτων αρχείων…</translation>
    </message>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="135"/>
      <source>No target system available.</source>
      <translation>Δεν διατίθεται σύστημα προορισμού.</translation>
    </message>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="143"/>
      <source>No rootMountPoint is set.</source>
      <translation>Δεν έχει οριστεί rootMountPoint.</translation>
    </message>
  </context>
  <context>
    <name>UnpackFSCJob</name>
    <message>
      <location filename="../src/modules/unpackfsc/UnpackFSCJob.cpp" line="61"/>
      <source>Unpack filesystems</source>
      <translation>Ξεπακετάρισμα συστήματος αρχείων</translation>
    </message>
  </context>
  <context>
    <name>UnsquashRunner</name>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="26"/>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="45"/>
      <source>Invalid unsquash configuration</source>
      <translation>Μη έγκυρη διαμόρφωση αποσυμπίεσης squash</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="27"/>
      <source>The source archive &lt;i&gt;%1&lt;/i&gt; does not exist.</source>
      <translation>Το αρχείο προέλευσης &lt;i&gt;%1&lt;/i&gt; δεν υπάρχει.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="36"/>
      <source>Missing tools</source>
      <translation>Απουσία εργαλείων</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="37"/>
      <source>The &lt;i&gt;%1&lt;/i&gt; tool is not installed on the system.</source>
      <translation>Το εργαλείο &lt;i&gt;%1&lt;/i&gt; δεν είναι εγκατεστημένο στο σύστημα.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="46"/>
      <source>No destination could be found for &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Δεν ήταν δυνατή η εύρεση προορισμού για το &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/unpackfsc/UnsquashRunner.cpp" line="98"/>
      <source>Unsquash file %1</source>
      <translation>Αποσυμπίεση αρχείου squash %1</translation>
    </message>
  </context>
  <context>
    <name>UsersPage</name>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="199"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Εάν ο υπολογιστής πρόκειται να χρησιμοποιηθεί από περισσότερα από ένα άτομα, θα μπορέσετε να δημιουργήσετε πολλαπλούς λογαριασμούς μετά την εγκατάσταση.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="205"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Εάν ο υπολογιστής πρόκειται να χρησιμοποιηθεί από περισσότερα από ένα άτομα, θα μπορέσετε να δημιουργήσετε πολλαπλούς λογαριασμούς μετά την εγκατάσταση.&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>UsersQmlViewStep</name>
    <message>
      <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
      <source>Users</source>
      <translation>Χρήστες</translation>
    </message>
  </context>
  <context>
    <name>UsersViewStep</name>
    <message>
      <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
      <source>Users</source>
      <translation>Χρήστες</translation>
    </message>
  </context>
  <context>
    <name>VariantModel</name>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="246"/>
      <source>Key</source>
      <comment>Column header for key/value</comment>
      <translation>Κλειδί</translation>
    </message>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="250"/>
      <source>Value</source>
      <comment>Column header for key/value</comment>
      <translation>Τιμή</translation>
    </message>
  </context>
  <context>
    <name>VolumeGroupBaseDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
      <source>Create Volume Group</source>
      <translation>Δημιουργία ομάδας τόμων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
      <source>List of Physical Volumes</source>
      <translation>Λίστα φυσικών τόμων</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
      <source>Volume Group Name:</source>
      <translation>Όνομα ομάδας τόμων:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
      <source>Volume Group Type:</source>
      <translation>Τύπος ομάδας τόμων:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
      <source>Physical Extent Size:</source>
      <translation>Μέγεθος φυσικής έκτασης:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
      <source> MiB</source>
      <translation> MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
      <source>Total Size:</source>
      <translation>Συνολικό μέγεθος:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
      <source>Used Size:</source>
      <translation>Σε χρήση:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
      <source>Total Sectors:</source>
      <translation>Σύνολο τομέων:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
      <source>Quantity of LVs:</source>
      <translation>Ποσότητα λογικών τόμων:</translation>
    </message>
  </context>
  <context>
    <name>WelcomePage</name>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
      <source>Select application and system language</source>
      <translation>Επιλογή γλώσσας εφαρμογών και συστήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
      <source>Open donations website</source>
      <translation>Άνοιγμα ιστοτόπου δωρεών</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="143"/>
      <source>&amp;Donate</source>
      <translation>&amp;Δωρεά</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
      <source>Open help and support website</source>
      <translation>Άνοιγμα ιστοτόπου βοήθειας και υποστήριξης</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="156"/>
      <source>&amp;Support</source>
      <translation>&amp;Υποστήριξη</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="166"/>
      <source>Open issues and bug-tracking website</source>
      <translation>Άνοιγμα ιστοτόπου ζητημάτων και παρακολούθησης σφαλμάτων</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="169"/>
      <source>&amp;Known issues</source>
      <translation>&amp;Γνωστά προβλήματα</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="179"/>
      <source>Open release notes website</source>
      <translation>Άνοιγμα ιστοτόπου σημειώσεων έκδοσης</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="182"/>
      <source>&amp;Release notes</source>
      <translation>Ση&amp;μειώσεις έκδοσης</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="237"/>
      <source>About %1 Setup</source>
      <comment>@title</comment>
      <translation>Σχετικά με το πρόγραμμα εγκατάστασης %1</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="238"/>
      <source>About %1 Installer</source>
      <comment>@title</comment>
      <translation>Σχετικά με το πρόγραμμα εγκατάστασης %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="213"/>
      <source>%1 Support</source>
      <comment>@action</comment>
      <translation>Υποστήριξη για το %1</translation>
    </message>
  </context>
  <context>
    <name>WelcomeQmlViewStep</name>
    <message>
      <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
      <source>Welcome</source>
      <comment>@title</comment>
      <translation>Υποδοχή</translation>
    </message>
  </context>
  <context>
    <name>WelcomeViewStep</name>
    <message>
      <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
      <source>Welcome</source>
      <comment>@title</comment>
      <translation>Υποδοχή</translation>
    </message>
  </context>
  <context>
    <name>ZfsJob</name>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="102"/>
      <source>Creating ZFS pools and datasets…</source>
      <comment>@status</comment>
      <translation>Δημιουργία δεξαμενών και συνόλων δεδομένων ZFS…</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="162"/>
      <source>Failed to create zpool on </source>
      <translation>Αποτυχία δημιουργίας zpool στο </translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="180"/>
      <source>Configuration Error</source>
      <translation>Σφάλμα διαμόρφωσης</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="181"/>
      <source>No partitions are available for ZFS.</source>
      <translation>Δεν διατίθενται διαμερίσματα για το ZFS.</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
      <source>Internal data missing</source>
      <translation>Απουσία εσωτερικών δεδομένων</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="264"/>
      <source>Failed to create zpool</source>
      <translation>Αποτυχία δημιουργίας zpool</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="336"/>
      <source>Failed to create dataset</source>
      <translation>Αποτυχία δημιουργίας συνόλου δεδομένων</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="337"/>
      <source>The output was: </source>
      <translation>Η έξοδος ήταν: </translation>
    </message>
  </context>
  <context>
    <name>calamares-sidebar</name>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="89"/>
      <source>About</source>
      <translation>Πληροφορίες</translation>
    </message>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="115"/>
      <source>Debug</source>
      <translation>Εντοπισμός σφαλμάτων</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="157"/>
      <source>About</source>
      <comment>@button</comment>
      <translation>Πληροφορίες</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="159"/>
      <source>Show information about Calamares</source>
      <comment>@tooltip</comment>
      <translation>Εμφάνιση πληροφοριών για το Calamares</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="173"/>
      <source>Debug</source>
      <comment>@button</comment>
      <translation>Εντοπισμός σφαλμάτων</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="175"/>
      <source>Show debug information</source>
      <comment>@tooltip</comment>
      <translation>Εμφάνιση πληροφοριών εντοπισμού σφαλμάτων</translation>
    </message>
  </context>
  <context>
    <name>finishedq</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="36"/>
      <source>Installation Completed</source>
      <translation>Η εγκατάσταση ολοκληρώθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
      <translation>Το %1 έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;
            Μπορείτε τώρα να κάνετε επανεκκίνηση στο νέο σας σύστημα ή να συνεχίσετε να χρησιμοποιείτε το Live περιβάλλον.</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="65"/>
      <source>Close Installer</source>
      <translation>Κλείσιμο προγράμματος εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="71"/>
      <source>Restart System</source>
      <translation>Επανεκκίνηση συστήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="89"/>
      <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to /var/log/installation.log of the target system.&lt;/p&gt;</source>
      <translation>&lt;p&gt;Ένα πλήρες αρχείο καταγραφής της εγκατάστασης είναι διαθέσιμο ως installation.log στον προσωπικό κατάλογο του Live χρήστη.&lt;br/&gt;
            Αυτό το αρχείο έχει αντιγραφεί στο /var/log/installation.log του συστήματος προορισμού.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>finishedq-qt6</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="35"/>
      <source>Installation Completed</source>
      <comment>@title</comment>
      <translation>Η εγκατάσταση ολοκληρώθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="42"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
      <comment>@info, %1 is the product name</comment>
      <translation>Το %1 έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;
            Μπορείτε τώρα να κάνετε επανεκκίνηση στο νέο σας σύστημα ή να συνεχίσετε να χρησιμοποιείτε το Live περιβάλλον.</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="65"/>
      <source>Close Installer</source>
      <comment>@button</comment>
      <translation>Κλείσιμο προγράμματος εγκατάστασης</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="71"/>
      <source>Restart System</source>
      <comment>@button</comment>
      <translation>Επανεκκίνηση συστήματος</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq-qt6.qml" line="89"/>
      <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to /var/log/installation.log of the target system.&lt;/p&gt;</source>
      <comment>@info</comment>
      <translation>&lt;p&gt;Ένα πλήρες αρχείο καταγραφής της εγκατάστασης είναι διαθέσιμο ως installation.log στον προσωπικό κατάλογο του Live χρήστη.&lt;br/&gt;
            Αυτό το αρχείο έχει αντιγραφεί στο /var/log/installation.log του συστήματος προορισμού.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>finishedq@mobile</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="36"/>
      <source>Installation Completed</source>
      <comment>@title</comment>
      <translation>Η εγκατάσταση ολοκληρώθηκε</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
      <comment>@info, %1 is the product name</comment>
      <translation>Το %1 έχει εγκατασταθεί στον υπολογιστή σας.&lt;br/&gt;
            Μπορείτε τώρα να επανεκκινήσετε τη συσκευή σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="66"/>
      <source>Close</source>
      <comment>@button</comment>
      <translation>Κλείσιμο</translation>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="72"/>
      <source>Restart</source>
      <comment>@button</comment>
      <translation>Επανεκκίνηση</translation>
    </message>
  </context>
  <context>
    <name>keyboardq</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="61"/>
      <source>Select a layout to activate keyboard preview</source>
      <comment>@label</comment>
      <translation>Επιλέξτε μια διάταξη για να ενεργοποιήσετε την προεπισκόπηση πληκτρολογίου</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="144"/>
      <source>&lt;b&gt;Keyboard model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
      <comment>@label</comment>
      <translation>&lt;b&gt;Μοντέλο πληκτρολογίου:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="185"/>
      <source>Layout</source>
      <comment>@label</comment>
      <translation>Διάταξη</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="258"/>
      <source>Variant</source>
      <comment>@label</comment>
      <translation>Παραλλαγή</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="311"/>
      <source>Type here to test your keyboard…</source>
      <comment>@label</comment>
      <translation>Πληκτρολογήστε εδώ για να δοκιμάσετε το πληκτρολόγιό σας…</translation>
    </message>
  </context>
  <context>
    <name>keyboardq-qt6</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="61"/>
      <source>Select a layout to activate keyboard preview</source>
      <comment>@label</comment>
      <translation>Επιλέξτε μια διάταξη για να ενεργοποιήσετε την προεπισκόπηση πληκτρολογίου</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="144"/>
      <source>&lt;b&gt;Keyboard model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
      <comment>@label</comment>
      <translation>&lt;b&gt;Μοντέλο πληκτρολογίου:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="185"/>
      <source>Layout</source>
      <comment>@label</comment>
      <translation>Διάταξη</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="258"/>
      <source>Variant</source>
      <comment>@label</comment>
      <translation>Παραλλαγή</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq-qt6.qml" line="311"/>
      <source>Type here to test your keyboard…</source>
      <comment>@label</comment>
      <translation>Πληκτρολογήστε εδώ για να δοκιμάσετε το πληκτρολόγιό σας…</translation>
    </message>
  </context>
  <context>
    <name>localeq</name>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="76"/>
      <location filename="../src/modules/localeq/localeq.qml" line="106"/>
      <source>Change</source>
      <comment>@button</comment>
      <translation>Αλλαγή</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="142"/>
      <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Γλώσσες&lt;/h3&gt; &lt;/br&gt;
                            Οι τοπικές ρυθμίσεις του συστήματος επηρεάζουν τη γλώσσα και το σύνολο χαρακτήρων για ορισμένα στοιχεία του περιβάλλοντος χρήστη στη γραμμή εντολών. Η τρέχουσα ρύθμιση είναι: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="213"/>
      <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Τοπικές ρυθμίσεις&lt;/h3&gt; &lt;/br&gt;
                                Οι τοπικές ρυθμίσεις του συστήματος επηρεάζουν τη μορφή των αριθμών και των ημερομηνιών. Η τρέχουσα ρύθμιση είναι: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
  </context>
  <context>
    <name>localeq-qt6</name>
    <message>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="76"/>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="106"/>
      <source>Change</source>
      <comment>@button</comment>
      <translation>Αλλαγή</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="142"/>
      <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Γλώσσες&lt;/h3&gt; &lt;/br&gt;
                            Οι τοπικές ρυθμίσεις του συστήματος επηρεάζουν τη γλώσσα και το σύνολο χαρακτήρων για ορισμένα στοιχεία του περιβάλλοντος χρήστη στη γραμμή εντολών. Η τρέχουσα ρύθμιση είναι: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq-qt6.qml" line="213"/>
      <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <comment>@info</comment>
      <translation>&lt;h3&gt;Τοπικές ρυθμίσεις&lt;/h3&gt; &lt;/br&gt;
                                Οι τοπικές ρυθμίσεις του συστήματος επηρεάζουν τη μορφή των αριθμών και των ημερομηνιών. Η τρέχουσα ρύθμιση είναι: &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
  </context>
  <context>
    <name>notesqml</name>
    <message>
      <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;Αυτό είναι ένα παράδειγμα σημειώσεων έκδοσης.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>packagechooserq</name>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
      <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
      <translation>Το LibreOffice είναι μια ισχυρή και δωρεάν σουίτα γραφείου, που χρησιμοποιείται από εκατομμύρια ανθρώπους παγκοσμίως. Περιλαμβάνει πολλές εφαρμογές που το καθιστούν την πιο ευέλικτη, ελεύθερη σουίτα γραφείου ανοικτού κώδικα στην αγορά.&lt;br/&gt;
                    Προεπιλεγμένη επιλογή.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
      <source>LibreOffice</source>
      <translation>LibreOffice</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="108"/>
      <source>If you don't want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
      <translation>Εάν δεν θέλετε να εγκαταστήσετε μια σουίτα γραφείου, επιλέξτε απλώς «Χωρίς σουίτα γραφείου». Μπορείτε πάντα να προσθέσετε μία (ή περισσότερες) στο εγκατεστημένο σύστημά σας, εφόσον χρειαστεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="121"/>
      <source>No Office Suite</source>
      <translation>Χωρίς σουίτα γραφείου</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="172"/>
      <source>Create a minimal Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
      <translation>Δημιουργήστε μια ελάχιστη εγκατάσταση επιφάνειας εργασίας, καταργήστε όλες τις επιπλέον εφαρμογές και αποφασίστε αργότερα για το τι θέλετε να προσθέσετε στο σύστημά σας. Παραδείγματα για το τι δεν θα περιλαμβάνει μια τέτοια εγκατάσταση: σουίτα γραφείου, προγράμματα αναπαραγωγής πολυμέσων, προγράμματα προβολής εικόνων, υποστήριξη για εκτυπωτές. Θα υπάρχει απλώς μια επιφάνεια εργασίας, ένα πρόγραμμα περιήγησης αρχείων, ένας διαχειριστής πακέτων, ένα πρόγραμμα επεξεργασίας κειμένου και ένα απλό πρόγραμμα περιήγησης ιστού.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="185"/>
      <source>Minimal Install</source>
      <translation>Ελάχιστη εγκατάσταση</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="233"/>
      <source>Please select an option for your install, or use the default: LibreOffice included.</source>
      <translation>Κάντε μια επιλογή για την εγκατάστασή σας ή χρησιμοποιήστε την προεπιλογή: περιλαμβάνεται το LibreOffice.</translation>
    </message>
  </context>
  <context>
    <name>packagechooserq-qt6</name>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="45"/>
      <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
      <translation>Το LibreOffice είναι μια ισχυρή και δωρεάν σουίτα γραφείου, που χρησιμοποιείται από εκατομμύρια ανθρώπους παγκοσμίως. Περιλαμβάνει πολλές εφαρμογές που το καθιστούν την πιο ευέλικτη, ελεύθερη σουίτα γραφείου ανοικτού κώδικα στην αγορά.&lt;br/&gt;
                    Προεπιλεγμένη επιλογή.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="59"/>
      <source>LibreOffice</source>
      <translation>LibreOffice</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="108"/>
      <source>If you don't want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
      <translation>Εάν δεν θέλετε να εγκαταστήσετε μια σουίτα γραφείου, επιλέξτε απλώς «Χωρίς σουίτα γραφείου». Μπορείτε πάντα να προσθέσετε μία (ή περισσότερες) στο εγκατεστημένο σύστημά σας, εφόσον χρειαστεί.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="121"/>
      <source>No Office Suite</source>
      <translation>Χωρίς σουίτα γραφείου</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="172"/>
      <source>Create a minimal Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
      <translation>Δημιουργήστε μια ελάχιστη εγκατάσταση επιφάνειας εργασίας, καταργήστε όλες τις επιπλέον εφαρμογές και αποφασίστε αργότερα για το τι θέλετε να προσθέσετε στο σύστημά σας. Παραδείγματα για το τι δεν θα περιλαμβάνει μια τέτοια εγκατάσταση: σουίτα γραφείου, προγράμματα αναπαραγωγής πολυμέσων, προγράμματα προβολής εικόνων, υποστήριξη για εκτυπωτές. Θα υπάρχει απλώς μια επιφάνεια εργασίας, ένα πρόγραμμα περιήγησης αρχείων, ένας διαχειριστής πακέτων, ένα πρόγραμμα επεξεργασίας κειμένου και ένα απλό πρόγραμμα περιήγησης ιστού.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="185"/>
      <source>Minimal Install</source>
      <translation>Ελάχιστη εγκατάσταση</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq-qt6.qml" line="233"/>
      <source>Please select an option for your install, or use the default: LibreOffice included.</source>
      <translation>Κάντε μια επιλογή για την εγκατάστασή σας ή χρησιμοποιήστε την προεπιλογή: περιλαμβάνεται το LibreOffice.</translation>
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
Αυτό είναι ένα παράδειγμα αρχείου QML, εμφανίζοντας επιλογές σε Markdown με περιεχόμενο τύπου Flickable.

Τα αρχεία QML με εμπλουτισμένο κείμενο (RichText) μπορούν να χρησιμοποιούν ετικέτες HTML, με Markdown χρησιμοποιούν με απλή σύνταξη Markdown, ενώ το περιεχόμενο Flickable είναι χρήσιμο για οθόνες αφής.

**Κείμενο με έντονη γραφή**

*Κείμενο με πλάγια γραφή*

_Υπογραμμισμένο κείμενο_

&gt; Μπλοκ παράθεσης

~~Κείμενο με διαγράμμιση~~

Παράδειγμα κώδικα:
```
ls -l /home
```

**Λίστες:**
 * Συστήματα με επεξεργαστές Intel
 * Συστήματα με επεξεργαστές AMD

Η κάθετη γραμμή κύλισης είναι προσαρμόσιμη, το τρέχον πλάτος έχει οριστεί στην τιμή 10.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="80"/>
      <source>Back</source>
      <translation>Πίσω</translation>
    </message>
  </context>
  <context>
    <name>usersq</name>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="43"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation>Επιλέξτε το όνομα χρήστη και τα διαπιστευτήριά σας για σύνδεση και εκτέλεση εργασιών διαχειριστή</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="56"/>
      <source>What is your name?</source>
      <translation>Ποιο είναι το όνομά σας;</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="63"/>
      <source>Your full name</source>
      <translation>Το ονοματεπώνυμό σας</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="80"/>
      <source>What name do you want to use to log in?</source>
      <translation>Ποιο όνομα θέλετε να χρησιμοποιείτε για τη σύνδεση;</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="87"/>
      <source>Login name</source>
      <translation>Όνομα σύνδεσης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="116"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation>Εάν ο υπολογιστής πρόκειται να χρησιμοποιηθεί από περισσότερα από ένα άτομα, θα μπορέσετε να δημιουργήσετε πολλαπλούς λογαριασμούς μετά την εγκατάσταση.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="129"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Επιτρέπονται μόνο πεζά γράμματα, αριθμοί, κάτω παύλα και παύλα.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="138"/>
      <source>root is not allowed as username.</source>
      <translation>Το «root» δεν επιτρέπεται ως όνομα χρήστη.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="147"/>
      <source>What is the name of this computer?</source>
      <translation>Ποιο είναι το όνομα του υπολογιστή;</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="153"/>
      <source>Computer name</source>
      <translation>Όνομα υπολογιστή</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="180"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation>Αυτό το όνομα θα χρησιμοποιείται εάν κάνετε τον υπολογιστή ορατό στις υπόλοιπες συσκευές ενός δικτύου.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="193"/>
      <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
      <translation>Επιτρέπονται μόνο γράμματα, αριθμοί, κάτω παύλα και παύλα· τουλάχιστον δύο χαρακτήρες.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="202"/>
      <source>localhost is not allowed as hostname.</source>
      <translation>Το «localhost» δεν επιτρέπεται ως όνομα υπολογιστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="211"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Επιλέξτε έναν κωδικό πρόσβασης για την προστασία του λογαριασμού σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="221"/>
      <source>Password</source>
      <translation>Κωδικός πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="238"/>
      <source>Repeat password</source>
      <translation>Επανάληψη κωδικού πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="265"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation>Εισαγάγετε τον ίδιο κωδικό πρόσβασης δύο φορές, ώστε να ελεγχθεί για τυπογραφικά λάθη. Ένας καλός κωδικός πρόσβασης θα πρέπει να περιέχει ένα μείγμα γραμμάτων, αριθμών και σημείων στίξης, να αποτελείται από τουλάχιστον οκτώ χαρακτήρες, ενώ θα πρέπει και να τον αλλάζετε ανά τακτά χρονικά διαστήματα.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="297"/>
      <source>Reuse user password as root password</source>
      <translation>Επαναχρησιμοποίηση κωδικού πρόσβασης χρήστη ως κωδικού πρόσβασης root</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="305"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Θα χρησιμοποιηθεί ο ίδιος κωδικός πρόσβασης για τον λογαριασμό διαχειριστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="318"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation>Επιλέξτε έναν κωδικό πρόσβασης root για την προστασία του λογαριασμού σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="328"/>
      <source>Root password</source>
      <translation>Κωδικός πρόσβασης root</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="346"/>
      <source>Repeat root password</source>
      <translation>Επανάληψη κωδικού πρόσβασης root</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="372"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation>Εισαγάγετε τον ίδιο κωδικό πρόσβασης δύο φορές, ώστε να ελεγχθεί για τυπογραφικά λάθη.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="402"/>
      <source>Log in automatically without asking for the password</source>
      <translation>Αυτόματη σύνδεση χωρίς απαίτηση κωδικού πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="410"/>
      <source>Validate passwords quality</source>
      <translation>Επικύρωση ποιότητας κωδικών πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="420"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Όταν είναι ενεργοποιημένη αυτή η επιλογή, θα γίνεται έλεγχος της ισχύος του κωδικού πρόσβασης και δεν θα μπορείτε να χρησιμοποιήσετε έναν αδύναμο κωδικό πρόσβασης.</translation>
    </message>
  </context>
  <context>
    <name>usersq-qt6</name>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="42"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation>Επιλέξτε το όνομα χρήστη και τα διαπιστευτήριά σας για σύνδεση και εκτέλεση εργασιών διαχειριστή</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="55"/>
      <source>What is your name?</source>
      <translation>Ποιο είναι το όνομά σας;</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="62"/>
      <source>Your full name</source>
      <translation>Το ονοματεπώνυμό σας</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="79"/>
      <source>What name do you want to use to log in?</source>
      <translation>Ποιο όνομα θέλετε να χρησιμοποιείτε για τη σύνδεση;</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="86"/>
      <source>Login name</source>
      <translation>Όνομα σύνδεσης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="115"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation>Εάν ο υπολογιστής πρόκειται να χρησιμοποιηθεί από περισσότερα από ένα άτομα, θα μπορέσετε να δημιουργήσετε πολλαπλούς λογαριασμούς μετά την εγκατάσταση.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="128"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Επιτρέπονται μόνο πεζά γράμματα, αριθμοί, κάτω παύλα και παύλα.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="137"/>
      <source>root is not allowed as username.</source>
      <translation>Το «root» δεν επιτρέπεται ως όνομα χρήστη.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="146"/>
      <source>What is the name of this computer?</source>
      <translation>Ποιο είναι το όνομα του υπολογιστή;</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="152"/>
      <source>Computer name</source>
      <translation>Όνομα υπολογιστή</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="179"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation>Αυτό το όνομα θα χρησιμοποιείται εάν κάνετε τον υπολογιστή ορατό στις υπόλοιπες συσκευές ενός δικτύου.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="192"/>
      <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
      <translation>Επιτρέπονται μόνο γράμματα, αριθμοί, κάτω παύλα και παύλα· τουλάχιστον δύο χαρακτήρες.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="201"/>
      <source>localhost is not allowed as hostname.</source>
      <translation>Το «localhost» δεν επιτρέπεται ως όνομα υπολογιστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="210"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Επιλέξτε έναν κωδικό πρόσβασης για την προστασία του λογαριασμού σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="220"/>
      <source>Password</source>
      <translation>Κωδικός πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="237"/>
      <source>Repeat password</source>
      <translation>Επανάληψη κωδικού πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="264"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation>Εισαγάγετε τον ίδιο κωδικό πρόσβασης δύο φορές, ώστε να ελεγχθεί για τυπογραφικά λάθη. Ένας καλός κωδικός πρόσβασης θα πρέπει να περιέχει ένα μείγμα γραμμάτων, αριθμών και σημείων στίξης, να αποτελείται από τουλάχιστον οκτώ χαρακτήρες, ενώ θα πρέπει και να τον αλλάζετε ανά τακτά χρονικά διαστήματα.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="296"/>
      <source>Reuse user password as root password</source>
      <translation>Επαναχρησιμοποίηση κωδικού πρόσβασης χρήστη ως κωδικού πρόσβασης root</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="304"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Θα χρησιμοποιηθεί ο ίδιος κωδικός πρόσβασης για τον λογαριασμό διαχειριστή.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="317"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation>Επιλέξτε έναν κωδικό πρόσβασης root για την προστασία του λογαριασμού σας.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="327"/>
      <source>Root password</source>
      <translation>Κωδικός πρόσβασης root</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="345"/>
      <source>Repeat root password</source>
      <translation>Επανάληψη κωδικού πρόσβασης root</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="371"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation>Εισαγάγετε τον ίδιο κωδικό πρόσβασης δύο φορές, ώστε να ελεγχθεί για τυπογραφικά λάθη.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="401"/>
      <source>Log in automatically without asking for the password</source>
      <translation>Αυτόματη σύνδεση χωρίς απαίτηση κωδικού πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="409"/>
      <source>Validate passwords quality</source>
      <translation>Επικύρωση ποιότητας κωδικών πρόσβασης</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq-qt6.qml" line="419"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Όταν είναι ενεργοποιημένη αυτή η επιλογή, θα γίνεται έλεγχος της ισχύος του κωδικού πρόσβασης και δεν θα μπορείτε να χρησιμοποιήσετε έναν αδύναμο κωδικό πρόσβασης.</translation>
    </message>
  </context>
  <context>
    <name>welcomeq</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="38"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;Καλώς ορίσατε στο πρόγραμμα εγκατάστασης του %1 «%2»&lt;/h3&gt;
            &lt;p&gt;Αυτό το πρόγραμμα θα σας κάνει μερικές ερωτήσεις και θα εγκαταστήσει το %1 στον υπολογιστή σας.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="69"/>
      <source>Support</source>
      <translation>Υποστήριξη</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="80"/>
      <source>Known Issues</source>
      <translation>Γνωστά προβλήματα</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="91"/>
      <source>Release Notes</source>
      <translation>Σημειώσεις έκδοσης</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="103"/>
      <source>Donate</source>
      <translation>Δωρεά</translation>
    </message>
  </context>
  <context>
    <name>welcomeq-qt6</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="38"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;Καλώς ορίσατε στο πρόγραμμα εγκατάστασης του %1 «%2»&lt;/h3&gt;
            &lt;p&gt;Αυτό το πρόγραμμα θα σας κάνει μερικές ερωτήσεις και θα εγκαταστήσει το %1 στον υπολογιστή σας.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="69"/>
      <source>Support</source>
      <translation>Υποστήριξη</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="80"/>
      <source>Known Issues</source>
      <translation>Γνωστά προβλήματα</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="91"/>
      <source>Release Notes</source>
      <translation>Σημειώσεις έκδοσης</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq-qt6.qml" line="103"/>
      <source>Donate</source>
      <translation>Δωρεά</translation>
    </message>
  </context>
</TS>
