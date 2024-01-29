import { message } from "./message";
// DOM ELEMENTS
const messageFormBtn = document.querySelector(".message-form-submit");

// Fetch API
if (messageFormBtn) {
  messageFormBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    messageFormBtn.textContent = "Sending...";
    const messageForm = {
      name: document.querySelector(".message-input-name").value,
      email: document.querySelector(".message-input-email").value,
      contact: document.querySelector(".message-input-contact").value,
      message: document.querySelector(".message-input-message").value,
    };
    console.log("WELCOME TO PORTFOLIO1");
    console.log(messageForm);
    await message(messageForm);
    messageFormBtn.textContent = "Send message";
    console.log("WELCOME TO PORTFOLIO2");
  });
}
