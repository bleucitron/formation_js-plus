'use strict';
console.log('Exos 4-2: async / await');

fetch('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (tweets) {
    console.log('Le tableau de tweet', tweets);

    /**========================================================================
     *                           Copycat
     *========================================================================**/
    console.log('*** Copycat ***');

    /**
     * 1) Reprendre les exercices de 4-1, mais avec uniquement async/await
     */
  })
  .catch(function (e) {
    console.error(e);
  });
