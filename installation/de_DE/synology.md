Hier ist eine Schritt für Schritt Dokumentation um Jeedom auf eine Synology (DSM 5.2 minimum) zu installieren.

Schritt 1 : Docker installieren
===============================

Gehe zum Paketzentrum :

![](../images/install_synology_1.PNG)

Cliquez sur tous, puis installez le paquet Docker

![](../images/install_synology_2.PNG)

Attendez jusqu'à ce que l’installation soit finie :

![](../images/install_synology_3.PNG)

Pour avoir accès au paquet Docker, il faut absolument avoir DSM 5.2 et un NAS compatible

Etape 2 : Récupération et installation des images Jeedom
========================================================

Il faut Docker pour faire tourner Jeedom, le premier un docker Mysql qui contiendra la base de données et un 2ème qui contient Jeedom

Lancez l’application Docker :

![](../images/install_synology_4.PNG)

MYSQL
-----

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

Jeedom
------

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
================================

Il vous faut maintenant installer Jeedom, c’est très simple, allez sur IP\_NAS:9080

![](../images/install_synology_31.PNG)

Füllen Sie die Felder entsprechend Ihrer Konfiguration (Docker konfigurieren, mysql muß zuvor installiert sein) aus und bestätigen sie.

L’addresse IP de la BDD est l’addresse IP du NAS, le port est celui redirigé du docker Mysql, le mot de passe est celui mis dans le docker Mysql. Le nom d’utilisateur est root et le nom de la base celui que vous voulez (conseillé Jeedom)

![](../images/install_synology_30.PNG)

> **Tip**
>
> Si vous voulez un accès SSH, il vous faut dans les ports rediriger un port local vers le port 22 du conteneur, les identifiants SSH sont root/jeedom. Vous pouvez changer le mot de passe en initialisant la variable d’environement ROOT\_PASSWORD à la valeur du mot de passe voulu.

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

