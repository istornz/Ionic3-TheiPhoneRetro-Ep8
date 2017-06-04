<p align="center">
  <img src="http://dimitridessus.fr/img/logo_circle.png" width="140px" alt="TheiPhoneRetro-Subscribe">
</p>

# Ionic 3 - Episode 8

La serie te plait ?

Alors n'hésite pas à t'abonner ! Merci :blush:

<a href="https://www.youtube.com/subscription_center?add_user=theiphoneretro">
  <img src="http://www.pngall.com/wp-content/uploads/2016/03/Subscribe-PNG-12.png" width="100px" alt="TheiPhoneRetro-Subscribe">
</a>

Dans cette épisode je vous montre comment enregistrer des données dans la mémoire interne de l'appareil. Pour cela nous aurons besoin de faire appel à la partie native de Cordova (Ionic est basé sur ce moteur).

Dans cette première partie, nous verrons comment utiliser le plugin Native Storage permettant de stocker des objets/variables sous forme de préférence.

Bien entendu, il est parfaitement possible de suivre cet épisode sous Windows, Mac ou Linux =)

## Au programme

- Utilité de sauvegarder des données ?
- Comment exploiter une technologie native avec Ionic ?
- Pourquoi le système de plugin ?
- Différence entre Native Storage et SQLite.
- Intégration d'un plugin au sein d'un projet.
- Enregistrement d'un objet via Native Storage.
- Récupération (lecture) d'un objet via Native Storage.

## Vidéo

<p align="center">
  <a href="https://www.youtube.com/watch?v=Nn5RQpZBDsg"><img src="https://img.youtube.com/vi/Nn5RQpZBDsg/0.jpg" alt="Ionic3-TheiPhoneRetro-Episode8"></a>
</p>

## Instructions

Pour utiliser ce projet il vous suffit de suivre les étapes ci dessous :

- Installer tout les modules requis.
```{r, engine='sh', count_lines}
npm install
```

- Lancer une transiplation générale.
```{r, engine='sh', count_lines}
ionic build
```

- Ajouter les plateformes de votre choix.
```{r, engine='sh', count_lines}
cordova platform add android
cordova platform add ios
```

- Compilez et lancez le projet.
```{r, engine='sh', count_lines}
ionic run <PLATFORM>
```

- Profitez :tada:
