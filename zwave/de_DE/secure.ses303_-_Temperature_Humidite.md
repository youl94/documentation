Secure SES 303 "Température/Humidité"
=====================================

 

-   **Das Modul**

 

![](../images/secure.ses303/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/secure.ses303/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

La sonde SES303 permet la mesure de la température d’ambiance intérieure ainsi que l’humidité. Elle est alimentée par 2 piles AA et est certifiée Z-Wave Plus. En plus de sa fonction principale, il est possible de câbler différentes sondes externes SECURE sur le module, soit:

-   Une sonde de température externe NTC (SES001)

-   4 capteurs de température filaires pour tuyau ou réservoir (SES002) reliés par des câbles de 1m

-   1 capteur de température filaire pour tuyau ou réservoir (SES003) relié par un câble de 4m

Ces modules sont parfaits pour la mesure de température dans des applications de contrôles de chauffage central ou toute autre application similaire. Son interface utilisateur est simple, avec un bouton-poussoir local et une LED d’indication sur la face arrière. On peut facilement l’inclure / l’exclure dans un réseau Z-Wave.

 

Funktionen
----------

 

-   Mesure précise de la température et de l’humidité

-   Application dans des systèmes de contrôle dynamique de réservoirs/tubes/planchers chauffants/…

-   Possibilité de brancher des sonde externes

-   Interoperabilität mit zertifizierten Z-Wave Produkten und Systemen

-   Installation facile et rapide

-   Bericht bei schwacher Batterie

 

Technische Daten
----------------

 

-   Type: Portable/fixation murale

-   Plage de mesure de température: ±0.5°C pour 0°C à 40°C

-   Puce Z-Wave Plus

-   Fréquence : 868,42 Mhz

-   Alimentation: 2x piles AA (LR6)

-   Reichweite : bis zu 100 m im Freien

-   Indice de protection : IP30

-   Dimensions : 86 x 85 x 30 mm

 

Moduldaten
----------

 

-   Marque : Horstmann

-   Name : SES 303 Temperatur und Feuchtigkeit Sensor

-   Hersteller-ID : 89

-   Produkttyp : 13

-   Produkt-ID : 3

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 1 seconde sur le bouton au dos et relacher, conformément à sa documentation papier.

 

![](../images/secure.ses303/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/secure.ses303/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/secure.ses303/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Température : c’est la commande de mesure de la température

-   Humidité : c’est la commande de mesure de l’humidité

-   Batterie : c’est la commande batterie

Plusieurs températures nons visibles sont aussi disponibles et seront utiles si vous avez raccordé des sondes externes

 

### Configuration du module

 

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

 

Ensuite il est nécessaire d’effectuer la configuration du module en fonction de votre installation. erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/secure.ses303/config1.jpg)

 

Parameterdetails :

 

-   1: Permet de régler de combien doit varier la température pour que le module l’envoie à Jeedom (par pas de 0.1)

-   2: Permet de régler l’intervalle de temps d’envoi de la température à Jeedom (en minutes)

-   3: Permet de régler de combien doit varier l’humidité pour que le module l’envoie à Jeedom (par %)

-   4: Permet de régler l’intervalle de temps d’envoi de l’humidité à Jeedom (en minutes)

Tous les autres paramètres sont identiques et correspondent à toutes les sondes externes éventuellement branchées

 

### Gruppen

 

Ce module possède un seul groupe d’association, il est indispensable

 

![Groupe](../images/secure.ses303/groupe.jpg)

 

Bon à savoir
------------

 

### Spécificités

 

### Visuel alternatif

 

![](../images/secure.ses303/widget1.jpg)

 

Wakeup
------

 

Pour réveiller ce module il faut appuyer 1 fois sur le bouton au dos

 

F.A.Q.
------

 

Ce module se réveille en appuyant 1 fois sur son bouton d’inclusion.

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Ce module est un module sur batterie, la nouvelle configuration sera prise en compte au prochain wake up.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

