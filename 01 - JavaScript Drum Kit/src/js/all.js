function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  
  if (!audio) return;  //如果不是audio的data-key則return
  key.classList.add('playing');  //如果是audio的data-key，則在class加上"playing"
  audio.currentTime = 0;  //設定目前時間為0
  audio.play();  //播放聲音
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);