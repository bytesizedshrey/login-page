document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signinForm");
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        
        // Validate email
        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password
        const password = passwordInput.value.trim();
        if (!isValidPassword(password)) {
            alert("Password validation: at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character");
            return;
        }

        // If both email and password are valid, submit the form
        form.submit();
    });

    function isValidEmail(email) {
        // Very basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPassword(password) {
        // Password validation: at least 8 characters including at least one uppercase letter, one lowercase letter, one number, and one special character
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/|<>~`]).{8,}$/.test(password);
    }
});
