let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess)) {
        message.textContent = 'Please enter a valid number.';
    } else if (guess < randomNumber) {
        message.textContent = 'Enter a larger number.';
    } else if (guess > randomNumber) {
        message.textContent = 'Enter a smaller number.';
    } else {
        message.textContent = 'Congrats! You guessed it right!';
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessInput.value = '';
    }
}
