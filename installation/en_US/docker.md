> **Important**
>
> Be careful, we are implying that you are already managing the docker

To discover Jeedom you can also run in a Docker container :

> **Important**
>
> Prérequis : Avoir une machine ou une VM tournant sous Linux

Step 1 : Installation of Docker
===============================

docker is now available on all recent distributions. To install on a distribution

-   rpm based

<!-- -->

    $ yum install docker

-   deb based

<!-- -->

    $ apt-get update
    $ apt-get install docker
    $ apt-get install docker.io

Etape 2 : Installation d’une image mysql
========================================

> **Note**
>
> Vous pouvez aussi installer mysql directement sur la machine hôte, dans ce cas il faut sauter cette étape.

I use [celle-ci](https://hub.docker.com/_/mysql/). To install :

    docker pull mysql:latest

Let’s run :

    sudo docker run --name jeedom-mysql -v /opt/jeedom/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your-mysql-password -d mysql:latest

Avec :

-   jeedom-mysql : le nom du conteneur mysql

-   /opt/jeedom/mysql : le dossier de l’hote ou l’on doit stoker les données de MySql

-   your-mysql-password : le mot de passe root de l’instance MySql

Etape 3 : Installation d’une image Jeedom
=========================================

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

For the rest you can follow the documentation [Getting Started with Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/en_US/doc-premiers-pas.html)

> **Important**
>
> Pour le nom de l’hote MySql il faut mettre jeedom-mysql

