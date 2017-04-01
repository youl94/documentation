Secure SRT 323 "Thermostat"
===========================

 

-   **Das Modul**

 

![](../images/secure.srt323/module.jpg)

 

-   **In Jeedom Sichtbar**

 

![](../images/secure.srt323/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

Le SRT323 est un thermostat mural fonctionnant sur batterie. Il dispose d’un bouton rotatif permettant à l’utilisateur de régler la température de consigne dans la pièce. Ce thermostat intègre un relais de commande de charge. Il n’est donc pas nécessaire d’installer un actionneur près de la chaudière.

En vérifiant la température de consigne avec la température réelle mesurée, le thermostat décide d’actionner la chaudière. De plus ce thermostat intègre un algorythme TPI (time-proportionnal integral), permettant une optimisation et un réglage plus juste de la température de votre environnement.

Le thermostat peut recevoir la température de consigne depuis un autre contrôleur Z-Wave, et peut être également utilisé comme un capteur de température. Le thermostat lui-même n’a pas de timer intégré mais exécute les commandes Z-Wave et les commandes locales.

Il peut être utilisé comme un remplaçant direct pour les thermostats existants, sans devoir effectuer de changements de câblage. L’algorythme TPI va permettre d’optimiser l’allumage et l’extinction de la chaudière afin de maintenir au mieux la température de consigne, sans "dépassement" de celle-ci. Il à été démontré que les contrôleurs TPI peuvent fournir des économies d'énergie considérables par rapport aux régulateurs de chauffage traditionnels.

Le SRT323 est un partenaire idéal pour une utilisation avec passerelle domotique, vous permettant de contrôler à distance votre système de chauffage. Vous n’aurez plus à vous soucier de rentrer chez vous dans une maison froide, tant que vous avez un smartphone, une tablette ou un PC à portée de main et connecté à internet.

 

Funktionen
----------

 

-   Thermostat für häuslichen Anwendung

-   Ersetzt ein vorhandenes Thermostat

-   Z-Wave-Funktechnologie

-   LCD Bildschirm mit Hintergrundbeleuchtung

-   Einfach zu bedienen

-   Kompatibel mit anderen Z-Wave-Produkten

-   Eine Taste

 

Technische Daten
----------------

 

-   Modultyp : Z-Wave-Controller

-   TPI Algorithmus integriert

-   Relais : 3(1)A 230V AC

-   Einstellbarer Temperaturbereich : 5 ° C bis 30 ° C

-   Stromversorgung : 2x Batterie AAA (LR3)

-   Lebensdauer der Batterie : 2 Jahr

-   Frequenz : 868,42 MHz

-   Reichweite : bis zu 50 m im Freien

-   Schutzgrad : IP30

-   Betriebstemperatur : 0°C bis 40°C

-   Abmessungen : 86 x 86 x 36,25 mm

 

Moduldaten
----------

 

-   Marke : Horstmann ´\* Name : SRT 323 Electronic Raumthermostat und Temperatursensor

-   Hersteller-ID : 89

-   Produkttyp : 1

-   Produkt-ID : 4

 

Konfiguration
-------------

 

Um das OpenZwave Plugin zu konfigurieren und um zu wissen, wie man es in Jeedom includiert, schauen Sie sich die [Dokumentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html) an.

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut mettre le switch 1 en position ON puis avec la molette afficher L et appuyer sur la molette, conformément à sa documentation papier.

 

![](../images/secure.srt323/inclusion.jpg)

 

> **Important**
>
> Ce module est capricieux à l’inclusion. Lors d’une première inclusion réveillez toujours le module juste après l’inclusion. Pour ce faire laisser le switch 1 en position ON puis avec la molette mettez vous en position "n" et appuyez sur le bouton. Appuyez une seconde fois apres 10 secondes pour être sûr. Une fois fait, cliquez sur le bouton Synchroniser (visible en vue expert) à côté des boutons Inclusion/Exclusion. Ensuite sur la page de votre module cliquez sur la loupe en haut à droite.

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/secure.srt323/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/secure.srt323/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Temperatur : Das ist die Befehl zum messen der Temperatur

-   Sollwert-Zustand : Dies ist der Befehl, der den aktuellen Sollwert anzeigt

-   Sollwert : Dies ist der Befehl, um den Sollwert einzustellen

-   Heizung Zustand : Dies ist der Befehl, um zu sehen, ob das Thermostat im Heizbetrieb ist oder nicht

-   Batterie: Dies ist der Batterie-Befehl

 

### Modulkonfiguration

 

Ensuite il est nécessaire d’effectuer la configuration du module en fonction de votre installation. erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/secure.srt323/config1.jpg)

 

Parameterdetails :

 

-   1: permet d’activer ou non le capteur de température interne

-   2: permet de choisir l’unité de la température

-   3: permet de définir le palier de variation de la température pour que le module la remonte (par unité de 0.1°C)

 

### Gruppen

 

Pour un fonctionnement optimum de votre module il faut que Jeedom soit associé aux 5 groupes

 

![Groupe](../images/secure.srt323/groupe.jpg)

 

Gut zu wissen
-------------

 

### Spezifikationen

 

> **Important**
>
> Ce module est sur batterie. Donc il est important de noter qu’un changement de consigne sera uniquement pris en compte au reveil. Par défaut le wake up est à 86400 secondes. Il est vivement recommandé de le diminuer à 10 minutes environ. Ainsi un changement de consigne sera pris en compte par le module au maximum après 10 minutes

 

Wakeup (Aufweckzeit)
--------------------

 

Pour réveiller ce module il faut mettre le switch 1 en position ON et avec la molette choisir n et appuyer sur la molette.

 

F.A.Q.
------

 

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Ce module est un module sur batterie, la nouvelle configuration sera prise en compte au prochain wake up.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

