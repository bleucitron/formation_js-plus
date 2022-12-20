'use strict';
console.log('Exos 4-2: async / await');

/**========================================================================
 *                           Copycat
 *========================================================================**/
console.log('*** Copycat ***');

/**
 * 1) Reprendre les exercices de 4-1, mais avec unniquement async/await
 */
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

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

function getAsyncRandomNb() {
  const maPromesse = new Promise(function (resolve) {
    setTimeout(function () {
      const nb = getRandom(10);
      resolve(nb);
    }, 2000);
  });

  return maPromesse;
}

async function attendre() {
  try {
    const vp = await maPromesse;
    console.log('Valeur Promise', vp);
  } catch (err) {
    console.error('Ceci est un pb', err);
  }
}

attendre();

async function somme() {
  const p1 = await getAsyncRandomNb(); // 2s
  const p2 = await getAsyncRandomNb(); // 4s
  const p3 = await getAsyncRandomNb(); // 6s

  console.log('Somme', p1 + p2 + p3);
}
somme();
