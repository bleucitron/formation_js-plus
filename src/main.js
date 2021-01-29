import urls from './urls.js';
import getJson from './getJson.js';
import createOl from './createOl.js';
import createFilterButton from './createFilterButton.js';

const promessesDeTweets = urls.map(getJson);

document.addEventListener(
  'DOMContentLoaded',
  function () {
    Promise.all(promessesDeTweets)
      .then(function (allTweets) {
        const tweets = allTweets.flat();
        console.log('Le tableau de tweets', tweets);

        const ol = createOl(tweets);
        const bouton = createFilterButton(tweets, ol);

        document.body.append(bouton);
        document.body.append(ol);

        // ### BONUS : LOCALSTORAGE ###

        // [1] Rajouter un bouton "fav" à chaque li

        /* [2] quand le bouton est cliqué, changer le style du li (rajouter une classe 'fav')
      + et stocker l'ensemble des id_str fav dans le localStorage */

        // [3] au chargement de la page, lire le localStorage pour favoriser les favoris.
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
