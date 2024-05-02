document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);

    fetch("your-backend-endpoint", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      console.log(data);
      document.getElementById("contactForm").reset();
      document.querySelector(".sent-message").style.display = "block";
    })
    .catch(error => {
      console.error("There was an error!", error);
      document.querySelector(".error-message").innerText = "There was an error sending your message. Please try again later.";
      document.querySelector(".error-message").style.display = "block";
    });
  });