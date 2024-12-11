document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("validationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
  
    const showError = (input, message) => {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
      input.classList.add("is-invalid");
    };
  
    const clearError = (input) => {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = "";
      errorMessage.style.display = "none";
      input.classList.remove("is-invalid");
    };
  
    const validateName = () => {
      if (fullName.value.trim().length < 5) {
        showError(fullName, "Name must be at least 5 characters.");
        return false;
      }
      clearError(fullName);
      return true;
    };
  
    const validateEmail = () => {
      if (!email.value.includes("@")) {
        showError(email, "Email must contain '@'.");
        return false;
      }
      clearError(email);
      return true;
    };
  
    const validatePhone = () => {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phone.value) || phone.value === "1234567890") {
        showError(phone, "Enter a valid 10-digit phone number.");
        return false;
      }
      clearError(phone);
      return true;
    };
  
    const validatePassword = () => {
      const forbiddenPasswords = ["password", fullName.value.trim().toLowerCase()];
      if (
        password.value.length < 8 ||
        forbiddenPasswords.includes(password.value.toLowerCase())
      ) {
        showError(password, "Password must be strong and not common.");
        return false;
      }
      clearError(password);
      return true;
    };
  
    const validateConfirmPassword = () => {
      if (password.value !== confirmPassword.value) {
        showError(confirmPassword, "Passwords do not match.");
        return false;
      }
      clearError(confirmPassword);
      return true;
    };
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isPasswordValid = validatePassword();
      const isConfirmPasswordValid = validateConfirmPassword();
  
      if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  
    // Add validation on input change
    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);
  });
  