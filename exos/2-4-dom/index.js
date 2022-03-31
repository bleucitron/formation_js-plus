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

        const div = document.createElement('div');
        div.textContent = tweets[0].full_text;
        document.body.append(div);

        const ol = document.createElement('ol');
        div.replaceWith(ol);

        tweets.forEach(function (tweet) {
          const li = document.createElement('li');

          const textDiv = document.createElement('div');
          textDiv.textContent = tweet.full_text;
          textDiv.classList.add('text');

          const dateDiv = document.createElement('div');
          dateDiv.textContent = tweet.created_at;
          dateDiv.classList.add('date');

          const authorDiv = document.createElement('div');
          authorDiv.textContent = tweet.user.name;
          authorDiv.classList.add('author');

          const tags = tweet.entities.hashtags.map(function (t) {
            const div = document.createElement('div');
            div.classList.add('tag');
            div.textContent = '#' + t.text;
            return div;
          });
          const tagList = document.createElement('div');
          tagList.classList.add('tags');
          tagList.append(...tags);

          li.classList.add('tweet');
          li.append(textDiv, dateDiv, authorDiv, tagList);

          li.addEventListener('click', function () {
            console.log('tweet ID', tweet.id);
          });

          ol.append(li);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
