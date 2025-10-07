const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);
const loginData = {};

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const newObj = {
    email: email.value,
    password: password.value,
  };

  event.currentTarget.reset();
  console.log(newObj);
}