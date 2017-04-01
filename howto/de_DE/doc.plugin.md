Beschreibung
============

![dev.plugin-simple.01.jpg](../images/dev.plugin-simple.01.jpg)

Diese Dokumentation wird es Ihnen ermöglichen, das in Jeedom integrierte Dokumentationssystem zu verstehen : AsciiDoc

Ziele :

-   die Funktionsweise von AsciiDoc vorstellen

-   die Struktur der verschiedenen erforderlichen Dokumente vorstellen

-   ein Minimum von Regeln zu liefern, um die Gesamtheit der Jeedom-Dokumente zu harmonisieren

Die Funktionsweise von AsciiDoc
===============================

Ein Dokument

Allgemeingültig
---------------

AsciiDoc ist eine einfache Auszeichnungssprache. Es ist auch der Name der Software-Suite, die es erlaubt, die „Quelltext“ Dateien in publizierbare Dokumente umzuwandeln.

-   Das AsciiDoc Konvertierungsprogramm kann das Quelldokument zu XHTML, DocBook oder HTML umwandeln.

-   Das a2x Programm bietet andere Formate wie PDF, TeX, Unix-Manpages oder Epub.

Offizielle Website : <http://www.methods.co.nz/asciidoc/>

AsciiDoc & Jeedom
-----------------

Die Jeedom Dokumentation basiert auf AsciiDoc und der Zugabe von Laurent Laville bootstap : <http://laurent-laville.org/asciidoc/bootstrap/>

Cette particularité permet d’ajouter des fonctions supplémentaires aux fonctions présentes dans l’AsciiDoc. Mais nécessite aussi une compilation particulière pour avoir une visibilité sur le rendu final.  Wir werden in diesem Dokument im Einzelnen beschreiben, wie Ihre Seiten lokal erzeugen um die Formatierung zu überprüfen.

Ein wenig Syntax
----------------

Dieser Link ist ein Spickzettel für die AsciiDoc Syntax : <http://powerman.name/doc/asciidoc>

Die AsciiDoc-Datei-Struktur
===========================

Mehrere AsciiDoc Dateien (Erweiterung Ihrer Dateien), ermöglicht Ihre Dokumentation zu strukturieren.

Sie sollten mindestens die folgenden AsciiDoc Dateien haben :

-   index.asciidoc

-   beschreibung.asciidoc

-   installation.asciidoc

-   konfiguration.asciidoc

index.asciidoc
--------------

Die index.asciidoc-Datei ist, wie der Name andeutet, die Wurzel Ihrer Dokumentation.

Diese Datei muss nur die Verweise auf alle anderen Dateien enthalten und nicht gleich den Inhalt.

**index.asciidoc** Beispieldatei :

    :imagesdir: ../images
    :icons:

    == Greenmomit
    image:greenmomit_icon.png[]

    {nbsp} +

    === Beschreibung

    '''
    === Konfiguration

    '''
    === FAQ

Die eingeschlossenen asciidoc Dateien sind

-   beschreibung.asciidoc

-   installation.asciidoc

-   konfiguration.asciidoc

-   faq.asciidoc

Diese Dateien entsprechen der Grundstruktur der Jeedom Dokumentation. Il est possible d’inclure d’autres fichiers AsciiDoc.

beschreibung.asciidoc
---------------------

Le fichier **description.asciidoc** vous permet de présenter votre plugin.

### Einfaches Plugin

Wenn Ihr Plugin relativ einfach ist, braucht man keine besondere Ausrüstung mit Abhängigkeit zum präsentieren, Sie können sich auf eine Beschreibung des Zwecks des Plugins beschränken.

beschreibung.asciidoc\* einfache Beispieldatei :

    :imagesdir: ../images
    :icons:

    ==== Allgemein

    Dieses Plugin ist für BLABLABLA.

    Ein kleiner Rendering-Screenshot vom Plugin-Widget :

    image:nomduplugin_widget.png[]

### Komplexes Plugin

Wenn Ihr Plugin :

-   dépendant d’un équipement tiers

-   nécessite quelques prérequis

-   eine Erklärung des Funktionsprinzips erfordert

Il est conseillé de créer plusieurs sous-chapitres.

-   **Allgemeine Beschreibung**

-   **Marketing Beschreibung :)**

-   **Les prérequis**

-   **Funktionsprinzip**

beschreibung.asciidoc\* komplexe Beispieldatei :

    :imagesdir: ../images
    :icons:

    ==== Allgemein

    Ce Plugin a pour objectif de BLABLABLA.

    Ein kleiner Rendering-Screenshot vom Plugin-Widget :

    image:nomduplugin_widget.png[]

    // Si le plugin est dépendant d'un équipement ou solution logicielle tiers, le présenter
    ==== Präsentation des Gerätes oder Anwendung XXX
    // Ein Geräte Bild hinzufügen
    image:nomduplugin_equipementXXX.png[]

    Beschreiben Sie die Ausrüstung, fügen Sie Links zu den Websites der Hersteller oder Verweis hinzu.
    Décrire le niveau d'intégration de l'équipement dans Jeedom (complète, incomplète et quelles fonctionnalités ne sont pas implémentées)

    // S'il est nécessaire de présenter le principe de fonctionnement :
    ==== Funktionsprinzip
    Beschreiben Sie die Architektur und die Philosophie des Plugins.

    ==== Prérequis
    Lister et décrire les prérequis à l'installation et l'utilisation du plugin
    * z.B. : benötigt einen API-Schlüssel

installation.asciidoc
---------------------

Si votre plugin n’a aucune spécification sur son installation, ajouter juste un pointeur vers la procédure d’installation d’un plugin décrite dans la documentation du core Jeedom :

[**Das Installieren eines Plugins**](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-plugin.html) kbd:[Ctrl+Maus klick] (in einem neuen Tab zu öffnen)

konfiguration.asciidoc
----------------------

Regeln
======

Die Bilder
----------

Ergänzungen

