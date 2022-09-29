'use strict';
// import { waitACertainTime } from '../../utils/index.js';
console.log('Exos 4-4: Plus de promesses');

/**========================================================================
 *                          GetJson
 *========================================================================**/
console.log('*** GetJson ***');

/**
 * 1) Créez une fonction getJSON qui:
 * - en entrée prend une url
 * - en sortie renvoie la promesse de la donnée parsée en JSON
 * 2) Utilisez cette fonction getJson pour afficher les données à cette adresse:
 * https://swapi.dev/api/people/6/
 */

function getJSON(url) {
  return fetch(url).then(function (resp) {
    return resp.json();
  });
}
// async function getJSONAwait(url) {
//   const resp = await fetch(url);
//   return await resp.json();
// }

getJSON('https://swapi.dev/api/people/6/').then(function (data) {
  console.log('Data', data);
});

getJSON('https://swapi.dev/api/people/5/').then(function (data) {
  console.log('Data', data);
});

/**========================================================================
 *                          La rebellion
 *========================================================================**/
console.log('*** La rebellion ***');

const starWarsUrl = 'https://swapi.dev/api/people/';

// const p1 = getJSON('https://swapi.dev/api/people/1/');
// const p2 = getJSON('https://swapi.dev/api/people/2/');
// const p3 = getJSON('https://swapi.dev/api/people/3/');
// const p4 = getJSON('https://swapi.dev/api/people/4/');
// const p5 = getJSON('https://swapi.dev/api/people/5/');

const promises = [1, 2, 3, 4, 5].map(function (n) {
  return getJSON(starWarsUrl + n);
});

Promise.all(promises).then(function (resultats) {
  console.log('results', resultats);
});

/**
 * 1) Chargez les données des 5 premiers personnages Star Wars en parallèle,
 * et affichez leur données
 */

/**========================================================================
 *                          [Bonus] Medium
 *========================================================================**/
console.log('*** [Bonus] Medium ***');

/**
 * La fonction waitACertainTime crée une promesse similaire à celle de l'exercice 4-1: Bonus
 * 1) Trouvez un moyen d'estimer le temps d'attente maximum qu'accepte
 * d'attendre la promesse créée par cette fonction
 */
