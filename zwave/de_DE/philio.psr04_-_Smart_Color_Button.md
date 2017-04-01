Philio Smart Color Button
=========================

 

-   **Das Modul**

 

![](../images/philio.psr04/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/philio.psr04/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

Cet interrupteur au design unique propose plusieurs fonctions. Vous pourrez l’utiliser pour allumer, éteindre ou varier l'éclairage, ajuster la position de vos volets, régler la température du thermostat ou l’utiliser comme une minuterie.

Une fois inclus dans votre réseau Z-Wave, l’interrupteur PSR04 de Philio devra être associé au(x) périphérique(s) que vous souhaitez contrôler. Il peut fonctionner uniquement par association directe avec des périphériques, et ne peut lancer de scènes créées dans votre contrôleur domotique Z-Wave.

Utilisé comme un variateur, il a le même comportement qu’un variateur traditionnel. Tournez le bouton vers la droite pour augmentez la lumière, et vers la gauche pour la diminuer.

De plus, vous pouvez facilement déplacer et positionner cet interrupteur à l’endroit de votre choix grâce à son support magnétique. Sa conception étanche permet de l’installer dans un endroit à forte humidité comme une salle de bains.

Il utilise la dernière puce Z-Wave série 500, offrant une augmentation de la portée radio de 50% et une vitesse de communication de 250% plus rapide par rapport aux précédents produits Z-Wave, ainsi qu’une plus faible consomation d'énergie permettant une plus grande autonomie.

 

Funktionen
----------

 

-   Interrupteur multifonctions

-   Technologie Z-Wave+

-   Funktion AN/AUS und Variationen (Beleuchtung oder Rollläden)

-   Fonction minuterie intégrée

-   Etanche

-   S’adapte à tout style de décoration

-   Batterie rechargeable

-   Très faible consommation d'énergie

-   Longue durée de vie de la batterie (6 mois par charge)

-   Support magnétique

-   LED d’indication RGBW

-   Facile à installer

 

Technische Daten
----------------

 

-   Alimentation : Batterie Lithium Polymère 3.7V, 220mA vAutonomie de la batterie : 6 mois pour 2h de charge

-   Consommation en veille : 18µA

-   Consommation en fonctionnement : 45mA

-   Fréquence : 868.42 MHz

-   Distance de transmission : 100m en extérieur, 40m en intérieur

-   Dimensions :

Support : 71,16 x 10,94 mm (diamétre x épaisseur) Bouton : 59,99 x 14,89 mm (diamétre x épaisseur) Support + Bouton : 71,16 x 17,22 mm (diamétre x épaisseur) \* Certifications :

EN 301 489-1, EN 301 489-3 EN 300 220-1, EN 300 220-2 EN62479, EN60950 FCC Part 15 B, FCC Part 15 C

 

Moduldaten
----------

 

-   Marque : Philio

-   Name: PSR04 Smart Color Button

-   Hersteller-ID : 316

-   Produkttyp : 9

-   Produkt-ID : 34

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut le mettre en position basse (inclusion) et appuyer sur le bouton, conformément à sa documentation papier.

 

![](../images/philio.psr04/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/philio.psr04/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/philio.psr04/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Etat : c’est la commande qui remontera la position du bouton de 0 à 100%

-   Batterie : c’est la commande qui remonte l'état de batterie du module

 

### Modulkonfiguration

 

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

 

Wenn Sie später die Konfiguration des Moduls gemäß Ihrer Funktion durchführen wollen, erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/philio.psr04/config1.jpg)

 

Parameterdetails :

 

-   1: définit la borne la plus basse (position complètement à gauche)

-   2 : définit la borne la plus haute (position complètement à droite)

-   10 : intervalle de temps de remontée de batterie

-   25 : permet de définir si le module envoie sa positon automatiquement après rotation (1s de délai) ou si il faut appuyer sur le bouton pour valider l’envoi

-   26 : active l’envoi de scène ou non sur appui du bouton centrale (paramètre non pris en compte dans Jeedom)

 

### Gruppen

 

Ce module possède deux groupes d’association, le premier est le seul indispensable. Le deuxième permet de remonter la position à Jeedom

 

![Groupe](../images/philio.psr04/groupe.jpg)

 

Bon à savoir
------------

 

### Spécificités

Pour utiliser ce module en télécommande il faut procéder comme suit :

-   Rajouter le contrôleur dans le groupe 2

En effet ce type de module n’est pas fait pour interagir directement avec une box mais directement avec d’autres modules. Cependant en rajoutant Jeedom au groupe 2, cela permet de recevoir la position du bouton et donc de s’en servir pour contrôller un scénario (régler un volume par exemple)

Wakeup
------

 

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   mettre le module en position basse et appuyer sur le bouton

 

F.A.Q.
------

 

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Dieses Modul ist ein Batterie-Modul, die neue Konfiguration wird berücksichtigt werden, wenn das Modul aufwacht.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

