const form = document.querySelector(".feedback-form");
const input = document.querySelector('input[name="email"]');
const textArea = document.querySelector('textarea[name="message"]');

const formData = {
    email: "",
    message:""
}

if (localStorage.getItem("feedback-form-state")) {
    const {email,message} = JSON.parse(localStorage.getItem("feedback-form-state"));
    formData.email = email;
    formData.message = message;
    input.value = email;
    textArea.value = message;
}

const handleInput = e => {
    const { tagName, value = "" } = e.target;
    if (tagName === "INPUT") {
        formData.email = value.trim();
    }
    if (tagName === "TEXTAREA") {
        formData.message = value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

const handleSubmit = e => {
    e.preventDefault();
    if (!input.value || !textArea.value) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    input.value = "";
    textArea.value = "";
    formData.message = "";
    formData.email = "";
    localStorage.removeItem("feedback-form-state");
}

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);