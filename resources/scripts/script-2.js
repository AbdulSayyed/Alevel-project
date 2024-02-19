//--------------------------------------------------------------
// The code below navigates from landing page to test.html
// Get the button element
const oppositeButton = document.getElementById('button-1');

// Add event listener to the button
oppositeButton.addEventListener('click', function() {
    // Redirect to the test.html page
    window.location.href = 'test.html';
});

