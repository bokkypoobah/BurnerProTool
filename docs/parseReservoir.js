function parseReservoirData(data, reservoirData) {
  console.log(moment().format("HH:mm:ss") + " parseReservoirData - data: " + JSON.stringify(data, null, 2).substring(0, 200));
  for (const item of (data && data.tokens || [])) {
    const token = item.token;
    const chainId = token.chainId;
    if (!(('' + chainId) in reservoirData)) {
      reservoirData[chainId] = {};
    }
    const contract = ethers.utils.getAddress(token.contract);
    const type = token.kind;
    const collectionName = token.collection.name;
    const collectionSlug = token.collection.slug;
    if (!(contract in reservoirData[chainId])) {
      reservoirData[chainId][contract] = {
        type,
        name: collectionName,
        slug: collectionSlug,
        tokens: {},
      };
    }
    const tokenId = token.tokenId;
    const count = item.ownership.tokenCount;
    const name = token.name;
    const description = token.description;
    const image = token.image;
    const media = token.media;
    const acquiredAt = parseInt(Date.parse(item.ownership.acquiredAt)/1000);
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
    if (!(tokenId in reservoirData[chainId][contract].tokens)) {
      reservoirData[chainId][contract].tokens[tokenId] = {
        count,
        name,
        description,
        image,
        media,
        acquiredAt,
        lastSale,
        price,
        topBid,
      };
    }
  }
  console.log(moment().format("HH:mm:ss") + " parseReservoirData - reservoirData: " + JSON.stringify(reservoirData, null, 2).substring(0, 200));
  return reservoirData;
}
