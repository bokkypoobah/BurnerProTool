function inferTxInfo(tx) {
  // console.log(moment().format("HH:mm:ss") + " inferTxInfo - tx: " + JSON.stringify(tx, null, 2).substring(0, 200));
  const result = {};
  const methodId = tx.tx && tx.tx.methodId || null;
  if (methodId == "0xa22cb465") {
    // setApprovalForAll(address operator, bool authorized)
    result.action = "ERC-721/1155:setApprovalForAll";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = !!tx.tx.input.slice(-1);
  } else if (methodId == "0x095ea7b3") {
    // approve(address _spender, uint256 _value)
    result.action = "ERC-20:approve";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = !!tx.tx.input.slice(-1);
  } else if (methodId == "0xd0e30db0") {
    // WETH deposit()
    result.action = "WETH:deposit";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  } else if (methodId == "0xf14fcbc8") {
    // ENS commit(bytes32 commitment)
    result.action = "ENS:commit";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    // result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  } else if (methodId == "0x74694a2b") {
    // ENS register(string name,address owner,uint256 duration,bytes32 secret,address resolver,bytes[] data,bool reverseRecord,uint16 ownerControlledFuses)
    result.action = "ENS:register";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    const interface = new ethers.utils.Interface(["function register(string name,address owner,uint256 duration,bytes32 secret,address resolver,bytes[] data,bool reverseRecord,uint16 ownerControlledFuses)"]);
    const parameters = interface.decodeFunctionData("register", tx.tx.input);
    const duration = parseInt(parameters[2]);
    const expiry = parseInt(tx.timestamp) + duration;
    const expiryString = moment.unix(tx.timestamp).from(moment.unix(expiry), true);
    result.value = parameters[0] + ".eth " + expiryString;
  } else if (tx.tx && tx.tx.gasUsed == 21000) {
    result.action = "ETH:transfer";
    result.from = tx.tx.from;
    result.contract = tx.tx.to;
    result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  } else if (tx.internal && tx.internal.length > 0) {
    result.action = "ETH:internalTransfer";
    result.from = tx.internal[0].from;
    result.contract = tx.internal[0].to;
    result.value = tx.internal[0].value && (ethers.utils.formatEther(tx.internal[0].value) + 'e') || null;
  } else {
    result.from = tx.tx && tx.tx.from || null;
    result.contract = tx.tx && tx.tx.to || null;
    if (result.contract && result.contract in CUSTOMNAMES && CUSTOMNAMES[result.contract][0] == "nftexchange") {
      result.action = "NFTExchange";
    } else {
      result.action = "?";
    }
    result.value = tx.tx && tx.tx.value && (ethers.utils.formatEther(tx.tx.value) + 'e') || null;
  }
  // console.log(moment().format("HH:mm:ss") + " inferTxInfo - result: " + JSON.stringify(result, null, 2).substring(0, 2000));
  return result;
}
