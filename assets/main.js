let tick = 30; //interval for main setinterval

for(let ii = 0; ii < 3; ii++){
    let bclass; //used to show each row

    let row = document.createElement("div");
    row.classList.add("row"+ii);

    document.querySelector(".grid").append(row);
    if(ii == 0){    //b classes are used in style.css
        bclass= "b0"
    }
    if(ii==1){
        bclass= "b1"
    }
    if(ii==2){
        bclass= "b2"
    }
    for(let i = 0; i < 17; i++){
        let button = document.createElement("button");
        button.className = "button" + i;
        button.classList.add(bclass);
        button.innerHTML = i;
        document.querySelector(`.row${ii}`).append(button);
    }
}

tickCount = 0;

setInterval(() => {
    if(tickCount > 16){
        tickCount = 0;
    }
    console.log("getting: " + ".button" + tickCount)
    col = document.getElementsByClassName("button" + tickCount);
    colArray= Array.from(col);


    console.log(col, colArray);
    colArray.forEach(element => {
        console.log(element);

        element.classList.add("picked");
        setTimeout(() => {
            element.classList.remove("picked")
        }, tick);

    });

    tickCount += 1;
}, tick);