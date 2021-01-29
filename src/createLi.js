import moment from 'moment';
import 'moment/locale/fr';

export default function (tweet) {
  const {
    full_text: text,
    user: { name },
    created_at: date,
    id,
    entities,
  } = tweet;

  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.classList.add('text');
  authorDiv.classList.add('author');
  dateDiv.classList.add('date');
  li.classList.add('tweet');

  textDiv.textContent = text;
  authorDiv.textContent = name;
  dateDiv.textContent = moment(date, 'ddd MMM DD HH:mm:ss ZZ YYYY').fromNow();

  const hElements = entities.hashtags.map(hashtag => {
    const el = document.createElement('div');
    el.textContent = '#' + hashtag.text;

    el.classList.add('hashtag');

    return el;
  });

  li.addEventListener('mouseenter', event => {
    console.log(`Tweet id ${id} at ${event.timeStamp / 1000}s`);
  });

  li.append(authorDiv, textDiv, dateDiv, ...hElements);

  return li;
}
