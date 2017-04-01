Vous trouverez ici la documentation pas à pas pour installer Jeedom sur les Jeedomboard (ou Hummingboard).

> **Tip**
>
> Le nom de l’image Jeedom peut être différent de celui des captures faites dans cette documentation

Etape 1 : Installation de win32diskimager
=========================================

Vous devez télécharger le logicel win32diskimager [ici](http://sourceforge.net/projects/win32diskimager/) puis l’installer sur votre pc

Etape 2 : Récupération de l’image de Jeedom
===========================================

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image jeedom-jeeboard-**.rar ou Jeedomboard\_\_Debian\_Jessie**.rar

![](../images/install_humming_1.PNG)

Etape 3 : Décompression de l’image de Jeedom
============================================

Décompresser l’image de Jeedom (si vous n’avez rien pour le décompresser vous pouvez installer [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), vous devez obtenir :

![](../images/install_humming_2.PNG)

![](../images/install_humming_8.PNG)

Etape 4 : Gravure de l’image sur la carte SD
============================================

Insérer votre carte SD dans votre ordinateur puis lancer le logiciel win32diskimager :

![](../images/install_humming_3.PNG)

Vérifier que dans "device" c’est bien votre carte SD qui est sélectionnée puis cliquez sur l’icône dossier pour indiquer le chemin de l’image téléchargée et decompressée (étape 2 et 3) :

![](../images/install_humming_4.PNG)

Cliquez sur "Write" pour écrire l’image, validez l’avertissement :

![](../images/install_humming_5.PNG)

Vous pouvez suivre l’avancement de l'écriture de l’image (une dizaine de minutes) :

![](../images/install_humming_6.PNG)

Une fois ceci terminé vous aurez ce message :

![](../images/install_humming_7.PNG)

Vous n’avez plus qu'à mettre la carte SD dans la Jeedomboard (ou Hummingboard), à brancher le réseau et l’alimentation, votre Jeedom va démarrer (5 min) et vous devriez le voir sur le réseau.

> **Tip**
>
> Les identifiants SSH sont jeedom/Mjeedom96

Per il resto della documentazione è possibile accedere a [Inizia con Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/en_US/doc-premiers-pas.html)

