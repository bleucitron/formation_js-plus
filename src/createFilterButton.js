import { isTweetFr } from './utils.js';
import createOl from './createOl.js';

let isFr = false;

export default function (tweets) {
  const button = document.createElement('button');
  button.textContent = 'To Fr';

  button.addEventListener('click', function () {
    const tweetsToDisplay = isFr ? tweets : tweets.filter(isTweetFr);

    const newOl = createOl(tweetsToDisplay);

    console.log(1 == 2);

    const ol = document.querySelector('.tweet-list');

    ol.replaceWith(newOl);

    isFr = !isFr;
  });

  return button;
}
