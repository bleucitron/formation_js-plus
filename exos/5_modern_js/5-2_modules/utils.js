'use strict';

function computeAge(birth, died) {
  const end = died ? new Date(died) : new Date();
  const start = new Date(birth);

  return (end - start) / msToYear;
}
