import createLi from './createLi.js';

export default function (tweets) {
  const ol = document.createElement('ol');
  ol.classList.add('tweet-list');
  tweets.forEach(function (tweet) {
    const li = createLi(tweet);
    ol.append(li);
  });
  return ol;
}
