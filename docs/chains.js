// https://chainlist.org/
// https://docs.etherscan.io/etherscan-v2/getting-started/supported-chains
// https://docs.reservoir.tools/reference/supported-chains

const CHAINS = {
  "1": {
    name: "Ethereum Mainnet",
    explorerPrefix: "https://etherscan.io/",
    reservoirPrefix: "https://api.reservoir.tools/",
    openseaPrefix: "https://opensea.io/assets/ethereum/",
  },
  "8453": {
    name: "Base Mainnet",
    explorerPrefix: "https://basescan.org/",
    reservoirPrefix: "https://api-base.reservoir.tools/",
    openseaPrefix: "https://opensea.io/assets/base/",
  },
  "42161": {
    name: "Arbitrum One",
    explorerPrefix: "https://arbiscan.io/",
    reservoirPrefix: "https://api-arbitrum.reservoir.tools/",
    openseaPrefix: "https://opensea.io/assets/arbitrum/",
  },
  "11155111": {
    name: "Sepolia Testnet",
    explorerPrefix: "https://sepolia.etherscan.io/",
    reservoirPrefix: "https://api-sepolia.reservoir.tools/",
    openseaPrefix: "https://testnets.opensea.io/assets/sepolia/",
  },
};
