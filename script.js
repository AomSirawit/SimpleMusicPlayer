const backwardBtn = document.getElementById('backward');
const playBtn = document.getElementById('play');
const forwardBtn = document.getElementById('forward');
const video = document.querySelector('video');

backwardBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

playBtn.addEventListener('click', () => {
    video.play();
});

forwardBtn.addEventListener('click', () => {
    video.currentTime += 10;
});