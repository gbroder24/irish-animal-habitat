//Declare Global Variables
let flippedCard = false;
let lockBoard = false;
let cardOne;
let cardTwo;

let cardsChosen = [];
let cardsWon = [];


let pairsFound = document.getElementById('result');
let congratsModal = document.getElementById('congrats-modal');
let closeCongratsModal = document.getElementById('close');
let newGame = document.getElementById('yes-btn');
let noNewGame = document.getElementById('no-btn');

let gameArea = document.getElementsByClassName("game-area");
let classBox = document.getElementsByClassName("box");

// This for loop iterates over the classBox array. It adds an event listener to each card and listens for a click.
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
            cardsChosen.push(cardOne.dataset);
        } else {
            cardTwo = this;
            cardsChosen.push(cardTwo.dataset);
            checkForMatch();
          }
    }

/**
 * The function checks the cards for a match. If they match call function disableCards().
 * Use push method on the chosen pair of cards and store in cardsWon variable.
 * If cardsWon length is strictly equal to integer number 6 call display congrats modal.
 * Else unflip chosen cards and empty cards chosen array.
 * Code used from https://youtu.be/m8nmh3_lejc?si=2rHCCisfFgYSHW0W tutorial
 */
function checkForMatch(){
    if(cardOne.dataset.image === cardTwo.dataset.image){
        disableCards();
        cardsWon.push(cardsChosen);
        pairsFound.innerHTML = cardsWon.length;

        if(cardsWon.length === 6){
            displayCongratsModal();
        }
        cardsChosen = [];

    } else {
        unFlipCards();
        cardsChosen = [];
    }
}

/**
 * The function removes the click event listener from cards that have been paired
 * and the function resetBoard is called.
 */
function disableCards(){
    cardOne.removeEventListener('click', boxClicked);
    cardTwo.removeEventListener('click', boxClicked);

    resetBoard();
}

/**
 * The function executes when a pair of flipped cards do not match.
 * It has a time delay of 1.5 secs to unflip.
 */
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

/**
 * It shuffles the cards and assigns each card
 * a random integer.
 * Code used from https://youtu.be/20k84LS1LZY?si=Oy7ZmA21I4U-_UPy tutorial
 */
function shuffle(){
    for(i=0; i<classBox.length; i++){
        let randomPos = Math.floor(Math.random() * 12);
        classBox[i].style.order = randomPos;
    }
}

shuffle();

/**This function displays the congratulations modal
 * Code used from https://www.w3schools.com/howto/howto_css_modals.asp tutorial
 */
function displayCongratsModal() {
    congratsModal.style.display = "block";
}

/**This function closes the congratulations modal
 * Code used from https://www.w3schools.com/howto/howto_css_modals.asp tutorial
 */
function closeModalCongrats() {
    congratsModal.style.display = "none";
    location.reload();
}

let classButton = document.getElementsByClassName("button");

// This for loop iterates over the classButton array. It adds an event listener to each button in the congrats modal and listens for a click.
for(j=0; j<classButton.length; j++){
    classButton[j].addEventListener('click', closeModalCongrats);
}