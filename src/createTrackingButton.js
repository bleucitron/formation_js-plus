let tracking = false;

function track(event) {
  console.log('X', event.clientX, 'Y', event.clientY);
}

export default function () {
  const button = document.createElement('button');
  button.textContent = 'Start Tracking';

  button.addEventListener('click', function () {
    if (!tracking) {
      document.body.addEventListener('mousemove', track);
    } else {
      document.body.removeEventListener('mousemove', track);
    }
    tracking = !tracking;
    button.textContent = tracking ? 'Stop Tracking' : 'Start Tracking';
  });

  return button;
}
