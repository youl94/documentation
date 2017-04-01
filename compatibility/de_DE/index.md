Materialien
===========

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Hardware</th>
<th align="left">Zustand</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Jeedomboard</p></td>
<td align="left"><p>Stabil</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Hummingboard</p></td>
<td align="left"><p>Stabil</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Odroid C2</p></td>
<td align="left"><p>Release-Kandidat</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>RPI1</p></td>
<td align="left"><p>Stabil</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>RPI2</p></td>
<td align="left"><p>nicht offiziell/Stabil</p></td>
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
<td align="left"><p>32-bit</p></td>
<td align="left"><p>Nicht unterstützt</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Vmware</p></td>
<td align="left"><p>Stable</p></td>
<td align="left"><p>Attention seulement sous Debian Jessie. Pas de support pour VMware, seulement pour Jeedom. ATTENTION VmWare 6.5 n’est pas supporté, certain tests on montrée des soucis avec les clef USB Zwave qui n’existent pas avec VMWare 6.0 ou inférieure.</p></td>
</tr>
</tbody>
</table>

Abbilder
========

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
<th align="left">Abbilder</th>
<th align="left">Hardware</th>
<th align="left">Zustand</th>
<th align="left">SSH Zugang</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Jeedomboard netinstall</p></td>
<td align="left"><p>Jeedomboard und Hummingboard</p></td>
<td align="left"><p>Beta</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Odroid c2 netinstall</p></td>
<td align="left"><p>Odroid C2</p></td>
<td align="left"><p>Release-Kandidat</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>RPI</p></td>
<td align="left"><p>RPI1, RPI2 und RPI3</p></td>
<td align="left"><p>nicht offiziell/Stabil</p></td>
<td align="left"><p>root/Mjeedom96</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>RPI Netinstall</p></td>
<td align="left"><p>RPI1, RPI2 und RPI3</p></td>
<td align="left"><p>OffiziellAlpha</p></td>
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
<td align="left"><p>jeedomboard und Hummingboard</p></td>
<td align="left"><p>Stabil</p></td>
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

Software
========

> **Important**
>
> Jeedom unterstützt nur Debian Jessie (stabil) und Stretch (Beta). Eine andere Version (Wheezy…) oder Distribution (Ubuntu…) wird von Jeedom nicht unterstützt.

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Zustand</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>PHP 5.5 oder weniger</p></td>
<td align="left"><p>nicht unterstützt</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>PHP 5.6</p></td>
<td align="left"><p>Stabil</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>PHP 7.X</p></td>
<td align="left"><p>Beta</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Mysql 5.5/5.6</p></td>
<td align="left"><p>Stabil</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Mysql 5.7</p></td>
<td align="left"><p>Beta</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>MariaBD</p></td>
<td align="left"><p>nicht offiziell/Stabil</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>

USB Stick/Erweiterungsmodul
===========================

ENOCEAN-Controller :

-   USB-Stick EnOcean USB300

-   USB-Stick EnOcean USB310 (Empfohlen)

RFXCOM Schnittstelle :

-   RFXtrx433 USB

-   RFXtrx433E USB (Empfohlen)

EDISIO Gateway :

-   Edisio Dongle (Empfohlen)

LED-Anzeige :

-   blink(1) mk2 (Empfohlen)

GSM Dongle :

-   HUAWEI E220 (Empfohlen)

-   Alcatel one touch X220L

-   HSDPA 7.2MBPS 3G Wireless

Z-Wave Controller :

-   SIGMA DESIGNS Z-Wave Controller Plus USB

-   Z-WAVE.ME - Mini Controller USB Z-Wave Plus UZB1

-   AEON LABS Z-Wave Controller Aeon Labs Z-Stick S2

-   AEON LABS - USB Controller Z-Wave Plus Z-Stick GEN5 (Empfohlen)

Zwave Module
============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/zwave/fr_FR/equipement.compatible.html)

EnOcean Module
==============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/enocean/fr_FR/equipement.compatible.html)

Edisio Module
=============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/edisio/fr_FR/-equipement.compatible.html)

RFXcom Module
=============

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/rfxcom/fr_FR/equipement.compatible.html)

Kameras
=======

Vous trouverez la liste [ici](https://jeedom.github.io/documentation/camera/fr_FR/equipement.compatible.html)

Empfohlene Hardware-Plattform
=============================

Das Jeedom-Team empfiehlt Ihnen (je nach Geldbeutel) :

-   Jeedom Mini+ (alles ist vorinstalliert, Sie haben nichts zu tun)

-   Odroid C2 (Bestes Preis/Leistungs-Verhältnis) -Intel Nuc gen6 (extreme Leistung, lesen Sie in der Anleitung für die Wahl der verschiedenen Modellen und Installation)

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
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
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
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Aeon-Stick Gen5</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Zipato Mini Keypad RFID</p></td>
<td align="left"><p>Achtung, keine Information über das Typenschild, das soeben gelesen wurde</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Fibaro FGWPE/FGWPF Wall Plug (Steckdosenstecker)</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Fibaro FGRGB-101 RGBW</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>FGMS-001 Motion Sensor (Bewegungsmelder)</p></td>
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
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>USB-Stick EnOcean USB300</p></td>
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
<td align="left"><p>Fernbedienung</p></td>
<td align="left"><p>Wasserdicht, mit einem Magneten</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Eltako IR Sender</p></td>
<td align="left"><p>Ein wenig teuer, aber praktisch</p></td>
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
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>e-Trendy Fernbedienung</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>5 Tasten Schalter</p></td>
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
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>DiO Fernbedienung</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Oregon Luftfeuchtigkeit und Temperatur Sensor</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>DiO Stecker</p></td>
<td align="left"><p>Mit ein paar Problemchen von Zeit zu Zeit</p></td>
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
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
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
<td align="left"><p>Praktisch mit Kodi, Achtung, trotzdem geht die Audio-Übertragung der HD-Streams nicht immer</p></td>
</tr>
</tbody>
</table>

Kamera
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Foscam C1</p></td>
<td align="left"><p>Für das beste Preis-Qualität-Verhältnis</p></td>
</tr>
</tbody>
</table>

Andere
------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Bemerkungen</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Neato Connected</p></td>
<td align="left"><p>Bon aspirateur mais la fonction connectée n’apporte pas tant que ca</p></td>
</tr>
<tr class="even">
<td align="left"><p>Dotti</p></td>
<td align="left"><p>LED-Anzeige in Bluetooth, wirklich nett</p></td>
</tr>
<tr class="odd">
<td align="left"><p>HUAWEI E220</p></td>
<td align="left"><p>Hatt kein einziges Problem</p></td>
</tr>
<tr class="even">
<td align="left"><p>Kartoz</p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p>Greenmomit</p></td>
<td align="left"><p>Gut vernetztes Thermostat</p></td>
</tr>
<tr class="even">
<td align="left"><p>Denon 3200</p></td>
<td align="left"><p>Sehr guter Verstärker</p></td>
</tr>
</tbody>
</table>


