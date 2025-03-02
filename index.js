document.getElementById("newsletter-form").addEventListener("submit", function(event) {
     event.preventDefault(); 

    let emailInput = document.getElementById("email");
    let message = document.getElementById("message");

    if (validateEmail(emailInput.value)) {
        message.style.color = "green";
        message.textContent = "Thank you for subscribing!";
        emailInput.value = ""; 
    } else {
        message.style.color = "red";
        message.textContent = "Please enter a valid email address.";
    }
});

function validateEmail(email) {
    return email.includes("@") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".");
}


const darkModeToggle = document.getElementById("darkmodeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
;
    } else {
        body.classList.remove("dark-mode");
    }
});