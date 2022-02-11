// Applies invalid input style after submitting

// get all input/select/textarea
const inputs = document.querySelectorAll("input, select, texarea");
console.log("running");
// add event listener on each input
inputs.forEach(input => {
    input.addEventListener(
        "invalid",
        event => {
            input.classList.add("error");
        },
        false
    );
});