Paquets utiles
==============

Voici quelques paquets utiles à mettre sur une installation vierge :

    apt-get install -y vim fail2ban

Si vous êtes sur VMware :

    apt-get install -y open-vm-tools

Ajout d’un bashrc coloré
========================

    rm -rf /root/.bashrc
    wget https://raw.githubusercontent.com/jeedom/core/stable/install/bashrc -O /root/.bashrc

Autoriser la connexion root en SSH
==================================

Il faut éditer le fichier /etc/ssh/sshd\_config et changer :

    PermitRootLogin without-password

Par :

    PermitRootLogin yes

Monter un partage Samba
=======================

Installation du paquet cifs

    apt-get install -y cifs-utils

Créer le point de montage :

    mkdir /mnt/mon_partage

> **Note**
>
> Il faut adapter mon\_partage en fonction de votre besoin

Ajout du montage dans /etc/fstab

    //IP_SERVER_SAMBA/mon_partage /mnt/mon_partage cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Note**
>
> Vous devez changer les TODO pour user et password par rapport à votre configuration

Passage de Jessie à Stretch
===========================

Il faut éditer le fichier /etc/apt/sources.list et remplacer tous les jessie par stretch, puis faire :

    apt-get update
    apt-get dist-upgrade

> **Important**
>
> Stretch n’est pas une version stable de Debian, en cas de soucis l'équipe Jeedom pourra refuser toute demande de support

