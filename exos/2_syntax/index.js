'use strict';

fetch('https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (tweets) {
    console.log('Le tableau de tweet', tweets);

    // Tableaux

    console.log('--- Question 0 ---');
    // observer la structure des données des tweets dans la console du navigateur

    console.log('--- Question 1 ---');
    /* pour le premier tweet
          - l'afficher dans la console
          - afficher son texte dans la console
        */
    console.log('Premier tweet', tweets[0]);
    console.log('Premier texte', tweets[0].full_text);

    console.log('--- Question 2 ---');
    // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
    tweets.forEach(function (tweet) {
      console.log(tweet.full_text);
    });

    console.log('--- Question 3 ---');
    // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
    const textes = tweets.map(function (tweet) {
      return tweet.full_text;
    });
    console.log('Textes', textes);

    console.log('--- Question 4 ---');
    // - créer une fonction getDate qui prend un tweet en argument et renvoie sa date de publication
    // - utiliser cette fonction pour créer un tableau avec seulement les dates de publication
    function getDate(t) {
      return t.created_at;
    }

    const dates = tweets.map(getDate);

    console.log('Dates', dates);

    console.log('--- Question 5 ---');
    // - créer une fonction isTweetFr qui prend un tweet en argument et renvoie si le tweet est en français
    // - utiliser cette fonction pour créer un tableau avec seulement les tweets en français en utilisant .filter()
    function isTweetFr(tweet) {
      return tweet.lang === 'fr';
    }

    const frs = tweets.filter(isTweetFr);
    console.log('FRS', frs);

    console.log('--- Question 6 ---');
    // trouver le tweet qui parle de 'Moonlighter' en utilisant .find()
    const found = tweets.find(function (tweet) {
      return tweet.full_text.includes('Moonlighter');
    });
    console.log('Found', found.full_text);

    console.log('--- Bonus 1 ---');
    // lister tous les textes de hashtags du premier tweet

    console.log('--- Bonus 2 ---');
    // lister les tweets qui ont pour hashtag `coronadiary`

    const numbers = [1, 2, 3];
    const numbers2 = numbers.map(n => n * 10).filter(name => name.length > 5);
  })
  .catch(function (e) {
    console.error(e);
  });
