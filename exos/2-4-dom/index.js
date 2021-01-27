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

        const first = document.createElement('div');
        first.textContent = tweets[0].full_text;
        document.body.append(first);

        const ol = document.createElement('ol');
        first.replaceWith(ol);

        console.log('--- Question 3 ---');

        tweets.forEach(tweet => {
          const li = document.createElement('li');
          const text = document.createElement('div');
          const author = document.createElement('div');
          const date = document.createElement('div');

          text.classList.add('text');
          author.classList.add('author');
          date.classList.add('date');
          li.classList.add('tweet');

          text.textContent = tweet.full_text;
          author.textContent = tweet.user.name;
          date.textContent = tweet.created_at;

          const hElements = tweet.entities.hashtags.map(hashtag => {
            const el = document.createElement('div');
            el.textContent = '#' + hashtag.text;

            el.classList.add('hashtag');

            return el;
          });

          li.addEventListener('mouseenter', event => {
            console.log(
              'Tweet id',
              tweet.id,
              'at',
              event.timeStamp / 1000,
              's',
            );
          });

          li.append(author, text, date, ...hElements);
          ol.append(li);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
