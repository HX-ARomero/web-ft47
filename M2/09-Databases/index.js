function saveMessage() {
  console.log(localStorage);
  const inputText = document.getElementById("inputText");
  const message = inputText.value;

  localStorage.setItem("savedMessage", message);
  renderMessage();
  inputText.value = "";
}

function renderMessage() {
  const showMessage = document.getElementById("showMessage");
  const savedMessage = localStorage.getItem("savedMessage");

  showMessage.innerHTML = savedMessage
    ? `<p>Mensaje guardado: ${savedMessage}</p>`
    : `<p>Ingresar mensaje para guardar...</p>`
}

const addMessage = document.getElementById("addMessage");
addMessage.addEventListener("click", saveMessage);

function clearLocalStorage() {
  localStorage.clear();
  console.log(localStorage);
  renderMessage();
}

const clearStorage = document.getElementById("clearStorage");
clearStorage.addEventListener("click", clearLocalStorage);

document.addEventListener("DOMContentLoaded", renderMessage);