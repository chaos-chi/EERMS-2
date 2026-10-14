
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("refresh-btn");
    const message = document.getElementById("status-message");

    console.log("Refresh script loaded");
    console.log("Button found:", button);

    if (button && message) {
        button.addEventListener("click", function () {
            message.textContent = "Status refreshed successfully!";
            console.log("Refresh button clicked");
        });
    }
});
