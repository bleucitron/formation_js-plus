import createOl from './createOl.js';

export default function (twts, ol) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtrer';

  let isFr = false;

  filterButton.addEventListener('click', () => {
    isFr = !isFr;

    let displayedTweets = twts;

    if (isFr) {
      displayedTweets = twts.filter(t => t.lang === 'fr');
      // displayedTweets = twts.filter(({ lang }) => lang === 'fr');
    }

    const newOl = createOl(displayedTweets);

    ol.replaceWith(newOl);
    ol = newOl;
  });

  return filterButton;
}
