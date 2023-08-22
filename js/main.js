// |Recupero Dati

const cellContainer = document.getElementById("cell-container");
const playButton = document.getElementById("play-button");
const difficulty = document.getElementById("inputGroupSelect04");
const numberBombs = 16;
let listCellClick = [];

// |Creazione numero di celle

// |Generazione griglia
// createGrid(cellTotal, cellContainer);

// |Pulsante ceazione griglia
playButton.addEventListener("click", function () {
  listCellClick = [];
  let cellTotal = parseInt(difficulty.value);
  console.log(difficulty.value);
  const listBomb = generateRandomNumbersRange(1, cellTotal, numberBombs);
  console.log(cellTotal + " Numero celle");
  console.log(numberBombs + " Numero di Bombe");
  console.table(listBomb);
  createGrid(cellTotal, cellContainer, listBomb, listCellClick);
});

// |Funzione creazione griglia
function createGrid(cellsNumber, container, listBomb, listCellClick) {
  container.innerHTML = "";
  // |Ciclo creazioni celle
  for (let i = 1; i <= cellsNumber; i++) {
    createCell(cellContainer, i, cellsNumber, listBomb, listCellClick);
  }
}

// |Funzione creazione cella

function createCell(container, i, cellTotal, listBomb, listCellClick) {
  const cell = document.createElement("li");

  cell.innerText = i;
  cell.classList.add("cell");
  cell.classList.add("cell-" + cellTotal);

  // **Quando clicco una cella

  cell.addEventListener("click", function () {
    // *Se la cella è sulla lista bombe
    if (listBomb.includes(i)) {
      // **Cella di colore rosso
      cell.classList.add("bg-danger");
      alert("Gioco finito, il tuo punteggio è di: " + listCellClick.length);
    }
    // *Se la cella non è sulla lista bombe
    else {
      // *Se la cella non è gia resente nella lista, aggiungere la cella sulla lista celle cliccate
      if (!listCellClick.includes(i)) listCellClick.push(i);
      console.table(listCellClick);

      cell.classList.add("bg-primary");
      // console.log(i);
    }

    endGame(listCellClick, listBomb, cellTotal);
  });

  container.append(cell);
}

// |Funzione creazione lista bombe
function generateRandomNumbersRange(min, max, range) {
  const listBomb = [];
  while (listBomb.length <= range - 1) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(randomNumber + " Numero casuale");
    if (!listBomb.includes(randomNumber)) {
      listBomb.push(randomNumber);
    }
  }
  return listBomb;
}

// |Funzione fine gioco
function endGame(listCellClick, listBomb, cellTotal) {
  if (listCellClick.length + listBomb.length == cellTotal) {
    alert("Gioco finito, il tuo punteggio è di: " + listCellClick.length);
  }
}
