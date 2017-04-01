Matériels
=========

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Hardware</th>
<th align="left">Etat</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Jeedomboard</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Hummingboard</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Odroid C2</p></td>
<td align="left"><p>Release candidat</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>RPI1</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>RPI2</p></td>
<td align="left"><p>Non officiel/Stable</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>RPI3</p></td>
<td align="left"><p>Non officiel/Stable</p></td>
<td align="left"><p>Attention si vous utilisez un Razberry le wifi/bluetooth ne pourra marcher</p></td>
</tr>
<tr class="odd">
<td align="left"><p>64 bits</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"><p>Attention seulement sous Debian Jessie</p></td>
</tr>
<tr class="even">
<td align="left"><p>32 bits</p></td>
<td align="left"><p>Non supporté</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Vmware</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"><p>Attention seulement sous Debian Jessie. Pas de support pour VMware, seulement pour Jeedom. ATTENTION VmWare 6.5 n’est pas supporté, certain tests on montrée des soucis avec les clef USB Zwave qui n’existent pas avec VMWare 6.0 ou inférieure.</p></td>
</tr>
</tbody>
</table>

Images
======

Vous pouvez retrouver toutes les images Jeedom [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images

> **Note**
>
> Une image netinstall va lors du premier démarrage installer la dernière version stable de Jeedom, ce démarrage est donc un peu plus long et nécessite d’avoir accès à internet. Vous pouvez suivre l’avancement de celui-ci en allant sur l’IP de votre Jeedom avec votre navigateur

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Images</th>
<th align="left">Hardware</th>
<th align="left">Etat</th>
<th align="left">Accès SSH</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Jeedomboard netinstall</p></td>
<td align="left"><p>jeedomboard et hummingboard</p></td>
<td align="left"><p>Beta</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Odroid c2 netinstall</p></td>
<td align="left"><p>Odroid C2</p></td>
<td align="left"><p>Release candidat</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>RPI</p></td>
<td align="left"><p>RPI1, RPI2 et RPI3</p></td>
<td align="left"><p>Non officiel/Stable</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>RPI Netinstall</p></td>
<td align="left"><p>RPI1, RPI2 et RPI3</p></td>
<td align="left"><p>Officiel/Alpha</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Virtual Box</p></td>
<td align="left"><p>Virtual box</p></td>
<td align="left"><p>Non officiel/Stable</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"><p>Non maintenu, il vaut mieux passer par l’installation manuelle de Jeedom pour tout ce qui est VM</p></td>
</tr>
<tr class="even">
<td align="left"><p>Jeedomboard</p></td>
<td align="left"><p>jeedomboard et hummingboard</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Docker</p></td>
<td align="left"></td>
<td align="left"><p>Beta</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Logiciel
========

> **Important**
>
> Jeedom ne supporte que Debian Jessie (stable) et Stretch (beta). Toute autre version (Wheezy…) ou distribution (Ubuntu…) n’est pas supportée par Jeedom.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Etat</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>PHP 5.5 ou moins</p></td>
<td align="left"><p>Non supporté</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>PHP 5.6</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>PHP 7.X</p></td>
<td align="left"><p>Beta</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Mysql 5.5/5.6</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Mysql 5.7</p></td>
<td align="left"><p>Beta</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>MariaBD</p></td>
<td align="left"><p>Non officiel/Stable</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

Clef USB/Module d’extension
===========================

Contrôleur ENOCEAN :

-   Clef USB EnOcean USB300

-   Clef USB EnOcean USB310 (Recommandé)

Interface RFXCOM :

-   RFXtrx433 USB

-   RFXtrx433E USB (Recommandé)

Passerelle EDISIO :

-   Dongle Edisio (Recommandé)

Indicateur Led :

-   blink(1) mk2 (Recommandé)

Dongle GSM :

-   HUAWEI E220 (Recommandé)

-   Alcatel one touch X220L

-   HSDPA 7.2MBPS 3G Wireless

Contrôleur Z-WAVE :

-   SIGMA DESIGNS Contrôleur Z-Wave Plus USB

-   Z-WAVE.ME - Mini contrôleur USB Z-Wave Plus UZB1

-   AEON LABS Contrôleur Z-Wave Aeon Labs Z-Stick S2

-   AEON LABS - Contrôleur USB Z-Wave Plus Z-Stick GEN5 (Recommandé)

Modules Zwave
=============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/zwave/fr_FR/equipement.compatible.html)

Modules EnOcean
===============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/enocean/fr_FR/equipement.compatible.html)

Modules Edisio
==============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/edisio/fr_FR/-equipement.compatible.html)

Modules RFXcom
==============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/rfxcom/fr_FR/equipement.compatible.html)

Caméras
=======

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/camera/fr_FR/equipement.compatible.html)

Plateforme matérielle recommandée
=================================

L'équipe jeedom vous recommande (en fonction de votre budget) :

-   Jeedom mini+ (tout est préinstallé, vous n’avez rien à faire)

-   Odroid C2 (meilleur rapport performance/prix)

-   Intel Nuc gen6 (des performances extrêmes, voir la catégorie tuto pour le choix dans les differents modèles et l’installation)

Hardware Loïc
=============

Jeedom
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Intel NUC Gen6 i5 avec 16Go de ram, 240Go de SSD le tout sous VMware</p></td>
<td align="left"><p>Super hardware, performant et pas trop consommateur</p></td>
</tr>
</tbody>
</table>

Zwave
-----

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Clef Aeon Gen 5</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Zipato Mini Keypad RFID</p></td>
<td align="left"><p>Attention pas d’information sur le badge qui vient d'être lu</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Fibaro FGWPE/FGWPF Wall Plug</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Fibaro FGRGB-101 RGBW</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>FGMS-001 Motion Sensor</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>FGD-211 Dimmer</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>FGFS-101 ZW5 Flood Sensor 1</p></td>
<td align="left"><p>Attention lors du redémarrage du réseau le module envoie une alerte alors que ce n’est pas le cas</p></td>
</tr>
</tbody>
</table>

enOcean
-------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Clef USB EnOcean USB300</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Nodon détecteur d’ouverture de porte</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Interrupteur double</p></td>
<td align="left"><p>Nécessite un fort appui pour fonctionner</p></td>
</tr>
<tr class="even">
<td align="left"><p>Soft remote</p></td>
<td align="left"><p>Etanche avec un aimant</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Eltako Transmetter IR</p></td>
<td align="left"><p>Un peu cher mais bien pratique</p></td>
</tr>
</tbody>
</table>

Edisio
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Télécommande e-Trendy</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Interrupteur 5 boutons</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Détecteur d’ouverture</p></td>
<td align="left"><p>Semble avoir quelques ratés de temps en temps (peut-être un soucis de pile)</p></td>
</tr>
</tbody>
</table>

Rfxcom
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Télécommande DIO</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Capteur de température et d’humidité Oregon</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Prise DIO</p></td>
<td align="left"><p>A quelques ratés de temps en temps</p></td>
</tr>
</tbody>
</table>

Multimedia
----------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Sonos Play 5</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Sonos Connect</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Sonos Play 1</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Nvidia TV Shield</p></td>
<td align="left"><p>Bien pratique avec Kodi, attention quand même la transmission des flux audio HD ne marche pas toujours</p></td>
</tr>
</tbody>
</table>

Caméra
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Foscam C1</p></td>
<td align="left"><p>Pour le meilleur rapport qualité/prix</p></td>
</tr>
</tbody>
</table>

Autres
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Nom</th>
<th align="left">Remarques</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Neato Connected</p></td>
<td align="left"><p>Bon aspirateur mais la fonction connectée n’apporte pas tant que ca</p></td>
</tr>
<tr class="even">
<td align="left"><p>Dotti</p></td>
<td align="left"><p>Afficheur LED en bluetooth, vraiment sympa</p></td>
</tr>
<tr class="odd">
<td align="left"><p>HUAWEI E220</p></td>
<td align="left"><p>Jamais eu un seul soucis</p></td>
</tr>
<tr class="even">
<td align="left"><p>Kartoz</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Greenmomit</p></td>
<td align="left"><p>Bon thermostat connecté</p></td>
</tr>
<tr class="even">
<td align="left"><p>Denon 3200</p></td>
<td align="left"><p>Très bon ampli</p></td>
</tr>
</tbody>
</table>


