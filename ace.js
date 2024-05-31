let PlayerCard1 = document.querySelectorAll("span")[0];
let PlayerCard2 = document.querySelectorAll("span")[1];
let ComputerCard1 = document.querySelectorAll("span")[2];
let ComputerCard2 = document.querySelectorAll("span")[3];
let playerTotal = document.querySelectorAll("h2")[0];
let ComputerTotal = document.querySelectorAll("h2")[1];

let startBut = document.querySelector("button");

console.log(PlayerCard1);
console.log(PlayerCard2);
console.log(ComputerCard1);
console.log(ComputerCard2);
console.log(playerTotal);
console.log(ComputerTotal);
let playersum = 0 ;
let computersum = 0 ;
let resultt = document.querySelector("h6");
function randomnumber()
{
    let number =Math.floor(Math.random()*10+1);
    console.log(number);
    return number;
}

startBut.addEventListener("click", () =>
{
    let PlayerNumber1 = randomnumber();
    let PlayerNumber2 = randomnumber();
    let ComputerNumber1 = randomnumber();
    let ComputerNumber2 = randomnumber();

    PlayerCard1.innerHTML = PlayerNumber1;
    PlayerCard2.innerHTML = PlayerNumber2;

    ComputerCard1.innerHTML = ComputerNumber1;
    ComputerCard2.innerHTML = ComputerNumber2;

    playersum = PlayerNumber1+PlayerNumber2;
    computersum = ComputerNumber1+ComputerNumber2;

    playerTotal.innerHTML =`Total : ${playersum}`;

    ComputerTotal.innerHTML = `Total : ${computersum}`;


if(playersum > computersum)
    {
        resultt.innerHTML = `you won the game!`;
        resultt.style.color = "green";
    }
    else if(playersum < computersum)
    {
        resultt.innerHTML = `Sorry,Computer won the game!`;
        resultt.style.color = "red";
    }
    else{
        resultt.innerHTML = `Tough fight it is a Tie game.`;
        resultt.style.color = "white";
    }

});

