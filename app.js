(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function downloadCV() {
    // Create an invisible anchor element
    const a = document.createElement("a");
    a.href = "Shrushti Sabnis resume.pdf";  // Provide the correct path to your file
    a.download = "Shrushti Sabnis resume.pdf"; // Set the download attribute
    document.body.appendChild(a);
    a.click();  // Simulate a click event to trigger the download
    document.body.removeChild(a);  // Remove the anchor after the click
}

// script.js

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submit_form.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onload = function() {
        if (xhr.status == 200) {
            // If the form was successfully submitted
            document.getElementById("success-message").style.display = "block";
            document.getElementById("contact-form").reset();  // Reset the form
        } else {
            alert("Error submitting the form");
        }
    };

    xhr.send("name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message);
});
