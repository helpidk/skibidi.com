// script.js
let selectedElements = [];

document.querySelectorAll('.element').forEach(button => {
    button.addEventListener('click', function () {
        if (selectedElements.length < 2 && !selectedElements.includes(this.getAttribute('data-element'))) {
            selectedElements.push(this.getAttribute('data-element'));
            document.getElementById('selected-elements').innerText = "Selected Elements: " + selectedElements.join(', ');
        }
    });
});

document.getElementById('combine').addEventListener('click', function () {
    const resultElement = document.getElementById('result');
    if (selectedElements.length === 2) {
        // Example combination
        if (selectedElements.includes('Water') && selectedElements.includes('Fire')) {
            resultElement.innerText = 'You created Steam!';
        } else {
            resultElement.innerText = 'Nothing happened.';
        }
    } else {
        resultElement.innerText = 'Please select two elements.';
    }
    selectedElements = []; // Reset for next combination
    document.getElementById('selected-elements').innerText = "Selected Elements: ";
});
