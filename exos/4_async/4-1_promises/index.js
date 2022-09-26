'use strict';
console.log('Exos 4-1: Promesses');

fetch('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (tweets) {
    console.log('Le tableau de tweet', tweets);

    /**========================================================================
     *                           Aléatoire
     *========================================================================**/
    console.log('*** Aléatoire ***');

    /**
     * 1) Créer une Promesse qui renvoie un nombre aléatoire entre 0 et 99 au bout de 2 secondes.
     * - si ce nombre est pair, le résoudre
     * - sinon le rejeter
     * - utiliser Math.floor() et Math.random(), et setTimeout().
     * 2) Consommer la Promesse de 1) pour:
     * - afficher le texte du tweet correspondant au nombre renvoyé quand elle résoud
     * - logguer un message d'erreur quand elle est rejetée
     */

    /**========================================================================
     *                           [Bonus] Attente incertaine
     *========================================================================**/
    console.log('*** [Bonus] Attente incertaine ***');

    /**
     * 1) Créez une Promesse qui:
     * - crée un nombre aléatoire (delay) en 0 et 5000
     * - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
     * - au bout de delay ms pour résoudre le nombre delay
     * 2) Consommez la Promesse de sorte que si elle est rejetée,
     * on recommence jusqu'à ce qu'elle résolve
     */
  })
  .catch(function (e) {
    console.error(e);
  });
