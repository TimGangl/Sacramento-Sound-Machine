var kick = new Audio("1/kick.wav");
var clap = new Audio("1/clap.wav");
var snare = new Audio("1/snare.wav");
var hiHat = new Audio("1/hiHat.wav");
var openHat = new Audio("1/openhat.wav");
var cymbal = new Audio("1/cymbal.wav");
var sfx = new Audio("1/sfx.wav");

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