let gameSeq = [];
let userSeq = [];
let btns =["red", "purple", "yellow", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        // console.log("Game started");
        started = true;
        levelUP();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
    
}
function levelUP(){
    userSeq=[];
    level++;
    
    h2.innerHTML = `Level ${level}`;

    let ranInd = Math.floor(Math.random()*3);
    let ranCol = btns[ranInd];
    let ranBtn = document.querySelector(`.${ranCol}`);
    gameSeq.push(ranCol);
    console.log(gameSeq);
    gameFlash(ranBtn);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
    
}
function checkAns(idx){
    // let idx = level-1;

    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUP,1000);
        }
        console.log("same value");
    }else{
        h2.innerHTML = `Game  Over! Your Score Was <b>${level-1}</b> <br>Press any key to start game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnpress(){
    // console.log("Button clicked");
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);
    checkAns(userSeq.length - 1);
}
let allBtn = document.querySelectorAll(".btn");

for(btn of allBtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq =[];
    userSeq = [];
    level = 0;
}