function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running all togheter
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
}

function playSoundOnClick(e) {
  const audio = document.querySelector(`audio[srcElement="${e.srcElement}"]`);
  const key = document.querySelector(`.key[srcElement="${e.srcElement}"]`);

  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}



function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

// srcElement: div#clapBox.key