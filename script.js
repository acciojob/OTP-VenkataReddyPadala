//your JS code here. If required.
(() => {
let inputs = document.querySelectorAll(".code");
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();
      } else {
        input.value = "";
      }
    }
  });
});})()
