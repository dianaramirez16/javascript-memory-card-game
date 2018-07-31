/*
 * Create a list that holds all of your cards
 */

const cards = document.querySelectorAll('.card'); // creates nodelist of all cards
const openCards = [];
const allItems = document.querySelectorAll('.li');

cards.forEach(function(card) {   // flips card on click
  card.addEventListener('click', function(e) {
    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match'))
      openCards.push(card); //pushes open cards to array
      card.classList.add('open', 'show');
      console.log('Open Cards:', 'openCards.length');

      /*check if cards match
          if (card.classList.contains('open') && card.classList.contains('show')  && !card.classList.contains('match'))
            checkMatch(function() {
                li.classList.match
                console.log('these cards are a match!');
            }
          ) */


    if (openCards.length >= 2) { //if cards don't match turn back around
      setTimeout(function() {
        openCards.forEach(function(card) {
          card.classList.remove('open','show');

        });
          openCards.length = 0; //empties openCards array
          openCards = [];
      }, 800);
    }


  });
});





table.onclick = function(event) {
  let td = event.target.closest('td'); // (1)

  if (!td) return; // (2)

  if (!table.contains(td)) return; // (3)

  highlight(td); // (4)
};


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
