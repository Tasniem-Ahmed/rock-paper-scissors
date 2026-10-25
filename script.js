'use strict';

// query selector each choice, 2spans of choices, spans of results, btn
// computer shooce random, user choose
// array for user what he choose
// conditions of the wins 
// flag for user and computer (who win)
// update result

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

let userChoice = document.querySelector('.userChoice')
let computerChoice = document.querySelector('.computerChoice')

let winResult = document.querySelector('.winResult')
let loseResult = document.querySelector('.loseResult')
let tiesResult = document.querySelector('.tiesResult')

let tieScore, winScore, loseScore;

const tieMsg = "Tie! 💯";
const winMsg = "You Win! 🎉";
const loseMsg = "You Lose! 💔";

const btn = document.querySelector('.btn')

const flag = document.querySelector('.flag')
const selected = document.querySelector('.selected')

function init(){
tieScore= 0;
winScore = 0; 
loseScore = 0;
winResult.textContent = 0
loseResult.textContent = 0
tiesResult.textContent = 0
}

// console.log(rock, paper, scissors, userChoice, computerChoice, winResult, loseResult, tiesResult , btn)
let choices = ['rock', 'paper', 'scissors']

init()
function computerChoose(){
    let computer = choices[(Math.trunc(Math.random() *3))]
    console.log(computer)
    return computer
}

function handleGame(user, comp){
    function win(){
        winScore++;
        userChoice.textContent = user;
        computerChoice.textContent = comp;
        winResult.textContent = Number(winScore);
        flag.textContent = winMsg;
    }
    function lose(){
        loseScore++;
        userChoice.textContent = user;
        computerChoice.textContent = comp;
        loseResult.textContent = Number(loseScore);
        flag.textContent = loseMsg;
    }

    // Tie
    if (user === comp){
        tieScore++;
        userChoice.textContent = user;
        computerChoice.textContent = comp;
        tiesResult.textContent = Number(tieScore);
        flag.textContent = tieMsg;
    }
    // Win or lose
    else{
        // user rock -> comp paper(lose), scissors(win)
        // rock
        if(user === 'rock')
            (comp === "paper") ? lose() : win();
        // user paper -> comp rock (win), scissors(lose)
        // paper
        if (user === 'paper')
            (comp === 'rock')? win() : lose()
        // user scissors -> comp rock(lose), paper(win)        
        // scissors
        if (user === 'scissors')
            (comp === 'rock')? lose() : win()
        }
}


function showHidden(){
    flag.classList.remove('hidden')
    selected.classList.remove('hidden')
}
function addHidden(){
    flag.classList.add('hidden')
    selected.classList.add('hidden')
}

rock.addEventListener('click', function(){
    handleGame('rock', computerChoose())
    showHidden();
})
paper.addEventListener('click', function(){
    handleGame('paper', computerChoose())
    showHidden();
})
scissors.addEventListener('click', function(){
    handleGame('scissors', computerChoose())
    showHidden();
})

btn.addEventListener('click', function(){
    addHidden()
    init()
})