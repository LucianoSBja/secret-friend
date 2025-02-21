let friends = [];

// Mostrar mensaje dinámico en la interfaz
function showMessage(msg, type = "error") {
  let messageBox = document.getElementById("message");
  messageBox.textContent = msg;
  messageBox.className = type === "error" ? "message error" : "message success";

  setTimeout(() => {
    messageBox.textContent = "";
  }, 3000);
}

// Función para agregar amigos
function addFriend() {
  let inputField = document.getElementById("add-friend");
  let friendName = inputField.value.trim();

  // Validaciones
  if (friendName === "") {
    showMessage("❌ Por favor, inserte un nombre.");
    return;
  }
  if (friends.includes(friendName)) {
    showMessage("⚠️ Este nombre ya está en la lista.");
    return;
  }
  if (!/^[a-zA-Z\s]+$/.test(friendName)) {
    showMessage("⚠️ Solo se permiten letras y espacios.");
    return;
  }

  // Agregar a la lista
  friends.push(friendName);
  inputField.value = "";
  updateFriendList();
  showMessage("✅ Amigo añadido correctamente.", "success");
}

// Función para actualizar la lista en la interfaz
function updateFriendList() {
  let friendList = document.getElementById("listaAmigos");
  friendList.innerHTML = "";

  friends.forEach((friend) => {
    let listItem = document.createElement("li");
    listItem.textContent = friend;
    friendList.appendChild(listItem);
  });
}

// Función para limpiar la lista de amigos
function clearFriendList() {
  if (friends.length === 0) {
    showMessage("⚠️ No hay amigos en la lista.");
    return;
  }

  friends = [];
  updateFriendList();
  document.getElementById("resultado").innerHTML = "";
  showMessage("✅ Lista de amigos vaciada.", "success");
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
  if (friends.length === 0) {
    showMessage("⚠️ No hay amigos en la lista para sortear.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * friends.length);
  let selectedFriend = friends[randomIndex];

  let resultContainer = document.getElementById("resultado");
  resultContainer.innerHTML = `<li class="winner">🎉 ¡El amigo secreto es: <strong>${selectedFriend}</strong>! 🎉</li>`;

  // Animación visual
  resultContainer.classList.add("highlight");
  setTimeout(() => resultContainer.classList.remove("highlight"), 1000);
}

// Eventos
document.getElementById("addFriendBtn").addEventListener("click", addFriend);
document
  .getElementById("clearListBtn")
  .addEventListener("click", clearFriendList);
document
  .getElementById("drawFriendBtn")
  .addEventListener("click", sortearAmigo);
