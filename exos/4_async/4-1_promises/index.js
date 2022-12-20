'use strict';
console.log('Exos 4-1: Promesses');

// Cette fonction vous renvoie un nombre aléatoire en 0 et n, n étant exclu
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

/**========================================================================
 *                           Aléatoire
 *========================================================================**/
console.log('*** Aléatoire ***');

/**
 * 1) Créer une Promesse qui renvoie au bout de 2s un nombre entier aléatoire
 * - le nombre doit être entre 0 et 9 en utilisant getRandom
 * - si ce nombre est pair, le résoudre
 * - sinon le rejeter
 * 2) Consommer la Promesse de 1) pour:
 * - afficher le nombre renvoyé quand elle résoud
 * - logguer un message d'erreur quand elle est rejetée
 */

const maPromesse = new Promise(function (resolve, reject) {
  setTimeout(function () {
    const nb = getRandom(10);

    const isPair = nb % 2 === 0;

    if (isPair) {
      resolve(nb);
    } else {
      reject(nb);
    }
  }, 2000);
});

maPromesse
  .then(function (valeurPromise) {
    console.log('Valeur promise', valeurPromise);
  })
  .catch(function (raison) {
    console.error('Problème', raison);
  });

/**========================================================================
 *                            Calcul aléatoire
 *========================================================================**/
console.log('*** Calcul aléatoire ***');

/**
 * 1) Créer une fonction getAsyncRandomNb qui renvoie une promesse
 * d'avoir un nombre aléatoire au bout de 2s. Cette promesse doit toujours résoudre quelque soit le nb.
 * 2) En se servant de getAsyncRandomNb, créer 3 nombres aléatoires, et calculer leur somme
 */
function getAsyncRandomNb() {
  const maPromesse = new Promise(function (resolve) {
    setTimeout(function () {
      const nb = getRandom(10);
      resolve(nb);
    }, 2000);
  });

  return maPromesse;
}

const p1 = getAsyncRandomNb();
// 0s
const p2 = getAsyncRandomNb();
// 0s
const p3 = getAsyncRandomNb();
// 0s

p1.then(function (vp1) {
  // +2 = 2s
  console.log('VP1', vp1);

  p2.then(function (vp2) {
    // +0 = 2s
    console.log('VP2', vp2);
    console.log('VP1 + VP2', vp1 + vp2);

    p3.then(function (vp3) {
      // +0 = 2s
      console.log('VP3', vp3);
      console.log('VP1 + VP2 + VP3', vp1 + vp2 + vp3);
    });
  });
});

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
