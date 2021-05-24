const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach(code => {
  code.addEventListener('keyup', moveCursor);
})

function moveCursor(e) {
  if ( e.code === 'Backspace' ) {
    e.target.value = '';
    e.target.classList.remove('filled');
    if ( e.target === codes[0] ) {
    } else {
      e.target.previousElementSibling.focus();
    }
  } if ( e.code === 'Digit0' || e.code === 'Digit1' || e.code === 'Digit2' || e.code === 'Digit3' || e.code === 'Digit4' || e.code === 'Digit5' || e.code === 'Digit6' || e.code === 'Digit7' || e.code === 'Digit8' || e.code === 'Digit9' ) {
    e.target.classList.add('filled');
    if ( e.target === codes[5] ) {
      return;
    } else {
      e.target.nextElementSibling.focus();
    }
  }
}