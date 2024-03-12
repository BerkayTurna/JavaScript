const gameCells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");
const alertBox = document.querySelector(".alertBox");

//Değişkenler yaratma
let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;

player1.textContent = `Player 1: ${currentPlayer}`;
player2.textContent = `Player 2: ${nextPlayer}`;

//Oyunu başlatma fonksiyonu
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick); 
  });
};

const handleClick = (e) => {
    if (e.target.textContent === "") {
      e.target.textContent = playerTurn;
      if(checkWin()){
        //   console.log(`Kazanan ${playerTurn}!`);
          showAlert(`Kazanan ${playerTurn}!`);
          disableCells();
      }
      else if(checkTie()){
        //   console.log("Berabere!");
          showAlert("Berabere!");
          disableCells();
      }
      else{
          changePlayerTurn();
      }
    }
  }

//Oyuncu değişikliği fonksiyonu
const changePlayerTurn = () => {
  //   if (playerTurn === currentPlayer) {
  //     playerTurn = nextPlayer;
  //   } else {
  //     playerTurn = currentPlayer;
  //   }

  //turnery hali daha verimli gibi..
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};

//Kazanan kontrol fonksiyonu
const checkWin = () => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningConditions.length; i++) {
    const [pos1, pos2, pos3] = winningConditions[i];
    if (
      gameCells[pos1].textContent !== "" &&
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent
    ){
        return true;
    }
  }
  return false;
};

//Berabere kalma kontrol fonksiyonu 
const checkTie = ()=>{
    let emptyCellsCount = 0;
    gameCells.forEach( cell => {
        if(cell.textContent === ""){
            emptyCellsCount++;
        }
    });
    
    return emptyCellsCount=== 0 && !checkWin();
}

// Oyun bitiminde hücreleri sabitleme fonksiyonu
const disableCells= ()=> {
    gameCells.forEach(cell =>{
        cell.removeEventListener("click", handleClick);
        cell.classList.add("disabled");
    })
}

//Oyunu yeniden başlatma fonksiyonu
const restartGame = ()=>{
    gameCells.forEach(cell=>{
        cell.textContent = "";
        cell.classList.remove("disabled")
    })
    startGame();
}

//Sonuç bildirisi fonksiyonu
const showAlert = (msg)=>{
    alertBox.style.display = "block";
    alertBox.textContent = msg;
}
restartBtn.addEventListener("click", restartGame);

//Oyunu başlatma fonksiyonu çağırma
startGame();
