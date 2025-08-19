function openNewWindow(url) {
  // Open the URL in a new window/tab
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

// Email validation and newsletter submission
function validateAndSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  // Basic email validation
  if (!email) {
    alert("Please enter an email address");
    emailInput.focus();
    return false;
  }

  // Email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return false;
  }

  // If validation passes, show success message
  alert("Thanks for mailing!");

  // Clear the form
  emailInput.value = "";

  return false;
}

// Alternative function to handle button click directly
function handleNewsletterSubmit() {
  const emailInput = document.getElementById("newsletterEmail");
  const email = emailInput.value.trim();

  // Basic email validation
  if (!email) {
    alert("Please enter an email address");
    emailInput.focus();
    return;
  }

  // Email format validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    emailInput.focus();
    return;
  }

  // If validation passes, show success message
  alert("Thanks for mailing!");

  // Clear the form
  emailInput.value = "";
}
