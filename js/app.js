//list of all functions, variables, and arrays being called in the code later on

//________//_______ARRAYS_______\\__________\\

const cards = [
    "fa-leaf", "fa-leaf",
    "fa-cube", "fa-cube",
    "fa-anchor", "fa-anchor",
    "fa-diamond", "fa-diamond",
	"fa-bicycle", "fa-bicycle",
    "fa-paper-plane-o", "fa-paper-plane-o",
	"fa-bolt", "fa-bolt",
	"fa-bomb", "fa-bomb",
	];
let openCards = [];
let matchedCards = [];

//_____/____LIST OF VARIABLES_____\______\\

const cardsList = document.querySelectorAll('.card'); // creates nodelist of all cards
const stars = document.querySelector("ul.stars li"); // selects all stars
const reset = document.querySelector(".fa-repeat"); // restart game
const deck = document.querySelector('.deck');



//________//_______FUNCTIONS_______\\__________\\



// grid is created

function generateGrid(card) {
    return `<li class="card"><i class="fa ${card}"></i></li>`;
}

//_______Shuffle function from http://stackoverflow.com/a/2450976________\\

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}




//_______________END GAME________________\\
function endGame () {

}

//_______________START GAME________________\\
function startGame () {
    const deck = document.querySelector(".deck");
    let cardHTML = shuffle(cards).map(function(card) {
        return generateGrid(card);
    });
    deck.innerHTML = (cardHTML.join(''));


}

startGame();



//______________MOVE COUNTER________________\\
let count = 5;
function moveCounts(bool) {
    if(bool ===true) {
        count++;
    }
    else if(bool===false) {
        count--;
    }
    //remove stars function is below
    //document.querySelector('ul.stars').removeChild(stars[0]);



}


 //_______________GAME FUNCTIONALITY________________\\

 deck.addEventListener('click', event => {
     const clickTarget = event.target;
     if (clickTarget.classList.contains('card')) {
         toggleCard(clickTarget);
     }
 })


// toggles the card class on/off
function toggleCard(clickTarget) {
    clickTarget.classList.toggle('open');
    clickTarget.classList.toggle('show');
}







 /*
  * set up the event listener for a card. If a card is clicked:
  *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  *  - if the list already has another card, check to see if the two cards match
  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
  */
