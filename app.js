let friends = [];

// Función para agregar amigos
function addFriend() {
  let inputField = document.getElementById("add-friend");
  let friendName = inputField.value.trim();

  if (friendName === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  friends.push(friendName);
  inputField.value = "";
  updateFriendList();
}

// Función para actualizar la lista en la interfaz
function updateFriendList() {
  let friendList = document.getElementById("listaAmigos");
  friendList.innerHTML = "";

  for (let friend of friends) {
    let listItem = document.createElement("li");
    listItem.textContent = friend;
    friendList.appendChild(listItem);
  }
}

// Función para limpiar la lista de amigos
function clearFriendList() {
  friends = [];
  updateFriendList();
}

// Función para seleccionar un amigo al azar
function sortearAmigo() {
  if (friends.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  let randomIndex = Math.floor(Math.random() * friends.length);
  let selectedFriend = friends[randomIndex];

  let resultContainer = document.getElementById("resultado");
  resultContainer.innerHTML = `<li>🎉 El amigo secreto es: <strong>${selectedFriend}</strong> 🎉</li>`;
}

// Agregar eventos a los botones
document.getElementById("addFriendBtn").addEventListener("click", addFriend);
document
  .getElementById("clearListBtn")
  .addEventListener("click", clearFriendList);
document
  .getElementById("drawFriendBtn")
  .addEventListener("click", sortearAmigo);
