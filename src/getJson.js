export default function (url) {
  return fetch(url)
    .then(resp => {
      return resp.json();
    })
    .catch(err => console.error(err));
}
