// |Recupero Dati

const cellContainer = document.getElementById("cell-container");
const playButton = document.getElementById("play-button");
const difficulty = document.getElementById("inputGroupSelect04");

// |Creazione numero di celle

// |Generazione griglia
// createGrid(cellTotal, cellContainer);

// |Pulsante ceazione griglia
playButton.addEventListener("click", function () {
  let cellTotal = parseInt(difficulty.value);
  console.log(difficulty.value);
  createGrid(cellTotal, cellContainer);
});

// |Funzione creazione griglia
function createGrid(cellsNumber, container) {
  container.innerHTML = "";
  // |Ciclo creazioni celle
  for (let i = 1; i <= cellsNumber; i++) {
    createCell(cellContainer, i, cellsNumber);
  }
}

// |Funzione creazione cella

function createCell(container, i, cellTotal) {
  const cell = document.createElement("li");

  cell.innerText = i;
  cell.classList.add("cell");
  cell.classList.add("cell-" + cellTotal);
  cell.addEventListener("click", function () {
    cell.classList.add("bg-primary");
    console.log(i);
  });

  container.append(cell);
}
