Philio PST02 A - 4 en 1
=======================

 

-   **Das Modul**

 

![](../images/philio.pst02a/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/philio.pst02a/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

Le détecteur ZIP-PSM02-EU propose 4 fonctions différentes : détection de mouvement, détection d’ouverture, capteur de température et détecteur de luminosité. Il se compose de deux parties : un détecteur et un aimant. Ils sont conçus pour être placés sur une porte ou une fenêtre avec l’aimant fixé sur la partie qui s’ouvre et le détecteur sur la partie fixe.

L’ouverture de la porte ou de la fenêtre éloignera l’aimant du détecteur, ce qui enclenchera le détecteur qui enverra un signal Z-Wave d’alarme, si le système est armé (ce signal peut être exploité par une sirène ou par une box domotique par exemple). Ce détecteur peut être utilisé pour la sécurité ou pour l’automatisation. Quand le détecteur est associé avec des appareils de sécurité, il sert comme déclencheur d’alertes en détectant des changements dans les niveaux de radiation infrarouge ou d’ouverture de porte/fenêtre. Si une personne bouge dans le champ de vision du détecteur ou ouvre une porte/fenêtre, un signal radio est transmis, ce qui déclenche une alarme afin de dissuader les intrus.

Le détecteur peut également être utilisé en association avec un contrôleur Z-Wave pour des usages domotiques, en détectant à la fois les changements dans les niveaux de radiation infrarouge (présence) ou d’ouverture de porte/fenêtre et les modifications dans le niveau de luminosité. Ainsi, on peut déclencher un éclairage lors d’une détection de mouvement ou d’ouverture de porte dans l’obscurité.

Le détecteur remontera aussi la luminosité et la température, soit en cas de changement important, et à chaque fois qu’un mouvement ou ouverture/fermeture sont détectés. Un contrôleur Z-Wave (télécommande, dongle …) est nécessaire afin d’intégrer ce détecteur dans votre réseau si vous avez déjà un réseau existant.  

Funktionen
----------

 

-   Détecteur 4 en 1: mouvement, ouverture, température, lumière

-   Adopte la récente puce Z-Wave 400series pour supporter les opérations multicanaux et un débit de données plus élevé (9.6/40/100kbps)

-   Utilise le SDK Z-Wave 6.02

-   Portée de l’antenne optimisée

-   Utilisation pour des applications domotique ou de sécurité

-   Bouton pour inclure/exclure le détecteur

-   Autoprotection

-   Indication de batterie faible

-   Petit, discret et esthétique

-   Facilité d’utilisation et d’installation

 

Technische Daten
----------------

 

-   Type de module : Emetteur Z-Wave

-   Alimentation : 1 pile 3V CR123A

-   Durée de vie des piles : 2 ans

-   Fréquence : 868.42 MHz

-   Distance de transmission : 30m en intérieur

-   Capteur de température : -10 à 70° C

-   Capteur de luminosité : 0 à 500 lux

-   Angle de détection PIR : 90° PIR Erfassungsbereich: 8 bis 10 m

-   Dimensions :

-   Détecteur : 28 x 96 x 23 mm

-   Aimant : 10 x 50 x 12 mm

-   Poids : 52g

-   Betriebstemperatur : -10°C bis 40°C

-   Humidité de fonctionnement : 85%RH max

-   Norme CE : EN300 220-1

-   Certification Z-Wave : ZC08-13050003

 

Moduldaten
----------

 

-   Marque : Philio Technology Corporation

-   Name : PST02-A 4 in 1 Multi-Sensor

-   Hersteller-ID : 316

-   Produkttyp : 2

-   Produkt-ID : 12

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le bouton d’inclusion, conformément à sa documentation papier.

 

![](../images/philio.pst02a/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/philio.pst02a/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/philio.pst02a/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Présence : c’est la commande qui remontera une détection de présence

-   Ouverture : c’est la commande qui remontera une détection d’ouverture

-   Température : c’est la commande qui permet de remonter la température

-   Luminosité : c’est la commande qui permet de remonter la luminosité

-   Sabotage : c’est la commande sabotage (elle est déclenchée en cas d’arrachement)

-   Batterie : c’est la commande batterie

 

### Modulkonfiguration

 

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

 

Wenn Sie später die Konfiguration des Moduls gemäß Ihrer Funktion durchführen wollen, erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/philio.pst02a/config1.jpg)

![Config2](../images/philio.pst02a/config2.jpg)

![Config3](../images/philio.pst02a/config3.jpg)

 

Parameterdetails :

 

-   2: permet de régler le signal envoyé aux modules dans le groupe d’association 2

-   3: permet de régler la sensibilité du capteur de présence (0 : désactivé 99: sensibilité max)

-   4: permet de régler le niveau de luminosité à partir duquel le signal défini en paramètre 2 sera envoyé aux modules associés au groupe 2

-   5: mode de fonctionnement (se reporter sur la documentation constructeur) Valeur recommandée : 8

-   6: mode de fonctionnement du multi-sensor (se reporter sur la documentation constructeur) Valeur recommandée : 4

-   7: mode de fonctionnement personnalisée du multi-sensor (se reporter sur la documentation constructeur) Valeur recommandée : 6 (pour avoir un retour sur OFF de la présence)

-   8: permet de définir la durée par pas de 8 secondes de redétection de mouvement

-   9: permet de définir au bout de combien de temps le signal OFF sera envoyé aux modules associés au groupe 2

-   10: permet de définir la durée entre deux rapports de batterie (une unité = parametre 20)

-   11: permet de définir la durée entre deux rapports auto d’ouverture (une unité = parametre 20)

-   12: permet de définir la durée entre deux rapports auto de luminosité (une unité = parametre 20) Valeur recommandée : 3

-   13: permet de définir la durée entre deux rapports auto de température (une unité = parametre 20) Valeur recommandée : 2

-   20: durée d’un intervalle pour les paramètres 10 à 13 Valeur recommandée : 10

-   21: valeur de variation en °F de température pour déclencher un rapport

-   22: valeur en % de variation de luminosité pour déclencher un rapport Valeur recommandée : 10

 

### Gruppen

 

Ce module possède deux groupes d’association, seul le premier est indispensable.

 

![Groupe](../images/philio.pst02a/groupe.jpg)

 

Bon à savoir
------------

 

### Visuel alternatif

 

![](../images/philio.pst02a/vuewidget.jpg)

 

Wakeup
------

 

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   relachez le bouton tamper et réappuyez dessus

 

F.A.Q.
------

 

Ce module se réveille en appuyant sur son bouton tamper.

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Ce module est un module sur batterie, la nouvelle configuration sera prise en compte au prochain wakeup.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

