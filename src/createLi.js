import moment from 'moment';

export default function ({
  full_text: text,
  created_at: date,
  user,
  entities,
  id,
}) {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  textDiv.textContent = text;
  textDiv.classList.add('text');

  const dateDiv = document.createElement('div');
  dateDiv.textContent = moment(date).fromNow();
  dateDiv.classList.add('date');

  const authorDiv = document.createElement('div');
  authorDiv.textContent = user.name;
  authorDiv.classList.add('author');

  const tags = entities.hashtags.map(function (t) {
    const div = document.createElement('div');
    div.classList.add('tag');
    div.textContent = '#' + t.text;
    return div;
  });
  const tagList = document.createElement('div');
  tagList.classList.add('tags');
  tagList.append(...tags);

  li.classList.add('tweet');
  li.append(textDiv, dateDiv, authorDiv, tagList);

  li.addEventListener('click', () => {
    console.log('tweet ID', id);
  });

  return li;
}
