Aeotec Keyfob
=============

 

-   **Das Modul**

 

![](../images/aeotec.keyfob/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/aeotec.keyfob/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

La télécommande porte-clés Aeon Labs au design moderne et agréable dispose de 4 boutons permettant de contrôler tout type de dispositifs Z-Wave tels que des lampes, stores, etc…

Avec ses dimensions très réduites, vous pourrez facilement la mettre dans votre poche. Facile à utiliser et élégante, elle est équipée d’un anneau permettant de l’attacher à des clés, ce qui la rend disponible au moment de quitter la maison ou lors du retour à votre domicile.

Chaque bouton permet de contrôler deux dispositifs ou scènes grâce à la gestion des appuis courts et longs. Cette télécommande peut être aussi bien utilisée comme contrôleur principal que secondaire.

 

Funktionen
----------

 

-   Télécommande porte-clés

-   Contrôleur principal ou secondaire

-   Ultra compacte et ultra design

-   4 boutons configurables

-   Gère jusqu'à 8 périphériques/scènes

-   Volet de protection coulissant

-   Facilité d’utilisation et d’installation

 

Technische Daten
----------------

 

-   Type de module : Emetteur Z-Wave

-   Alimentation : 1 pile Lithium 3V CR2450

-   Durée de vie de la batterie : 1 an

-   Fréquence: 868.42 MHz

-   Distance de transmission : 100m en champ libre

-   Température d’utilisation : -10°C à 50°C

-   Dimensions : 55 x 30 x 13mm (L x l x h)

 

Moduldaten
----------

 

-   Marque : Aeotec

-   Name : Key Fob

-   Hersteller-ID : 134

-   Produkttyp : 1

-   Produkt-ID : 22

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer sur le bouton LEARN, conformément à sa documentation papier.

 

![](../images/aeotec.keyfob/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/aeotec.keyfob/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/aeotec.keyfob/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Boutons : c’est la commande qui remontera le bouton appuyé

1 : Bouton 1 appui court

2 : Bouton 1 appui long

3 : Bouton 2 appuis courts

4 : Bouton 2 appuis longs

5 : Bouton 3 appuis courts

6 : Bouton 3 appuis longs

7 : Bouton 4 appuis courts

8 : Bouton 4 appuis longs

 

### Modulkonfiguration

 

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

 

Wenn Sie später die Konfiguration des Moduls gemäß Ihrer Funktion durchführen wollen, erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/aeotec.keyfob/config1.jpg)

 

Parameterdetails :

 

-   250: mode de fonctionnement de la télécommande (absolument mettre Scene pour s’en servir en télécommande)

Tous les autres paramètres ne sont utiles qu’en cas d’association direct entre la télécommande et des modules.

 

### Gruppen

 

Dieses Modul verfügt über eine einzelne Gruppe mit Assoziation. Es ist von wesentlicher Bedeutung.

 

![Groupe](../images/aeotec.keyfob/groupe.jpg)

 

Bon à savoir
------------

 

### Spécificités

Pour utiliser ce module en télécommande il faut procéder comme suit :

-   1 : Inclure la télécommande

-   2 : Réveiller la télécommande

-   3 : Changer le paramètre 250 à true (bien le faire même s’il apparaît déjà à true)

-   4 : Réveiller la télécommande et s’assurer que le changement à été pris en compte

-   5 : Changer le mode de focntionnement de la télécommande en restant appuyer sur les deux boutons au dos pendant 3 secondes.

Wakeup
------

 

Pour réveiller ce module il y a une seule et unique façon de procéder :

-   rester appuyé 3 secondes sur le bouton LEARN

 

F.A.Q.
------

 

Ce module se réveille en restant appuyé 3 secondes sur le bouton LEARN.

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Dieses Modul ist ein Batterie-Modul, die neue Konfiguration wird berücksichtigt werden, wenn die Fernbedienung aufwacht.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

