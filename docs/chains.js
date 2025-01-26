// https://chainlist.org/
// https://docs.etherscan.io/etherscan-v2/getting-started/supported-chains
// https://docs.reservoir.tools/reference/supported-chains

const CHAINS = {
  "1": {
    name: "Ethereum Mainnet",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    explorerPrefix: "https://etherscan.io/",
    reservoirPrefix: "https://api.reservoir.tools/",
    openseaPrefix: "https://opensea.io/assets/ethereum/",
  },
  "8453": {
    name: "Base Mainnet",
    weth: "0x4200000000000000000000000000000000000006",
    explorerPrefix: "https://basescan.org/",
    reservoirPrefix: "https://api-base.reservoir.tools/",
    openseaPrefix: "https://opensea.io/assets/base/",
  },
  "42161": {
    name: "Arbitrum One",
    weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    explorerPrefix: "https://arbiscan.io/",
    reservoirPrefix: "https://api-arbitrum.reservoir.tools/",
    openseaPrefix: "https://opensea.io/assets/arbitrum/",
  },
  "11155111": {
    name: "Sepolia Testnet",
    weth: "0x07391dbE03e7a0DEa0fce6699500da081537B6c3",
    explorerPrefix: "https://sepolia.etherscan.io/",
    reservoirPrefix: "https://api-sepolia.reservoir.tools/",
    openseaPrefix: "https://testnets.opensea.io/assets/sepolia/",
  },
};
