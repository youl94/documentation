Nützliche Pakete
================

Hier sind einige nützliche Pakete, die auf eine unberührte Installation nachinstalliert werden können :

    apt-get install -y vim fail2ban

Si vous êtes sur VMware :

    apt-get install -y open-vm-tools

Eine farbige bashrc hinzufügen
==============================

    rm -rf /root/.bashrc
    wget https://raw.githubusercontent.com/jeedom/core/stable/install/bashrc -O /root/.bashrc

Eine root Verbindung in SSH erlauben
====================================

Il faut éditer le fichier /etc/ssh/sshd\_config et changer :

    PermitRootLogin without-password

Ändern in :

    PermitRootLogin yes

Monter un partage Samba
=======================

cifs Paket installieren

    apt-get install -y cifs-utils

Den Mount-Punkt erstellen :

    mkdir /mnt/mon_partage

> **Note**
>
> Man muß mon\_partage nach Ihren Bedürfnissen entsprechend anpassen

Zusatz der Montage in /etc/fstab

    //IP_SERVER_SAMBA/mon_partage /mnt/mon_partage cifs uid=0,rw,user=TODO,password=TODO 0 0

> **Note**
>
> Vous devez changer les TODO pour user et password par rapport à votre configuration

Umstellung von Jessie in Stretch
================================

Il faut éditer le fichier /etc/apt/sources.list et remplacer tous les jessie par stretch, puis faire :

    apt-get update
    apt-get dist-upgrade

> **Important**
>
> Stretch n’est pas une version stable de Debian, en cas de soucis l'équipe Jeedom pourra refuser toute demande de support

