/*
 * Create a list that holds all of your cards
 */

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

function generateGrid(card) {
    return `<li class="card"><i class="fa ${card}"></i></li>`;
}

const allCards = document.querySelectorAll('.card'); // creates nodelist of all cards
const stars = document.querySelector("ul.stars li"); // selects all stars
const reset = document.querySelector(".fa-repeat") // restart game
let openCards = [];
let matchedCards = [];
let newCards = shuffle(cards)

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
    let deck = document.querySelector('.deck');
    let cardHTML = cards.map(function(card) {
        return generateGrid(card);
    });
    deck.innerHTML = (cardHTML.join(''));
    //newCards[i].classList.remove('show', 'open', 'match')
}

startGame();

// move counter
let count = 5
function moveCounts(bool) {
    if(bool ===true) {
        count++;
    }
    else if(bool===false) {
        count--;
    }

    //remove stars
    document.querySelector('ul.stars').removeChild(stars[0])



}


 // game functionality
 allCards.forEach(function(card) {
     card.addEventListener('click', function(e) { // 2 if loops are run upon click

         if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'))
            openCards.push(card); // pushes open card to array
            card.classList.add('open', 'show');
            console.log("Open Cards:", openCards.length);

 // turn card over if no match ->
        if (openCards.length == 2) {
            setTimeout(function() {
                openCards.forEach(function(card) {
                 card.classList.remove('open','show');
             });
                 openCards.length = 0; //empties openCards array
                 openCards = [];
             }, 1000);
         };
     });

 // check if cards match -------------------------------------------------------->



 });
