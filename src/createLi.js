import moment from 'moment';

export default function (tweet) {
  const {
    full_text,
    user: { name },
    created_at,
  } = tweet;

  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const infosDiv = document.createElement('div');

  textDiv.textContent = full_text;
  dateDiv.textContent = moment(created_at).fromNow();
  authorDiv.textContent = name;

  textDiv.classList.add('text');
  dateDiv.classList.add('date');
  authorDiv.classList.add('author');

  infosDiv.append(authorDiv, dateDiv);
  infosDiv.classList.add('infos');

  li.append(textDiv, infosDiv);
  li.classList.add('tweet');

  return li;
}
