import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector("input"),
  message: document.querySelector("textarea"),
};

const feedbackFormState = {};

if (localStorage.getItem("feedback-form-state")) {
  setEmailInputValue();
  setMessageInputValue();
}

refs.form.addEventListener("input", throttle(storeDataToLocalStorage, 500));

refs.form.addEventListener("submit", clearForm);

function setEmailInputValue() {
    feedbackFormState.email = JSON.parse(
      localStorage.getItem("feedback-form-state")
    ).email;
    refs.email.value = feedbackFormState[refs.email.name];
}

function setMessageInputValue() {
  feedbackFormState.message = JSON.parse(
    localStorage.getItem("feedback-form-state")
  ).message;
  refs.message.value = feedbackFormState[refs.message.name];
}

function storeDataToLocalStorage(event) {
  feedbackFormState[event.target.name] = event.target.value;
  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(feedbackFormState)
  );
}

function clearForm(event) {
    event.preventDefault();
    console.log(feedbackFormState);
    clearObject();
    clearInputs();
    localStorage.removeItem("feedback-form-state");
}

function clearObject() {
    feedbackFormState.email = "";
    feedbackFormState.message = "";
}

function clearInputs() {
    refs.email.value = "";
    refs.message.value = "";
}
