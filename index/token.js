const dropdown = document.getElementById("crypto-dropdown");
const tableBody = document.querySelector("#crypto-table tbody");

let cryptoList;

// Obtener la lista de criptomonedas
fetch("https://api.coingecko.com/api/v3/coins/list", {mode: "cors"})
  .then((response) => response.json())
  .then((data) => {
    cryptoList = data;
    populateDropdown();
  })
  .catch((error) => console.error(error));

// Llenar el dropdown con las opciones de criptomonedas
function populateDropdown() {
  for (let i = 0; i < cryptoList.length; i++) {
    const option = document.createElement("option");
    option.value = cryptoList[i].id;
    option.text = cryptoList[i].name;
    dropdown.appendChild(option);
  }
}

// Agregar una nueva fila a la tabla con la información de la criptomoneda
function addCryptoToTable(crypto) {
  const { name, symbol, market_data } = crypto;
  const { current_price, market_cap } = market_data;
  const ethAddress = crypto?.platforms?.ethereum || "N/A";

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${symbol.toUpperCase()}</td>
    <td>$${current_price.usd.toFixed(2)}</td>
    <td>$${market_cap.usd.toLocaleString()}</td>
    <td><span class="eth-address">${ethAddress}</span> <button class="copy-button">Copy</button></td>
    <td><button class="delete-button">Delete</button></td>
  `;

  // Agregar evento al botón de copiar
  const copyButton = row.querySelector(".copy-button");
  copyButton.addEventListener("click", () => {
    const address = row.querySelector(".eth-address").textContent;
    navigator.clipboard.writeText(address)
      .then(() => console.log("Address copied to clipboard"))
      .catch((error) => console.error(error));
  });

  // Agregar evento al botón de eliminar
  const deleteButton = row.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    row.remove();
  });

  tableBody.appendChild(row);
}

// Escuchar cambios en el dropdown
dropdown.addEventListener("change", (event) => {
  const cryptoId = event.target.value;
  const url = `https://api.coingecko.com/api/v3/coins/${cryptoId}`;

  // Hacer la solicitud a la API de CoinGecko
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      addCryptoToTable(data);
    })
    .catch((error) => console.error(error));
});





