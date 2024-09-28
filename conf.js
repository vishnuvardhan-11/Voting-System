function submitVote(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var candidate = document.getElementById("candidate").value;
    var errorMsg = document.getElementById("vote-error-msg");

    // Clear any previous error message
    errorMsg.textContent = "";

    if (!candidate) {
        errorMsg.textContent = "Please select a candidate!";
        return false;
    }

    // Redirect to confirmation page if a candidate is selected
    window.location.href = "confirmation.html";
    return true;
}
