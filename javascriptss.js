
// Get the sidebar and toggle button elements
var sidebar = document.getElementById("sidebar");
var toggleButton = document.getElementById("toggleButton");

// Add click event listener to toggle the sidebar
sidebar.style.left = "-150px";
toggleButton.addEventListener("click", function () {
    if (sidebar.style.left === "-150px") {
        sidebar.style.left = "-81px";
    } else {
        sidebar.style.left = "-150px";
    }
});

var power = document.getElementById("power");
power.addEventListener("click", function () {
    if (power.style.color === "rgb(239, 121, 6)") {
        power.style.color = "white";
    } else {
        power.style.color = "rgb(239, 121, 6)";
    }
});