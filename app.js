let boxes = document.body.querySelectorAll('.box');
let resetBtn = document.body.querySelector('#reset-btn');
let newGameBtn = document.body.querySelector('#new-game-btn');
let message = document.body.querySelector('.message');
let messagediv = document.body.querySelector('.message-div');
let turn0 = true;
// message.classList.remove('hide');
let winPatterns = [
    [0,1,2], [0,4,8], [0,3,6],
    [1,4,7], [2,5,8], [2,4,6],
    [3,4,5], [6,7,8]
]

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText = "0";
            box.style.color = "green";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (winner)=>{
    message.innerText = `Congratulations, Winner is ${winner}`;
    messagediv.classList.remove('hide');
}

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                disableBoxes();
            }
        }
    }
}

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}

const resetGame = ()=>{
    enableBoxes();
    turn0 = true;
    messagediv.classList.add('hide');
}
resetBtn.addEventListener('click',resetGame);
newGameBtn.addEventListener('click',resetGame);