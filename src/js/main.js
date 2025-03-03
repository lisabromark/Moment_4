"use strict";

const dog = document.getElementById("dog");
const button = document.getElementById("getDogButton");

button.addEventListener("click", function(){
    if(dog.classList.contains("animateDog")){
        dog.classList.remove("animateDog");
        button.textContent="Kom då Birdie!";
    }
    else{
        dog.classList.add("animateDog");
        button.textContent="Hejdå Birdie!";
    }
});


