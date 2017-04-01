Here is the step by step documentation to install Jeedom on Jeedomboard (or Hummingboard).

> **Tip**
>
> The name of the Jeedom image may be different from that of the catches made in this documentation

Step 1 : Installation of win32diskimager
========================================

You must download software win32diskimager [here](http://sourceforge.net/projects/win32diskimager/) then install it on your PC

Step 2 : Recovery of Jeedom image
=================================

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image jeedom-jeeboard-**.rar ou Jeedomboard\_\_Debian\_Jessie**.rar

![](../images/install_humming_1.PNG)

Step 3 : Decompression image Jeedom
===================================

Unpack Jeedom image (if necessary you can donwload and install [winrar](http://www.clubic.com/telecharger-fiche9632-winrar.html)), you should get this :

![](../images/install_humming_2.PNG)

![](../images/install_humming_8.PNG)

Step 4 : Burning the image on the SD card
=========================================

Insert your SD card into your computer and run the software win32diskimager :

![](../images/install_humming_3.PNG)

Check in "device" that is your SD card is selected and click the folder icon to specify the path of the image uploaded and uncompressed (step 2 and 3) :

![](../images/install_humming_4.PNG)

Click "Write" to write the image, confirm the warning :

![](../images/install_humming_5.PNG)

You can follow the progress of the writing of the image (ten minutes) :

![](../images/install_humming_6.PNG)

Once finished you will have this message :

![](../images/install_humming_7.PNG)

You just have to put the SD card into the Jeedomboard (or Hummingboard), to connect the network and power, your will start Jeedom (5 min) and you should see it on the network.

> **Tip**
>
> SSH username/password are jeedom/Mjeedom96

For the rest you can follow the documentation [Getting Started with Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/en_US/doc-premiers-pas.html)

