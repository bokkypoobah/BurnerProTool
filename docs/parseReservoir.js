function parseReservoirData(data, address, reservoirData) {
  console.log(moment().format("HH:mm:ss") + " parseReservoirData - data: " + JSON.stringify(data, null, 2).substring(0, 200));
  if (!(address in reservoirData)) {
    reservoirData[address] = {};
  }
  for (const item of (data && data.tokens.slice(0, 1) || [])) {
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - item: " + JSON.stringify(item, null, 2));
    const chainId = item.token.chainId;
    if (!(('' + chainId) in reservoirData[address])) {
      reservoirData[address][chainId] = {};
    }
    const contract = item.token.contract;
    const type = item.token.kind;
    const tokenId = item.token.tokenId;
    const count = item.ownership.tokenCount;
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - item: " + chainId + ":" + contract + "(" + type + "):" + tokenId + "x" + count);
  }
  console.log(moment().format("HH:mm:ss") + " parseReservoirData - reservoirData: " + JSON.stringify(reservoirData, null, 2));



  // if (result.status == 1 && result.message == "OK" && result.result) {
  //   if (!(('' + chainId) in etherscanData)) {
  //     etherscanData[chainId] = {};
  //   }
  //   for (const tx of result.result) {
  //     console.log(moment().format("HH:mm:ss") + " parseEtherscanGetTransactionsResult - tx: " + JSON.stringify(tx, null, 2).substring(0, 200));
  //     if (!(tx.hash in etherscanData[chainId])) {
  //       etherscanData[chainId][tx.hash] = {
  //         tx: {
  //           blockNumber: tx.blockNumber,
  //           timeStamp: tx.timeStamp,
  //           hash: tx.hash,
  //           nonce: tx.nonce,
  //           blockHash: tx.blockHash,
  //           transactionIndex: tx.transactionIndex,
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
  //         },
  //       };
  //     }
  //   }
  // }

}
