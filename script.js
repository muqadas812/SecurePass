function checkPassword() {
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
   if (password.length === 0) {
        result.innertext = "please enter a password!";
    } else {
        if (password.length > 6) {
            result.innertext = "weak password!";
        } else if (password.length > 10) {
            result.innertext = "medium password!";
        } else {
            result.innertext = "strong password!";
        }
    }
}function showMFA() {
    document.getElementById("mfa-result").innerText =
        "MFA adds an extra layer of protection by using a second verification step.";
}

function checkAnswer(answer) {

    let result = document.getElementById("quiz-result");

    if (answer === "correct") {
        result.innerText = "✅ Correct! Great job!";
    } else {
        result.innerText = "❌ Wrong answer. Try again!";
    }
}