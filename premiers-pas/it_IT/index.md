Bienvenue dans cette documentation de premiers pas, celle-ci va vous aider à mettre en service votre Jeedom

> **Tip**
>
> Ce guide n’a pas vocation à se substituer à la documentation complète disponible sur le site Jeedom [ici](https://jeedom.fr/doc)

Inscription sur le market
=========================

La première chose à faire est de se créer un compte sur le Market pour pouvoir enregistrer votre Jeedom sur celui-ci, cliquez [ici](https://market.jeedom.fr) pour commencer

![](../images/premier-market.png)

Cliquez sur le bouton "S’enregistrer" en haut à droite :

![](../images/premier-market2.png)

Remplissez les différents champs et validez. Vous tomberez ensuite sur cette page :

![](../images/premier-market3.png)

Voila votre compte Market est créé, pour plus de details sur le market cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-market.html)

Ajout de votre code service pack
================================

Si vous avez acheté une box Jeedom alors vous avez dû recevoir un mail contenant un code pour votre service pack.

Il est important de le renseigner car ce code vous donne accès à certains plugins gratuitement, ainsi qu'à des services exclusifs.

Si vous achetez un service pack depuis le Market Jeedom vous n’avez rien à faire, celui-ci vous est automatiquement affecté.

Une fois le code recupéré dans le mail il vous suffit d’aller sur le [market Jeedom](https://market.jeedom.fr) et de vous identifier.

Puis allez sur votre page de profil :

![](../images/premier-servicepack.png)

Puis cliquez sur l’onglet "Mes Jeedoms"

![](../images/premier-servicepack2.png)

Renseignez votre numéro de service pack et validez :

![](../images/premier-servicepack3.png)

Voilà votre service pack est enregistré. Pour plus de details sur le Market cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-market.html)

> **Tip**
>
> Si vous avez acheté une box officielle Jeedom, le numéro de service pack a dû vous être envoyé par email. Si vous n’avez rien reçu, merci de contacter le magasin où vous avez acheté votre box.

Trouver votre Jeedom sur le réseau
==================================

Une fois Jeedom branché électriquement et connecté à votre réseau local, voici comment se connecter sur celui-ci.

Trouver Jeedom
--------------

### Par le market

Solution la plus simple (mais ne marche pas dans 100% des cas en fonction de la configuration de votre accès internet), il faut démarrer la box, attendre environ 10 minutes (attention si vous utilisez une image type netinstallation il faut attendre 30min) et ensuite aller sur [ici](https://www.jeedom.com/market/index.php?v=d&p=find) (attention il faut être sur le même réseau que la box Jeedom pour que ça marche)

### Par votre box internet

Il vous suffit d’aller sur l’interface d’administration de votre box internet et de rechercher un périphérique Jeedom, ensuite de récupérer son IP. Enfin vous mettez cette IP dans votre navigateur internet et c’est bon vous êtes sur Jeedom.

Premiere connexion
------------------

Quelque soit la méthode utilisée, vous arrivez ensuite sur la page de login. Par défaut le login et le mot de passe sont "admin".

![](../images/premier-jeedomfinder6.png)

Lier mon Jeedom à mon compte market
===================================

Nous allons voir ici comment lier votre Jeedom à votre compte Market, une fois connecté à votre jeedom vous devez aller sur Général → Administration → Configuration

![](../images/premier-linkmarket.png)

Puis cliquez sur "Market et mise à Jour"

![](../images/premier-linkmarket2.png)

Et remplir le champ "Nom d’utilisateur" et "Mot de passe" en fonction de vos identifants du Market (identifiants du Market et non pas de Jeedom)

![](../images/premier-linkmarket3.png)

Ensuite cliquez sur "Tester"

![](../images/premier-linkmarket4.png)

Un message devrait vous dire que tout est OK

Pour plus de détails sur la page de configuration cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-administration.html)

Obtenir mon URL d’accès direct
==============================

Si vous avez un Service Pack, Jeedom vous met à disposition une URL d’accès direct à votre Jeedom sans que vous ayez à ouvrir les ports sur votre box ou autre.

Pour la configurer il vous suffit d’aller dans Général → Administration → Configuration

![](../images/premier-dns.png)

Puis d’aller sur la partie "Configuration réseaux"

![](../images/premier-dns2.png)

Une fois ici, il vous suffit d’activer "Utiliser les DNS Jeedom" puis sur la ligne "Gestion" de faire "Rédemarrer" et votre URL apparaitra au niveau de statut HTTP, vous pouvez bien sûr la personnaliser à partir de la page profil du Market

Changer le mot de passe par défaut de Jeedom
============================================

Ensuite une des étapes importantes est de changer le mot de passe par défaut de votre compte Jeedom, pour cela cliquez sur Général → Administration → Utilisateurs :

![](../images/premier-changeuser.png)

Une fois dessus vous avez juste à choisir la ligne avec l’utilisateur "admin" et à cliquer sur changer de mot de passe :

![](../images/premier-changeuser2.png)

Une fenêtre va vous demander le mot de passe, attention à bien le retenir sinon vous ne pourrez plus accéder à votre Jeedom

![](../images/premier-changeuser3.png)

Voila vous avez changé le mot de passe du compte admin, pour plus d’information sur cette page cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-user.html)

Créer mon premier objet
=======================

Vous allez ici créer votre premier objet, mais d’abord il faut savoir ce qu’est un objet, dans Jeedom ça peut être tout et n’importe quoi mais il est recommandé de le faire en fonction de vos pièces

> **Tip**
>
> Il est possible de définir des relations entre les objets, exemple : le salon appartient à l’objet rez-de-chaussée qui appartient lui-même à l’objet maison

Pour créer un objet rien de plus simple, allez sur Outils → Objets

![](../images/premier-objet.png)

Puis cliquez sur le bouton ajouter :

![](../images/premier-objet2.png)

Jeedom va vous demander le nom de celui-ci :

![](../images/premier-objet3.png)

Validez, voila votre premier objet est créé (facile non ?) :

![](../images/premier-objet4.png)

Pour plus d’informations sur cette partie cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-object.html)

Installer mon premier plugin
============================

Un plugin permet d’ajouter des fonctionnalités à Jeedom, il en existe des centaines, certains peuvent être payants. Pour accéder à la page des plugins aller sur Général → Plugins

![](../images/premier-plugin.png)

Il vous suffit ensuite de cliquer sur Market :

![](../images/premier-plugin2.png)

Vous allez ensuite avoir la liste de tous les plugins qu’il est possible d’installer.

Attention, certains sont officiels et d’autres non, en cas de souci avec un plugin non officiel l'équipe Jeedom ne pourra être tenue pour responsable.

![](../images/premier-plugin3.png)

En cliquant sur un plugin vous obtenez sa fiche :

![](../images/premier-plugin4.png)

Vous avez ici des boutons pour installer le plugin (la version stable est fortement recommandée) ainsi qu’une brève description et surtout un lien vers la documentation du plugin. Il est important de consulter cette documentation car beaucoup des problèmes que vous pourriez rencontrer sont expliqués dans celle-ci.

Pour plus d’informations sur cette page cliquez [ici](https://www.jeedom.fr/doc/documentation/core/fr_FR/doc-core-plugin.html)

Support
=======

Nous allons voir ici comment vous pouvez trouver/demander de l’aide. En cas de question, il est possible dans Jeedom de trouver les réponses à plusieurs endroits :

Dans la doc
-----------

Vous trouverez une documentation complète [ici](https://jeedom.fr/doc) :

![](../images/premier-support1.png)

Celle-ci se décompose en plusieurs catégories : une partie pour le "coeur" de Jeedom, une partie sur les modules (Zwave, mySensors, RFXcom) et une dernière partie pour la documentation des plugins.

Le forum
--------

Disponible [ici](https://jeedom.com/forum), le forum est très actif et contient énormément d’informations. Si vous avez une question, n’hésitez pas à la poser, vous aurez une réponse en moins d’une heure (en moyenne). Attention, le forum est maintenu par la communauté Jeedom, composée de bénévoles, et non par la société Jeedom.

![](../images/premier-support3.png)

Les demandes de support (ou tickets)
------------------------------------

Attention, toute demande de support nécessite obligatoirement d’avoir un compte sur le Market.

Si vous n’avez pas trouvé de solution à votre problème, vous pouvez en dernier recours faire une demande de support à l'équipe Jeedom : cette demande passe par un ticket. Il est possible d’en ouvrir un de plusieurs façons :

-   Directement à partir de Jeedom (méthode conseillée) : où que vous soyez dans Jeedom, il y a un point d’exclamation en haut à droite qui permet de faire une demande de support

![](../images/premier-support4.png)

-   Si pour une raison ou une autre vous n’avez pas accès à votre Jeedom, vous pouvez toujours ouvrir un ticket à partir du Market: soit avec le point d’exclamation en haut à droite, soit en allant sur votre profil (cliquez ensuite sur le bouton "Ouvrir une demande de support")

![](../images/premier-support5.png)

Toute la suite des échanges se fera par mail.

Lors de l’ouverture d’un ticket, j’ai une erreur m’indiquant que j’ai atteint mon quota: En effet, en fonction de votre service pack vous êtes limité à un certain nombre de demandes de support par mois:

-   Community (gratuit) : 2 tickets/mois

-   Power : 10 tickets/mois

-   Pro : 100 tickets/mois

Vous pouvez retrouver le détail des service packs [ici](https://jeedom.fr/doc/documentation/core/fr_FR/doc-core-service_pack.html)

