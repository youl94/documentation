MCO MH-S412 Double
==================

 

-   **Das Modul**

 

![](../images/mco.mhs412/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/mco.mhs412/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 L’interrupteur MH-S412-EU permet de commuter les 2 charges connectées, soit manuellement comme un interrupteur classique, ou à distance via le protocole sans fil Z-Wave.

Sa finition en verre et son design apporte un style moderne.

L’interrupteur MH-S412-EU peut contrôler n’importe quel type de charge, un éclairage ou un appareil électrique.

L’interrupteur est également équipé d’un voyant LED qui indique son état.  

Funktionen
----------

 

-   Commander deux lampes ou appareils à distance

-   S’installe à la place d’un interrupteur existant (s’insère parfaitement dans une boite d’encastrement de 40mm)

-   Funktion AN/AUS

-   Supporte les commandes d’association (Groupe 1 et Groupe 2)

-   Contrôle des deux charges en local

-   LED de statut

-   Finition en verre, design moderne

-   Boutons tactiles

 

Technische Daten
----------------

 

-   Type de module : Récepteur Z-Wave

-   Couleur : Blanc

-   Alimentation : 230 V, 50 Hz

-   Câblage : 3 fils, neutre nécessaire

-   Puissance maximum : 5A (1100W) pour chaque canal

-   Fréquence : 868,42 Mhz

-   Reichweite : bis zu 30 m

-   Dimensions : 86 x 86 x 43 mm

-   Affichage: LED bleue/rouge

 

Moduldaten
----------

 

-   Marque : MC HOME

-   Name : MH-S412 Touch Panel Switch (Schalter 2-fach)

-   Hersteller-ID : 351

-   Produkttyp : 16642

-   Produkt-ID : 514

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer sur un seul des 2 boutons en face avant pendant 3 sec, conformément à sa documentation papier.

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/mco.mhs412/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/mco.mhs412/commandes.jpg)

 

Wenn Sie später die Konfiguration des Moduls gemäß Ihrer Funktion durchführen wollen, erfolgt das in Jeedom über die Schaltfläche „Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/mco.mhs412/config1.jpg)

 

Parameterdetails :

 

-   1: Saving state before power failure : enable ( permet de retrouver le dernier état des interrupteurs juste avant la coupure secteur ) diseable (les interrupteurs seront a l'état OFF au retour secteur )

 

### Gruppen

 

Dieses Modul hat 3 Assoziationsgruppen, nur die dritte ist unerlässlich.

 

![Groupe](../images/mco.mhs412/groupe.jpg)

 

Bon à savoir
------------

 

### Spécificités

1) les boutons tactiles ont un halo de couleur bleu lorsque la charge est pilotée

2) les boutons tactiles ont un halo de couleur orangé lorsque la charge est non pilotée

3) le touché est plutôt agréable et les commandes réactives

4) cet interrupteur peut piloter sa charge en mode autonome (non rattaché à un contrôleur z-wave)

Wakeup
------

 

Ce module étant raccordé au secteur (220v) , le reveil est instantanné et ne necessite donc pas d’action particulière lors d’un changement de paramètres

 

F.A.Q.
------

 

Pour exclure ce modèle, mettre Openzwave en mode exclusion et appuyer sur un seul des 2 boutons en face avant pendant 3 sec, conformément à sa documentation papier.

Pour restaurer les paramètres usine, appuyer sur un seul des 2 boutons en face avant pendant 10 sec, conformément à sa documentation papier.

 

