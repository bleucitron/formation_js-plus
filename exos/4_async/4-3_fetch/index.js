'use strict';
console.log('Exos 4-3: Fetch');

/**========================================================================
 *                           Meta HTML
 *========================================================================**/
console.log('*** Meta HTML ***');

/**
 * 1) Utilisez fetch pour récupérer la page test.html
 * - utiliser .text()
 * 2) Affichez le contenu de la page récupérée dans un <p>
 */

fetch('test.html').then(async function (response) {
  const text = await response.text();

  const p = document.createElement('p');
  p.textContent = text;

  document.body.append(p);
});

/**========================================================================
 *                           Star Wars
 *========================================================================**/
console.log('*** Star Wars ***');

/**
 * 1) Utilisez fetch pour récupérer les données contenues à cette adresse
 * - utilisez .json()
 * 2) Affichez les infos principales du personnage dans votre page
 */
const starWarsUrl = 'https://swapi.dev/api/people/1/';

fetch(starWarsUrl).then(async function (response) {
  const data = await response.json();

  const p = document.createElement('p');
  p.textContent = data.name;

  document.body.append(p);
});

/**
 * Bonus) Créez une fonction qui permet de récupérer les infos de n'importe quel personnage:
 * - en entrée, fournir un numéro
 * - en sortie, renvoyer les infos traitées (= passées par .json())
 * Affichez dans la page les infos des 5 premiers personnages
 */

/**========================================================================
 *                           Svelte
 *========================================================================**/
console.log('*** Svelte ***');

/**
 * 1) Comptez le nombre de tweets dont le texte inclut "Svelte" à l'adresse suivante.
 */

const tweetsUrl =
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json';

fetch(tweetsUrl).then(async function (response) {
  const tweets = await response.json();

  const svelteTweets = tweets.filter(function (tweet) {
    return tweet.full_text.includes('svelte');
  });
  console.log(svelteTweets);
});
