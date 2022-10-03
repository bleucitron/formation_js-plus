'use strict';

console.log('Exos DOM');

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

        console.log('--- Question 1 ---');
        /* pour le premier tweet
          - créer une div
          - lui fournir le texte du tweet en textContent
          - ajouter la div au <body>
        */

        console.log('--- Question 2 ---');
        // créer un <ol> et remplacer la <div> par le <ol>

        console.log('--- Question 3 ---');
        /* pour chaque tweet
          - créer un <li>
          - mettre le texte dedans
          - mettre le <li> dans le <ol>
        */

        console.log('--- Question 4 ---');
        /* enrichir la fonction de la question 3 pour:
          - ajouter des infos d'auteur et de date
          - ajouter des classes pour styliser le texte, l'auteur, la date
          - ajouter un listener au mouseenter pour logguer l'id du tweet dans la console
        */

        console.log('--- Question 5 ---');
        /**
         * - utiliser l'input pour enregistrer le nom de la personne dans le localStorage
         * - au chargement de la page, si le nom dans le localStorage existe, remplacer le texte du h1 par "Bonjour {nom}"
         */

        console.log('--- Bonus ---');
        // enrichir la fonction de la question 3 pour aussi afficher les hashtags de chaque tweet
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
