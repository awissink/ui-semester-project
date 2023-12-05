//REDIRECTION FUNCTIONS
function redirectToHomepage() {
    window.location.href = 'index.html';
}
function redirectToMessages() {
    window.location.href = 'messages.html';
}
function redirectToChat(chatName) {
    window.location.href = 'chat.html?name=' + encodeURIComponent(chatName);
}

//VALIDATE PASSWORDS
function validatePassword(role, event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        event.preventDefault(); // Prevent form submission
    } else {
        redirectToMessages();
    }

    return false;
 
}

//PROVIDE OPTION FOR TEXT BOX IF OTHER FIELD SELECTED
function toggleOtherOption(formID) {
    var select = document.getElementById(formID);
    var otherInput = document.getElementById("other-" + formID);

    otherInput.style.display = select.value === "other" ? "block" : "none";

}

