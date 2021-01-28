'use strict';

function getJson(url) {
  return fetch(url)
    .then(resp => {
      return resp.json();
    })
    .catch(err => console.error(err));
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    getJson(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )
      .then(async function (tweets) {
        console.log('Le tableau de tweet', tweets);

        // Asynchrone

        console.log('--- Question 1 ---');
        /* créer une Promesse qui renvoie un nombre aléatoire entre 0 et 99 au bout de 2 secondes.
            Si ce nombre est pair, le résoudre, sinon le rejeter.

            Utiliser setTimeout().
        */

        const nbAleatoireP = new Promise((resolve, reject) => {
          const nb = Math.floor(Math.random() * 100);

          if (nb % 2 === 0) {
            resolve(nb);
          } else {
            reject(nb);
          }
        });

        console.log('--- Question 2 ---');
        /* Consommer la Promesse de 1) pour
            - afficher le texte du tweet correspondant au nombre renvoyé quand elle résoud
            - logguer un message d'erreur expliquant que le nombre est incorrect quand elle est rejetée
        */

        nbAleatoireP
          .then(nb => {
            console.log('Cool', nb);
          })
          .catch(nb => {
            console.error('Pas cool', nb);
          });

        console.log('--- Question 3 ---');
        // Même chose que la 2), mais avec async/await

        try {
          const nb = await nbAleatoireP;
          console.log('Cool', nb);
        } catch (nb) {
          console.error('Pas cool', nb);
        }

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

        function makeP() {
          const p = new Promise((resolve, reject) => {
            const nb = Math.floor(Math.random() * 5000 + 1);

            setTimeout(() => {
              resolve(nb);
            }, nb);

            setTimeout(() => {
              reject('Trop long');
            }, 2000);
          });

          return p;
        }

        function testNumber() {
          makeP()
            .then(nb => {
              console.log('OK', nb);
            })
            .catch(err => {
              console.error(err);
              testNumber();
            });
        }

        testNumber();
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
