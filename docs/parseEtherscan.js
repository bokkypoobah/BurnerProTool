function parseEtherscanGetTransactionsResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - result: " + JSON.stringify(result, null, 2).substring(0, 200));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 200));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          tx: {
            blockNumber: tx.blockNumber,
            timeStamp: tx.timeStamp,
            hash: tx.hash,
            nonce: tx.nonce,
            blockHash: tx.blockHash,
            transactionIndex: tx.transactionIndex,
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
          },
          internal: null,
          erc20: null,
          erc721: null,
          erc1155: null,
        };
      }
    }
  }
}


function parseEtherscanGetInternalTransactionsResult(result, chainId, etherscanData) {
  console.log(moment().format("HH:mm:ss") + " parseEtherscanGetInternalTransactionsResult - result: " + JSON.stringify(result, null, 2).substring(0, 2000));
  const results = [];
  if (result.status == 1 && result.message == "OK" && result.result) {
    if (!(('' + chainId) in etherscanData)) {
      etherscanData[chainId] = {};
    }
    for (const tx of result.result) {
      console.log(moment().format("HH:mm:ss") + " parseEtherscanGetInternalTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 2000));
      if (!(tx.hash in etherscanData[chainId])) {
        etherscanData[chainId][tx.hash] = {
          tx: null,
          internal: {
            blockNumber: tx.blockNumber,
            timeStamp: tx.timeStamp,
            hash: tx.hash,
            from: ethers.utils.getAddress(tx.from),
            to: tx.to && ethers.utils.getAddress(tx.to) || null,
            value: tx.value,
            contractAddress: tx.contractAddress,
            input: tx.input,
            type: tx.type,
            gas: tx.gas,
            gasUsed: tx.gasUsed,
          },
          erc20: null,
          erc721: null,
          erc1155: null,
        };
      }
    }
  }
}
