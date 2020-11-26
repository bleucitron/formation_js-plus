'use strict';

function createLi(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet.full_text;

  return li;
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

        // ### Projet Touitter ###
        let firstOl = document.createElement('ol');
        document.body.append(firstOl);

        tweets.forEach(function (t) {
          const li = createLi(t);

          firstOl.append(li);
        });

        const bouton = document.createElement('button');
        bouton.textContent = 'Filtrer';

        document.body.prepend(bouton);

        let isFr = false;

        bouton.addEventListener('click', function () {
          isFr = !isFr;

          let displayedTweets = tweets;

          if (isFr) {
            displayedTweets = tweets.filter(function (tw) {
              return tw.lang === 'fr';
            });
          }

          const newOl = document.createElement('ol');

          displayedTweets.forEach(function (t) {
            const li = createLi(t);

            newOl.append(li);
          });
          firstOl.replaceWith(newOl);
          firstOl = newOl;
        });

        /* [5] créer une fonction createOl(), qui pour un tableau tweets en entrée, crée et retourne un <ol> rempli de <li>
    et l'utiliser à [2], [3], [4] */

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
