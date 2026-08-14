// Select the Toggle Theme button
const themeToggle = document.getElementById("themeToggle");

// Add click event
themeToggle.addEventListener("click", function () {

    // Toggle dark theme
    document.body.classList.toggle("dark-theme");

    // Change button text
    if (document.body.classList.contains("dark-theme")) {
        themeToggle.textContent = "Normal Theme";
    } else {
        themeToggle.textContent = "Toggle Theme";
    }
});