document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputBox");
    const buttons = document.querySelectorAll("button");

    let expression = "";

    // Handling button clicks
    buttons.forEach(button => {
        button.addEventListener("click", (e) => handleInput(e.target.innerHTML));
    });

    // Handling keyboard input
    document.addEventListener("keydown", (e) => {
        const key = e.key;

        if (/[\d.+\-*/%]/.test(key)) {
            handleInput(key); // Allow numbers and basic operators
        } else if (key === "Enter") {
            handleInput("="); // Pressing Enter calculates the result
        } else if (key === "Backspace") {
            handleInput("DEL"); // Backspace removes last character
        } else if (key === "Escape") {
            handleInput("C"); // Escape clears everything
        }
    });

    function handleInput(value) {
        if (!input) return; // Ensure inputBox exists

        if (value === "=") {
            try {
                if (expression.trim() === "") {
                    input.value = "Error";
                    return;
                }
                expression = eval(expression); // Using eval cautiously
                input.value = expression;
            } catch {
                input.value = "Error";
                expression = "";
            }
        } else if (value === "C") {
            expression = "";
            input.value = expression;
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += value;
            input.value = expression;
        }
    }
});






