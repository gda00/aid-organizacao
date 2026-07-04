document.addEventListener("DOMContentLoaded", () => {
    const triggers = document.querySelectorAll(".dropdown-trigger");
    
    triggers.forEach(trigger => {
        const content = trigger.nextElementSibling;
        content.style.display = "none";
        
        trigger.addEventListener("click", () => {
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});