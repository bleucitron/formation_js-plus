'use strict';
import { waitACertainTime } from '../../utils/index.js';
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

// function getJSON(url) {
//   return fetch(url).then(function (resp) {
//     return resp.json();
//   });
// }

async function getJSON(url) {
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}

getJSON('https://swapi.dev/api/people/6/').then(data => {
  console.log('DAta', data);
});

/**========================================================================
 *                          La rebellion
 *========================================================================**/
console.log('*** La rebellion ***');

/**
 * 1) Chargez les données des 5 premiers personnages Star Wars en parallèle,
 * et affichez leur données
 */

const url = 'https://swapi.dev/api/people/';

const numbers = [1, 2, 3, 4, 5];
const ps = numbers.map(n => url + n).map(getJSON);

Promise.all(ps).then(function (vp) {
  console.log('VP', vp);
  console.log(
    'grands',
    vp.filter(v => v.height > 150),
  );
});

/**========================================================================
 *                          [Bonus] Medium
 *========================================================================**/
https: console.log('*** [Bonus] Medium ***');

/**
 * La fonction waitACertainTime crée une promesse similaire à celle de l'exercice 4-1: Bonus
 * 1) Trouvez un moyen d'estimer le temps d'attente maximum qu'accepte
 * d'attendre la promesse créée par cette fonction
 */
