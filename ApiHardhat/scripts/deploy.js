const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const contract = require('truffle-contract');
const GetAPI = contract(require('./path/to/GetAPI.json'));

const provider = new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_URL);
const web3 = new Web3(provider);

GetAPI.setProvider(web3.currentProvider);

async function deploy() {
  const accounts = await web3.eth.getAccounts();
  const getAPI = await GetAPI.new({ from: accounts[0] });
  console.log('GetAPI contract deployed at', getAPI.address);
}

deploy().catch((error) => console.error(error));
