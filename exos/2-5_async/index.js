'use strict';

function getJson() {
  return fetch(
    'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
  ).then(function (resp) {
    return resp.json();
  });
}

console.log('Exos Asynchrone');

getJson(
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
)
  .then(function (tweets) {
    function getTweet(i) {
      return new Promise(resolve => {
        setTimeout(function () {
          resolve(tweets[i]);
        }, 3000);
      });
    }

    console.log('Le tableau de tweet', tweets);

    console.log('--- Question 1 ---');

    const nbPromesse = new Promise(function (res, rej) {
      const nb = Math.floor(Math.random() * 100);

      setTimeout(function () {
        if (nb % 2 === 0) res(nb);
        else rej(nb + ' est impair');
      }, 2000);
    });

    console.log('--- Question 2 ---');

    nbPromesse
      .then(function (nb) {
        const tweetPromise = getTweet(nb);
        return tweetPromise;
      })
      .then(function (tweet) {
        console.log('Tweet', tweet);
      })
      .catch(function (erreur) {
        console.error(erreur);
      });

    nbPromesse.then(function (n) {
      console.log('dsadasdsadadasdsada', n);
    });

    console.log('--- Question 3 ---');

    async function waitForNumber() {
      try {
        const nb = await nbPromesse;
        const tweet = await getTweet(nb);

        console.log('Nb', nb, tweet);
      } catch (err) {
        console.error(err);
      }
    }
    waitForNumber();

    console.log('--- Question 4 ---');
    /* Écrire une fonction getJson() qui prend une URL en entrée,
          et renvoie la Promesse de récupérer la réponse HTTP transformée en JSON
        */

    console.log('--- Question 5 ---');
    // Utiliser cette fonction pour charger les données de ce script à la place des lignes 6 à 11

    console.log('--- BONUS ---');
    /* Créer une Promesse qui:
          - crée un nombre aléatoire (delay) en 0 et 5000
          - au bout de delay ms, résoudre le nombre delay
          - au bout de 2s, rejeter la Promesse avec le texte 'Trop long...'
          - consommer la Promesse de sorte que si elle est rejetée, on recommence jusqu'à ce qu'elle résolve
        */
  })
  .catch(function (e) {
    console.error(e);
  });
