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
let moves = 0;
let clockOff = true;
let time = 0;


//_____/____LIST OF VARIABLES_____\______\\

const cardsList = document.querySelectorAll('.card'); // nodelist of cards
const stars = document.querySelector("ul.stars li"); // selects all stars
const reset = document.querySelector(".fa-repeat"); // restart button
const deck = document.querySelector('.deck');
const minutes = time/60;
const seconds = time % 60;



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
    const deck = document.querySelector(".deck"); //shuffles deck
    let cardHTML = shuffle(cards).map(function(card) {
        return generateGrid(card);
    });
    deck.innerHTML = (cardHTML.join('')); // generates grid
    // restart clock
    // restart moves counter
    // call new shuffled deck
}
startGame();




//______________MOVE movesER________________\\
function addMoves() {
    moves++;
    const movesText = document.querySelector('.moves');
    movesText.innerHTML = moves;
}



function checkScore() {
    if (moves === 8 || moves === 15) {
        hideStar();
    }
}



 function hideStar() { // applies hide property to star
    const starList = document.querySelectorAll('.stars li');
    for (star of starList) {
        if (star.style.display !== 'none') ; {
            star.style.display = 'none';
            break;
        }
    }
}




 //_______________GAME FUNCTIONALITY________________\\

function evaluateClick(clickTarget) {
    return (
        clickTarget.classList.contains('card') &&
        !clickTarget.classList.contains('open') && // prevents clicking open card
        !clickTarget.classList.contains('match') && // prevents clicking on matched cards
        openCards.length < 2 && // prevents more than 3 cards firing event
        !openCards.includes(clickTarget) // prevents double click on one card
    );
}


 deck.addEventListener('click', event => {
     const clickTarget = event.target;

     if (evaluateClick(clickTarget)) {
            if (clockOff) {
                startClock();
                clockOff = false;
            }
            toggleCard(clickTarget); //opens card
            openCards.push(clickTarget); // send to openCards array


         if (openCards.length === 2) {
            checkIfCardsMatch();
            addMoves();
            checkScore();
         }
     }
 })





// toggles the card class on/off
function toggleCard(clickTarget) {
    clickTarget.classList.toggle('open');
    clickTarget.classList.toggle('show');
}




// fx checks for match
function checkIfCardsMatch() {
    if (openCards[0].firstElementChild.className ===
        openCards[1].firstElementChild.className) {
            openCards[0].classList.toggle('match', );
            openCards[1].classList.toggle('match', ); // turns card green/match

            matchedCards.push(openCards[0]);
            matchedCards.push(openCards[1]); //send to matched cards array

            openCards = [];


    } else {
        setTimeout(function() {
            openCards.forEach(function(card) { //flips over card
                card.classList.remove('open','show');
             });


            openCards.length = 0; //empties openCards array

        }, 600);

    }
}


function startClock() { //prints seconds in dev console
    time = 0;
    let clockId = setInterval(() => {
        time++;
        console.log(time);
    }, 1000);
}



function displayTime() { //creates timer in score panel
    const clock = document.querySelector('.clock');
    console.log(clock);
    clock.innerHTML = time;
}


 /*
  * set up the event listener for a card. If a card is clicked:
  *  - display the card's symbol (put this functionality in another function that you call from this one)
  *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  *  - if the list already has another card, check to see if the two cards match
  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
  *    + increment the move moveser and display it on the page (put this functionality in another function that you call from this one)
  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
  */
