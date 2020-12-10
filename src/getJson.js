export default function (url) {
  return fetch(url)
    .then(resp => resp.json())
    .catch(e => console.error(e));
}
