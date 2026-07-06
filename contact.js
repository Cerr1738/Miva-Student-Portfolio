const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    
    if (name === "" || email === "" || phone === "" || message === "") {

        alert("Please fill in all fields.");

        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;
    }

    // Phone validation (digits only)
    const phonePattern = /^\d+$/;

    if (!phonePattern.test(phone)) {

        alert("Phone number must contain only digits.");

        return;
    }

    alert("Message sent successfully!");

    contactForm.reset();

});