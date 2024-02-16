// The code below navigates from landing page to mainui.html
// Get the reference to the  button element
const startButton = document.getElementById('start-btn');

// Attach an event listener to the button
startButton.addEventListener('click', function() {
    // Redirect to the next page
    document.location.href = 'mainui.html';
    
});


