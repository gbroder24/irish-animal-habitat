let flippedCard = false;
let cardOne;
let cardTwo;

let classBox = document.getElementsByClassName("box");

for(i=0; i<classBox.length; i++){
    classBox[i].addEventListener('click', boxClicked);
}

/**
 * 
 * The function checks if this card was clicked.
 * If clicked, flip card and store the state of the the card.
 * If cards match, stay flipped. If cards don't match flip back.
 * Code used from https://www.youtube.com/watch?v=m8nmh3_lejc&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=8 tutorial
 */
function boxClicked (event){
    let div = this;
    this.classList.toggle('box-inner');

    if (!flippedCard){
        //first click
        flippedCard = true;
        cardOne = this;
    } else {
        //second click
        flippedCard = false;
        cardTwo = this;
    
    //do cards match
    if(cardOne.dataset.image === cardTwo.dataset.image){
        //cards match
        cardOne.removeEventListener('click', boxClicked);
        cardTwo.removeEventListener('click', boxClicked);
    } else {
        //cards do not match
        setTimeout(() => {
            cardOne.classList.remove('box-inner');
            cardTwo.classList.remove('box-inner');
        }, 1000);
    }
 }
}
