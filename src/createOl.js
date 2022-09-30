import { createLi } from './createLi.js';

export function createOl(twts) {
  const ol = document.createElement('ol');
  twts.forEach(tweet => {
    const li = createLi(tweet);
    ol.append(li);
  });

  return ol;
}
