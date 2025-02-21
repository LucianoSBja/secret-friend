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
