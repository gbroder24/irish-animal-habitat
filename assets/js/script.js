function boxClicked (event){
    let div = this;
    console.log("Clicked")
    this.classList.toggle('box-inner');
}

let classBox = document.getElementsByClassName("box");


for(i=0; i<classBox.length; i++){
    classBox[i].addEventListener('click', boxClicked);
}