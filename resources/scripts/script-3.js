// Function to fetch and populate questions from opposites.json
function populateQuestions() {
    // Fetch data from opposites.json
    fetch('./resources/data/opposites.json')
        .then(response => response.json())
        .then(data => {
            // Access the opposites object from the JSON data
            const opposites = data.opposites;

            // Loop through each question in the opposites object
            for (const key in opposites) {
                // Construct the ID of the accordion button for the current question
                const questionButtonId = `question${key.split('-')[1]}`;

                // Access the accordion button for the current question
                const questionButton = document.getElementById(questionButtonId);

                // Populate the text content of the button with the current question name
                questionButton.textContent = key;

                // Access the words array for the current question
                const words = opposites[key].words;

                // Loop through each word in the words array
                for (let i = 0; i < words.length; i++) {
                    // Construct the ID of the checkbox for the current option
                    const checkboxId = `q${key.split('-')[1]}-option${i + 1}`;

                    // Access the checkbox for the current option
                    const checkbox = document.getElementById(checkboxId);

                    // Populate the label text for the current option
                    checkbox.nextElementSibling.textContent = words[i];
                }
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}



// Call the populateQuestions function when the page is loaded
window.onload = function() {
    populateQuestions();
};
