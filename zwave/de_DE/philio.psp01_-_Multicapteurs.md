Philio PSP01
============

 

-   **Das Modul**

 

![](../images/philio.psp01/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/philio.psp01/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

Le détecteur PSP01 propose 3 fonctions différentes : détection de mouvement, capteur de température et détecteur de luminosité.

Ce détecteur peut être utilisé pour la sécurité ou pour l’automatisation. Quand le détecteur est associé avec des appareils de sécurité, il sert comme déclencheur d’alertes en détectant des changements dans les niveaux de radiation infra-rouge. Si une personne bouge dans le champ de vision du détecteur, un signal radio est transmis, ce qui déclenche une alarme afin de dissuader les intrus.

Le détecteur peut également être utilisé en association avec un contrôleur Z-Wave pour des usages domotiques, en détectant à la fois les changements dans les niveaux de radiation infrarouge (présence) et les modifications dans le niveau de luminosité. Ainsi, on peut déclencher un éclairage lors d’une détection de mouvement dans l’obscurité.

Le détecteur remontera aussi la luminosité et la température, soit en cas de changement important, et à chaque fois qu’un mouvement est détecté. Un contrôleur Z-Wave (télécommande, dongle …) est nécessaire afin d’intégrer ce détecteur dans votre réseau si vous avez déjà un réseau existant.

 

Funktionen
----------

 

-   Détecteur 3 en 1: mouvement, température, lumière

-   Adopte la récente puce Z-Wave 400series pour supporter les opérations multicanaux et un débit de données plus élevé (9.6/40/100kbps)

-   Utilise le SDK Z-Wave 6.02

-   Portée de l’antenne optimisée

-   Utilisation pour des applications domotiques ou de sécurité

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

-   Angle de détection PIR : 90° PIR Erfassungsbereich : 8 bis 10 m

-   Dimensions : 28 x 96 x 23 mm

-   Poids : 39g

-   Betriebstemperatur : -10°C bis 40°C

-   Humidité de fonctionnement : 85%RH max

-   Norme CE : EN300 220-1

-   Certification Z-Wave : ZC08-13050003

 

Moduldaten
----------

 

-   Marque : Philio Technology Corporation

-   Name : Philio PSP01

-   Hersteller-ID : 316

-   Produkttyp : 2

-   Produkt-ID : 2

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer 3 fois sur le bouton d’inclusion, conformément à sa documentation papier.

 

![](../images/philio.psp01/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/philio.psp01/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/philio.psp01/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Présence : c’est la commande qui remontera une détection de présence

-   Ouverture : c’est la commande qui remontera une détection d’ouverture

-   Température : c’est la commande qui permet de remonter la température

-   Luminosité : c’est la commande qui permet de remonter la luminosité

-   Sabotage : c’est la commande sabotage (elle est déclenchée en cas d’arrachement)

-   Batterie : c’est la commande batterie

 

Tous les modules de la gamme ayant les mêmes ids, à vous d’afficher ceux correspondant à votre module.

### Modulkonfiguration

 

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

 

Wenn Sie später die Konfiguration des Moduls gemäß Ihrer Funktion durchführen wollen, erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/philio.psp01/config1.jpg)

![Config2](../images/philio.psp01/config2.jpg)

 

Parameterdetails :

 

-   2: permet de régler le signal envoyé aux modules dans le groupe d’association 2

-   3: permet de régler la sensibilité du capteur de présence (0 : désactivé 99: sensibilité max)

-   4: permet de régler le niveau de luminosité à partir duquel le signal défini en paramètre 2 sera envoyé aux modules associés au groupe 2

-   5: mode de fonctionnement (déconseillé de le changer : se reporter sur la documentation constructeur)

-   6: mode de fonctionnement du multi-sensor (déconseillé de le changer : se reporter sur la documentation constructeur)

-   9: permet de définir au bout de combien de temps le signal OFF sera envoyé aux modules associés au groupe 2

-   10: permet de définir la durée entre deux rapports de batterie (une unité = 30 minutes)

-   12: permet de définir la durée entre deux rapports de luminosité (une unité = 30 minutes)

-   13: permet de définir la durée entre deux rapports de température (une unité = 30 minutes)

 

### Gruppen

 

Ce module possède deux groupes d’association, seul le premier est indispensable.

 

![Groupe](../images/philio.psp01/groupe.jpg)

 

Bon à savoir
------------

 

### Spécificités

 

> **Tip**
>
> Ce module a une particularité, n’ayant pas de rapport basé sur les variations mais uniquement sur la durée, il envoit toutes ses infos à chaque détection. Il envoie aussi plusieurs fois le signal de détection de présence à la suite. Il est donc conseillé de cocher la case "Evènement sur changement" sur la présence si vous utilisez cette commande en déclencheur de scénario.

 

### Visuel alternatif

 

![](../images/philio.psp01/vuewidget.jpg)

 

Wakeup
------

 

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   relachez le bouton tamper et réappuyez dessus

 

F.A.Q.
------

 

Ce module se réveille en appuyant sur son bouton tamper.

 

Cochez la case "Evènement sur changement".

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Ce module est un module sur batterie, la nouvelle configuration sera prise en compte au prochain wakeup.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

