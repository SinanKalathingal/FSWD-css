// Select the Student Registration form
const registrationForm = document.getElementById("registrationForm");

// Add submit event listener
registrationForm.addEventListener("submit", function(event) {

    // Prevent the default form submission
    event.preventDefault();

    // Get the name entered by the user
    const studentName = document.getElementById("student-name").value;

    // Display success message
    alert("Application submitted successfully for " + studentName + "!");
});