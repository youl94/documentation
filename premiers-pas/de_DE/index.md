Willkommen bei der Dokumentation "Ersten Schritte", es wird Ihnen helfen Ihr Jeedom zu benutzen

> **Tip**
>
> Dieses Handbuch soll nicht die vollständige Jeedom Dokumentation [hier](https://jeedom.fr/doc) ersetzen

Auf dem Markt Registrieren
==========================

La première chose à faire est de se créer un compte sur le Market pour pouvoir enregistrer votre Jeedom sur celui-ci, cliquez [ici](https://market.jeedom.fr) pour commencer

![](../images/premier-market.png)

Klicken Sie oben rechts auf Registrieren :

![](../images/premier-market2.png)

Füllen Sie die verschiedenen Felder aus und bestätigen sie. Sie werden danach auf diese Seite gelangen :

![](../images/premier-market3.png)

Voila votre compte Market est créé, pour plus de details sur le market cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-market.html)

Hinzufügen von Service Pack-Code
================================

Si vous avez acheté une box Jeedom alors vous avez dû recevoir un mail contenant un code pour votre service pack.

Es ist wichtig, mal nachzuschauen, da dieser Code Ihnen Zugang zu einigen kostenlosen Plugins sowie exklusive Dienstleistungen gibt.

Wenn sie ein Service Pack vom Jeedom Markt kaufen haben sie nichts zu tun, es wird automatisch zugewiesen.

Une fois le code recupéré dans le mail il vous suffit d’aller sur le [market Jeedom](https://market.jeedom.fr) et de vous identifier.

Dann gehen Sie zu Ihrer Profilseite :

![](../images/premier-servicepack.png)

Klicken Sie dann auf die Registerkarte "Mein Jeedom"

![](../images/premier-servicepack2.png)

Geben Sie Ihre Service Pack-Nummer ein und bestätigen sie :

![](../images/premier-servicepack3.png)

Voilà votre service pack est enregistré. Pour plus de details sur le Market cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-market.html)

> **Tip**
>
> Si vous avez acheté une box officielle Jeedom, le numéro de service pack a dû vous être envoyé par email. Si vous n’avez rien reçu, merci de contacter le magasin où vous avez acheté votre box.

Ihr Jeedom im Netz finden
=========================

Sobald Jeedom elektrisch angeschlossen und mit Ihrem lokalen Netzwerk verbunden ist, können Sie wie folgt eine Verbindung herstellen

Jeedom finden
-------------

### Vom Markt

Solution la plus simple (mais ne marche pas dans 100% des cas en fonction de la configuration de votre accès internet), il faut démarrer la box, attendre environ 10 minutes (attention si vous utilisez une image type netinstallation il faut attendre 30min) et ensuite aller sur [ici](https://www.jeedom.com/market/index.php?v=d&p=find) (attention il faut être sur le même réseau que la box Jeedom pour que ça marche)

### Durch Ihre Internet-Box

Il vous suffit d’aller sur l’interface d’administration de votre box internet et de rechercher un périphérique Jeedom, ensuite de récupérer son IP. Enfin vous mettez cette IP dans votre navigateur internet et c’est bon vous êtes sur Jeedom.

Erstes Einloggen
----------------

Unabhängig von der gewählten Methode, kommen Sie dann auf die Anmeldeseite. Das Standard-Login und Passwort sind "admin".

![](../images/premier-jeedomfinder6.png)

Mein Jeedom mit meinem Markt Konto verbinden
============================================

Nous allons voir ici comment lier votre Jeedom à votre compte Market, une fois connecté à votre jeedom vous devez aller sur Général → Administration → Configuration

![](../images/premier-linkmarket.png)

Klicken Sie dann auf "Market und Updates"

![](../images/premier-linkmarket2.png)

Et remplir le champ "Nom d’utilisateur" et "Mot de passe" en fonction de vos identifants du Market (identifiants du Market et non pas de Jeedom)

![](../images/premier-linkmarket3.png)

Klicken danach auf "Testen"

![](../images/premier-linkmarket4.png)

Eine Nachricht müsste Ihnen sagen, dass alles OK ist

Für ausführliche Informationen der Konfigurationsseite klicken Sie [hier](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-administration.html)

Holen Sie sich Ihre direkte Zugangs URL
=======================================

Si vous avez un Service Pack, Jeedom vous met à disposition une URL d’accès direct à votre Jeedom sans que vous ayez à ouvrir les ports sur votre box ou autre.

Um sie zu konfigurieren, genügt es auf Einstellungen → Konfiguration zu gehen

![](../images/premier-dns.png)

Dann gehen Sie zum Teil "Netzwerkkonfiguration"

![](../images/premier-dns2.png)

Une fois ici, il vous suffit d’activer "Utiliser les DNS Jeedom" puis sur la ligne "Gestion" de faire "Rédemarrer" et votre URL apparaitra au niveau de statut HTTP, vous pouvez bien sûr la personnaliser à partir de la page profil du Market

Jeedom Standard Anmeldungskennwort ändern
=========================================

Einer der wichtigsten Schritte ist dann, das Standardpasswort Ihres Jeedom Kontos zu ändern, dafür klicken Sie auf Allgemein → Konfiguration → Benutzer :

![](../images/premier-changeuser.png)

Erst einmal müssen Sie nur die Zeile mit dem Benutzer "admin" wählen und auf Passwort ändern klicken :

![](../images/premier-changeuser2.png)

Ein Fenster wird sie nach dem neuen Passwort fragen. Achtung, merken sie es sich, andernfalls haben Sie keinen Zugang zu Ihrem Jeedom

![](../images/premier-changeuser3.png)

Jetzt haben Sie das Passwort des Admin-Kontos geändert, für mehr Information klicken sie auf diese Seite [hier](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-user.html)

Mein erstes Objekt erstellen
============================

Sie werden hier Ihr erstes Objekt erschaffen, aber zuerst muss man wissen was ein objekt ist, in Jeedom kann es alles sein, egal was, aber es wird empfohlen, es entsprechend ihren Räumen zu machen.

> **Tip**
>
> Il est possible de définir des relations entre les objets, exemple : le salon appartient à l’objet rez-de-chaussée qui appartient lui-même à l’objet maison

Pour créer un objet rien de plus simple, allez sur Outils → Objets

![](../images/premier-objet.png)

Klicken Sie dann auf die Schaltfläche Hinzufügen :

![](../images/premier-objet2.png)

Jeedom wird Sie nach den Namen für das Objekt fragen :

![](../images/premier-objet3.png)

Validez, voila votre premier objet est créé (facile non ?) :

![](../images/premier-objet4.png)

Für mehr Information über diesen Teil klicken sie [hier](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-object.html)

Mein erstes Plugin Installieren
===============================

Ein Plugin fügt Jeedom Funktionalität hinzu, es gibt Hunderte, manche sind zu bezahlen. Für den Zugriff auf die Plugin Seite gehen sie auf Allgemein → Plugins

![](../images/premier-plugin.png)

Il vous suffit ensuite de cliquer sur Market :

![](../images/premier-plugin2.png)

Sie erhalten dann eine Liste mit allen Plugins, die installiert werden können.

> **Important**
>
> Achtung, einige Plugins sind offiziell und andere nicht, bei Problemen mit einem nicht offiziellen Plugin kann das Jeedom Team nicht verantwortlich gemacht werden.

![](../images/premier-plugin3.png)

Auf ein Plugin klickend, erhalten Sie eine Karteikarte :

![](../images/premier-plugin4.png)

Hier finden Sie die Schaltfläche, um das Plugin zu installieren (die stabile Version wird dringend empfohlen), eine kurze Beschreibung und einen Link speziell zur Plugin-Dokumentation. Es ist wichtig, diese Dokumentation zu konsultieren, da viele der Probleme, die auftreten können, dort erklärt werden.

Für weitere Informationen klicken Sie auf dieser Seite [hier](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-plugin.html)

Unterstützung
=============

Nous allons voir ici comment vous pouvez trouver/demander de l’aide. En cas de question, il est possible dans Jeedom de trouver les réponses à plusieurs endroits :

In der doc
----------

Sie finden eine komplette Dokumentation [hier](https://jeedom.fr/doc) :

![](../images/premier-support1.png)

Celle-ci se décompose en plusieurs catégories : une partie pour le "coeur" de Jeedom, une partie sur les modules (Zwave, mySensors, RFXcom) et une dernière partie pour la documentation des plugins.

Das Forum
---------

Disponible [ici](https://jeedom.com/forum), le forum est très actif et contient énormément d’informations. Si vous avez une question, n’hésitez pas à la poser, vous aurez une réponse en moins d’une heure (en moyenne). Attention, le forum est maintenu par la communauté Jeedom, composée de bénévoles, et non par la société Jeedom.

![](../images/premier-support3.png)

Les demandes de support (ou tickets)
------------------------------------

> **Important**
>
> Attention, toute demande de support nécessite obligatoirement d’avoir un compte sur le Market.

Wenn sie keine Lösung für Ihr Problem gefunden haben, können sie als letzten Ausweg, eine Unterstützungsbitte der Jeedom Mannschaft machen : Diese Bitte erfordert ein Ticket. Es ist möglich, ein Ticket auf mehrerer Weisen zu öffnen :

-   Direkt in Jeedom (empfohlene Methode) : Wo Sie auch immer in Jeedom sind, es gibt ein Ausrufezeichen oben rechts, das ermöglicht, eine Unterstützungsbitte zu machen.

![](../images/premier-support4.png)

-   Si pour une raison ou une autre vous n’avez pas accès à votre Jeedom, vous pouvez toujours ouvrir un ticket à partir du Market: soit avec le point d’exclamation en haut à droite, soit en allant sur votre profil (cliquez ensuite sur le bouton "Ouvrir une demande de support")

![](../images/premier-support5.png)

Jedweder Schriftwechsel erfolgt per E-Mail

Lors de l’ouverture d’un ticket, j’ai une erreur m’indiquant que j’ai atteint mon quota: En effet, en fonction de votre service pack vous êtes limité à un certain nombre de demandes de support par mois:

-   Gemeinschaft (kostenfrei) : 2 Tickets/Monat

-   Power : 10 Tickets/Monat

-   Pro : 100 Tickets/Monat

Vous pouvez retrouver le détail des service packs [ici](https://jeedom.fr/doc/documentation/core/fr_FR/doc-core-service_pack.html)

