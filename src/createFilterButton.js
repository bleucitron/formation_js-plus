import createOl from './createOl.js';
import { isTweetFr } from './utils.js';

export default function (tweets, ol) {
  const bouton = document.createElement('button');
  bouton.textContent = 'Filtrer';

  let isFr = false;
  bouton.addEventListener('click', () => {
    isFr = !isFr;

    const tweetsToDisplay = isFr ? tweets.filter(isTweetFr) : tweets;

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
  });

  return bouton;
}
