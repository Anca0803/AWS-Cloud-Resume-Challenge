
/* asta e dela chatgpt 
const lambdaUrl = "https://lbw5aegjmrqaji7sjcckuss5e40rjdal.lambda-url.us-east-1.on.aws/";

// Fetch the views count from Lambda
fetch(`${lambdaUrl}?timestamp=${Date.now()}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Fetched data:", data);  // Debug log to check the response

        // Find the element and update the text with the views count
        const counterElement = document.querySelector(".counter-number");
        if (counterElement) {
            counterElement.textContent = data.views;
        } else {
            console.error("Counter element not found!");
        }
    })
    .catch(error => {
        console.error("Error fetching views:", error);
    }) */


// JavaScript Code
/*
const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch("https://ofpyzegslzvpj7lh77f5mz4bf40cawvv.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Live Views: ${data}`;
}

updateCounter(); */


/*chatgpt*/

const counters = document.querySelectorAll(".counter-number");

async function updateCounter() {
    let response = await fetch("https://ofpyzegslzvpj7lh77f5mz4bf40cawvv.lambda-url.us-east-1.on.aws/");

    if (!response.ok) {
        console.error("Network response was not ok", response.status);
        counters.forEach(counter => counter.innerHTML = "Error loading views");
        return;
    }

    try {
        let data = await response.json();
        counters.forEach(counter => counter.innerHTML = `Live Views: ${data}`);
    } catch (error) {
        console.error("Error parsing JSON:", error);
        counters.forEach(counter => counter.innerHTML = "Error loading views");
    }
}

updateCounter();
/*setInterval(updateCounter, 5000); // Refresh every 5 seconds*/



document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ JavaScript is running");

    const toggleButton = document.querySelector(".toggle");
    const sidebar = document.getElementById("sidebar");

    if (!toggleButton) {
        console.error("❌ Error: Toggle button not found!");
        return;
    }

    if (!sidebar) {
        console.error("❌ Error: Sidebar not found!");
        return;
    }

    // Toggle sidebar active class
    toggleButton.addEventListener("click", function () {
        console.log("✅ Toggle button clicked");

        // Ensure only "active" is used, remove "inactive"
        if (sidebar.classList.contains("inactive")) {
            sidebar.classList.remove("inactive");
        }

        sidebar.classList.toggle("active");

        console.log("Sidebar class:", sidebar.className); // Debugging
    });
})





