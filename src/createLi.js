export function createLi(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet.full_text;

  return li;
}
