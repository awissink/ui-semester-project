//REDIRECTION FUNCTIONS
function redirectToHomepage() {
    window.location.href = 'index.html';
}
function redirectToMenteeMessages() {
    window.location.href = 'menteeMessages.html';
}
function redirectToMentorMessages() {
    window.location.href = 'mentorMessages.html';
}
function redirectToMessages(role) {
    console.log("redirecting to messages page for role:", role)
    if (role === "mentee") {
        redirectToMenteeMessages();
    } else if (role === "mentor") {
        redirectToMentorMessages();
    }
}

//VALIDATE PASSWORDS
function validatePassword(role, event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        event.preventDefault(); // Prevent form submission
    } else {
        redirectToMessages(role);
    }

    return false;
 
}

//PROVIDE OPTION FOR TEXT BOX IF OTHER FIELD SELECTED
function toggleOtherOption(formID) {
    var select = document.getElementById(formID);
    var otherInput = document.getElementById("other-" + formID);

    otherInput.style.display = select.value === "other" ? "block" : "none";

}