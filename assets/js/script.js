let flippedCard = false;
let lockBoard = false;
let cardOne;
let cardTwo;

let classBox = document.getElementsByClassName("box");

for(i=0; i<classBox.length; i++){
    classBox[i].addEventListener('click', boxClicked);
}

/**
 * The function checks if the card clicked was the first card or the second.
 * If clicked, store the state of the the card.
 * Code used from https://youtu.be/6-CsPmYQ-VI?si=Oecpo5LhCfgwdWHB tutorial
 */
function boxClicked (event){
    if(lockBoard) return;
    if(this === cardOne) return;
        let div = this;
        this.classList.toggle('box-inner');

        if (!flippedCard){
            flippedCard = true;
            cardOne = this;
        } else {
            cardTwo = this;

            checkForMatch();
          }
    }



/**
 * The functions below checks if cards match, remove event listener and stay flipped. If cards don't match flip back.
 * Code used from https://youtu.be/m8nmh3_lejc?si=2rHCCisfFgYSHW0W tutorial
 */
function checkForMatch(){
    if(cardOne.dataset.image === cardTwo.dataset.image){
        disableCards();
    } else {
        unFlipCards();
    }
}

function disableCards(){
    cardOne.removeEventListener('click', boxClicked);
    cardTwo.removeEventListener('click', boxClicked);

    resetBoard();
}

function unFlipCards(){
    lockBoard = true;

    setTimeout(() => {
        cardOne.classList.remove('box-inner');
        cardTwo.classList.remove('box-inner');

        resetBoard();
    }, 1500);
}

/**
 * This function sets flippedCard, lockBoard variables to false and 
 * sets cardOne and cardTwo variables to null resetting the board.
 * Code used from https://youtu.be/20k84LS1LZY?si=Oy7ZmA21I4U-_UPy tutorial
 */
function resetBoard(){
    flippedCard = false;
    lockBoard = false;
    cardOne = null;
    cardTwo = null;
}