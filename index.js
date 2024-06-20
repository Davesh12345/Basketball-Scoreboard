let scoreA = document.getElementById("score-a");    
let scoreB = document.getElementById("score-b");

let countA = 0;
let countB = 0;


function add1A(){
    countA += 1;
   scoreA.innerText = countA;
}

function add2A(){
    countA += 2;
    scoreA.innerText = countA;
}

function add1B(){
    countB += 1;
   scoreB.innerText = countB;
}

function add2B(){
    countB += 2;
    scoreB.innerText = countB;
}
function reset(){
    countA = 0;
    countB = 0;
    scoreA.innerText = countA;
    scoreB.innerText = countB;
}