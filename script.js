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
  } else if ( e.key >= 0 && e.key <= 9 ) {
    e.target.classList.add('filled');
    if ( e.target === codes[5] ) {
      return;
    } else {
      e.target.nextElementSibling.focus();
    }
  } else {
    e.target.value = '';
  }
}