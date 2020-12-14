import createLi from './createLi.js';

export default function (twts) {
  const monOl = document.createElement('ol');

  twts.forEach(t => {
    const li = createLi(t);

    monOl.append(li);
  });

  return monOl;
}
