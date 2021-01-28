'use strict';

console.log('Exos Asynchrone');

fetch('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (tweets) {
    console.log('Le tableau de tweet', tweets);

    // Asynchrone

    console.log('--- Question 1 ---');
    /* créer une Promesse qui renvoie un nombre aléatoire entre 0 et 99 au bout de 2 secondes.
            Si ce nombre est pair, le résoudre, sinon le rejeter.

            Utiliser setTimeout().
        */

    console.log('--- Question 2 ---');
    /* Consommer la Promesse de 1) pour
            - afficher le texte du tweet correspondant au nombre renvoyé quand elle résoud
            - logguer un message d'erreur expliquant que le nombre est incorrect quand elle est rejetée
        */

    console.log('--- Question 3 ---');
    // Même chose que la 2), mais avec async/await

    console.log('--- Question 4 ---');
    /* Écrire une fonction getJson() qui prend une URL en entrée,
          et renvoie la Promesse de récupérer la réponse HTTP transformée en JSON
        */

    console.log('--- Question 5 ---');
    // Utiliser cette fonction pour charger les données de ce script à la place des lignes 6 à 11

    console.log('--- BONUS ---');
    /* Créer une Promesse qui:
          - crée un nombre aléatoire (delay) en 0 et 5000
          - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
          - au bout de delay ms pour résoudre le nombre delay
          - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
        */
  })
  .catch(function (e) {
    console.error(e);
  });
