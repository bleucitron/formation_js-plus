'use strict';

console.log('Exos DOM');

document.addEventListener(
  'DOMContentLoaded',
  function () {
    fetch(
      'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
    )
      .then(function (resp) {
        return resp.json();
      })
      .then(function (tweets) {
        console.log('Le tableau de tweet', tweets);

        console.log('--- Question 1 ---');
        /* pour le premier tweet
          - créer une div
          - lui fournir le texte du tweet en textContent
          - ajouter la div au <body>
        */
        const first = tweets[0];
        const firstTweetDiv = document.createElement('div');
        firstTweetDiv.textContent = first.full_text;
        document.body.append(firstTweetDiv);

        console.log('--- Question 2 ---');
        // créer un <ol> et remplacer la <div> par le <ol>
        const monOl = document.createElement('ol');
        monOl.textContent = 'TWEETS';
        firstTweetDiv.replaceWith(monOl);

        console.log('--- Question 3 ---');
        /* pour chaque tweet
          - créer un <li>
          - mettre le texte dedans
          - mettre le <li> dans le <ol>
        */

        tweets.forEach(function (twt) {
          const tweetLi = document.createElement('li');

          const pName = document.createElement('p');
          const pDate = document.createElement('p');
          const pText = document.createElement('p');

          pName.textContent = twt.user.name;
          pDate.textContent = twt.created_at;
          pText.textContent = twt.full_text;

          tweetLi.append(pText, pName, pDate);
          tweetLi.classList.add('tweet');
          pName.classList.add('author');
          pText.classList.add('text');
          pDate.classList.add('date');

          tweetLi.addEventListener('mouseenter', function () {
            console.log(twt.id);
          });

          monOl.append(tweetLi);
        });

        // tweets
        //   .map(function (twt) {
        //     const li = document.createElement('li');
        //     li.textContent = twt.full_text;
        //     return li;
        //   })
        //   .forEach(function (li) {
        //     monOl.append(li);
        //   });

        console.log('--- Question 4 ---');
        /* enrichir la fonction de la question 3 pour:
          - ajouter des infos d'auteur et de date
          - ajouter des classes pour styliser le texte, l'auteur, la date
          - ajouter un listener au mouseenter pour logguer l'id du tweet dans la console
        */

        console.log('--- Question 5 ---');
        /**
         * - utiliser l'input pour enregistrer le nom de la personne dans le localStorage
         * - au chargement de la page, si le nom dans le localStorage existe, remplacer le texte du h1 par "Bonjour {nom}"
         */

        const input = document.querySelector('input');
        input.addEventListener('input', function (e) {
          localStorage.setItem('name', e.target.value);
        });
        const name = localStorage.getItem('name');

        if (name) {
          const h1 = document.querySelector('h1');
          h1.textContent = 'Bonjour ' + name;
        }

        console.log('--- Bonus ---');
        // enrichir la fonction de la question 3 pour aussi afficher les hashtags de chaque tweet
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
