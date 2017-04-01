Nodon Télécommande - Octan
==========================

 

-   **Das Modul**

 

![](../images/nodon.octan/module.jpg)

 

-   **In Jeedom sichtbar**

 

![](../images/nodon.octan/vuedefaut1.jpg)

 

Zusammenfassung
---------------

 

La Octan Remote NodOn® permet de contrôler n’importe quels récepteurs compatibles Z- Wave® ou Z-Wave Plus® tels que la prise télécommandée NodOn® (mode Contrôleur Principal - Standalone), ou encore déclencher des scènes / actions via une centrale domotique compatible (mode Gateway)

Son aimant intégré permet de la fixer partout, du radiateur à la porte de réfrigérateur, en passant par son support mural. Entre télécommande et interrupteur, la Octan Remote révolutionne le contrôle des objets domestiques

 

Funktionen
----------

 

-   Contrôle seul ou avec une centrale domotique

-   Aimant intégré

-   Led de couleur

-   Platine Murale

-   2 ans de batterie

 

Technische Daten
----------------

 

-   Batterie : CR2032 - Batterie 1,5-2 Jahre

-   4 boutons

-   Support mural fixé par adhésif double face (inclus) ou vis (non incluses)

-   Aimant intégré pour fixation sur surface métallique

-   Betriebstemperatur: 0°C bis 40°C - Höhe: 2000 m

-   Z-Wave® Funk Protokoll : 868,4MHz - 500 Serie - kompatibel Z-Wave Plus® SDK 06.51.01 Reichweite: 40m Innen / 80m Außen

-   Dimensions : 80\*80\*15mm

-   Garantie 2 ans

 

Moduldaten
----------

 

-   Marque : Nodon

-   Name : CRC-3-1-00 Octan Remote (Fernbedienung)

-   Hersteller-ID : 357

-   Produkttyp : 2

-   Produkt-ID : 1

 

Konfiguration
-------------

 

Pour configurer le plugin OpenZwave et savoir comment mettre Jeedom en inclusion référez-vous à cette [documentation](https://jeedom.fr/doc/documentation/plugins/openzwave/fr_FR/openzwave.html).

 

> **Important**
>
> Pour mettre ce module en mode inclusion il faut appuyer sur les deux bouton (1 et 2) jusqu'à que la lumière devienne rose puis appuyer sur le bouton 1, conformément à sa documentation papier.

 

![](../images/nodon.octan/inclusion.jpg)

 

Einmal Includiert, sollten Sie folgendes erhalten :

 

![Plugin Zwave](../images/nodon.octan/information.jpg)

 

### Befehle

 

Nachdem das Modul erkannt wurde, werden die zugeordneten Modul-Befehle verfügbar sein.

 

![Commandes](../images/nodon.octan/commandes.jpg)

 

Hier ist die Liste der Befehle :

 

-   Boutons : c’est la commande qui remontera le bouton appuyé

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
<th align="left">Boutons</th>
<th align="left">Appui</th>
<th align="left">Appui Long</th>
<th align="left">Relâchement</th>
<th align="left">Double appui</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><strong>1</strong></p></td>
<td align="left"><p>10</p></td>
<td align="left"><p>12</p></td>
<td align="left"><p>11</p></td>
<td align="left"><p>13</p></td>
</tr>
<tr class="even">
<td align="left"><p><strong>2</strong></p></td>
<td align="left"><p>20</p></td>
<td align="left"><p>22</p></td>
<td align="left"><p>21</p></td>
<td align="left"><p>23</p></td>
</tr>
<tr class="odd">
<td align="left"><p><strong>3</strong></p></td>
<td align="left"><p>30</p></td>
<td align="left"><p>32</p></td>
<td align="left"><p>31</p></td>
<td align="left"><p>33</p></td>
</tr>
<tr class="even">
<td align="left"><p><strong>4</strong></p></td>
<td align="left"><p>40</p></td>
<td align="left"><p>42</p></td>
<td align="left"><p>41</p></td>
<td align="left"><p>43</p></td>
</tr>
</tbody>
</table>

 

### Modulkonfiguration

 

> **Important**
>
> Lors d’une première inclusion réveillez toujours le module juste après l’inclusion.

 

Wenn Sie später die Konfiguration des Moduls gemäß Ihrer Funktion durchführen wollen, erfolgt das in Jeedom über die Schaltfläche "Konfiguration“, des OpenZwave Plugin.

 

![Configuration plugin Zwave](../images/plugin/bouton_configuration.jpg)

 

Sie werden auf diese Seite kommen (nach einem Klick auf die Registerkarte Parameter)

 

![Config1](../images/nodon.octan/config1.jpg)

 

Parameterdetails :

 

-   1-2 : Permet de choisir le profils des boutons en cas d’usage en central (inutile pour un usage dans Jeedom)

-   3 : Paramètre important pour dire si l’interrupteur doit fonctionner en mode Scene ou Central Scene (Absolument mettre Scene)

-   4-7 : Choisir le mode de fonctionnement des boutons (en cas d’associations groupes)

-   8 : Permet de choisir le mode de fonctionnement de la LED

### Gruppen

 

Ce module possède 7 groupes d’association.

 

![Groupe](../images/nodon.octan/groupe.jpg)

![Groupe](../images/nodon.octan/groupe2.jpg)

 

-   Groupe 1 – Lifeline : Ce groupe est généralement utilisé pour reporter des informations de la Smart Plug au contrôleur principal du réseau.

-   Groupe 2 à 5 – Les appareils dans ces groupes sont contrôlés par le bouton correspondant selon le profil MONO

-   Groupe 6 à 7 – Les appareils dans ces groupes sont contrôlés par le bouton correspondant selon le profil DUO

 

> **Important**
>
> A minima Jeedom devrait se retrouver dans le groupe 1  

Bon à savoir
------------

 

### Spécificités

 

-   Ce module peut être capricieux à l’inclusion. Ne pas hésiter à le réveiller 1 ou 2 fois après l’inclusion, et bien vérifier le groupe d’association.

 

Wakeup
------

 

Pour réveiller ce module il suffit d’appuyer sur un des boutons

 

F.A.Q.
------

 

Ich habe die Konfiguration geändert, aber es wird nicht berücksichtigt.

Dieses Modul ist ein Batterie-Modul, die neue Konfiguration wird berücksichtigt werden, wenn die Fernbedienung aufwacht.

 

Wichtiger Hinweis
-----------------

 

> **Important**
>
> Es ist notwendig, das Modul zu aktivieren : nach seiner Inklusion, nach einer Konfigurationsänderung, nach einer Änderung vom Wakeup, nach einer Änderung der Assoziations-Gruppe

 

*@sarakha63*

