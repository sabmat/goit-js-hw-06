const inputCheck = document.querySelector("#validation-input");
const checkExample = Number(inputCheck.dataset.length);
console.log(checkExample);
inputCheck.addEventListener("blur", () => {
  if (inputCheck.value.length < checkExample) {
    inputCheck.classList.add("invalid");
    inputCheck.classList.remove("valid");
  } else {
    inputCheck.classList.remove("invalid");
    inputCheck.classList.add("valid");
  }
  console.log(inputCheck.value.length);
});