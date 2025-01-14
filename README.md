# Burner.pro NFC Card Tool (WIP)

This repo initially started as a review of [burner.pro](https://burner.pro/), but some tools need to be built to provide alternative access to this card, if the original developer's website were to become unavailable.

Skip to the [Burner.pro Review](#burnerpro-review) (WIP).

We are not affiliated with burner.pro . This tool is under development, so test it with small amounts first.

<kbd><img src="images/burnerprotoolnfts01.png" width="200" /></kbd>

Click on the image for more detailed view

<kbd><img src="images/burnerprotoolnfts02.png" width="200" /></kbd>

<br />

---

### Burner.pro Tool

This dapp uses [libhalo.js v1.10.11](https://github.com/arx-research/libhalo/releases/download/libhalo-v1.10.11/libhalo.js) to interact with burner.pro NFC card.

Load on NFC reader enabled mobile phone, with Burner.pro NFC card: https://bokkypoobah.github.io/BurnerProTool/

#### Sample Screens

Initial page

<kbd><img src="images/burnerprotoolexample1.png" width="200" /></kbd>

Click on the [Scan NFC] button to view the NFC scanning prompt

<kbd><img src="images/burnerprotoolexample2.png" width="200" /></kbd>

After scanning a burner.pro NFC card that has already been set up as an Ethereum wallet

<kbd><img src="images/burnerprotoolexample3.png" width="200" /></kbd>

Click on the [Cards] button

<kbd><img src="images/burnerprotoolexample4.png" width="200" /></kbd>

Click on the [Slots] button

* Addresses at slots 1, 2 and 8 are generated before the burner.pro NFC card is set up as an Ethereum wallet
* The address at slot 9 is the Ethereum wallet that is generated when you first initialise your NFC card using https://os.burner.pro (see Review section below for screenshots)
* Addresses at slots 8 and 9 are password protected
* The address at slot 9 has been exported

<kbd><img src="images/burnerprotoolexample5.png" width="200" /></kbd>

Name your wallets in the [Cards] page

<kbd><img src="images/burnerprotoolexample6.png" width="200" /></kbd>

After scanning and naming my duplicate of the first NFC card

<kbd><img src="images/burnerprotoolexample7.png" width="200" /></kbd>

Viewing the slots of the duplicate card

* The address at slot 9 has been imported

<kbd><img src="images/burnerprotoolexample8.png" width="200" /></kbd>

Clicking on the [Config] button from the main page, you can insert some test data (my burner.pro NFC card and the duplicate), or reset any saved data

<kbd><img src="images/burnerprotoolexample9.png" width="200" /></kbd>

<br />

#### Set Graffiti

View the current graffiti setting in the Card tab. Click on the [Write] icon to the right to update the graffiti

<kbd><img src="images/burnerprotoolsetgraffiti1.png" width="200" /></kbd>

The current graffiti

<kbd><img src="images/burnerprotoolsetgraffiti2.png" width="200" /></kbd>

Update the graffiti and click on the [Scan] button

<kbd><img src="images/burnerprotoolsetgraffiti3.png" width="200" /></kbd>

Scan your burner.pro NFC card

<kbd><img src="images/burnerprotoolsetgraffiti4.png" width="200" /></kbd>

Update successful. Rescan the NFC card from the main menu

<kbd><img src="images/burnerprotoolsetgraffiti5.png" width="200" /></kbd>

From the main menu. Click on the [Scan] button

Note that the error message in this screen shows an invalid graffiti string from being written to the card from a prior test

<kbd><img src="images/burnerprotoolsetgraffiti6.png" width="200" /></kbd>

Scan your burner.pro NFC card

<kbd><img src="images/burnerprotoolsetgraffiti7.png" width="200" /></kbd>

Screen shows the updated graffiti

<kbd><img src="images/burnerprotoolsetgraffiti8.png" width="200" /></kbd>

<br />

#### Sign Transfer ETH Message (Old, to be replaced)

Slot 9 selected, with some test data. Loaded in Brave on mobile for web3 and NFC support

<kbd><img src="images/signtransfereth01.png" width="400" /></kbd>

Enter password, click [Scan NFC To Sign] and scan the NFC card

<kbd><img src="images/signtransfereth02.png" width="400" /></kbd>

Transaction [0xc2027...b03c](https://etherscan.io/tx/0xc2027cc88e37ef02a99f30d2ce7658bf65643d6ca0d6228799d6184a71e4b03c) sent automatically via web3

<kbd><img src="images/signtransfereth03.png" width="400" /></kbd>

<br />

---

### Burner.pro Review

[burner.pro](https://burner.pro/) provides Ethereum wallet functionality on a [NFC](https://en.wikipedia.org/wiki/Near-field_communication) card

<kbd><img src="images/BurnerCard.jpg" width="200" /></kbd>

[UseBurner](https://x.com/useburner) announced their launch on X on Nov 14 2024

<kbd><img src="images/BurnerXAnnouncement.png" width="300" /></kbd>

And my Burner cards have just arrived

<kbd><img src="images/BunchOfBurners.jpg" width="300" /></kbd>

So this is my review of these cards.

<br />

---

### Table Of Contents

* [Price](#price)
* [New Ethereum Wallet Setup](#new-ethereum-wallet-setup)
* [Duplicating A Card](#duplicating-a-card)
* [Purchase NFT on ETH Mainnet](#purchase-nft-on-eth-mainnet)
* [List NFT for Sale](#list-nft-for-sale)
* [Purchase NFT on Base](#purchase-nft-on-base)
* [Supported NFT Media Types](#supported-nft-media-types)
* [Withdraw ETH](#withdraw-eth)
* [Swap WETH TO ERC-20](#swap-weth-to-erc-20)
* [Questions](#questions)
* [References](#references)

<br />

---

#### Price

From the product website [burner.pro/product](https://burner.pro/product), single cards sell for USD 9 and packs of 6 sell for USD 49. There may be some discounts for bulk purchases. Postage varies according to desired delivery timeframe

<br />

---

#### New Ethereum Wallet Setup

Swipe your NFC card with the phone and the website [os.burner.pro](https://os.burner.pro/) is loaded. During this setup you may be prompted to re-swipe your NFC card

<kbd><img src="images/setupwallet1.jpg" width="200" /></kbd>

Select "Setup as a Wallet"

<kbd><img src="images/setupwallet2.jpg" width="200" /></kbd>

Generate key

<kbd><img src="images/setupwallet3.jpg" width="200" /></kbd>

Add some randomness

<kbd><img src="images/setupwallet4.jpg" width="200" /></kbd>

Confirm

<kbd><img src="images/setupwallet5.jpg" width="200" /></kbd>

Setup a PIN code

<kbd><img src="images/setupwallet6.jpg" width="200" /></kbd>

Name your wallet

<kbd><img src="images/setupwallet7.jpg" width="200" /></kbd>

New wallet has been setup

<kbd><img src="images/setupwallet8.jpg" width="200" /></kbd>

Burner OS menu

<kbd><img src="images/setupwallet9.jpg" width="200" /></kbd>

<br />

---

#### Duplicating A Card

Select [CARD DUPLICATION] from the Burner OS menu. Swipe the source card

<kbd><img src="images/duplicate1.jpg" width="200" /></kbd>

Swipe the duplicate card

<kbd><img src="images/duplicate2.jpg" width="200" /></kbd>

Enter your PIN code

<kbd><img src="images/duplicate3.jpg" width="200" /></kbd>

Swipe the source and duplicate cards a few more times and the new card is now a duplicate.

<kbd><img src="images/duplicate4.jpg" width="200" /></kbd>

<br />

---

#### Purchase NFT on ETH Mainnet

ETH sent to Burner.pro address

<kbd><img src="images/purchasenft01.png" width="200" /></kbd>

Select [TRANSACTIONS] from the Burner OS menu to view transactions

<kbd><img src="images/purchasenft02.png" width="200" /></kbd>

Viewing Fast Food Punks Gen2 on [blur.io](https://blur.io/eth/collection/fastfoodpunks2). Click on [CONNECT] on the top right

<kbd><img src="images/purchasenft03.png" width="200" /></kbd>

Click on [WALLETCONNECT]

<kbd><img src="images/purchasenft04.png" width="200" /></kbd>

Click on the [Copy] button to the right of the text "Connect your wallet"

<kbd><img src="images/purchasenft05.png" width="200" /></kbd>

Copy the "code" by clicking on the [Copy] button to the right of the text "Scan the code"

<kbd><img src="images/purchasenft06.png" width="200" /></kbd>

In Burner OS, paste the copied information from above into the "Paste WalletConnect Pairing URL" text and click [PAIR MANUALLY]

<kbd><img src="images/purchasenft07.png" width="200" /></kbd>

Click [ACCEPT]

<kbd><img src="images/purchasenft08.png" width="200" /></kbd>

Burner OS screen reverts back to the main menu

<kbd><img src="images/purchasenft09.png" width="200" /></kbd>

Blur is now connected to your wallet

<kbd><img src="images/purchasenft10.png" width="200" /></kbd>

Select an NFT to purchase

<kbd><img src="images/purchasenft11.png" width="200" /></kbd>

Click [BUY NOW], then confirm in Burner OS

<kbd><img src="images/purchasenft12.png" width="200" /></kbd>

In Burner OS, click [ACCEPT]. You may have to scan your NFC card

<kbd><img src="images/purchasenft13.png" width="200" /></kbd>

Passcode is required

<kbd><img src="images/purchasenft14.png" width="200" /></kbd>

Enter passcode

<kbd><img src="images/purchasenft15.png" width="200" /></kbd>

In Blur, you can see "TRANSACTION PENDING"

<kbd><img src="images/purchasenft16.png" width="200" /></kbd>

In Blur, you can see "TRANSACTION CONFIRMED". Transaction [0x4191...5cad](https://etherscan.io/tx/0x41915a00b30fffda911c8ac3e4ce12903a30b225ca772b6ca24f9fc892c75cad)

<kbd><img src="images/purchasenft17.png" width="200" /></kbd>

From the Burner OS menu, select NFTS

<kbd><img src="images/purchasenft18.png" width="200" /></kbd>

And here is Fast Food Punk Gen2 #1678

<kbd><img src="images/purchasenft19.png" width="200" /></kbd>

<br />

---

#### List NFT for Sale

In Opensea, list item for sale

<kbd><img src="images/listnftforsale01.png" width="200" /></kbd>

<kbd><img src="images/listnftforsale02.png" width="200" /></kbd>

<kbd><img src="images/listnftforsale03.png" width="200" /></kbd>

<kbd><img src="images/listnftforsale04.png" width="200" /></kbd>

In os.burner.pro, [ACCEPT] and scan your NFC to approve for OpenSea to transfer the NFT collection

<kbd><img src="images/listnftforsale05.png" width="200" /></kbd>

Then click [ACCEPT] to sign the listing data

<kbd><img src="images/listnftforsale06.png" width="200" /></kbd>

Scan NFC

<kbd><img src="images/listnftforsale07.png" width="200" /></kbd>

Item listed!

<kbd><img src="images/listnftforsale08.png" width="200" /></kbd>



<br />

---

#### Purchase NFT on Base

Base ETH sent to Burner.pro address. Purchasing [Chonk #47740](https://opensea.io/assets/base/0x07152bfde079b5319e5308c43fb1dbc9c76cb4f9/47740)

<kbd><img src="images/purchasenftbase01.jpg" width="200" /></kbd>

Confirm in Burner OS with a few scans of the NFC card

<kbd><img src="images/purchasenftbase02.jpg" width="200" /></kbd>

NFT purchased. Transaction [0xb8c8...0155](https://basescan.org/tx/0xb8c8e0178c171e04dff10b01d3d45383fa503d827cd8a5dfae852fa6851c0155)

<kbd><img src="images/purchasenftbase03.jpg" width="200" /></kbd>

Initially these Base NFTs did not show up in the NFT screen

<kbd><img src="images/purchasenftbase04.jpg" width="200" /></kbd>

These Base NFTs showed up the next day. A second Base NFT Purchased in transaction [0xc841...8b1e](0xc841d4948bb886289f0d9d180b91ba8c6e37c90939b5dcc4304ff496396a8b1e) does not display correctly

<kbd><img src="images/purchasenftbase05.png" width="200" /></kbd>

<br />

---

#### Supported NFT Media Types

* [Babby #4011](https://opensea.io/assets/ethereum/0x9a4b320418544b4da92c38d2a6e2de09d5b0287a/4011) has dynamic HTML media, and a static thumbnail is displayed
* [FastFoodPunkGEN2 #1678](https://opensea.io/assets/ethereum/0x1a17531d136a3a4e0ef05575867fc7c59dae3069/1678) has a static PNG or GIF and is displayed correctly

<kbd><img src="images/purchasenft20.jpg" width="200" /></kbd>

* [NAH FUNGIBLE BONES #4218](https://opensea.io/assets/ethereum/0x0ee24c748445fb48028a74b0ccb6b46d7d3e3b33/4218) has dynamic HTML media and the selected GIF is displayed correctly
* [Flipmap #3204](https://opensea.io/assets/ethereum/0x0e4b8e24789630618aa90072f520711d3d9db647/3204) has an on-chain generated image. This image is not displayed correctly.

<kbd><img src="images/purchasenft21.jpg" width="200" /></kbd>

<br />

---

#### Withdraw ETH

Click [WITHDRAW] from the Burner OS menu. Enter destination ENS name or ETH address

<kbd><img src="images/withdraw01.png" width="200" /></kbd>

Enter amount

<kbd><img src="images/withdraw02.png" width="200" /></kbd>

Enter passcode, and scan your NFC card

<kbd><img src="images/withdraw03.png" width="200" /></kbd>

Transaction sent

<kbd><img src="images/withdraw04.png" width="200" /></kbd>

Transaction mined. Transaction [0xf25c...546d](https://etherscan.io/tx/0xf25cbf043f346dd5e1fad56f185f9a49e8a61d4193dd1e0d3a5df21259aa546d)

<kbd><img src="images/withdraw05.png" width="200" /></kbd>

View [TRANSACTIONS] from the Burner OS menu

<kbd><img src="images/withdraw06.png" width="200" /></kbd>

<br />

---

#### Swap WETH TO ERC-20

View https://app.uniswap.org . Click [Connect]

<kbd><img src="images/swaperc2001.png" width="200" /></kbd>

Click [WalletConnect]

<kbd><img src="images/swaperc2002.png" width="200" /></kbd>

Click on the [Scan] button on the top right

<kbd><img src="images/swaperc2003.png" width="200" /></kbd>

Click on the [Copy] button on the top right

<kbd><img src="images/swaperc2004.png" width="200" /></kbd>

In the os.burner.pro WalletConnect page, paste the copied info into the URL field and click [PAIR MANUALLY]

<kbd><img src="images/swaperc2005.png" width="200" /></kbd>

Click [ACCEPT]

<kbd><img src="images/swaperc2006.png" width="200" /></kbd>

Swapping WETH for TURBO

<kbd><img src="images/swaperc2007.png" width="200" /></kbd>

Confirm in wallet

<kbd><img src="images/swaperc2008.png" width="200" /></kbd>

Click [ACCEPT], scan the Burner.pro NFC card a few times

<kbd><img src="images/swaperc2009.png" width="200" /></kbd>

Swapping

<kbd><img src="images/swaperc2010.png" width="200" /></kbd>

New TURBO balance in os.burner.pro

<kbd><img src="images/swaperc2011.png" width="200" /></kbd>

<br />

---

#### Questions

###### 1. How many passcode fail attempts?

If you fail the passcode 20 times the product will lock permanently - [reference](https://www.producthunt.com/products/burner-2?comment=4121354#burner-2)

<br />

---

#### References

* [Show HN: Burner – A low cost wallet to gift crypto (burner.pro)](https://news.ycombinator.com/item?id=42127787) - Nov 13 2024

* [Product Hunt: Burner - A low cost wallet to gift crypto](https://www.producthunt.com/products/burner-2#burner-2)

* [help.burner.pro](https://help.burner.pro)

* [LibHaLo](https://github.com/arx-research/libhalo)

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd 2024
