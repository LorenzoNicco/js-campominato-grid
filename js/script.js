/*
    STEPS:
        1. Creare la struttura html (main, bottone, contenitore griglia).
        2. Stilizzare quanto creato in css.
        3. Sempre in css, creare una classe per i singoli quadrati della griglia, da assegnare successivamente.
        4. In js, usando un ciclo, creare le 100 celle che compongono la griglia.
            4A. Ogni cella avrà un numero progressivo da 1 a 100, da creare sfruttando il valore della variabile i del ciclo.
        5. Creare un eventlistener da assegnare alle celle per farle colorare di azzurro quando cliccate.
            5A. Al click dovremmo anche stampare un messaggio in console con il numero della cella cliccata.
        6. Creare un eventlistener per far comparire la griglia quando si clicca play.
*/

console.log("Collegamento js ok");

const gridSection = document.getElementById("grid-section");

const gridContainer = document.getElementById("grid-container");

const playBtn = document.getElementById("play-button");

playBtn.addEventListener("click", 
    function () {
        gridSection.classList.remove("hide");
            
        gridSection.classList.add("show");
    }
);

for (let i = 1; i <= 100; i++) {
    const myCell = document.createElement("div");
    myCell.classList.add("cell");
    myCell.innerHTML = i;

    myCell.addEventListener("click",
        function () {
            if (myCell.classList.contains("click-azure")) {
                myCell.classList.remove("click-azure");
            }
            else {
                myCell.classList.add("click-azure");

                console.log("Il numero della cella è: " + i);
            }
        }
    );

    gridContainer.append(myCell);
}