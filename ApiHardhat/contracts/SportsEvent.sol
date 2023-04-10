// Establecer la versión de Solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importar el contrato ChainlinkClient desde el paquete "@chainlink/contracts/src/v0.8"
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

// Declarar el contrato
contract SportsEvent is ChainlinkClient {

// Declarar variables de estado
uint256 public result;
address private oracle;
bytes32 private jobId;
uint256 private fee;

// Constructor del contrato
constructor(){

    // Configurar el token público de Chainlink
    setPublicChainlinkToken();

    // Configurar la dirección del nodo Oracle de Chainlink
    oracle= "0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD";

    // Configurar el ID del trabajo de Chainlink
    jobId= "7da2702f37fd48e5b1b9a5715e3509b6";

    // Configurar la tarifa del trabajo de Chainlink
    fee=;

    // Configurar cualquier otra variable de estado necesaria
}

// Función que realiza la solicitud de datos a través de Chainlink
function requestData() public{

    // Construir la solicitud de Chainlink
    Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillResult.selector);
    req.add("get", "api");

    // Enviar la solicitud de Chainlink al nodo Oracle
    sendChainlinkRequestTo(oracle, req, fee);
}

// Función que se ejecuta cuando se recibe una respuesta de Chainlink
function fulfillResult(bytes32 _requestId, uint256 _result) public recordChainlinkFulfillment(_requestId){
 
    // Almacenar el resultado en una variable de estado para su uso posterior
    result = _result;

    // Realizar cualquier otra operación necesaria con el resultado
}


}