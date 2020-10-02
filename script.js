document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name:'html',
            img:'images/html.png'
        },
        {
            name:'css',
            img:'images/css.png'
        },
        {
            name:'javascript',
            img:'images/javascript.png'
        },
        {
            name:'bootstrap',
            img:'images/bootstrap.png'
        },
        {
            name: 'jQuery',
            img: 'images/jQuery.png'
          },
        {
            name: 'php',
            img: 'images/php.png'
        },
        {
            name:'html',
            img:'images/html.png'
        },
        {
            name:'css',
            img:'images/css.png'
        },
        {
            name:'javascript',
            img:'images/javascript.png'
        },
        {
            name:'bootstrap',
            img:'images/bootstrap.png'
        },
        {
            name: 'jQuery',
            img: 'images/jQuery.png'
        },
        {
            name: 'php',
            img: 'images/php.png'
        }
    ]
   
cardArray.sort(() => 0.5 - Math.random())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {


        // (3) Now, using a for loop, we're gonna loop over our card array and for each card, wew're gonna create an image element
            for (let i = 0; i < cardArray.length; i++) {
        // and we're gonna call this image element, Let's call this element 'card'
              var card = document.createElement('img')
        // For each card element, We're gonna set it as attribute, linking it with the image with relative path
              card.setAttribute('src', 'images/blank.png')
        // We're also gonna give each one, a data id, loop over each one an id that goes from 0 to 11 (total -12 (4x3=12)),
        // as we have 12 cards present in our cards array
              card.setAttribute('data-id', i)
        // Then we add an event listener to listen out, to if the cards are being clicked on, and invoke a flipCard function
              card.addEventListener('click', flipCard)
        // Finally, all these cards, with technically different ids we created, we're gonna put into the grid using appendChild
              grid.appendChild(card)
            }
          }

function checkForMatch(){

    var cards = document.querySelectorAll('img')
    console.log(cards);
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
        console.log(cards[optionOneId]);
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same item! Please click on a differnet item');
    }
    else if(cardsChosen[0] === cardsChosen[1]) 
    {
        alert('Congratulations! You  found a pair of matching items');
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
     }
    else
    {   console.log(cards[optionOneId]);
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry,You have selected different items, Please try again to find a match!');
    }

cardsChosen = []
cardsChosenId = []
resultDisplay.textContent = cardsWon.length

if(cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found  all the items! and the game is over. Please reload the page, to start a new game.'
  }
}

function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2)
    {
        setTimeout(checkForMatch, 500)
    }
}
createBoard()
})



