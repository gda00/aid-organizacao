/*global document */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var triggers = document.querySelectorAll(".dropdown-trigger");
    triggers.forEach(function (trigger) {
        var content = trigger.nextElementSibling;
        content.style.display = "none";
        trigger.addEventListener("click", function () {
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});