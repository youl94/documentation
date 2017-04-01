Materialien
===========

Jeedom kann auf verschiedenen Hardware-Komponenten installiert werden:

-   Ein Raspberry Pi 1 oder 2

-   Ein Jeeboard (hummingboard) i1, i2 und i4

-   un NAS Synology

-   Jedes Linux-System (Debian-basierte bevorzugt)

Sie können auch eine fertige Box mit vorinstalliertem Jeedom, die zusätzlich ein Service Pack (plus Support und Service) und verfügbare Plugins verwenden:

-   [Mini+ Z-Wave](http://www.domadoo.fr/fr/box-domotique/2747-jeedom-pack-de-demarrage-jeedom-mini-compatible-z-wave.html)

-   [Mini+ RFXCOM und Z-Wave](http://www.domadoo.fr/fr/box-domotique/2749-jeedom-pack-de-demarrage-jeedom-mini-compatible-z-wave-et-interface-rfxcom.html)

-   [Mini+ EnOcean](http://www.domadoo.fr/fr/box-domotique/2984-jeedom-pack-de-demarrage-jeedom-mini-compatible-enocean.html)

-   [Mini+ EnOcean und rfxcom](http://www.domadoo.fr/fr/box-domotique/2990-jeedom-pack-de-demarrage-jeedom-mini-compatible-enocean-et-interface-rfxcom.html)

Hier sind 2 "Typen" von Konfigurationen, einen guten Start mit Jeedom und Z-Wave:

1.  Raspberry Pi 2 :

    -   Ein Raspberry \~ 40 €

    -   Ein Razberry \~ 60 €

    -   Eine Micro SD Karte \~ 7 €

    -   Stromversorgung über USB \~ 8 €

Soit un total de 115 € pour une box domotique open source avec une maîtrise complète de son installation

1.  Jeedomboard Dual

    -   Ein dual-Jeedomboard \~ 119 € [hier](http://www.domadoo.fr/fr/informatique/2762-jeedom-ordinateur-monocarte-jeedomboard-dual.html)

    -   Ein Razberry \~ 60 €

    -   Eine Micro SD Karte \~ 7 €

    -   Stromversorgung über USB \~ 8 €

Soit un total de 195 € pour une box domotique open source avec une maîtrise complète de son installation

> **Tip**
>
> Sie können den Razberry von einem Z-Wave USB Stick ändern (allerdings wird das openzwave Plugin nur mehr unter Jeedom benötigen) oder wenn Sie nicht möchten, dass eine Z-Wave RFXCOM oder EnOcean Schlüssel (oder sogar piOcean)

> **Tip**
>
> Jeedom est un logiciel qui est et restera open source, son utilisation est entièrement gratuite et ne dépend pas d’un cloud ou d’un abonnement. Cependant certains plugins qui permettent d’augmenter les capacités de Jeedom ou son utilisation peuvent être payants **et peuvent avoir besoin d’une connexion internet**. Vous pouvez retrouver la liste des plugins [ici](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin)

> **Tip**
>
> Service pack ? Quézako ? Vous pouvez voir [ici](https://blog.jeedom.fr/?p=1215) les avantages des service packs

Auf Raspberry Pi 1 und 2 (mini)
===============================

Hier ist eine Schritt für Schritt Dokumentation um Jeedom auf Raspberry Pi 1 oder 2 zu installieren

> **Tip**
>
> Der Name des heruntergeladenen Jeedom-Abbilds kann sich von dem in dieser Dokumentation unterscheiden.

Schritt 1 : Installieren mit win32diskimager
--------------------------------------------

Sie müssen den Win32diskimager [hier](http://sourceforge.net/projects/win32diskimager/) herunterladen und ihn auf Ihrem PC installieren

Schritt 2: Wiederherstellung Jeedom-Abbild
------------------------------------------

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image Raspberry…netinstall.zip

![](../images/install_humming_1.PNG)

Schritt 3: Jeedom-Abbild Dekomprimieren
---------------------------------------

Dekomprimieren des Jeedom-Abbild ( falls Sie nichts zum dekomprimieren haben können Sie hier [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html) herunterladen ), Sie müssen erhalten:

![](../images/install_humming_2.PNG)

![](../images/install_humming_8.PNG)

Schritt 4 : Das Abbild auf die SD-Karte brennen
-----------------------------------------------

Legen Sie die SD-Karte in den Computer ein und starten Sie die Win32diskimager Software :

![](../images/install_humming_3.PNG)

Vérifier que dans "Device" c’est bien votre carte SD qui est sélectionnée puis cliquez sur l’icône Dossier pour indiquer le chemin de l’image téléchargée et decompressée (étape 2 et 3) :

![](../images/install_humming_4.PNG)

Klicken Sie auf "Write", um das Abbild zu schreiben, bestätigen Sie die Warnmeldung:

![](../images/install_humming_5.PNG)

Sie können den Fortschritt des Schreibens des Abbildes verfolgen (etwa zehn Minuten) :

![](../images/install_humming_6.PNG)

Sobald Sie fertig sind werden Sie diese Nachricht bekommen :

![](../images/install_humming_7.PNG)

Sie müssen nur die SD-Karte in den Raspberry-Pi stecken, sobald sie das Board mit Strom und dem Netzwerk verbinden, wird Ihre Jeedom (5 min) starten und Sie sollten ihn im Netzwerk sehen.

> **Important**
>
> L’installation se lance automatiquement et vous pouvez la suivre en vous rendant depuis votre navigateur sur l’adresse <http://IP_RASPBERRY/>. Quand l’installation sera terminée, vous vous retrouverez sur l’interface de connexion Jeedom.

> **Tip**
>
> Les identifiants SSH sont root/Mjeedom96. Néanmoins, vous n’avez pas besoin de vous connecter en SSH pour une installation simple.

> **Tip**
>
> L’installation à partir de l’image netinstall réalise les étapes suivantes à votre place : mise à jour du système et des paquets, extension de la partition de la SD au maximum de la capacité de celle-ci.

> **Important**
>
> Wenn Sie einen rpi2 haben, VOR ALLEM NICHT ÜBERTACKTEN, das könnte ein instabiles System zur folge haben mit zahlreicher Beschädigung der SD Karte

Ensuite vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

Auf Jeedomboard (hummingboard,mini+)
====================================

Hier ist eine Schritt für Schritt Dokumentation um Jeedom auf das Jeedomboard (oder Hummingboard) zu installieren.

> **Tip**
>
> Der Name des heruntergeladenen Jeedom-Abbilds kann sich von dem in dieser Dokumentation unterscheiden.

Schritt 1 : Installieren mit win32diskimager
--------------------------------------------

Sie müssen den Win32diskimager [hier](http://sourceforge.net/projects/win32diskimager/) herunterladen und ihn auf Ihrem PC installieren

Schritt 2: Wiederherstellung Jeedom-Abbild
------------------------------------------

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image jeedom-jeeboard-**.rar ou Jeedomboard\_\_Debian\_Jessie**.rar

![](../images/install_humming_1.PNG)

Schritt 3: Jeedom-Abbild Dekomprimieren
---------------------------------------

Dekomprimieren des Jeedom-Abbild ( falls Sie nichts zum dekomprimieren haben können Sie hier [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html) herunterladen ), Sie müssen erhalten:

![](../images/install_humming_2.PNG)

![](../images/install_humming_8.PNG)

Schritt 4: Das Abbild auf die SD-Karte brennen
----------------------------------------------

Legen Sie die SD-Karte in den Computer ein und starten Sie die Win32diskimager Software :

![](../images/install_humming_3.PNG)

Überprüfen Sie in "Device", das die SD-Karte ausgewählt ist und klicken Sie auf das Ordnersymbol, um den Pfad des heruntergeladenen und unkomprimierten Abbildes (Schritt 2 und 3) auszuwählen :

![](../images/install_humming_4.PNG)

Klicken Sie auf "Write", um das Abbild zu schreiben, bestätigen Sie die Warnmeldung:

![](../images/install_humming_5.PNG)

Sie können den Fortschritt des Schreibens des Abbildes verfolgen (etwa zehn Minuten) :

![](../images/install_humming_6.PNG)

Sobald Sie fertig sind werden Sie diese Nachricht bekommen :

![](../images/install_humming_7.PNG)

Sie müssen nur die SD-Karte in das Jeedomboard (oder Hummingboard) stecken, sobald sie das Board mit Strom und dem Netzwerk verbinden, wird Ihre Jeedom (5 min) starten und Sie sollten es im Netzwerk sehen.

> **Tip**
>
> Die SSH Zugangsdaten jeedom/Mjeedom96

Im übrigen können Sie die Dokumentation [Erste Schritte mit Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html) folgen.

Synology
========

Hier ist eine Schritt für Schritt Dokumentation um Jeedom auf eine Synology (DSM 5.2 minimum) zu installieren.

Schritt 1 : Docker installieren
-------------------------------

Gehe zum Paketzentrum :

![](../images/install_synology_1.PNG)

Cliquez sur tous, puis installez le paquet Docker

![](../images/install_synology_2.PNG)

Attendez jusqu'à ce que l’installation soit finie :

![](../images/install_synology_3.PNG)

Pour avoir accès au paquet Docker, il faut absolument avoir DSM 5.2 et un NAS compatible

Etape 2 : Récupération et installation des images Jeedom
--------------------------------------------------------

Il faut Docker pour faire tourner Jeedom, le premier un docker Mysql qui contiendra la base de données et un 2ème qui contient Jeedom

Lancez l’application Docker :

![](../images/install_synology_4.PNG)

### MYSQL

Klicken Sie auf "Anmelden"

![](../images/install_synology_5.PNG)

Dans le champ de recherche tapez "mysql", selectionnez mysql et cliquez sur télécharger :

![](../images/install_synology_15.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la version latest :

![](../images/install_synology_14.PNG)

Cliquez ensuite sur image, ici vous pouvez suivre l’avancement du téléchargement (peut prendre plusieurs dizaines de minutes) :

![](../images/install_synology_16.PNG)

Une fois terminé, cliquez sur l’image puis lancer :

![](../images/install_synology_17.PNG)

Donnez un nom à votre mysql ainsi qu’un port local redirigé vers le port 3306 du conteneur, puis faites suivant :

![](../images/install_synology_18.PNG)

Dann weiter :

![](../images/install_synology_19.PNG)

Cliquez sur "Paramètres avancés" :

![](../images/install_synology_34.PNG)

Puis sur "Ajouter un dossier", et là, mettez le dossier voulu côté Synology (c’est dans ce dossier qu’il y aura tous les fichiers de la base de données) et /var/lib/mysql côté conteneur (attention à bien décocher "Lecture seule")

![](../images/install_synology_32.PNG)

Cliquez sur "Environnement" puis "Ajoutez une variable" et mettant dans "Variable" : "MYSQL\_ROOT\_PASSWORD" et dans valeur mettez le mot de passe de BDD voulu (il servira plus tard). Puis validez :

![](../images/install_synology_33.PNG)

Cochez "Exécuter ce conteneur lorsque l’assistant a terminé" puis cliquez sur "Appliquer".

### Jeedom

Klicken Sie auf "Anmelden"

![](../images/install_synology_5.PNG)

Dans le champ de recherche, tapez "jeedom", sélectionnez jeedom/jeedom et cliquez sur télécharger :

![](../images/install_synology_20.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la dernière.

Cliquez ensuite sur image, ici vous pouvez suivre l’avancement du téléchargement (peut prendre plusieurs dizaines de minutes) :

![](../images/install_synology_21.PNG)

Une fois terminé, cliquez sur l’image puis lancer :

![](../images/install_synology_22.PNG)

Geben Sie einen Namen für Ihre Jeedom und einen lokalen Port auf Port 80 (hier 9080 und einen auf 22 (hier 9022) des Containers, dann weiter klicken :

![](../images/install_synology_23.PNG)

Dann weiter :

![](../images/install_synology_24.PNG)

Cliquez sur "Paramètres avancés"

![](../images/install_synology_25.PNG)

Klicken Sie "Ordner hinzufügen"

![](../images/install_synology_26.PNG)

Choisissez un dossier sur votre Synology (c’est dans ce dossier qu’il y aura tous les fichiers jeedom), attention à bien décocher "Lecture seule"

![](../images/install_synology_27.PNG)

Dans chemin d’accès, mettez /var/www/jeedom puis cliquez sur "Environnement" :

![](../images/install_synology_28.PNG)

Cochez "Exécuter le conteneur à l’aide de privilèges élevés" puis validez le tout :

![](../images/install_synology_29.PNG)

Cochez "Exécuter ce conteneur lorsque l’assistant a terminé" puis cliquez sur "Appliquer".

Schritt 3 : Jeedom Konfiguration
--------------------------------

Il vous faut maintenant installer Jeedom, c’est très simple, allez sur IP\_NAS:9080

![](../images/install_synology_31.PNG)

Füllen Sie die Felder entsprechend Ihrer Konfiguration (Docker konfigurieren, mysql muß zuvor installiert sein) aus und bestätigen sie.

L’addresse IP de la BDD est l’addresse IP du NAS, le port est celui redirigé du docker Mysql, le mot de passe est celui mis dans le docker Mysql. Le nom d’utilisateur est root et le nom de la base celui que vous voulez (conseillé Jeedom)

![](../images/install_synology_30.PNG)

> **Tip**
>
> Si vous voulez un accès SSH, il vous faut dans les ports rediriger un port local vers le port 22 du conteneur, les identifiants SSH sont root/jeedom. Vous pouvez changer le mot de passe en initialisant la variable d’environement ROOT\_PASSWORD à la valeur du mot de passe voulu.

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

Docker
======

> **Important**
>
> Attention nous partons ici du principe que vous maitrisez déjà docker

Um Jeedom zu entdecken, können Sie es auch in einem Docker-Container arbeiten lassen :

> **Important**
>
> Prérequis : Avoir une machine ou une VM tournant sous Linux

Schritt 1 : Docker installieren
-------------------------------

Docker ist jetzt auf allen aktuellen Distributionen verfügbar. Um auf einer Distribution zu installieren

-   die Basis rpm

<!-- -->

    $ yum install docker

-   die Basis deb

<!-- -->

    $ apt-get update
    $ apt-get install docker
    $ apt-get install docker.io

Schritt 2 : Ein MySQL-Abbild installieren
-----------------------------------------

> **Note**
>
> Vous pouvez aussi installer mysql directement sur la machine hôte, dans ce cas il faut sauter cette étape.

Ich benutze [dieses hier](https://hub.docker.com/_/mysql/). So installieren Sie es :

    docker pull mysql:latest

Führen Sie dann aus :

    sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your-mysql-password -d mysql:latest

Avec :

-   jeedom-mysql : le nom du conteneur mysql

-   /opt/jeedom/mysql : le dossier de l’hote ou l’on doit stoker les données de MySql

-   your-mysql-password : le mot de passe root de l’instance MySql

Schritt 3: Ein Jeedom Abbild installieren
-----------------------------------------

Abbild installieren :

    docker pull jeedom/jeedom

Puis lancez la :

    sudo docker run --name jeedom-server --link jeedom-mysql:mysql --privileged -v /your/jeedom/path:/var/www/html -e ROOT_PASSWORD=your-root-password -p 9080:80 -p 9022:22 jeedom/jeedom

Avec :

-   jeedom-server : nom du docker jeedom voulu

-   /your/jeedom/path : répertoire où les données de Jeedom sont mise sur l’hôte

-   your-root-password : mot de passe root pour accéder à Jeedom en SSH

Il vous faut ensuite installer Jeedom en allant sur : IP\_DOCKER:9080 et entrer les informations de connexion vers mysql :

![](../images/install_other.PNG)

Im übrigen können Sie die Dokumentation [Erste Schritte mit Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html) folgen.

> **Important**
>
> Pour le nom de l’hote MySql il faut mettre jeedom-mysql

Sonstige
========

Hier finden Sie die Dokumentation um Jeedom auf den meisten Linux-Systemen zu installieren (auf der Debian Distribution geprüfte und zugelassen)

> **Important**
>
> Debian 8 est la distribution officiellement supportée, l’utilisation d’une autre distribution est à proscrire au risque d’obtenir comme réponse du support de devoir restaurer votre Jeedom sur une image officielle. Si vous ne maitriser pas un minimum les environnements Linux, nous vous conseillons de partir sur une image officielle (OVF) ou l’utilisation d’une Mini+ ou Smart (disponible prochainement).

Connectez-vous en SSH à votre système et faites :

    wget https://raw.githubusercontent.com/jeedom/core/stable/install/install.sh
    chmod +x install.sh
    ./install.sh

Il vous suffit ensuite d’aller sur IP\_MACHINE\_JEEDOM

> **Note**
>
> Les identifiants par défaut sont admin/admin

> **Note**
>
> Les arguments suivants sont utilisables : -v = version jeedom désirer -w = dossier webserver -z = installation dependances z-wave -m = mot de passe root mysql désiré

    ./install.sh -v x.y.zz -w /var/www/html -z -m Jeedom

Ensuite vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

