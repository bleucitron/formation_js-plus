'use strict';

console.log('Exos Syntaxe');

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

        const first = tweets[0];
        console.log('First', first);
        console.log('First text', first.full_text);

        console.log('--- Question 2 ---');
        // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()
        tweets.forEach(tweet => console.log(tweet.full_text));

        console.log('--- Question 3 ---');
        // créer un tableau avec seulement tous les textes des tweets en utilisant .map()
        const texts = tweets.map(tweet => tweet.full_text);
        console.log('Texts', texts);

        console.log('--- Question 4 ---');
        // créer un tableau avec seulement les dates de publication
        const dates = tweets.map(tweet => tweet.created_at);
        console.log('Dates', dates);

        console.log('--- Question 5 ---');
        // créer un tableau avec seulement les tweets en français en utilisant .filter()
        const frTweets = tweets.filter(tweet => tweet.lang === 'fr');
        console.log('Frs', frTweets);

        console.log('--- Question 6 ---');
        // trouver le tweet qui parle de 'Moonlighter' en utilisant .find()
        const moonlighter = tweets.find(tweet =>
          tweet.full_text.includes('Moonlighter'),
        );
        console.log('Moonlighter', moonlighter);

        console.log('--- Question 7 ---');
        // lister tous les textes de hashtags du premier tweet
        const hashtags = tweets[0].entities.hashtags.map(
          hashtag => hashtag.text,
        );
        console.log('Hashtags', hashtags);

        console.log('--- BONUS ---');
        // lister les 56 tweets qui ont pour hashtag `coronadiary`
        const diary = tweets.filter(tweet =>
          tweet.entities.hashtags.find(
            hashtag => hashtag.text === 'coronadiary',
          ),
        );
        console.log('Diary', diary);
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
