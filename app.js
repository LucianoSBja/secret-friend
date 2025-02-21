let friends = [];

function updateFriendList() {
  const list = document.getElementById("listaAmigos");
  list.innerHTML = ""; // Limpiar la lista antes de actualizar

  for (let friend of friends) {
    const listItem = document.createElement("li");
    listItem.textContent = friend;
    list.appendChild(listItem);
  }
}

function sortearAmigo() {
  if (friends.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * friends.length);
  const chosenFriend = friends[randomIndex];

  const resultElement = document.getElementById("resultado");
  resultElement.innerHTML = `<li>El amigo sorteado es: <strong>${chosenFriend}</strong></li>`;
}
