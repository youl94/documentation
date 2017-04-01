Here is the step by step documentation to install Jeedom on Raspberry pi 1 or 2

> **Tip**
>
> The name of the Jeedom image may be different from that of the catches made in this documentation

Step 1 : Installation of win32diskimager
========================================

You must download software win32diskimager [here](http://sourceforge.net/projects/win32diskimager/) then install it on your PC

Step 2 : Jeedom image recovery
==============================

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image Raspberry…netinstall.zip

![](../images/install_humming_1.PNG)

Step 3 : Jeedom image decompression
===================================

Décompresser l’image de Jeedom (si vous n’avez rien pour le décompresser vous pouvez installer [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), vous devez obtenir :

![](../images/install_humming_2.PNG)

![](../images/install_humming_8.PNG)

Step 4 : Writing image on SD card
=================================

Insert your SD card into your computer and run the software win32diskimager :

![](../images/install_humming_3.PNG)

Vérifier que dans "Device" c’est bien votre carte SD qui est sélectionnée puis cliquez sur l’icône Dossier pour indiquer le chemin de l’image téléchargée et decompressée (étape 2 et 3) :

![](../images/install_humming_4.PNG)

Click "Write" to write the image, confirm the warning :

![](../images/install_humming_5.PNG)

You can follow the progress of the writing of the image (ten minutes) :

![](../images/install_humming_6.PNG)

Once finished you will have this message :

![](../images/install_humming_7.PNG)

You just have to put the SD card into the JRaspberry pi,, to connect the network and power, your will start Jeedom (5 min) and you should see it on the network.

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
> Si vous êtes sur rpi2 IL NE FAUT SURTOUT PAS L’OVERCLOCKER sous peine d’avoir un système instable avec de nombreuses corruptions de carte SD

Ensuite vous pouvez suivre la documentation [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

