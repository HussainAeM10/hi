const audio = document.getElementById('audio');
const range = document.getElementById('seek');

audio.addEventListener('timeupdate', function() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const percentage = (currentTime / duration) * 100;
  range.value = percentage;
});

let previousTime = 0;
let previousPercentage = 0;
let animationFrameId = null;

function updateProgress() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const percentage = (currentTime / duration) * 100;

  if (percentage !== previousPercentage) {
    range.value = percentage;
    previousPercentage = percentage;
    previousTime = currentTime;
  }

  if (currentTime < duration) {
    animationFrameId = requestAnimationFrame(updateProgress);
  }
}

updateProgress();
