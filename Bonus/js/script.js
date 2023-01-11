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

const gridSectionEasy = document.getElementById("grid-section-easy");

const gridContainerEasy = document.getElementById("grid-container-easy");

const gridSectionMedium = document.getElementById("grid-section-medium");

const gridContainerMedium = document.getElementById("grid-container-medium");

const gridSectionHard = document.getElementById("grid-section-hard");

const gridContainerHard = document.getElementById("grid-container-hard");

const levelSelection = document.getElementById("level-selector");

const playBtn = document.getElementById("play-button");

playBtn.addEventListener("click", 
    function () {
        if (levelSelection.value == "easy") {
            gridSectionEasy.classList.remove("hide");
            
            gridSectionEasy.classList.add("show");

            for (let i = 1; i <= 100; i++) {
                const myCell = document.createElement("div");
                myCell.classList.add("cell", "cell-easy");
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
            
                gridContainerEasy.append(myCell);
            }
        }
        else if (levelSelection.value == "medium") {
            gridSectionMedium.classList.remove("hide");
            
            gridSectionMedium.classList.add("show");

            for (let i = 1; i <= 81; i++) {
                const myCell = document.createElement("div");
                myCell.classList.add("cell", "cell-medium");
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
            
                gridContainerMedium.append(myCell);
            }
        }

    }
);

