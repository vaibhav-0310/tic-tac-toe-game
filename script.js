let button=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let winner=document.querySelector("p");

let turnO=true;//trun decider

const win=[
  [0, 1, 3],
  [4, 5, 6],
  [7, 8, 2],
  [0, 4, 7],
  [1, 5, 8],
  [3, 6, 2],
  [0, 5, 2],
  [3, 5 ,7]
];//condtion for winning
const dis=()=>{
  for(let box of button){
    box.disabled=true;
  }
}
const ena=()=>{
  for(let box of button){
    box.disabled=false;
    box.innerText="";
    winner.innerText="Winner is __";
  }
}
const resetGame=()=>{
  trunO= true;
  ena();
}

button.forEach((box)=>{
     box.addEventListener("click",()=>{
      if(turnO){         //player1
        box.innerText="X";
        turnO=false;
      }
      else{              //player2
        box.innerText="O";
        turnO=true;
      }
      box.disabled=true;
      checkWinner();
    })
});
const showinner=(winn)=> {
  winner.innerText=`Congrats, Winner is ${winn}`;
}

const checkWinner=()=> {
  for (let pattern of win) {
    let p1=button[pattern[0]].innerText;
    let p2=button[pattern[1]].innerText;
    let p3=button[pattern[2]].innerText;
    if(p1!="" && p2!="" && p3!=""){
      if(p1===p2 && p2===p3){
        console.log("winner", p1);
        showinner(p1);
        dis();
      }
    }
  }
};

reset.addEventListener("click",resetGame);