import getJson from './getJson.js';
import createOl from './createOl.js';
import createTrackingButton from './createTrackingButton.js';
import createFilterButton from './createFilterButton.js';

function createUser(user) {
  const profile = document.createElement('a');
  profile.href = user.url;

  const img = document.createElement('img');
  img.src = user.profile_image_url;
  const name = document.createElement('div');
  name.textContent = user.name;
  name.classList.add('name');
  const screenName = document.createElement('div');
  screenName.textContent = '@' + user.screen_name;
  screenName.classList.add('screen-name');

  profile.append(img, name, screenName);

  profile.classList.add('profile');
  return profile;
}

const urls = [
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/data/master/data/tweets2.json',
];

const allTweetsP = Promise.all(urls.map(getJson));

document.addEventListener(
  'DOMContentLoaded',
  function () {
    allTweetsP
      .then(function (tweets) {
        tweets = tweets.flat();

        const users = tweets.reduce((acc, current) => {
          const user = current.user;
          const screenName = user.screen_name;
          if (!acc.find(user => user.screen_name === screenName)) {
            acc.push(user);
          }
          return acc;
        }, []);

        console.log('Le tableau de tweet', tweets);
        console.log('Les users', users);

        const displayedOl = createOl(tweets);
        const trackingButton = createTrackingButton();
        const filterButton = createFilterButton(tweets);

        const userDivs = users.map(createUser);

        const profiles = document.createElement('div');
        profiles.classList.add('list');
        profiles.append(...userDivs);

        document.body.append(trackingButton);
        document.body.append(filterButton);
        document.body.append(profiles);
        document.body.append(displayedOl);
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
