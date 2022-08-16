const checkForm = document.querySelector(".login-form");
const inputLogin = checkForm.querySelector("[name='email']");
const inputPassword = checkForm.querySelector("[name='password']");
console.log("form:", checkForm, "input:", inputLogin);

checkForm.addEventListener("submit", acceptSubmit);
const resultValues = {
  email: null,
  password: null,
};
function acceptSubmit(event) {
  event.preventDefault();

  if (inputLogin.value === "" || inputPassword.value === "") {
    return alert("All fields must be filled in!!!");
  }
  resultValues.email = inputLogin.value;
  resultValues.password = inputPassword.value;
  console.log(resultValues);
  event.currentTarget.reset();
}