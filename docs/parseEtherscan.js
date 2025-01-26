function parseEtherscanGetTransactionsResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 200));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          blockNumber: tx.blockNumber,
          timestamp: tx.timeStamp,
          nonce: tx.nonce,
          blockHash: tx.blockHash,
          transactionIndex: tx.transactionIndex,
          tx: null,
          internal: [],
          erc20: [],
          erc721: [],
          erc1155: []
        };
      }
      if (!etherscanData[chainId][tx.hash].tx) {
        etherscanData[chainId][tx.hash].tx = {
          from: ethers.utils.getAddress(tx.from),
          to: tx.to && ethers.utils.getAddress(tx.to) || null,
          value: tx.value,
          gas: tx.gas,
          gasPrice: tx.gasPrice,
          isError: tx.isError,
          txreceipt_status: tx.txreceipt_status,
          input: tx.input,
          contractAddress: tx.contractAddress && ethers.utils.getAddress(tx.contractAddress) || null,
          cumulativeGasUsed: tx.cumulativeGasUsed,
          gasUsed: tx.gasUsed,
          confirmations: tx.confirmations,
          methodId: tx.methodId,
          functionName: tx.functionName,
        };
      }
    }
  }
}


function parseEtherscanGetInternalTransactionsResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetInternalTransactionsResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetInternalTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          blockNumber: tx.blockNumber,
          timestamp: tx.timeStamp,
          nonce: null,
          blockHash: null,
          transactionIndex: null,
          tx: null,
          internal: [],
          erc20: [],
          erc721: [],
          erc1155: []
        };
      }
      etherscanData[chainId][tx.hash].internal.push({
        from: ethers.utils.getAddress(tx.from),
        to: tx.to && ethers.utils.getAddress(tx.to) || null,
        value: tx.value,
        contractAddress: tx.contractAddress && ethers.utils.getAddress(tx.contractAddress) || null,
        input: tx.input,
        type: tx.type,
        gas: tx.gas,
        gasUsed: tx.gasUsed,
      });
    }
  }
}

function parseEtherscanGetERC20TransfersResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC20TransfersResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC20TransfersResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          blockNumber: tx.blockNumber,
          timestamp: tx.timeStamp,
          nonce: tx.nonce,
          blockHash: tx.blockHash,
          transactionIndex: tx.transactionIndex,
          tx: null,
          internal: [],
          erc20: [],
          erc721: [],
          erc1155: []
        };
      }
      etherscanData[chainId][tx.hash].erc20.push({
        from: ethers.utils.getAddress(tx.from),
        contractAddress: tx.contractAddress && ethers.utils.getAddress(tx.contractAddress) || null,
        to: tx.to && ethers.utils.getAddress(tx.to) || null,
        value: tx.value,
        tokenName: tx.tokenName,
        tokenSymbol: tx.tokenSymbol,
        tokenDecimal: tx.tokenDecimal,
        gas: tx.gas,
        gasPrice: tx.gasPrice,
        gasUsed: tx.gasUsed,
        input: tx.input,
      });
    }
  }
}


function parseEtherscanGetERC721TransfersResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC721TransfersResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC721TransfersResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          blockNumber: tx.blockNumber,
          timestamp: tx.timeStamp,
          nonce: tx.nonce,
          blockHash: tx.blockHash,
          transactionIndex: tx.transactionIndex,
          tx: null,
          internal: [],
          erc20: [],
          erc721: [],
          erc1155: []
        };
      }
      etherscanData[chainId][tx.hash].erc721.push({
        from: ethers.utils.getAddress(tx.from),
        contractAddress: tx.contractAddress && ethers.utils.getAddress(tx.contractAddress) || null,
        to: tx.to && ethers.utils.getAddress(tx.to) || null,
        tokenId: tx.tokenID,
        tokenName: tx.tokenName,
        tokenSymbol: tx.tokenSymbol,
        gas: tx.gas,
        gasPrice: tx.gasPrice,
        gasUsed: tx.gasUsed,
        // input: tx.input,
      });
    }
  }
}

function parseEtherscanGetERC1155TransfersResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC1155TransfersResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      // console.log(moment().format("HH:mm:ss") + " parseEtherscanGetERC1155TransfersResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          blockNumber: tx.blockNumber,
          timestamp: tx.timeStamp,
          nonce: tx.nonce,
          blockHash: tx.blockHash,
          transactionIndex: tx.transactionIndex,
          tx: null,
          internal: [],
          erc20: [],
          erc721: [],
          erc1155: []
        };
      }
      etherscanData[chainId][tx.hash].erc1155.push({
        from: ethers.utils.getAddress(tx.from),
        contractAddress: tx.contractAddress && ethers.utils.getAddress(tx.contractAddress) || null,
        to: tx.to && ethers.utils.getAddress(tx.to) || null,
        tokenId: tx.tokenID,
        tokenName: tx.tokenName,
        tokenSymbol: tx.tokenSymbol,
        // tokenDecimal: tx.tokenDecimal,
        tokens: tx.tokenValue,
        // transactionIndex: tx.transactionIndex,
        gas: tx.gas,
        gasPrice: tx.gasPrice,
        gasUsed: tx.gasUsed,
        // input: tx.input,
      });
    }
  }
}
