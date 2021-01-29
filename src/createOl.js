import createLi from './createLi.js';

export default function (tweets) {
  const newOl = document.createElement('ol');

  const newLis = tweets.map(createLi);
  newOl.append(...newLis);

  return newOl;
}
