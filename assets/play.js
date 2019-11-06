var kick = new Audio("./assets/sounds/drums/1/kick.wav");
var clap = new Audio("./assets/sounds/drums/1/clap.wav");
var snare = new Audio("./assets/sounds/drums/1/snare.wav");
var hiHat = new Audio("./assets/sounds/drums/1/hihat.wav");
var openHat = new Audio("./assets/sounds/drums/1/openhat.wav");
var cymbal = new Audio("./assets/sounds/drums/1/cymbal.wav");
var sfx = new Audio("./assets/sounds/drums/1/sfx.wav");
var loop1 = new Audio("./assets/sounds/loops/a-minor-cool-hip-hop-harp-loop-126-bpm_zJ_WsaNd.mp3");
var loop2 = new Audio("./assets/sounds/loops/bass_GJen-EHu.mp3");
var loop3 = new Audio("./assets/sounds/loops/d-minor-classic-hip-hop-piano-loop-185-bpm_z1ydWAN_.mp3");
var loop4 = new Audio("./assets/sounds/loops/rock-guitar_GkHInVr_.mp3");

document.addEventListener('keydown', function (e) {
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

$(".dropdown-item-1").on("click", function () {
  // loop2.pause() = true;
  // loop3.pause() = true;
  // loop4.pause() = true;
  loop1.currentTime = 0;
  loop1.loop = true;
  loop1.play();
});
$(".dropdown-item-2").on("click", function () {
  // loop1.stop = true;
  // loop3.stop = true;
  // loop4.stop = true;
  loop2.currentTime = 0;
  loop2.loop = true;
  loop2.play();
});
$(".dropdown-item-3").on("click", function () {
  // loop1.stop = true;
  // loop2.stop = true;
  // loop4.stop = true;
  loop3.currentTime = 0;
  loop3.loop = true;
  loop3.play();
});
$(".dropdown-item-4").on("click", function () {
  // loop1.stop = true;
  // loop2.stop = true;
  // loop3.stop = true;
  loop4.currentTime = 0;
  loop4.loop = true;
  loop4.play();
});

