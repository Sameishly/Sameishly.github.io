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
	// console.log(character);
	const divResult = document.getElementById('word'); // to append the span elements to this div
	// divResult.innerHTML = character;

	const getSlotDiv = document.getElementById('slots'); // to append

	for (let i = 0; i < character.length; i++) {
		let span = document.createElement('span');
		span.innerText = character[i];
		divResult.appendChild(span);
	}

	const wordSlot = [];
	for (let i = 0; i < character.length; i++) {
		let span = document.createElement('span');
		wordSlot[i] = '_';
		span.innerText = wordSlot[i];
		getSlotDiv.appendChild(span);
	}
	// const unguessedLetters = input.length;
	// console.log(unguessedLetters);
}

if (player 2 guesses the right letter) {
    r
}


// when clicking a button inside the class alphabets