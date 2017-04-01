Materiales
==========

Jeedom se puede instalar en diferentes componentes de hardware:

-   una Raspberry pi 1 o 2

-   una Jeeboard (hummingboard) i1, i2 o i4

-   un NAS Synology

-   todos los sistemas operativos Linux (basado en Debian de preferencia)

También puede comprar una caja confeccionada con Jeedom preinstalado que contiene, además, un Service Pack (además de soporte y servicio) y los plugins disponibles:

-   [Mini+ Z-Wave](http://www.domadoo.fr/fr/box-domotique/2747-jeedom-pack-de-demarrage-jeedom-mini-compatible-z-wave.html)

-   [Mini+ RFXCOM et Z-Wave](http://www.domadoo.fr/fr/box-domotique/2749-jeedom-pack-de-demarrage-jeedom-mini-compatible-z-wave-et-interface-rfxcom.html)

-   [Mini+ EnOcean](http://www.domadoo.fr/fr/box-domotique/2984-jeedom-pack-de-demarrage-jeedom-mini-compatible-enocean.html)

-   [Mini+ EnOcean et rfxcom](http://www.domadoo.fr/fr/box-domotique/2990-jeedom-pack-de-demarrage-jeedom-mini-compatible-enocean-et-interface-rfxcom.html)

Aquí tiene 2 configuraciones "tipo" para comenzar con Jeedom Z-Wave:

1.  Raspberry pi 2 :

    -   Un raspberry \~ 40 €

    -   Un razberry \~ 60 €

    -   Una Tarjeta Micro SD \~ 7 €

    -   Fuente de Alimentacion USB \~ 8 €

Soit un total de 115 € pour une box domotique open source avec une maîtrise complète de son installation

1.  Jeedomboard dual

    -   Un Jeedomboard dual \~ 119 € [ici](http://www.domadoo.fr/fr/informatique/2762-jeedom-ordinateur-monocarte-jeedomboard-dual.html)

    -   Un razberry \~ 60 €

    -   Una Tarjeta Micro SD \~ 7 €

    -   Fuente de Alimentacion USB \~ 8 €

Soit un total de 195 € pour une box domotique open source avec une maîtrise complète de son installation

> **Tip**
>
> Puede reemplazar la Razberry por un dispositivo USB Z-Wave (aunque el plugin será openzwave) o si prefiere no usar Z-Wave, puede usar RFXCOM, o una llave EnOcean (o incluso piOcean )

> **Tip**
>
> Jeedom est un logiciel qui est et restera open source, son utilisation est entièrement gratuite et ne dépend pas d’un cloud ou d’un abonnement. Cependant certains plugins qui permettent d’augmenter les capacités de Jeedom ou son utilisation peuvent être payants **et peuvent avoir besoin d’une connexion internet**. Vous pouvez retrouver la liste des plugins [ici](http://market.jeedom.fr/index.php?v=d&p=market&type=plugin)

> **Tip**
>
> Service pack ? Quézako ? Vous pouvez voir [ici](https://blog.jeedom.fr/?p=1215) les avantages des service packs

En Raspberry pi 1 y 2 (mini)
============================

Aquí encontrarás la documentación paso a paso para instalar Jeedom en una Raspberry pi 1 o 2

El nombre de la imagen Jeedom puede ser diferente al de las fotos usadas en esta documentación

Paso 1: Instalación de Win32diskimager
--------------------------------------

Debe descargar el software win32diskimage [aquí](http://sourceforge.net/projects/win32diskimager/) e instalarlo en su PC

Paso 2: Descarga de la imagen de Jeedom
---------------------------------------

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image Raspberry…netinstall.zip

![](../images/install_humming_1.PNG)

Paso 3: Descompresión de la imagen de Jeedom
--------------------------------------------

Descomprimir la imagen de Jeedom (si no tienes con que descomprimir puede instalar winrar desde el link: <http://www.clubic.com/telecharger-fiche9632-winrar.html> [winrar]), usted obtendrá:

imagen::../images/install\_humming\_2.PNG[]

imagen::../images/install\_humming\_8.PNG[]

Paso 4: Grabación de la imagen en la tarjeta SD
-----------------------------------------------

Introduzca la tarjeta SD en su ordenador y ejecute el programa win32diskimager:

imagen::../images/install\_humming\_3.PNG[]

Vérifier que dans "Device" c’est bien votre carte SD qui est sélectionnée puis cliquez sur l’icône Dossier pour indiquer le chemin de l’image téléchargée et decompressée (étape 2 et 3) :

![](../images/install_humming_4.PNG)

Haga clic en el botón "Write" para grabar la imagen y confirme la siguiente advertencia:

![](../images/install_humming_5.PNG)

Puede seguir el progreso de grabación de la imagen (unos 10 minutos aproximadamente):

![](../images/install_humming_6.PNG)

Una vez terminado aparecerá el siguiente mensaje:

![](../images/install_humming_7.PNG)

Únicamente tendrá que insertar la tarjeta SD en su Raspberry pi, conectarlo a la red y a la alimentación y Jeedom comenzará a arrancar (unos 5 minutos). Una vez haya iniciado, debería poder verlo en la red.

L’installation se lance automatiquement et vous pouvez la suivre en vous rendant depuis votre navigateur sur l’adresse <http://IP_RASPBERRY/>. Quand l’installation sera terminée, vous vous retrouverez sur l’interface de connexion Jeedom.

Les identifiants SSH sont root/Mjeedom96. Néanmoins, vous n’avez pas besoin de vous connecter en SSH pour une installation simple.

L’installation à partir de l’image netinstall réalise les étapes suivantes à votre place : mise à jour du système et des paquets, extension de la partition de la SD au maximum de la capacité de celle-ci.

Si vous êtes sur rpi2 IL NE FAUT SURTOUT PAS L’OVERCLOCKER sous peine d’avoir un système instable avec de nombreuses corruptions de carte SD

Ensuite vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

En Jeedomboard (hummingboard,mini+)
===================================

Encontrarás aquí la documentación paso a paso para instalar Jeedom en las Jeedomboard (o Hummingboard).

> **Tip**
>
> El nombre de la imagen Jeedom puede ser diferente de las fotos puestas en esta documentación

Paso 1 : Instalación de Win32diskimager
---------------------------------------

Debe descargar el software win32diskimage [ici](http://sourceforge.net/projects/win32diskimager/) e instalarlo en su PC

Paso 2 : Recuperación de la imagen de Jeedom
--------------------------------------------

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image jeedom-jeeboard-**.rar ou Jeedomboard\_\_Debian\_Jessie**.rar

![](../images/install_humming_1.PNG)

Paso 3 : Descompresión de la imagen de jeedom
---------------------------------------------

Descomprimir la imagen de Jeedom (si no tienes con que descomprimir puede instalar winrar desde el link: <http://www.clubic.com/telecharger-fiche9632-winrar.html> [winrar]), usted obtendrá:

imagen::../images/install\_humming\_2.PNG[]

imagen::../images/install\_humming\_8.PNG[]

Paso 4 : Grabación de la imagen en la tarjeta SD
------------------------------------------------

insertar su tarjeta SD en su ordinador e lanzar el programa win32diskimager :

imagen::../images/install\_humming\_3.PNG[]

verificar que en "device" esta bien selectionada su tarjeta SD después pulsar el icono carpeta para indicar el camino de la imagen descargada y descomprimida (etapa 2 y 3)

![](../images/install_humming_4.PNG)

Pulsar "Write" para escribir la imagen, validar la advertencia:

![](../images/install_humming_5.PNG)

Se puede seguir el adelanto de la escritura de la imagen (más o menos 10 minutos) :

![](../images/install_humming_6.PNG)

una ves terminado obtendrá este mensaje :

![](../images/install_humming_7.PNG)

Solo tienes que poner la tarjeta SD en la Jeedomboard (o hummingboard), conectarlo en la red y su alimentación, el jeedom comenzara (5 minutos) y debería ver lo en la red.

> **Tip**
>
> Las contraseñas SSH son jeedom/Mjeedom96

Por lo demás se puede seguir la documentación [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

En un NAS Synology
==================

Encuentra ras aquí la documentación paso a paso para instalar Jeedom en un Synology (DSM 5.2 minimo).

Paso 1 : Instalación de Docker
------------------------------

Ir al centro de paquetes:

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

Haga clic en "Registrarse":

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

Siguiente :

![](../images/install_synology_19.PNG)

Cliquez sur "Paramètres avancés" :

![](../images/install_synology_34.PNG)

Puis sur "Ajouter un dossier", et là, mettez le dossier voulu côté Synology (c’est dans ce dossier qu’il y aura tous les fichiers de la base de données) et /var/lib/mysql côté conteneur (attention à bien décocher "Lecture seule")

![](../images/install_synology_32.PNG)

Haga clic en «Entorno» y «Agregar una variable» y poner en "Variable": "MYSQL\_ROOT\_PASSWORD" y en valor la contraseña deseada de la DB (que se utilizará más adelante). Luego validar:

![](../images/install_synology_33.PNG)

Cochez "Exécuter ce conteneur lorsque l’assistant a terminé" puis cliquez sur "Appliquer".

### Jeedom

Haga clic en "Registrarse":

![](../images/install_synology_5.PNG)

Dans le champ de recherche, tapez "jeedom", sélectionnez jeedom/jeedom et cliquez sur télécharger :

![](../images/install_synology_20.PNG)

Validez ensuite la demande de version, le mieux étant de prendre la dernière.

Cliquez ensuite sur image, ici vous pouvez suivre l’avancement du téléchargement (peut prendre plusieurs dizaines de minutes) :

![](../images/install_synology_21.PNG)

Une fois terminé, cliquez sur l’image puis lancer :

![](../images/install_synology_22.PNG)

Donnez un nom à votre jeedom ainsi qu’un port local redirigé vers le port 80 (ici 9080) et un vers le 22 (ici 9022) du conteneur, puis faites suivant :

![](../images/install_synology_23.PNG)

Siguiente :

![](../images/install_synology_24.PNG)

Cliquez sur "Paramètres avancés"

![](../images/install_synology_25.PNG)

Haga clic en "Agregar una carpeta"

![](../images/install_synology_26.PNG)

Choisissez un dossier sur votre Synology (c’est dans ce dossier qu’il y aura tous les fichiers jeedom), attention à bien décocher "Lecture seule"

![](../images/install_synology_27.PNG)

Dans chemin d’accès, mettez /var/www/jeedom puis cliquez sur "Environnement" :

![](../images/install_synology_28.PNG)

Cochez "Exécuter le conteneur à l’aide de privilèges élevés" puis validez le tout :

![](../images/install_synology_29.PNG)

Cochez "Exécuter ce conteneur lorsque l’assistant a terminé" puis cliquez sur "Appliquer".

Il vous faut maintenant installer Jeedom, c’est très simple, allez sur IP\_NAS:9080

![](../images/install_synology_31.PNG)

Remplissez les champs en fonction de votre configuration (configuration du docker mysql installé précédemment) et validez.

L’addresse IP de la BDD est l’addresse IP du NAS, le port est celui redirigé du docker Mysql, le mot de passe est celui mis dans le docker Mysql. Le nom d’utilisateur est root et le nom de la base celui que vous voulez (conseillé Jeedom)

![](../images/install_synology_30.PNG)

> **Tip**
>
> Si vous voulez un accès SSH, il vous faut dans les ports rediriger un port local vers le port 22 du conteneur, les identifiants SSH sont root/jeedom. Vous pouvez changer le mot de passe en initialisant la variable d’environement ROOT\_PASSWORD à la valeur du mot de passe voulu.

Ensuite, vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

Docker
======

Attention nous partons ici du principe que vous maitrisez déjà docker

Para descubrir Jeedom podrías también instalarlo en un contenedor Docker

Prérequis : Avoir une machine ou une VM tournant sous Linux

Etapa 1 : Instalación de docker
-------------------------------

Docker esta disponible con todas las distribuciones recientes. Para instalar lo sobre una distribución

-   a base de RPM

<!-- -->

    $ yum install docker

-   a base de deb

<!-- -->

    $ apt-get update
    $ apt-get install docker
    $ apt-get install docker.io

Etape 2 : Installation d’une image mysql
----------------------------------------

> **Note**
>
> Vous pouvez aussi installer mysql directement sur la machine hôte, dans ce cas il faut sauter cette étape.

J’utilise [celle-ci](https://hub.docker.com/_/mysql/). Pour l’installer :

    docker pull mysql:latest

Puis la lancer :

    sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your-mysql-password -d mysql:latest

Avec :

-   jeedom-mysql : le nom du conteneur mysql

-   /opt/jeedom/mysql : le dossier de l’hote ou l’on doit stoker les données de MySql

-   your-mysql-password : le mot de passe root de l’instance MySql

Etape 3 : Installation d’une image Jeedom
-----------------------------------------

Installation de l’image :

    docker pull jeedom/jeedom

Puis lancez la :

    sudo docker run --name jeedom-server --link jeedom-mysql:mysql --privileged -v /your/jeedom/path:/var/www/html -e ROOT_PASSWORD=your-root-password -p 9080:80 -p 9022:22 jeedom/jeedom

Avec :

-   jeedom-server : nom du docker jeedom voulu

-   /your/jeedom/path : répertoire où les données de Jeedom sont mise sur l’hôte

-   your-root-password : mot de passe root pour accéder à Jeedom en SSH

Il vous faut ensuite installer Jeedom en allant sur : IP\_DOCKER:9080 et entrer les informations de connexion vers mysql :

![](../images/install_other.PNG)

Por lo demás se puede seguir la documentación [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

Pour le nom de l’hote MySql il faut mettre jeedom-mysql

Otro
====

Vous trouverez ici la documentation pour installer Jeedom sur la plupart des systèmes linux (testée et approuvée sur la distribution Debian)

Debian 8 est la distribution officiellement supportée, l’utilisation d’une autre distribution est à proscrire au risque d’obtenir comme réponse du support de devoir restaurer votre Jeedom sur une image officielle. Si vous ne maitriser pas un minimum les environnements Linux, nous vous conseillons de partir sur une image officielle (OVF) ou l’utilisation d’une Mini+ ou Smart (disponible prochainement).

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

