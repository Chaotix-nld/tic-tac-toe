let playerOneScore = 0;
let playerTwoScore = 0;
let count = 0;
let running = false;
const playingField =  document.getElementById("playingField");
const resetBtn = document.getElementById("resetBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
const startBtn = document.getElementById("startBtn");
const playerOneScoreDisplay = document.getElementById("playerOneScoreDisplay");
const playerTwoScoreDisplay = document.getElementById("playerTwoScoreDisplay");
const displayPlayerOne = document.getElementById("displayPlayerOne");
const displayPlayerTwo = document.getElementById("displayPlayerTwo"); 
const playerInput = document.getElementById("playerInput");
const mainBody = document.getElementById("mainBody");
const footer = document.getElementById("footer");
//array with objects to store values//
const cells = [
    {id: 1, value: " "},
    {id: 2, value: " "},
    {id: 3, value: " "},
    {id: 4, value: " "},
    {id: 5, value: " "},
    {id: 6, value: " "},
    {id: 7, value: " "},
    {id: 8, value: " "},
    {id: 9, value: " "},
    
];
//reset everything//
function resetGame(){
    location.reload();
}
//play another round//
function nextRound(){
    const winner = document.getElementById("winner");
    footer.removeChild(winner);
    playingField.innerHTML=``;
    emptyValues()
    createGrid()
}

//empty object values//
function emptyValues(){
    for(k=0; k<cells.length; k++){
        cells[k].value = " ";
    }
}
//start a new game//
function newGame(){
const playerOneName = document.getElementById("playerOneName").value;
const playerTwoName = document.getElementById("playerTwoName").value;
displayPlayerOne.innerText = playerOneName;
displayPlayerTwo.innerText = playerTwoName;
running = true;
playingField.removeChild(playerInput);
createGrid();
}
//creating gameboard in HTML file//
function createGrid(){
    for (i=0; i<cells.length; i++){
        const id = cells[i].id;
        const value = cells[i].value;
        const cell = document.createElement("div");
        cell.classList.add("cell")
        cell.setAttribute("id", id);
        cell.textContent = value;
        playingField.appendChild(cell);
        cell.addEventListener("click", clicked)
    };
};

function clicked(){
    const clickedCell = document.getElementById(this.id);
    const objectIndex = Number(this.id) - 1;
    const selectedObject = cells[objectIndex]; //determine specific index of object//

    //player turn is based on modulus//
    if(count % 2 == 0){
        clickedCell.textContent = "X"
        console.log("x")
        clickedCell.removeEventListener("click", clicked);
        selectedObject.value = "X";
    }
    else {
        clickedCell.textContent = "O"
        console.log("O")
        clickedCell.removeEventListener("click", clicked);
        selectedObject.value = "O";
        
    }
    count ++ 
    checkCell()
}
//checking for winner//
function checkCell(){
    //row 1//
    if (cells[0].value === cells[1].value && cells[1].value === cells[2].value){
        if (cells[0].value != " "){
            if (cells[0].value === "X"){
                declareWinnerOne()
            }
            else if(cells[0].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //row 2//
    else if (cells[3].value === cells[4].value && cells[4].value === cells[5].value){
        if (cells[3].value != " "){
            if (cells[3].value === "X"){
                declareWinnerOne();
            }
            else if(cells[3].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //row 3//
    else if (cells[6].value === cells[7].value && cells[7].value === cells[8].value){
        if (cells[6].value != " "){
            if (cells[6].value === "X"){
                declareWinnerOne();
            }
            else if(cells[6].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //column 1//
    else if (cells[0].value === cells[3].value && cells[3].value === cells[6].value){
        if (cells[0].value != " "){
            if (cells[0].value === "X"){
                declareWinnerOne();
            }
            else if(cells[0].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //column 2//
    else if (cells[1].value === cells[4].value && cells[4].value === cells[7].value){
        if (cells[1].value != " "){
            if (cells[1].value === "X"){
                declareWinnerOne();
            }
            else if(cells[1].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //column 3//
    else if (cells[2].value === cells[5].value && cells[5].value === cells[8].value){
        if (cells[2].value != " "){
            if (cells[2].value === "X"){
                declareWinnerOne();
            }
            else if(cells[2].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //diagonal 1//
    else if (cells[0].value === cells[4].value && cells[4].value === cells[8].value){
        if (cells[0].value != " "){
            if (cells[0].value === "X"){
                declareWinnerOne();
            }
            else if(cells[0].value === "O"){
                declareWinnerTwo();
            }
        }
    }
    //diagonal 2//
    else if (cells[2].value === cells[4].value && cells[4].value === cells[6].value){
        if (cells[2].value != " "){
            if (cells[2].value === "X"){
                declareWinnerOne();
            }
            else if(cells[2].value === "O"){
                declareWinnerTwo();
            }
        }
    }
}

function declareWinnerOne(){
    const playerOneName = document.getElementById("displayPlayerOne").textContent;
    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.setAttribute("id", "winner");
    winner.textContent = `${playerOneName} wins the Round`;
    footer.appendChild(winner);
    playerOneScore ++;
    playerOneScoreDisplay.textContent = playerOneScore;
}
function declareWinnerTwo(){
    const playerTwoName = document.getElementById("displayPlayerTwo").textContent;
    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.setAttribute("id", "winner");
    winner.textContent = `${playerTwoName} wins the Round`;
    footer.appendChild(winner);
    playerTwoScore ++;
    playerTwoScoreDisplay.textContent = playerTwoScore;
}