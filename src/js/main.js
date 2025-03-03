"use strict";

//Vid klick så ska hunden dyka upp och röra sig över skärmen, då ska även texten på knappen bytas ut. 
//Vid nästa klick ska animeringen avslutas. Hittade tips via följande hemsidor:
// 1. https://www.youtube.com/watch?v=-Hhyhgp7n7o "Button Animation with HTML CSS JS | CSS Keyframe Animation"
// 2. https://medium.com/@shivani.007/classlist-in-javascript-b73cfc598e70

//För det första läget, innan knapptryckning, så används "remove" så att inget ska hända. När knapptryckning sedan sker
//aktiveras läget där något händer genom "add" samt knappen ändrar text.


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



