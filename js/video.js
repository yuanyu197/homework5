// Add js here.
let video = document.getElementById('videoplayer')
video.autoplay = false;
video.loop = false;
console.log(video.attributes);

let playButton = document.getElementById('play')
playButton.addEventListener('click', function() {
    video.play()
});

let pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', function() {
    video.pause()
});

let slowButton = document.getElementById('slower')
slowButton.addEventListener('click', function() {
    if (video.playbackRate < 1) {
        alert("Video is at slowest speed!")
    } else {
        video.playbackRate /= 2
    }
});

let fastButton = document.getElementById('faster')
fastButton.addEventListener('click', function() {
    if (video.playbackRate > 1) {
        alert("Video is at fastest speed!")
    } else {
        video.playbackRate *= 2
    }
});

let skipButton = document.getElementById('skip')
skipButton.addEventListener('click', function() {
    if (video.currentTime + 15 > video.duration) {
        video.currentTime = 0
    } else {
        video.currentTime += 15;
    }
});

let muteButton = document.getElementById('mute')
muteButton.addEventListener('click', function() {
	if (video.muted === false) {
		video.muted = true;
		mute.innerText = 'Unmute';
	}
	else {
		video.muted = false;
		mute.innerText = 'Mute';
	};
});

let slider = document.getElementById('slider')
let volume = document.getElementById('volume')
slider.addEventListener('click', function() {
    video.volume = slider.value / 100;
    volume.innerText = slider.value + '%'
});