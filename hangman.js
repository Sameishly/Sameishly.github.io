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
		span.setAttribute('class', 'letter');
		span.setAttribute('data-letter', character[i]);
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

const getGuess = document.querySelectorAll('.guess');

const alphabetButtons = document.querySelector('#alphabetButtons');

// below is the event listener for the alphabet button.
alphabetButtons.addEventListener('click', (event) => {
	const letters = document.querySelectorAll('.letter');
	let keyInput = event.target.innerHTML; //Targeting the HTML inside each alphabet button.

	for (let i = 0; i < userGuess.length; i++) {
		if (keyInput.toLowerCase() === userGuess[i]) {
			for (let i = 0; i < letters.length; i++) {
				if (keyInput.toLowerCase() === letters[i].dataset.letter) {
					letters[i].classList.add('letter-reveal');
				}
			}
		}
	}
});
