const chatX = document.querySelector("#chat-close");
const chatContainer = document.querySelector("#chat-container");
const chatX2 = document.querySelector("#chat-close2");
const chatContainer2 = document.querySelector(".chat-container2");

function hideChat() {
  if (chatContainer.classList.contains("chat-is-active")) {
    chatContainer.classList.remove("chat-is-active");
  } else {
    chatContainer.classList.add("chat-is-active");
  }
}

function hideChat2() {
  if (chatContainer2.classList.contains("chat-is-active")) {
    chatContainer2.classList.remove("chat-is-active");
  } else {
    chatContainer2.classList.add("chat-is-active");
  }
}

chatX2.addEventListener("click", hideChat2);
chatX.addEventListener("click", hideChat);
