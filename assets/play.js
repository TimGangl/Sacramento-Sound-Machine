var kick
var clap
var snare
var hiHat
var openHat
var cymbal
var sfx

loadKit(1);
function loadKit(drumkit) {
  console.log(drumkit);
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