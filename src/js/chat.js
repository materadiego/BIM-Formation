const chatX = document.querySelector("#chat-close");
const chatContainer = document.querySelector(".chat-container");

function hideChat() {
  if (chatContainer.classList.contains("chat-is-active")) {
    chatContainer.classList.remove("chat-is-active");
  } else {
    chatContainer.classList.add("chat-is-active");
  }
}

chatX.addEventListener("click", hideChat);
