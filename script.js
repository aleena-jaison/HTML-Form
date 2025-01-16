function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally

    document.getElementById('signupForm').style.display = 'none'; // Hide the form
    
    document.getElementById('thankYouMessage').style.display = 'block'; // Display the thank you message
}
