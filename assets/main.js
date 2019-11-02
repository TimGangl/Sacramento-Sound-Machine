let bpm = 110; //interval for main setinterval
let tick = 60000 / bpm;

instruments=[
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

    sequencer.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    
    let row = document.createElement("div");
    row.classList.add("row" + ii);

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
        button.innerHTML = i+1;
        document.querySelector(`.row${ii}`).append(button);

        button.setAttribute("row", ii);
        button.setAttribute("column", i);

    }
}

console.log(sequencer);

tickCount = 0;

setInterval(() => {
    
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
        }, tick);

        if(element.classList.contains("isActive")){
            instruments[element.getAttribute("row")].play();
        };

    });

    tickCount += 1;
}, tick);


Array.from(document.getElementsByClassName("isButton")).forEach(elm => {
    elm.addEventListener("click", function () {
        
        console.log(elm.getAttribute("row"), elm.getAttribute("column"))

        if(elm.classList.contains("isActive")){
            elm.classList.remove("isActive");

            let jj = elm.getAttribute("row");
            let j = elm.getAttribute("column");
            console.log(jj, j)
            console.log(sequencer[jj][j] = 0)
            
        }
        else{
            elm.classList.add("isActive");

            let jj = elm.getAttribute("row");
            let j = elm.getAttribute("column");

            console.log(sequencer[jj][j] = 1)

        }

    })
});
document.querySelector("#tempo").oninput = function(){
    console.log(this.value)
    tick = 60000/this.value;
}



