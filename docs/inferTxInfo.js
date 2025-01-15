function inferTxInfo(tx) {
  console.log(moment().format("HH:mm:ss") + " inferTxInfo - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
  const result = {};

  if (tx.tx && tx.tx.methodId == "0xa22cb465") {
    // setApprovalForAll(address operator, bool authorized)
    result.action = "ERC-721/1155: setApprovalForAll";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = !!tx.tx.input.slice(-1);
  } else if (tx.tx && tx.tx.methodId == "0x095ea7b3") {
    // approve(address _spender, uint256 _value)
    result.action = "ERC-20: approve";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = !!tx.tx.input.slice(-1);
  } else if (tx.tx && tx.tx.methodId == "0xd0e30db0") {
    // WETH deposit()
    result.action = "WETH: deposit";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  } else if (tx.tx && tx.tx.gasUsed == 21000) {
    result.action = "ETH: transfer";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  } else if (tx.internal && tx.internal.length > 0) {
    result.action = "ETH: internal transfer";
    result.from = tx.internal[0].from;
    result.contract = tx.internal[0].to;
    result.value = tx.internal[0].value && (ethers.utils.formatEther(tx.internal[0].value) + 'e') || null;
  } else {
    result.from = tx.tx && tx.tx.from || null;
    result.contract = tx.tx && tx.tx.to || null;

    if (result.contract && result.contract in CUSTOMNAMES && CUSTOMNAMES[result.contract][0] == "nftexchange") {
      result.action = "NFT Exchange";
    } else {
      result.action = "?";
    }

    result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  }

  console.log(moment().format("HH:mm:ss") + " inferTxInfo - result: " + JSON.stringify(result, null, 2).substring(0, 2000));
  return result;
}

// function parseEtherscanGetTransactionsResult(result, chainId, etherscanData) {
//   console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
//   const results = [];
//   if (result.status == 1 && result.message == "OK" && result.result) {
//     if (!(('' + chainId) in etherscanData)) {
//       etherscanData[chainId] = {};
//     }
//     for (const tx of result.result) {
//       // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 200));
//       if (!(tx.hash in etherscanData[chainId])) {
//         etherscanData[chainId][tx.hash] = {
//           blockNumber: tx.blockNumber,
//           timestamp: tx.timeStamp,
//           nonce: tx.nonce,
//           blockHash: tx.blockHash,
//           transactionIndex: tx.transactionIndex,
//           tx: null,
//           internal: [],
//           erc20: [],
//           erc721: [],
//           erc1155: []
//         };
//       }
//       if (!etherscanData[chainId][tx.hash].tx) {
//         etherscanData[chainId][tx.hash].tx = {
//           from: ethers.utils.getAddress(tx.from),
//           to: tx.to && ethers.utils.getAddress(tx.to) || null,
//           value: tx.value,
//           gas: tx.gas,
//           gasPrice: tx.gasPrice,
//           isError: tx.isError,
//           txreceipt_status: tx.txreceipt_status,
//           input: tx.input,
//           contractAddress: tx.contractAddress && ethers.utils.getAddress(tx.contractAddress) || null,
//           cumulativeGasUsed: tx.cumulativeGasUsed,
//           gasUsed: tx.gasUsed,
//           confirmations: tx.confirmations,
//           methodId: tx.methodId,
//           functionName: tx.functionName,
//         };
//       }
//     }
//   }
// }
//
//
// function parseEtherscanGetInternalTransactionsResult(result, chainId, etherscanData) {
//   console.log(moment().format("HH:mm:ss") + " parseEtherscanGetInternalTransactionsResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
//   const results = [];
//   if (result.status == 1 && result.message == "OK" && result.result) {
//     if (!(('' + chainId) in etherscanData)) {
//       etherscanData[chainId] = {};
//     }
//     for (const tx of result.result) {
//       // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetInternalTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
//       if (!(tx.hash in etherscanData[chainId])) {
//         etherscanData[chainId][tx.hash] = {
//           blockNumber: tx.blockNumber,
//           timestamp: tx.timeStamp,
//           nonce: null,
//           blockHash: null,
//           transactionIndex: null,
//           tx: null,
//           internal: [],
//           erc20: [],
//           erc721: [],
//           erc1155: []
//         };
//       }
//       etherscanData[chainId][tx.hash].internal.push({
//         from: ethers.utils.getAddress(tx.from),
//         to: tx.to && ethers.utils.getAddress(tx.to) || null,
//         value: tx.value,
//         contractAddress: tx.contractAddress,
//         input: tx.input,
//         type: tx.type,
//         gas: tx.gas,
//         gasUsed: tx.gasUsed,
//       });
//     }
//   }
// }
//
// function parseEtherscanGetERC20TransfersResult(result, chainId, etherscanData) {
//   console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC20TransfersResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
//   const results = [];
//   if (result.status == 1 && result.message == "OK" && result.result) {
//     if (!(('' + chainId) in etherscanData)) {
//       etherscanData[chainId] = {};
//     }
//     for (const tx of result.result) {
//       // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC20TransfersResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
//       if (!(tx.hash in etherscanData[chainId])) {
//         etherscanData[chainId][tx.hash] = {
//           blockNumber: tx.blockNumber,
//           timestamp: tx.timeStamp,
//           nonce: tx.nonce,
//           blockHash: tx.blockHash,
//           transactionIndex: tx.transactionIndex,
//           tx: null,
//           internal: [],
//           erc20: [],
//           erc721: [],
//           erc1155: []
//         };
//       }
//       etherscanData[chainId][tx.hash].erc20.push({
//         from: ethers.utils.getAddress(tx.from),
//         contractAddress: ethers.utils.getAddress(tx.contractAddress),
//         to: tx.to && ethers.utils.getAddress(tx.to) || null,
//         value: tx.value,
//         tokenName: tx.tokenName,
//         tokenSymbol: tx.tokenSymbol,
//         tokenDecimal: tx.tokenDecimal,
//         gas: tx.gas,
//         gasPrice: tx.gasPrice,
//         gasUsed: tx.gasUsed,
//         input: tx.input,
//       });
//     }
//   }
// }
//
//
// function parseEtherscanGetERC721TransfersResult(result, chainId, etherscanData) {
//   console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC721TransfersResult - result: " + JSON.stringify(result, null, 2).substring(0, 2000));
//   const results = [];
//   if (result.status == 1 && result.message == "OK" && result.result) {
//     if (!(('' + chainId) in etherscanData)) {
//       etherscanData[chainId] = {};
//     }
//     for (const tx of result.result) {
//       // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC721TransfersResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
//       if (!(tx.hash in etherscanData[chainId])) {
//         etherscanData[chainId][tx.hash] = {
//           blockNumber: tx.blockNumber,
//           timestamp: tx.timeStamp,
//           nonce: tx.nonce,
//           blockHash: tx.blockHash,
//           transactionIndex: tx.transactionIndex,
//           tx: null,
//           internal: [],
//           erc20: [],
//           erc721: [],
//           erc1155: []
//         };
//       }
//       etherscanData[chainId][tx.hash].erc721.push({
//         from: ethers.utils.getAddress(tx.from),
//         contractAddress: ethers.utils.getAddress(tx.contractAddress),
//         to: tx.to && ethers.utils.getAddress(tx.to) || null,
//         tokenId: tx.tokenId,
//         tokenName: tx.tokenName,
//         tokenSymbol: tx.tokenSymbol,
//         gas: tx.gas,
//         gasPrice: tx.gasPrice,
//         gasUsed: tx.gasUsed,
//         // input: tx.input,
//       });
//     }
//   }
// }
//
// function parseEtherscanGetERC1155TransfersResult(result, chainId, etherscanData) {
//   console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC1155TransfersResult - result: " + JSON.stringify(result, null, 2).substring(0, 2000));
//   const results = [];
//   if (result.status == 1 && result.message == "OK" && result.result) {
//     if (!(('' + chainId) in etherscanData)) {
//       etherscanData[chainId] = {};
//     }
//     for (const tx of result.result) {
//       // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC1155TransfersResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
//       if (!(tx.hash in etherscanData[chainId])) {
//         etherscanData[chainId][tx.hash] = {
//           blockNumber: tx.blockNumber,
//           timestamp: tx.timeStamp,
//           nonce: tx.nonce,
//           blockHash: tx.blockHash,
//           transactionIndex: tx.transactionIndex,
//           tx: null,
//           internal: [],
//           erc20: [],
//           erc721: [],
//           erc1155: []
//         };
//       }
//       etherscanData[chainId][tx.hash].erc1155.push({
//         from: ethers.utils.getAddress(tx.from),
//         contractAddress: ethers.utils.getAddress(tx.contractAddress),
//         to: tx.to && ethers.utils.getAddress(tx.to) || null,
//         tokenId: tx.tokenId,
//         tokenName: tx.tokenName,
//         tokenSymbol: tx.tokenSymbol,
//         // tokenDecimal: tx.tokenDecimal,
//         tokenValue: tx.tokenValue,
//         // transactionIndex: tx.transactionIndex,
//         gas: tx.gas,
//         gasPrice: tx.gasPrice,
//         gasUsed: tx.gasUsed,
//         // input: tx.input,
//       });
//     }
//   }
// }
