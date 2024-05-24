let flippedCard = false;
let cardOne;
let cardTwo;

let classBox = document.getElementsByClassName("box");

for(i=0; i<classBox.length; i++){
    classBox[i].addEventListener('click', boxClicked);
}

/**
 * 
 * The function checks if this box was clicked.
 * If clicked, flip card and store the state of the the card. 
 */
function boxClicked (event){
    let div = this;
    console.log("Clicked")
    this.classList.toggle('box-inner');

    if (!flippedCard){
        flippedCard = true;
        cardOne = this;
    } else {
        flippedCard = false;
        cardTwo = this;
    }
}

