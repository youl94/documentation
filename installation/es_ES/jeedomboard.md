Encontrarás aquí la documentación paso a paso para instalar Jeedom en las Jeedomboard (o Hummingboard).

> **Tip**
>
> El nombre de la imagen Jeedom puede ser diferente de las fotos puestas en esta documentación

Paso 1 : Instalación de Win32diskimager
=======================================

Debe descargar el software win32diskimage [ici](http://sourceforge.net/projects/win32diskimager/) e instalarlo en su PC

Paso 2 : Recuperación de la imagen de Jeedom
============================================

Vous devez aller [ici](https://www.amazon.fr/clouddrive/share/OwYXPEKiIMdsGhkFeI3eUQ0VcvTEBq0qxQevlXPvPIy/folder/IT3WZ3N0RqGzaLBnBo0qog), puis dans le dossier Images récuperer l’image jeedom-jeeboard-**.rar ou Jeedomboard\_\_Debian\_Jessie**.rar

![](../images/install_humming_1.PNG)

Paso 3 : Descompresión de la imagen de jeedom
=============================================

Descomprimir la imagen de Jeedom (si no tienes con que descomprimir puede instalar winrar desde el link: <http://www.clubic.com/telecharger-fiche9632-winrar.html> [winrar]), usted obtendrá:

imagen::../images/install\_humming\_2.PNG[]

imagen::../images/install\_humming\_8.PNG[]

Paso 4 : Grabación de la imagen en la tarjeta SD
================================================

insertar su tarjeta SD en su ordinador e lanzar el programa win32diskimager :

imagen::../images/install\_humming\_3.PNG[]

verificar que en "device" esta bien selectionada su tarjeta SD después pulsar el icono carpeta para indicar el camino de la imagen descargada y descomprimida (etapa 2 y 3)

![](../images/install_humming_4.PNG)

Pulsar "Write" para escribir la imagen, validar la advertencia:

![](../images/install_humming_5.PNG)

Se puede seguir el adelanto de la escritura de la imagen (más o menos 10 minutos) :

![](../images/install_humming_6.PNG)

una ves terminado obtendrá este mensaje :

![](../images/install_humming_7.PNG)

Solo tienes que poner la tarjeta SD en la Jeedomboard (o hummingboard), conectarlo en la red y su alimentación, el jeedom comenzara (5 minutos) y debería ver lo en la red.

> **Tip**
>
> Las contraseñas SSH son jeedom/Mjeedom96

Por lo demás se puede seguir la documentación [Premier pas avec Jeedom](https://www.jeedom.fr/doc/documentation/premiers-pas/fr_FR/doc-premiers-pas.html)

