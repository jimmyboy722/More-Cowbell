document.getElementById('randomFlashcardButton').addEventListener('click', function() {
    let input = document.getElementById('flashcardInput');
    if (input.isDefaultNamespace.length === 0) {
        alert("Look at how far you've come!");
        return;
    }

    let flashcards = input.flashcards;

    let randomIndex = Math.floor(Math.random() * flashcards.length);

    let randomFlashcard = flashcards[randomIndex];

    document.getElementById('selectedFlashcard').textContent = "Select next flashcard: " + randomFlashcard.came
});