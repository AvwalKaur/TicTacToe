let btn=document.querySelectorAll(".box");
let msgDisplay=document.querySelector(".msg");
let msgContainer=document.querySelector(".msg-container");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector(".new-game");
let turnO=true;     //playerO


//2D array
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
 
btn.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true) {
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        } else {
            box.innerText="X";
            box.style.color="rgb(52, 104, 52)";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});

let displayWinner=(winner)=>{   //winner-->pos1Val
     msgDisplay.innerText=`Congratulations! Winner is Player ${winner}`;
     msgDisplay.style.fontStyle="italic";
     msgDisplay.style.fontWeight="bold";
     msgDisplay.style.marginBottom="1rem";
     msgContainer.classList.remove("hide");
     btn.disabled=true;
}
const disableBoxes=()=>{
    for(let box of btn) {
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of btn) {
        box.disabled=false;
        box.innerText="";
    }
}
const checkWinner=()=>{

    for(let pattern of winPatterns) {
        let pos1val=btn[pattern[0]].innerText;
        let pos2val=btn[pattern[1]].innerText;
        let pos3val=btn[pattern[2]].innerText;

        //To check winner
        if(pos1val!="" && pos2val!="" && pos3val!="") {
            if(pos1val==pos2val && pos2val==pos3val) {
                console.log("Winner!",pos1val);
                disableBoxes();
                displayWinner(pos1val);
            }
        }
    }
}

//reset game
const restGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
resetBtn.addEventListener("click",restGame);

//new game button
const newGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click",newGame);

