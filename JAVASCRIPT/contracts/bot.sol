pragma solidity ^0.8.0;

import "https://github.com/Uniswap/v3-periphery/blob/main/contracts/interfaces/ISwapRouter.sol";

contract ArbitrumSwap {
    address private constant UNISWAP_ROUTER = 0xE592427A0AEce92De3Edee1F18E0157C05861564;
    address private constant ARBITRUM_TOKEN_ADDRESS = 0x123456789; // Dirección del token en la red de Arbitrum

    function swap(uint amountIn) external payable {
        // Crea una instancia del enrutador de intercambio de Uniswap
        ISwapRouter router = ISwapRouter(UNISWAP_ROUTER);

        // Crea una ruta para el intercambio de tokens
        address[] memory path = new address[](2);
        path[0] = router.WETH();
        path[1] = ARBITRUM_TOKEN_ADDRESS;

        // Realiza el intercambio de tokens
        uint deadline = block.timestamp + 15; // Vence en 15 segundos
        router.swapExactETHForTokens{value: msg.value}(amountIn, path, address(this), deadline);
    }
}
