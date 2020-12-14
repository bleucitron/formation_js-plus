export function checkFr(tweet) {
  if (!tweet.lang) return false;

  return tweet.lang.startsWith('fr');
}
