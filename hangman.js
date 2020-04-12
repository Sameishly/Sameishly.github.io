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
	const splitWord = input.split(''); // split user input string into characters. Stored in separate variable.
	// console.log(splitWord);

	const divResult = document.getElementById('word'); // storing result inside the div.
	divResult.innerHTML = splitWord;

	const wordSlot = [];

	for (let i = 0; i < input.length; i++) {
		const createDiv = document.createElement('DIV');
		const getDiv = document.getElementById('word');
		const addSlots = document.createTextNode(wordSlot);
		getDiv.appendChild(addSlots);
		wordSlot[i] = '_';
		console.log(wordSlot[i]);
	}

	// const unguessedLetters = input.length;
	// console.log(unguessedLetters);
}
