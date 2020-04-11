const modalBtn = document.getElementById('startBtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const enterBtn = document.querySelector('.enter');
const content = document.querySelector('.modal-content');

// Create an empty array
const getWords = document.getElementById('words');
function userInput() {
	const userInput = document.getElementById('randomWords').value;

	const result = document.getElementById('word');

	if (randomWords.length < 3) {
		result.textContent = 'Word must have at least 3 characters';
	} else {
		result.textContent = randomWords;
	}
}

let addWord = false;
const hangmanUrl = 'http____';

function submit() {
	const enterBtn = document.querySelector('.enter');
}

enterBtn.addEventListener('click', userInput, false);

modalBtn.addEventListener('click', function () {
	modal.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
	modal.style.display = 'none';
});

// create an array of blank spaces. Fill the spaces with the clicked letter if present.

// for (let i = 0; i < words.length; i++) {
// 	answer[i] = '_';
// }

// create a callback function to pass in an array of the random words.

// a Loop needs to be created. The variable has to decrease by 1 with each correct guess until it reaches 0, meaning the player has one.

// function words(callback) {
// 	callback(['bicycle', 'staff', 'tiger']);
// // }

// const Btns = document.getElementById('alphabetButtons');
// // console.log(alphabetBtns);
// Btns.addEventListener('click', function (e) {
// 	// console.log(e.target);
// 	// console.log(e);
// });
