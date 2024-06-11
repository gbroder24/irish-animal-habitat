//Declare Global Variables
let flippedCard = false;
let lockBoard = false;
let cardOne;
let cardTwo;
let startTime;
let elapsedTime = 0;
let timerInterval;

let cardsChosen = [];
let cardsWon = [];
let timerArr = [];

let pairsFound = document.getElementById('result');
let congratsModal = document.getElementById('congrats-modal');
let closeCongratsModal = document.getElementById('close');
let newGame = document.getElementById('yes-btn');
let noNewGame = document.getElementById('no-btn');
let gameRulesModal = document.getElementById('rules-modal');
let questionIcon = document.getElementById('question-mark');
let closeRulesModal = document.getElementById('close-modal');
const timer = document.getElementById('timer');

let gameArea = document.getElementsByClassName("game-area");
let classBox = document.getElementsByClassName("box");

// This for loop iterates over the classBox array. It adds an event listener to each card and listens for a click.
for (i = 0; i < classBox.length; i++) {
    classBox[i].addEventListener('click', boxClicked);
}

/**
 * The function starts timer when first card is clicked. Code used from https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen
 * The function checks if the card clicked was the first card or the second.
 * If clicked, store the state of the the card.
 * Code used from https://youtu.be/ZniVgo8U7ek?feature=shared tutorial
 */
function boxClicked(event) {
    if (lockBoard) return;
    if (this === cardOne) return;
    let div = this;
    this.classList.toggle('box-inner');

    if (!flippedCard) {
        flippedCard = true;
        cardOne = this;
        cardsChosen.push(cardOne.dataset);
        timerArr.push(cardOne);
        if (timerArr.length === 1) {
            startTimer();
        }
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
 * Code used from https://youtu.be/ZniVgo8U7ek?feature=shared tutorial
 */
function checkForMatch() {
    if (cardOne.dataset.image === cardTwo.dataset.image) {
        disableCards();
        cardsWon.push(cardsChosen);
        pairsFound.innerHTML = cardsWon.length;
        if (cardsWon.length === 6) {
            stopTimer();
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
 * Code used from https://youtu.be/ZniVgo8U7ek?feature=shared tutorial
 */
function disableCards() {
    cardOne.removeEventListener('click', boxClicked);
    cardTwo.removeEventListener('click', boxClicked);

    resetBoard();
}

/**
 * The function executes when a pair of flipped cards do not match.
 * It has a time delay of 1.5 secs to unflip.
 * Code used from https://youtu.be/ZniVgo8U7ek?feature=shared tutorial
 */
function unFlipCards() {
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
 * Code used from https://youtu.be/ZniVgo8U7ek?feature=shared tutorial
 */
function resetBoard() {
    flippedCard = false;
    lockBoard = false;
    cardOne = null;
    cardTwo = null;
}

/**
 * It shuffles the cards and assigns each card
 * a random integer.
 * Code used from https://youtu.be/ZniVgo8U7ek?feature=shared tutorial
 */
function shuffle() {
    for (i = 0; i < classBox.length; i++) {
        let randomPos = Math.floor(Math.random() * 12);
        classBox[i].style.order = randomPos;
    }
}

shuffle();

/**This function displays the congratulations modal
 * Code used from https://www.w3schools.com/howto/howto_css_modals.asp tutorial
 */
function displayCongratsModal() {
    setTimeout(() => {
    congratsModal.style.display = "block";
    }, 1000);
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
for (j = 0; j < classButton.length; j++) {
    classButton[j].addEventListener('click', closeModalCongrats);
}

// Click Event Listener to display the rules modal
questionIcon.addEventListener('click', displayRulesModal);

/**
 * This function displays the rules modal
 * Code used from https://www.w3schools.com/howto/howto_css_modals.asp tutorial
 */
function displayRulesModal() {
    gameRulesModal.style.display = "block";
}

// Click Event Listener to close the rules modal
closeRulesModal.addEventListener('click', hideRulesModal);

/**
 * This function closes the rules modal
 * Code used from https://www.w3schools.com/howto/howto_css_modals.asp tutorial
 */
function hideRulesModal() {
    gameRulesModal.style.display = "none";
}

/**
 * This function starts the timer
 * Code used from https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen
 */
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
}

/**
 * This function stops the timer
 * Code used from https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen
 */
function stopTimer() {
    clearInterval(timerInterval);
}

/**
 * This function updates the timer display
 * Code used from https://www.insidethediv.com/javascript-simple-projects-beginners-online-stopwatch-full-screen
 */
function updateTimer() {
    const timeElapsed = Date.now() - startTime;
    const seconds = Math.floor((timeElapsed / 1000) % 60);
    const minutes = Math.floor((timeElapsed / 1000 / 60) % 60);
    timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}