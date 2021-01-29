export function isTweetFr(tweet) {
  return !!tweet.lang?.startsWith('fr');
}

export function isBlue(color) {
  return color === 'blue';
}
