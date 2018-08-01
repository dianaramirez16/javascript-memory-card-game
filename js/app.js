/*
 * Create a list that holds all of your cards
 */

const cardsList = [
      "fa-leaf", "fa-leaf",
      "fa-cube", "fa-cube",
      "fa-anchor", "fa-anchor",
      "fa-diamond", "fa-diamond",
			"fa-bicycle", "fa-bicycle",
      "fa-paper-plane-o", "fa-paper-plane-o",
			"fa-bolt", "fa-bolt",
			"fa-bomb", "fa-bomb",
			];

const cards = document.querySelectorAll('.card'); // creates nodelist of all cards
const stars = document.querySelector(".stars"); // stars keeping score
const reset = document.querySelector(".fa-repeat") // restart game
let openCards = [];
let matchedCards = [];


// game functionality



cards.forEach(function(card) {
  card.addEventListener('click', function(e) { // 3 if loops are run upon click

    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'))
      openCards.push(card); // pushes open cards to array
      card.classList.add('open', 'show');
      console.log('Open Cards:', 'openCards.length'); // testing purposes

// turn card over if no match ->

    if (openCards.length == 2) {
      setTimeout(function() {
        openCards.forEach(function(card) {
          card.classList.remove('open','show');
        });

          openCards.length = 0; //empties openCards array
          openCards = [];
      }, 800);
    };

/* // check if cards match ->

    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      matchedCards.push(card);
      openCards.forEach(function(card) {
        card.classList.add('match');
        card.classList.remove('open','show');
        console.log('Open Cards:', 'openCards.length'); // testing purposes
        console.log('matched Cards:', 'matchedCards.length'); // testing purposes
        openCards = [];
      })
    } */

      }
    });
  });
});




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cardsList) {
    var currentIndex = cardsList.length, temporaryValue, randomIndex;

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

/* counter script
 Counter: <input type="button" value="1" data-counter>

 <script>
   document.addEventListener('click', function(event) {

     if (event.target.dataset.counter != undefined) { // if the attribute exists...
       event.target.value++;
     }

   });
 </script>
*/
