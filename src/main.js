import { url1, url2 } from './constants';
import createOl from './createOl';
import getJson from './getJson';
import createFilterButton from './createFilterButton';
import createTrackingButton from './createTrackingButton';

const p1 = getJson(url1);
const p2 = getJson(url2);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    Promise.all([p1, p2])
      .then(tabDeTweets => {
        const tweets = tabDeTweets.flat();
        console.log('Le tableau de tweet', tweets);

        // ### Projet Touitter ###
        const firstOl = createOl(tweets);
        const filterButton = createFilterButton(tweets, firstOl);
        const trackingButton = createTrackingButton();

        document.body.append(filterButton);
        document.body.append(trackingButton);
        document.body.append(firstOl);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
