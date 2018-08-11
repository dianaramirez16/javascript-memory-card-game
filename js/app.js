//list of all functions, variables, and arrays being called in the code later on

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
let newCards = shuffle(cards);

// function that creates grid programmatically
function generateGrid(card) {
    return `<li class="card"><i class="fa ${card}"></i></li>`;
}

// Shuffle function from http://stackoverflow.com/a/2450976
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

// list of variables
const cardsList = document.querySelectorAll('.card'); // creates nodelist of all cards
const stars = document.querySelector("ul.stars li"); // selects all stars
const reset = document.querySelector(".fa-repeat"); // restart game
const deck = document.querySelector('.deck');


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


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


 // end Game
function endGame () {

}

 // start Game
function startGame () {
    const deck = document.querySelector(".deck");
    let cardHTML = shuffle(cards).map(function(card) {
        return generateGrid(card);
    });
    deck.innerHTML = (cardHTML.join(''));
    //newCards[i].classList.remove('show', 'open', 'match')

}

startGame();



// move counter
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


 // game functionality code starts here

 deck.addEventListener('click', event => {
     const clickTarget = event.target;
     if (clickTarget.classList.contains('card')) {
         clickTarget.classList.toggle('open');
         clickTarget.classList.toggle('show');
     }
 })
