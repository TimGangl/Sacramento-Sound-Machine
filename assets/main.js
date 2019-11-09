
var firebaseConfig = {
    apiKey: "AIzaSyD_JecRbUtH_dQrNjrkNTAXp53vEJUH9qg",
    authDomain: "sacramento-sound-machine.firebaseapp.com",
    databaseURL: "https://sacramento-sound-machine.firebaseio.com",
    projectId: "sacramento-sound-machine",
    storageBucket: "sacramento-sound-machine.appspot.com",
    messagingSenderId: "830321232990",
    appId: "1:830321232990:web:9fdc5af74b24a6d80b78cf"
};
let data;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
function OnPageLoad() {

    database.ref("/sequences").once("value", function (snapshot) {
        console.log("save", snapshot.val())
        data = snapshot.val();
        for (i in data) {
            let elm = document.createElement("div");
            elm.innerHTML = `
             ${data[i].Title}  by: ${data[i].Author} | <button style="border-radius: 0px; width:fit-content; height: 30px;" id="loadthisloop">Load This Loop</button>
            `
            elm.setAttribute("data-id", i);
            console.log("data", i)
            elm.style = `background-color : lightblue; padding-left:10px;`
            document.querySelector("#loadloops").append(elm)
        }
    })
}
document.addEventListener("click", function (e) {
    if (e.target.id === "loadthisloop") {
        console.log(loadGrid(e.target.parentElement.getAttribute("data-id")))
    }
})
OnPageLoad()

function loadGrid(dataid) {
    //remove all old active beats
    Array.from(document.getElementsByClassName("isActive")).forEach(element => {
        element.classList.remove("isActive")
    })

    if (data[dataid].BPM) {
        setBpm(data[dataid].BPM);
        console.log("set to loops original bpm of " + data[dataid].BPM)
    }
    if (kit = data[dataid].Kit){
        loadkit(data[dataid].Kit);
    }

    console.log(data[dataid].Grid)
    sequencer = data[dataid].Grid;
    for (let j in data[dataid].Grid) {
        console.log(j, data[dataid].Grid[j])
        for (let jj in data[dataid].Grid[j]) {
            let isActive = data[dataid].Grid[j][jj]; //j is row, jj is column
            if (isActive == 1) {
                document.querySelector(".row" + j).getElementsByClassName("button" + jj)[0].classList.add("isActive")

            }
            console.log(data[dataid].Grid[j][jj])
        }
    }
}


let interval;
let LoadedKit;
loadkit(1)
function loadkit(drumkit) {
    instruments = [
        new Audio(`assets/sounds/drums/${drumkit}/clap.wav`),
        new Audio(`assets/sounds/drums/${drumkit}/kick.wav`),
        new Audio(`assets/sounds/drums/${drumkit}/snare.wav`),
        new Audio(`assets/sounds/drums/${drumkit}/hihat.wav`),
        new Audio(`assets/sounds/drums/${drumkit}/openhat.wav`),
        new Audio(`assets/sounds/drums/${drumkit}/cymbal.wav`),
        new Audio(`assets/sounds/drums/${drumkit}/sfx.wav`),
    ];
    Array.from(document.getElementsByClassName("kit")).forEach(element => {
        if(element.getAttribute("data-kit") == drumkit){
            element.style = "border-color:red; width:52px;"
        }
        else{
            element.style = "border-color:white; width:48px;"
        }
    });
    LoadedKit = drumkit;

}



sequencer = [];
console.log(sequencer);

for (let ii = 0; ii < instruments.length; ii++) {
    let bclass; //used to show each row

    sequencer.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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
let firstSaveHappened = false;

Array.from(document.getElementsByClassName("kit")).forEach(element => {
    
    element.addEventListener("click", function () {
        loadkit(this.getAttribute("data-kit"))
        console.log(element.style.width)

    })
})
document.querySelector("#saveprompt").addEventListener("click", function () {
    if (!firstSaveHappened) {
        document.querySelector("#savecontainer").innerHTML = `
        <input id="inputtitle" type="text" placeholder="Title">
        <input id="inputname" type="text" placeholder="Your Name">
        `
        this.style = "background-color: blue; width:100px; "
        firstSaveHappened = true;
    }
    else {
        //stuff to save to firebase
        console.log(sequencer);
        let sequence = {
            Author: document.querySelector("#inputname").value,
            Title: document.querySelector("#inputtitle").value.trim(),
            Grid: sequencer,
            BPM: getBpm(),
            Kit: LoadedKit
        }
        if (sequence.Author.length && sequence.Title.length) {
            database.ref("/sequences").push(sequence);
            document.querySelector("#savecontainer").innerHTML = "";
            this.style = "width:inherit;"
            firstSaveHappened = false;
        }


    }
});



document.querySelector("#tempo").oninput = function () {
    setBpm(this.value)
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
function getBpm() {
    let bpm = 60000 / timer;
    document.querySelector("#tempo") = bpm;
    return bpm
}
function setBpm(newbpm) {
    clearInterval(interval);
    interval = makeInterval(newbpm);
    document.querySelector("#showtempo").textContent = newbpm;
    document.querySelector("#tempo").value = newbpm;
}