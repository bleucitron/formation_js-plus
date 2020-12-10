export default function () {
  const trackingButton = document.createElement('button');
  trackingButton.textContent = 'Track mouse !!!!!!';
  let isTracking = false;

  function track(e) {
    const { clientX: x, clientY: y } = e;
    // console.log('X', x, 'Y', y);
    console.log(`X: ${x} | Y: ${y}`);
  }

  trackingButton.addEventListener('click', () => {
    isTracking = !isTracking;

    if (isTracking) {
      window.addEventListener('mousemove', track);
    } else {
      window.removeEventListener('mousemove', track);
    }
  });

  return trackingButton;
}
