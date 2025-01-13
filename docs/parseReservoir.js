function parseReservoirData(data, address, reservoirData) {
  console.log(moment().format("HH:mm:ss") + " parseReservoirData - data: " + JSON.stringify(data, null, 2).substring(0, 200));
  if (!(address in reservoirData)) {
    reservoirData[address] = {};
  }
  for (const item of (data && data.tokens || [])) {
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - item: " + JSON.stringify(item, null, 2).substring(0, 200));
    const chainId = item.token.chainId;
    if (!(('' + chainId) in reservoirData[address])) {
      reservoirData[address][chainId] = {};
    }
    const contract = item.token.contract;
    const type = item.token.kind;
    const collectionName = item.token.collection.name;
    const collectionSlug = item.token.collection.slug;
    if (!(contract in reservoirData[address][chainId])) {
      reservoirData[address][chainId][contract] = {
        type,
        name: collectionName,
        slug: collectionSlug,
        tokens: {},
      };
    }

    const tokenId = item.token.tokenId;
    const count = item.ownership.tokenCount;
    const name = item.token.name;
    const description = item.token.description;
    const image = item.token.image;
    const acquiredAt = parseInt(Date.parse(item.ownership.acquiredAt)/1000);
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - item: " + chainId + ":" + contract + "(" + type + "):" + tokenId + "x" + count + " " + new Date(acquiredAt * 1000).toString() + " from " + item.ownership.acquiredAt);


    const token = item.token;
    const lastSaleTimestamp = token.lastSale && token.lastSale.timestamp || null;
    const lastSaleCurrency = token.lastSale && token.lastSale.price && token.lastSale.price.currency && token.lastSale.price.currency.symbol || null;
    const lastSaleAmount = token.lastSale && token.lastSale.price && token.lastSale.price.amount && token.lastSale.price.amount.native || null;
    const lastSaleAmountUSD = token.lastSale && token.lastSale.price && token.lastSale.price.amount && token.lastSale.price.amount.usd || null;
    let lastSale = null;
    if (lastSaleAmount) {
      lastSale = {
        timestamp: lastSaleTimestamp,
        currency: lastSaleCurrency,
        amount: lastSaleAmount,
        amountUSD: lastSaleAmountUSD,
      };
    }
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - lastSale: " + JSON.stringify(lastSale, null, 2));

    const priceExpiry = token.floorAsk && token.floorAsk.validUntil && parseInt(token.floorAsk.validUntil) || null;
    const priceSource = token.floorAsk && token.floorAsk.source && token.floorAsk.source.domain || null;
    const priceCurrency = token.floorAsk && token.floorAsk.price && token.floorAsk.price.currency && token.floorAsk.price.currency.symbol || null;
    const priceAmount = token.floorAsk && token.floorAsk.price && token.floorAsk.price.amount && token.floorAsk.price.amount.native || null;
    const priceAmountUSD = token.floorAsk && token.floorAsk.price && token.floorAsk.price.amount && token.floorAsk.price.amount.usd || null;
    let price = null;
    if (priceAmount) {
      price = {
        source: priceSource,
        expiry: priceExpiry,
        currency: priceCurrency,
        amount: priceAmount,
        amountUSD: priceAmountUSD,
      };
    }
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - price: " + JSON.stringify(price, null, 2));

    const topBidCurrency = token.topBid && token.topBid.price && token.topBid.price.currency && token.topBid.price.currency.symbol || null;
    const topBidSource = token.topBid && token.topBid.source && token.topBid.source.domain || null;
    const topBidAmount = token.topBid && token.topBid.price && token.topBid.price.amount && token.topBid.price.amount.native || null;
    const topBidAmountUSD = token.topBid && token.topBid.price && token.topBid.price.amount && token.topBid.price.amount.usd || null;
    const topBidNetAmount = token.topBid && token.topBid.price && token.topBid.price.netAmount && token.topBid.price.netAmount.native || null;
    const topBidNetAmountUSD = token.topBid && token.topBid.price && token.topBid.price.netAmount && token.topBid.price.netAmount.usd || null;
    let topBid = null;
    if (topBidNetAmount) {
      topBid = {
        source: topBidSource,
        currency: topBidCurrency,
        amount: topBidAmount,
        amountUSD: topBidAmountUSD,
        netAmount: topBidNetAmount,
        netAmountUSD: topBidNetAmountUSD,
      };
    }
    console.log(moment().format("HH:mm:ss") + " parseReservoirData - topBid: " + JSON.stringify(topBid, null, 2));

    if (!(tokenId in reservoirData[address][chainId][contract].tokens)) {
      reservoirData[address][chainId][contract].tokens[tokenId] = {
        count,
        name,
        description,
        image,
        acquiredAt,
        lastSale,
        price,
        topBid,
      };
    }

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
