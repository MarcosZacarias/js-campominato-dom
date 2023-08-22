// |Recupero Dati

const cellContainer = document.getElementById("cell-container");
const playButton = document.getElementById("play-button");
const difficulty = document.getElementById("inputGroupSelect04");
const numberBombs = 16;

// |Creazione numero di celle

// |Generazione griglia
// createGrid(cellTotal, cellContainer);

// |Pulsante ceazione griglia
playButton.addEventListener("click", function () {
  let cellTotal = parseInt(difficulty.value);
  console.log(difficulty.value);
  const listBomb = generateRandomNumbersRange(1, cellTotal, numberBombs);
  console.log(cellTotal + " Numero celle");
  console.log(numberBombs + " Numero di Bombe");
  console.table(listBomb);
  createGrid(cellTotal, cellContainer, listBomb);
});

// |Funzione creazione griglia
function createGrid(cellsNumber, container, listBomb) {
  container.innerHTML = "";
  // |Ciclo creazioni celle
  for (let i = 1; i <= cellsNumber; i++) {
    createCell(cellContainer, i, cellsNumber, listBomb);
  }
}

// |Funzione creazione cella

function createCell(container, i, cellTotal, listBomb) {
  const cell = document.createElement("li");

  cell.innerText = i;
  cell.classList.add("cell");
  cell.classList.add("cell-" + cellTotal);
  cell.addEventListener("click", function () {
    if (listBomb.includes(i)) {
      cell.classList.add("bg-danger");
      console.log(i + " Cliccato una bomba");
    }
    cell.classList.add("bg-primary");
    console.log(i);
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
