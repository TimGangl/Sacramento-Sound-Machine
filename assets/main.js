let interval;

instruments = [
    new Audio("assets/sounds/drums/1/clap.wav"),
    new Audio("assets/sounds/drums/1/kick.wav"),
    new Audio("assets/sounds/drums/1/snare.wav"),
    new Audio("assets/sounds/drums/1/hihat.wav"),
    new Audio("assets/sounds/drums/1/openhat.wav"),
    new Audio("assets/sounds/drums/1/sfx.wav"),
];


sequencer = [];
console.log(sequencer);

for (let ii = 0; ii < instruments.length; ii++) {
    let bclass; //used to show each row

    sequencer.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    let row = document.createElement("div");
    row.classList.add("row" + ii);
    console.log(row)
    document.querySelector("#sequencer").append(row);
    if (ii % 2 == 0) {    //b classes are used in style.css
        bclass = "b0"
    }
    else {
        bclass = "b1"
    }
    for (let i = 0; i < 16; i++) {

        let button = document.createElement("button");
        button.className = "button" + i;
        button.classList.add(bclass);
        button.classList.add("isButton")
        button.innerHTML = i + 1;
        document.querySelector(`.row${ii}`).append(button);

        button.setAttribute("row", ii);
        button.setAttribute("column", i);

    }
}

console.log(sequencer);

tickCount = 0;

interval = makeInterval(120);
document.querySelector("#showtempo").textContent = 120;



Array.from(document.getElementsByClassName("isButton")).forEach(elm => {
    elm.addEventListener("click", function () {

        console.log(elm.getAttribute("row"), elm.getAttribute("column"))

        let jj = elm.getAttribute("row");
        let j = elm.getAttribute("column");

        if (elm.classList.contains("isActive")) {
            elm.classList.remove("isActive");

            console.log(jj, j)
            console.log(sequencer[jj][j] = 0)
        }
        else {
            elm.classList.add("isActive");
            console.log(sequencer[jj][j] = 1)
            instruments[jj].play();
        }

    })
});

document.querySelector("#tempo").oninput = function () {
    console.log(this.value)
    clearInterval(interval)
    interval = makeInterval(this.value)
    document.querySelector("#showtempo").textContent = this.value;
}
document.querySelector("#resetgrid").addEventListener("click", function () {
    Array.from(document.getElementsByClassName("isButton")).forEach(elm => {
        elm.classList.remove("isActive")

    })
});



function makeInterval(bpm) {
    timer = 60000 / bpm
    intervalid = setInterval(() => {

        if (tickCount > 15) {
            tickCount = 0;
        }
        //console.log("getting: " + ".button" + tickCount)
        col = document.getElementsByClassName("button" + tickCount);
        colArray = Array.from(col);


        //console.log(col, colArray);
        colArray.forEach(element => {
            element.classList.add("picked");
            setTimeout(() => {
                element.classList.remove("picked")
            }, timer);

            if (element.classList.contains("isActive")) {
                instruments[element.getAttribute("row")].currentTime = 0;
                instruments[element.getAttribute("row")].play();
            };

        });

        tickCount += 1;
    }, timer);
    return intervalid;
}
