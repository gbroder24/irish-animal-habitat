let flippedCard = false;
let cardOne;
let cardTwo;





/**
 * 
 * The function checks if this box was clicked.
 * If clicked, flip card and store the state of the the card. 
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
    }

    //do cards match
    if(cardOne.dataset.image === cardTwo.dataset.image){
        //cards match
        cardOne.removeEventListener('click', boxClicked);
        cardTwo.removeEventListener('click', boxClicked);
        console.log('Cards match!');
    } 
}

let classBox = document.getElementsByClassName("box");

for(i=0; i<classBox.length; i++){
    classBox[i].addEventListener('click', boxClicked);
}