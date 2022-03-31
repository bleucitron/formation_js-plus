'use strict';

function createLi(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet.full_text;

  return li;
}
function createOl(tweets) {
  const ol = document.createElement('ol');
  tweets.forEach(function (tweet) {
    const li = createLi(tweet);
    ol.append(li);
  });
  return ol;
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);
        const body = document.body;

        let displayedOl = createOl(tweets);

        const button = document.createElement('button');
        button.textContent = 'To FR';

        let isFr = false;

        button.addEventListener('click', function () {
          const tweetsToDisplay = isFr
            ? tweets
            : tweets.filter(function (tweet) {
                return tweet.lang === 'fr';
              });

          const newOl = createOl(tweetsToDisplay);

          displayedOl.replaceWith(newOl);
          displayedOl = newOl;

          isFr = !isFr;
        });

        body.append(button);
        body.append(displayedOl);

        /* [6] Créer un bouton qui, quand on clique dessus:
            - active le tracking de la souris: la console affiche position de la souris (event.clientX, event.clientY) quand la souris bouge
            - désactive le tracking quand on reclique dessus
        */

        /* [7] créer une fonction qui crée et renvoie le bouton de filtre.
          Cette fonction doit contenir toute la logique liée au filtre.
          Utiliser cette fonction pour remplacer le code de création du bouton de filtre.
        */

        // [8] Utiliser la fonction getJson() pour charger les tweets à la place des lignes 6 à 11

        /* [9] Utiliser Promise.all() pour charger également les tweets de cette url :
          'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
        */

        // ### BONUS : LOCALSTORAGE ###

        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
