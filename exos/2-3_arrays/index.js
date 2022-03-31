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
    console.log(tweets[0]);
    console.log(tweets[0].full_text);

    console.log('--- Question 2 ---');
    // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
    tweets.forEach(function (tweet) {
      console.log(tweet.full_text);
    });

    console.log('--- Question 3 ---');
    // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
    const texts = tweets.map(function (tweet) {
      return tweet.full_text;
    });
    console.log('texts', texts);

    console.log('--- Question 4 ---');
    // créer un tableau avec seulement les dates de publication
    const dates = tweets.map(function (tweet) {
      return tweet.created_at;
    });
    console.log('dates', dates);

    console.log('--- Question 5 ---');
    // créer un tableau avec seulement les tweets en français en utilisant .filter()
    const frs = tweets.filter(function (tweet) {
      return tweet.lang === 'fr';
    });
    console.log('frs', frs);

    console.log('--- Question 6 ---');
    // trouver le tweet qui parle de 'Moonlighter' en utilisant .find()
    const withMoonlighter = tweets.find(function (tweet) {
      return tweet.full_text.includes('Moonlighter');
    });
    console.log(withMoonlighter);

    console.log('--- Question 7 ---');
    // lister tous les textes de hashtags du premier tweet
    const hashtags = tweets[10].entities.hashtags.map(function (hashtag) {
      return hashtag.text;
    });
    console.log('hashtags', hashtags);

    console.log('--- BONUS ---');
    // lister les 56 tweets qui ont pour hashtag `coronadiary`

    const withCoronadiary = tweets.filter(function (tweet) {
      return tweet.entities.hashtags.find(function (hash) {
        return hash.text === 'coronadiary';
      });
    });
    console.log('withCoronadiary', withCoronadiary);
  })
  .catch(function (e) {
    console.error(e);
  });
