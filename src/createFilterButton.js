import createOl from './createOl.js';
import { checkFr } from './utils.js';

export default function (twts, ol) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtrer';

  let isFr = false;

  filterButton.addEventListener('click', () => {
    isFr = !isFr;

    let displayedTweets = twts;

    if (isFr) {
      displayedTweets = twts.filter(checkFr);
    }

    const newOl = createOl(displayedTweets);

    ol.replaceWith(newOl);
    ol = newOl;
  });

  return filterButton;
}
