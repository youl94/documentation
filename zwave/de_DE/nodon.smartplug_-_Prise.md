Nodon Prise Intelligente - Smartplug
====================================

 

-   **Das Modul**

 

![](../images/nodon.smartplug/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/nodon.smartplug/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

La prise télécommandée NodOn® est pilotable via une centrale domotique compatible Z- Wave® ou Z-Wave Plus® ou directement via d’autres contrôleurs Z-Wave® ou Z-Wave Plus® tels que la Soft Remote, l’interrupteur mural ou la Octan Remote NodOn®. Au standard allemand (Schuko) ou français (Type E), la prise peut se brancher dans les 2 sens, tête en haut ou tête en bas. Associées à son design fin, ces 2 caractéristiques permettent une intégration facilitée, sans boucher les fûts voisins sur une multiprise. L’apprentissage de la prise avec son contrôleur nécessite seulement quelques secondes. Un bouton local permet d’allumer ou d’éteindre la prise directement.

 

Fonctions
---------

 

-   Détection perte de courant secteur

-   Ergonomique: Possibilité de brancher la prise tête en haut/tête en bas

-   Gestion intelligente des alarmes

-   verbesserte Funkreichweite

-   Ampérage maximum: 16A

 

Technische Daten
----------------

 

-   Alimentation : 230V AC +/-10% - 50Hz

-   Puissance maximum : 3000W en continue / 3500W cyclique (Charge résistive) Consommation intrinsèque : \<1W

-   Betriebstemperatur: 0°C bis 40°C - Höhe: 2000 m

-   Z-Wave® Funk Protokoll : 868,4MHz - 500 Serie - kompatibel Z-Wave Plus® SDK 06.51.01

-   Reichweite : 40m Innen / 80m Außen

-   Dimensions: 104\*51\*36mm

-   Garantie 2 ans

-   Type EU

 

Moduldaten
----------

 

-   Marque : Nodon

-   Name : SmartPlug

-   Hersteller-ID : 357

-   Produkttyp : 1

-   Produkt-ID : 1

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer sur le bouton jusqu'à que la lumière devienne rouge, conformément à sa documentation papier.

 

![](../images/nodon.smartplug/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/nodon.smartplug/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/nodon.smartplug/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Etat : C’est la commande qui permet de connaitre le statut de la prise (Allumée/Eteinte)

-   On : C’est la commande qui permet d’allumer la prise

-   Off : C’est la commande qui permet d'éteindre la prise

-   Statut : Permet de savoir si la prise est alimentée ou non (Détection coupure de courant / débranchement)

 

A noter que sur le dashboard, les infos Etat, ON/OFF se retrouvent sur le même icone.

 

### Modulkonfiguration

 

Vous pouvez effectuer la configuration du module en fonction de votre installation. erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des Zwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/nodon.smartplug/config1.jpg)

![Config1](../images/nodon.smartplug/config2.jpg)

 

Parameterdetails :

 

-   1 : Ce paramètre déﬁnit l’état (ON/OFF) de la Smart Plug après une coupure de courant ou après branchement

-   2 : Ce paramètre permet de conﬁgurer les rapports de notiﬁcation de coupure/retour de courant, ainsi que les groupes associés (Groupes 4, 5, 6, 7, 8). Plusieurs combinaisons sont possibles (se référer à la documentation papier ou à la bulle d’aide dans jeedom). Il est recommandé de mettre ce paramètre à 1.

-   3 : Ce paramètre permet d’activer ou désactiver les groupes 2 et 3.

-   4 : Le paramètre force l’état de la Smart Plug à « ON » (Smart Plug activée). Lorsque que la paramètre est activée, il n’est pas possible d’éteindre la Smart Plug (local ou radio)

-   Paramètres 5 à 20 : Au travers des paramètres de conﬁgurations \#5 à \#20, il est possible de conﬁgurer jusqu’à 8 alarmes différentes. Aﬁn de bien conﬁgurer vos alarmes, le formulaire en ligne: www.nodon.fr/support/asp3/alarm vous guidera

### Gruppen

 

Ce module possède 8 groupes d’association.

 

![Groupe](../images/nodon.smartplug/groupe.jpg)

 

-   Groupe 1 – Lifeline : Ce groupe est généralement utilisé pour reporter des informations de la Smart Plug au contrôleur principal du réseau.

-   Groupe 2 – Suivi de l’état de la Smart Plug Lorsque la Smart Plug est activée (respectivement désactivée) via le bouton local, celle-ci envoie une commande d’activation (respectivement désactivation) aux appareils associés. Aucune commande n’est envoyée si le changement d’état de la Smart Plug a été provoqué par une commande radio

-   Groupe 3 – Suivi de l’état complémentaire Lorsque que la Smart Plug est activée (respectivement désactivée) via le bouton local, celle-ci envoie une commande de désactivation (respectivement d’activation) aux appareils associés. Aucune commande n’est envoyée si le changement d’état de la Smart Plug a été provoqué par une commande radio.

-   Groupe 4 – Notiﬁcation de coupure de courant Lorsque la Smart Plug détecte une coupure de courant ou un retour du courant, un rapport de notiﬁcation est envoyé aux appareils associés. Le rapport envoyé est un « Notiﬁcation Report : Power Management - AC disconnected / Re-connected).

-   Groupe 5 – Activation sur coupure de courant Lorsque la Smart Plug détecte une coupure de courant, elle active les appareils associés.

-   Groupe 6 – Désactivation sur coupure de courant Lorsque la Smart Plug détecte une coupure de courant, elle désactive les appareils associés

-   Groupe 7 – Activation sur retour de courant Lorsque la Smart Plug détecte un retour du courant, elle active les appareils associés.

-   Groupe 8 – Désactivation sur retour de courant Lorsque la Smart Plug détecte un retour du courant, elle désactive les appareils associés

 

> **Important**
>
> A minima Jeedom devrait se retrouver dans les groupes 1 et 4  

Bon à savoir
------------

 

### Spécificités

 

-   Il est inutile de s’amuser à brancher/débrancher la prise pour observer l’alarme. Celle ci ne marchera à peu près que 3 fois. Au delà la prise doit rester alimentée un petit moment pour recharger la pile interne.

 

Wakeup
------

 

Pas de notion de wakeup sur ce module.

 

F.A.Q.
------

 

Vous ne deviez pas avoir l’option télécharger les widgets auto d’activée. Vous pouvez récupérer les widgets mobile et dashboard sur le market : alarme\_prise.

 

Avez-vous bien paramétré le paramètre 2 ? Avez-vous bien Jeedom au moins dans les groupes 1 et 4 ? Avez-vous laisser le temps à la pile pour se charger ?

 

*@sarakha63*

