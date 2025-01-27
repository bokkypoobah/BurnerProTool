# Burner.pro NFC Card Tool (WIP)

This repo initially started as a review of [burner.pro](https://burner.pro/), but some tools need to be built to provide alternative access to this card, if the original developer's website were to become unavailable.

See the [Burner.pro Review](./Review.md) (WIP).

We are not affiliated with burner.pro . This tool is under development, so test it with small amounts first.


<kbd><img src="images/burnerprotoolnfts01.png" width="200" /></kbd>

<kbd><img src="images/burnerprotoolnfts02.png" width="200" /></kbd>

Click on the image for more detailed view

<kbd><img src="images/burnerprotoolnfts03.png" width="200" /></kbd>

Transactions

<kbd><img src="images/burnerprotooltxs01.png" width="200" /></kbd>

<kbd><img src="images/burnerprotooltxs02.png" width="200" /></kbd>

<kbd><img src="images/burnerprotooltxs03.png" width="200" /></kbd>

<kbd><img src="images/burnerprotooltxs04.png" width="200" /></kbd>

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

#### References

* [LibHaLo](https://github.com/arx-research/libhalo)

<br />

<br />

Enjoy!

(c) BokkyPooBah / Bok Consulting Pty Ltd 2025. The MIT License
