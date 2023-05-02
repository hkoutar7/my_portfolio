// Form submit

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzAa0tscM29uWIgYUy3P4MT-oCAFvp6IXKapMLM1tLfHNqg9utDy_yVK2mQh-AtjJkr/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
    console.log("send");
});
