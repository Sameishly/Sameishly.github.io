// Modal box pops up
const modalBtn = document.getElementById('startBtn');
modalBtn.addEventListener('click', function () {
	modal.style.display = 'block';
});

const modal = document.querySelector('.modal');

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function () {
	modal.style.display = 'none';
});

const enterBtn = document.querySelector('.enter');
enterBtn.addEventListener('click', userInput, false);
let userGuess;

function userInput() {
	const input = document.getElementById('randomWords').value; // get the value of user input.
	const character = input.split(''); // split user input string into characters.
	userGuess = character;
	const divResult = document.getElementById('word'); // to append the span elements to this div
	const getSlotDiv = document.getElementById('slots'); //

	for (let i = 0; i < character.length; i++) {
		// span contains each letter that player 2 will try to guess. Is appended to div class id
		const span = document.createElement('span');
		span.innerText = character[i];
		divResult.appendChild(span);
	}

	const wordSlot = []; // span contains slots that are as long as the length of the word.Is appended to div class slots.
	for (let i = 0; i < character.length; i++) {
		const span = document.createElement('span');
		span.setAttribute('class', 'guess');
		wordSlot[i] = '_';
		span.innerText = wordSlot[i];
		getSlotDiv.appendChild(span);
	}
}
// Grab all of class guesses. Then, add when there is a correct input, replace the underscore with the letter.
const getGuess = document.querySelectorAll('.guess');
console.log(getGuess);

// I want to change visibility of each letter correctly guessed by player 2. Above I created DOM span tags with the class 'guess". However, I wanted the DOM span tags to have different class names, that change depending on the length of the word so that I can make if statements that allow me to change the visibility of the correct letters guessed by player 2.

// if possible can I do..

//if one of the DOM span classes matches the letter clicked, reveal the letters in the div called 'word'

// when a letter key is clicked. Example is if player clicks on the button A and its correct, display letter. if not, change the color of the button to red maybe.

// would I get/target the A class. Add an event listener. Create a function that will contain the if/else statement.

const alphabetButtons = document.querySelector('#alphabetButtons');
// propogation

alphabetButtons.addEventListener('click', (event) => {
	let keyInput = event.target.innerHTML;
	for (let i = 0; i < userGuess.length; i++) {
		if (keyInput.toLowerCase() === userGuess[i]) {
			console.log('we have a match!'); // can use innerhtml or if it matches the indexes.
		}
	}
	// if (event.target.innerHTML) {
	//replace the underscores with the correct letter
	// check if the keyinput/guess matches the userInput
	// }
	// console.log(event.target.innerHTML);
});

//if (the guess class matches the character class, display the letter)

// if I can't do this, I don't know what I should do.
