# Feedback

Congrats on satisfying the project requirements! Here's some feedback for you:

## Code Quality

Is the code well formatted? Are variable and function names semantic and sensible? Is the code easy to read and understand?

- Code is generally well-formatted, well-named, and contains few style / quality issues. Take a look at the way I've refactored some of your code, and feel free to reach out to me directly if anything does not make sense. Also, make sure to remove any unused code (e.g., console.log) from your HTML/JS/CSS files!
- In terms of code organization, I'd recommend first listing out all your selectors at the top of the script, followed by any `.addEventListener` calls, then the callback function definitions, and finally any function invocations that happen when the script is loaded (e.g., `startGame()`). Take a look at what I did in the pull request.
- I noticed a mix of `document.getElementById()` and `document.querySelector()` in your script. I'd recommend sticking with just one DOM API syntax for simplicity.

## Technical Requirements

How does the project stack up to the requirements for this project? Is the developer making use of the material we've covered in a way that makes sense?

- Your game renders in the browser with no major errors and separates concerns into distinct HTML, CSS, and JavaScript files. I was impressed that you picked such a challenging game for your project!

## Creativity and Interface

Is the application easy to navigate? Does it work well in every major browser? Is it responsive? Does it incorporate modern UI Themes?

- The design is minimalist and clean. I thought the overall design, especially the modal, was neat. As a next step, consider making your game responsive! Also, adding a success message when the user correctly guesses the word.

## Functionality

Does the application work without errors or bugs? Does it present a complete app, where every feature is fully implemented in a way that makes sense?

- The application works without errors or bugs.
- On page load, consider showing the modal immediately to prompt the player to enter a hangman word, instead of waiting for a click on the start button.

## Presentation

Is there adequate documentation? Is the repository well organized and free of clutter?

- Your readme contains relevant information about the application. To make it even more informative, consider other sections such as wireframes and installation instructions. You could also include more techologies in your readme (e.g., CSS, HTML). See these examples: https://github.com/esin87/travelogue or https://github.com/esin87/StarTrek_TNG_Trivia_Game

## Additional Feedback

- Take a look at some of my inline comments on your code. You can find my comments by searching for "Hou comment:".
