'use strict';

console.log('Exos 4-2: async / await');

fetch('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(async function (tweets) {
    console.log('Le tableau de tweet', tweets);

    /**========================================================================
     *                           Copycat
     *========================================================================**/
    console.log('*** Copycat ***');

    const p = new Promise(function (resolve, reject) {
      const n = Math.floor(Math.random() * 100);

      setTimeout(function () {
        if (n % 2 === 0) {
          resolve(n);
        } else {
          reject(n);
        }
      }, 2000);
    });

    try {
      const vp = await p;
      console.log('VP', vp);
    } catch (err) {
      console.log('ERR', err);
    }

    /**
     * 1) Reprendre les exercices de 4-1, mais avec uniquement async/await
     */
  })
  .catch(function (e) {
    console.error(e);
  });
