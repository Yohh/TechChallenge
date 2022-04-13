const message =
  "Thank you for submitting your message to our Kingdom. King Aeetes and his family will respond shortly.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
