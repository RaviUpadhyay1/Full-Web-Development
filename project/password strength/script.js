let pass = document.getElementById("password")
let msg = document.getElementById("message")
let strh = document.getElementById("strength")
pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";

        const value = pass.value;
        const hasLetters = /[a-zA-Z]/.test(value);
        const hasNumbers = /[0-9]/.test(value);
        const hasSpecial = /[^a-zA-Z0-9]/.test(value);

        if ((hasLetters && !hasNumbers && !hasSpecial) || 
            (!hasLetters && hasNumbers && !hasSpecial)) {
            strh.textContent = "Weak";
            strh.style.color = "red";
        } else if (hasLetters && hasNumbers && !hasSpecial) {
            strh.textContent = "Medium";
            strh.style.color = "orange";
        } else if (hasLetters && hasNumbers && hasSpecial) {
            strh.textContent = "Strong";
            strh.style.color = "green";
        } else {
            strh.textContent = "Weak";
            strh.style.color = "red";
        }
    } else {
        msg.style.display = "none";
    }
});