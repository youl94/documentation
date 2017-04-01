SmartHome by Everspring In Wall Dimmer - AD146-0
================================================

 

-   **Das Modul**

 

![](../images/smarthomebyeverspring.AD146-0/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/smarthomebyeverspring.AD146-0/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

Ce Micromodule Variateur Mural de la marque SmartHome Europe by Everspring, est conçu pour contrôler l’allumage et l’extinction des luminaires et des équipements électriques de votre maison. Il peut également fournir une fonction de variateur qui est uniquement compatible avec les ampoules. À une tension de 230V, ce module peut supporter jusqu’à 300 Watts en charge résistive ou incandescente, ou 200 Watts de charge fluorescente.

Il peut être utilisé en mode 2 fils (sans neutre), en remplacement d’un interrupteur existant, ou trois fils avec une alimentation classique du module (Phase + Neutre).

Le Module Variateur Mural est un appareil compatible Z-Wave™ qui est destiné pour fonctionner avec tous les réseaux compatibles Z-Wave™. Il peut être contrôlé par une télécommande, un logiciel PC, ou n’importe quel contrôleur Z-Wave de votre réseau.

 

Funktionen
----------

 

-   Commandez un éclairage/appareil à distance

-   S’installe derrière un interrupteur existant

-   Funktion AN/AUS und Variationen

-   Faible consommation d'énergie

-   Très petit, dimensions réduites

-   Antenne longue portée

-   Technologie Z-Wave Plus

-   S’installe facilement dans une boîte d’encastrement standard

-   Utilisation en mode 2 fils (neutre pas nécessaire)

-   Compatible avec les ampoules Led Dimmable

-   Bouton pour inclure/exclure/associer le module

-   Z-Wave Repeater-Funktion

 

Technische Daten
----------------

 

-   Type de module : Récepteur Z-Wave

-   Alimentation : 230 V, 50 Hz

-   Consommation : 0.5W

-   Puissance maximum :

-   Charge résistive : 300W

-   Ampoule à incandesence : 300W

-   Ampoule Fluocompacte : 200W

-   Fréquence : 868,42 Mhz

-   Portée : jusqu'à 70 m à l’extérieur, jusqu'à 30 m dans les bâtiments

-   Affichage: LED sur le bouton

-   Dimensions : 42mm x 43mm x 16mm

 

Moduldaten
----------

 

-   Marque : SmartHome by Everspring

-   Nom : In Wall Dimmer

-   Hersteller-ID : 96

-   Produkttyp : 3

-   Produkt-ID : 2

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur son bouton, conformément à sa documentation papier. Il est important de noter que ce module se met directement en inclusion lorsqu’il n’appartient à aucun réseau et qu’il est alimenté

 

![](../images/smarthomebyeverspring.AD146-0/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/smarthomebyeverspring.AD146-0/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/smarthomebyeverspring.AD146-0/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Intensité : C’est la commande permettant de régler l’intensité de la lumière

-   On : C’est la commande qui permet d’allumer la lumière

-   Off : C’est la commande qui permet d'éteindre la lumière

-   Etat : C’est la commande qui permet de connaître le statut de la lumière

 

A noter que sur le dashboard, les infos Etat, ON/OFF, intensité se retrouvent sur le même icone.

 

### Modulkonfiguration

 

Vous pouvez effectuer la configuration du module en fonction de votre installation. erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/smarthomebyeverspring.AD146-0/config1.jpg)

 

Parameterdetails :

 

-   1 : Ce paramètre déﬁnit la commande de valeur d'état, il n’est pas conseillé de changer cette valeur.

-   2 : Ce paramètre définit le délai d’envoi du changement d'état au groupe 1 (valeur comprise entre 3 et 25 secondes)

-   3 : Ce paramètre permet de définir si l’interrupteur reprendra son statut (ON ou OFF) après une reprise de courant.

-   4 : Ce paramètre permet de définir le type d’interrupteur (poussoir/bistable)

-   5 : Ce paramètre permet de définir si l’interrupteur fontionnera en mode variation ou en mode on/off

### Gruppen

 

Ce module possède 2 groupes d’association.

 

![Groupe](../images/smarthomebyeverspring.AD146-0/groupe.jpg)

 

> **Important**
>
> A minima Jeedom devrait se retrouver dans le groupe 1  

Bon à savoir
------------

 

### Spécificités

 

-   Le retour d'état ne peut pas être configuré en dessous de 3 secondes.  

### Visuel alternatif

 

![](../images//smarthomebyeverspring.AD146-0/vuewidget.jpg)

 

Wakeup
------

 

Pas de notion de wake up sur ce module.

 

F.A.Q.
------

 

Oui c’est le paramètre 2 et il ne peut pas être réglé en dessous de 3 secondes.

 

Non. ce module peut s’inclure ou s’exclure en appuyant plusieurs fois sur l’interrupteur.

 

*@sarakha63*

