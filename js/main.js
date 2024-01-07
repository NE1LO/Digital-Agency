const FormEl = document.querySelector(".feedback-form");

FormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("sorry we can't submit this form X(");
});
