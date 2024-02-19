// Function to fetch and populate questions from opposites.json file
function populateQuestions() {
    // Fetch data from opposites.json
    fetch('./resources/data/opposites.json')
        .then(response => response.json())
        .then(data => {
            // Access the opposites object from the JSON data
            const opposites = data.opposites;
            console.log(opposites);

            // Loop through each question in the opposites object
            for (const key in opposites) {
                console.log(key);
                // Access the accordion button for the current question
                const questionButton = document.getElementById(key);

                // Populate the text content of the button with the current question name
                questionButton.textContent = key;

                // Access the words array for the current question
                const words = opposites[key].words;

                // Loop through each word in the words array
                for (let i = 0; i < words.length; i++) {
                    // Construct the ID of the checkbox for the current option
                    const checkboxId = key + `-option${i+1}`;
                    console.log(checkboxId);

                    // Access the checkbox for the current option
                    const checkbox = document.getElementById(checkboxId);

                    // Populate the label text for the current option
                    checkbox.nextElementSibling.textContent = words[i];
                    const getValue = checkbox.nextElementSibling.textContent.trim();
                    console.log(getValue);
                }
            }
            console.log("Finished populating the question");
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Hold the correct answer pair
var correctAnswer = [];
var accordionItemId;
var checkedBoxes;

// Function to handle the click event of the "Answer" button
function checkAnswer(questionId) {
    console.log("Answer Button is pressed with id=" +(questionId));
    // Get the parent element of the button (accordion item)
    const accordionItem = document.getElementById(questionId).closest('.accordion-item');

    // Get the ID of the accordion item
    accordionItemId = accordionItem.getAttribute('id');
    console.log(accordionItemId);
   
    // Get the selected checkboxes for the current question
       var selectedLabels = [];

    // Select all checkboxes for the specified question
    checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');

    // Loop through all selected checkboxes
    checkedBoxes.forEach((checkbox) => {
        const associatedLabels = checkbox.labels;
        if (associatedLabels.length > 0) {
            console.log(associatedLabels[0].textContent + " is checked");
            selectedLabels.push(associatedLabels[0].textContent);
        }
    });

    
    // check the answer for selected question
    fetch('./resources/data/opposites.json')
        .then(response => response.json())
        .then(data => {
            // Access the opposites object from the JSON data
            const opposites = data.opposites;
            // Get the correct answer pair from the JSON file
            console.log("Chekcing for answer to be correct");
            for ( const key in opposites) {
                // Access the answer array for the current question
                 if (key === questionId) {
                 console.log(" it is right question being checked:" + key);
                // Holding it in a temporary array
                 let temp = opposites[key].answer;
                    // copy the answer in a correctAnswer
                    for ( let i=0 ; i < temp.length; i++ ){
                        correctAnswer.push(temp[i]);
                    }
                    console.log(correctAnswer);
                    break; // no need to go to the next question
                 }
            }
            
            

        // Check if the selected options are same as question's answer

        console.log("comparing arrays");
        var isCorrect = compareArrays(correctAnswer,selectedLabels);

        // Get the answer button and its parent element
        var answerButton = document.getElementById("answer-" + questionId + "-btn");

        // If the answer is correct
        if (isCorrect) {
            // Add green color to the answer button
            answerButton.classList.add("btn-success");
        
            // Play success sound
            var successSound = new Audio("./resources/sounds/success.wav");
            successSound.play();
            setTimeout(function() {
                answerButton.classList.remove("btn-success");
            }, 2000);

            // Reset selected array
            selectedLabels = [];
            correctAnswer = [];

        } else {
            // Play failure sound
            var failureSound = new Audio("./resources/sounds/buzz.wav");
            failureSound.play();

            // Add red color to the answer button temporarily
            answerButton.classList.add("btn-danger");

            // Revert the color back to its original color after 2 seconds
            setTimeout(function() {
                answerButton.classList.remove("btn-danger");
            }, 2000);
            // Set the arrays to be empty
            selectedLabels = [];
            correctAnswer = [];

        }
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Compare both arrays of answers
function compareArrays(correctAnswers,selectedLabels) {
    if ( correctAnswers.length !== selectedLabels.length){
        return false;
    }
    const sortedArr1 = correctAnswers.slice().sort();
    const sortedArr2 = selectedLabels.slice().sort();
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            console.log("Wrong optons are slected!")
            return false;
        }
    }
    console.log("Right optons are slected!");
    return true;
}

// Function to handle accordion collapse and clear checkboxes
function handleAccordionCollapse(event) {
    // Get the accordion item that triggered the event
    console.log("accordion collapsed!");
    const accordionItem = event.target.closest('.accordion-item');

    // Clear all checkboxes within the accordion item
    const checkboxes = accordionItem.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    console.log("Check boxes are cleared!")
}

// Add event listener for accordion collapse to all accordion items
document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('hidden.bs.collapse', handleAccordionCollapse);
});

// invoke this function when page is loaded to populate the accordion from JSON file.
window.onload = function() {
    populateQuestions();
};

