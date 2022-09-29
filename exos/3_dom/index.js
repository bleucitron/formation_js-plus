'use strict';

console.log('Exos DOM');

setInterval(function () {
  console.log(new Date().toLocaleTimeString());
}, 1000);

console.log('After timeout');

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

        const div = document.createElement('div');
        div.textContent = tweets[0].full_text;
        document.body.append(div);

        console.log('--- Question 2 ---');
        // créer un <ol> et remplacer la <div> par le <ol>
        const ol = document.createElement('ol');
        div.replaceWith(ol);

        console.log('--- Question 3 ---');
        /* pour chaque tweet
          - créer un <li>
          - mettre le texte dedans
          - mettre le <li> dans le <ol>
        */
        tweets.forEach(function (t) {
          const li = document.createElement('li');
          li.classList.add('tweet');

          const textDiv = document.createElement('div');
          textDiv.textContent = t.full_text;
          textDiv.classList.add('text');
          li.append(textDiv);

          const authorDiv = document.createElement('div');
          authorDiv.textContent = t.user.name;
          authorDiv.classList.add('author');
          li.append(authorDiv);

          const dateDiv = document.createElement('div');
          dateDiv.textContent = t.created_at;
          dateDiv.classList.add('date');
          li.append(dateDiv);

          li.addEventListener('mouseenter', () => {
            console.log(t.id);
          });

          ol.append(li);
        });

        console.log('--- Question 4 ---');
        /* enrichir la fonction de la question 3 pour:
          - ajouter des infos d'auteur et de date
          - ajouter des classes pourt styliser le texte, l'auteur, la date
          - ajouter un listener au mouseenter pour logguer l'id du tweet dans la console
        */

        console.log('--- Question 5 ---');
        /**
         * - utiliser l'input pour enregistrer le nom de la personne dans le localStorage
         * - au chargement de la page, si le nom dans le localStorage existe, remplacer le h1 par "Bonjour {nom}"
         */
        const nom = localStorage.getItem('name');
        const h1 = document.querySelector('h1');
        if (nom) {
          h1.textContent = 'Bonjour ' + nom.toLocaleUpperCase();
        }

        const input = document.querySelector('input');
        input.addEventListener('input', function (event) {
          const value = event.target.value;
          localStorage.setItem('name', value);
          h1.textContent = 'Bonjour ' + value;
        });

        console.log('--- BONUS ---');
        // enrichir la fonction de la question 3 pour aussi afficher les hashtags de chaque tweet
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
