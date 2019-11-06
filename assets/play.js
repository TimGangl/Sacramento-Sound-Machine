var kick
var clap
var snare
var hiHat
var openHat
var cymbal
var sfx

let isFirstClick = true;

let kickGain;

loadKit(1);
function loadKit(drumkit) {
  //loads the drumkit to be used 
  if (drumkit > 3 || drumkit < 1) {
    console.log("loadKit function given invalid parameters")
  }
  else {
    kick = new Audio(`./assets/sounds/drums/${drumkit}/kick.wav`);
    clap = new Audio(`./assets/sounds/drums/${drumkit}/clap.wav`);
    snare = new Audio(`./assets/sounds/drums/${drumkit}/snare.wav`);
    hiHat = new Audio(`./assets/sounds/drums/${drumkit}/hihat.wav`);
    openHat = new Audio(`./assets/sounds/drums/${drumkit}/openhat.wav`);
    cymbal = new Audio(`./assets/sounds/drums/${drumkit}/cymbal.wav`);
    sfx = new Audio(`./assets/sounds/drums/${drumkit}/sfx.wav`);
  }
}

$(".button8").on("click", function () { loadKit(1) });
$(".button9").on("click", function () { loadKit(2) });
$(".button10").on("click", function () { loadKit(3) });

if (!isFirstClick) {
  initAudiocontext();
}



document.addEventListener("click", function () {
  if (isFirstClick) {
    isFirstClick = false;
    console.log("first click");
    initAudiocontext();
  }
})

function initAudiocontext() {
  audioContext = new AudioContext();
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  const wKick = audioContext.createMediaElementSource(kick);
  kickGain = audioContext.createGain();
  wKick.connect(kickGain).connect(audioContext.destination);

  const wClap = audioContext.createMediaElementSource(clap);
  clapGain = audioContext.createGain();
  wClap.connect(clapGain).connect(audioContext.destination);

  const wSnare = audioContext.createMediaElementSource(snare);
  snareGain = audioContext.createGain();
  wSnare.connect(snareGain).connect(audioContext.destination);

  const wHihat = audioContext.createMediaElementSource(hiHat);
  hiHatGain = audioContext.createGain();
  wHihat.connect(hiHatGain).connect(audioContext.destination);

  const wOpenhat = audioContext.createMediaElementSource(openHat);
  openhatGain = audioContext.createGain();
  wOpenhat.connect(openhatGain).connect(audioContext.destination);

  const wCymbal = audioContext.createMediaElementSource(cymbal);
  cymbalGain = audioContext.createGain();
  wCymbal.connect(cymbalGain).connect(audioContext.destination);

  const wSfx = audioContext.createMediaElementSource(sfx);
  sfxGain = audioContext.createGain();
  wSfx.connect(sfxGain).connect(audioContext.destination);
}

document.querySelector(".volkick").addEventListener("input", function () {
  console.log(this.value)
  kickGain.gain.value = this.value
})
document.querySelector(".volclap").addEventListener("input", function () {
  console.log(this.value)
  clapGain.gain.value = this.value
})
document.querySelector(".volsnare").addEventListener("input", function () {
  console.log(this.value)
  snareGain.gain.value = this.value
})
document.querySelector(".volhihat").addEventListener("input", function () {
  console.log(this.value)
  hiHatGain.gain.value = this.value
})
document.querySelector(".volohat").addEventListener("input", function () {
  console.log(this.value)
  openhatGain.gain.value = this.value
})
document.querySelector(".volcymbal").addEventListener("input", function () {
  console.log(this.value)
  cymbalGain.gain.value = this.value
})
document.querySelector(".volsfx").addEventListener("input", function () {
  console.log(this.value)
  sfxGain.gain.value = this.value
})


document.addEventListener('keydown', function (e) {
  if (isFirstClick) {
    initAudiocontext();
    isFirstClick = false;
  }
  if (e.keyCode === 68) {
    kick.currentTime = 0;
    kick.play();
  }
  if (e.keyCode === 70) {
    clap.currentTime = 0;
    clap.play();
  }
  if (e.keyCode === 71) {
    snare.currentTime = 0;
    snare.play();
  }
  if (e.keyCode === 72) {
    hiHat.currentTime = 0;
    hiHat.play();
  }
  if (e.keyCode === 74) {
    openHat.currentTime = 0;
    openHat.play();
  }
  if (e.keyCode === 75) {
    cymbal.currentTime = 0;
    cymbal.play();
  }
  if (e.keyCode === 76) {
    sfx.currentTime = 0;
    sfx.play();
  }
});

$(".button1").on("click", function () {
  kick.currentTime = 0;
  kick.play();
});
$(".button2").on("click", function () {
  clap.currentTime = 0;
  clap.play();
});
$(".button3").on("click", function () {
  snare.currentTime = 0;
  snare.play();
});
$(".button4").on("click", function () {
  hiHat.currentTime = 0;
  hiHat.play();
});
$(".button5").on("click", function () {
  openHat.currentTime = 0;
  openHat.play();
});
$(".button6").on("click", function () {
  cymbal.currentTime = 0;
  cymbal.play();
});
$(".button7").on("click", function () {
  sfx.currentTime = 0;
  sfx.play();
});
