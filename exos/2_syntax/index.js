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

    console.log('--- Question 2 ---');
    // afficher dans la console les textes de tous les tweets du tableau en utilisant .forEach()

    console.log('--- Question 3 ---');
    // créer un tableau avec seulement tous les textes des tweets en utilisant .map()

    console.log('--- Question 4 ---');
    // - créer une fonction getDate qui prend un tweet en argument et renvoie sa date de publication
    // - utiliser cette fonction pour créer un tableau avec seulement les dates de publication

    console.log('--- Question 5 ---');
    // - créer une fonction isTweetFr qui prend un tweet en argument et renvoie si le tweet est en français
    // - utiliser cette fonction pour créer un tableau avec seulement les tweets en français en utilisant .filter()

    console.log('--- Question 6 ---');
    // trouver le tweet qui parle de 'Moonlighter' en utilisant .find()

    console.log('--- Bonus 1 ---');
    // lister tous les textes de hashtags du premier tweet

    console.log('--- Bonus 2 ---');
    // lister les tweets qui ont pour hashtag `coronadiary`
  })
  .catch(function (e) {
    console.error(e);
  });
