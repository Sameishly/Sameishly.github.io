window.onload = function () {
	var alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
};

// Function that creates buttons that are displayed on the page.

function makeButtons() {
	const buttons = document.getElementById('alphabetButtons');
	const createAlphabet = document.createElement('span');
}

// create
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

function userInput() {
	const input = document.getElementById('randomWords').value; // get the value of user input.
	const character = input.split(''); // split user input string into characters.
	const divResult = document.getElementById('word'); // to append the span elements to this div
	// divResult.innerHTML = character;
	console.log(divResult);
	const getSlotDiv = document.getElementById('slots'); // to append

	for (let i = 0; i < character.length; i++) {
		let span = document.createElement('span');
		span.innerText = character[i];
		divResult.appendChild(span);
	}

	const wordSlot = [];
	for (let i = 0; i < character.length; i++) {
		let span = document.createElement('span');
		// span.setAttribute('class', 'guess');
		wordSlot[i] = '_';
		span.innerText = wordSlot[i];
		getSlotDiv.appendChild(span);
	}
	// const unguessedLetters = input.length;
	// console.log(unguessedLetters);
}

// // when clicking a button inside the class alphabets

const getAlphabet = document.getElementById('alphabetButtons');
// console.log(getAlphabet);
getAlphabet.addEventListener('click', showLetter, false);

function showLetter() {
	// get the span attribute. make a if/else statement
	// if (span class guess is equal to the letters ) {
	//   display guess letter
	// }
}
