// Crea una instancia de la clase Web3Provider
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Obtiene el botón de "Conectar a la billetera" del HTML
const connectWalletButton = document.getElementById('connect-wallet-button');

// Agrega un evento click al botón que conecta la billetera
connectWalletButton.addEventListener('click', async () => {
  // Solicita al usuario que se conecte a su billetera
  const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });

  // Muestra la dirección del usuario
  const addressElement = document.getElementById('address');
  addressElement.innerHTML = `Dirección: ${account}`;

  // Obtiene el saldo del usuario y lo muestra
  const balance = await provider.getBalance(account);
  const balanceElement = document.getElementById('balance');
  balanceElement.innerHTML = `Saldo: ${ethers.utils.formatEther(balance)} ETH`;
});
