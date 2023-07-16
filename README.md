# ETH Module 2 Project

Metacrafters ETH Module 2 Project

## Description

This project serves the purpose of fulfilling a requirement for ETH PROOF: Intermediate EVM Course of Metacrafters

This project demonstrates Smart Contract Frontend Integration with Vite + React as frontend and Hardhat node running locally to deploy and access the contract.

## Getting Started

### Executing the program

1. enter `npm install` in the terminal
2. Create 2 terminal instances. They will be used later on.
3. On the 1st terminal instance, enter `npx hardhat node` on the terminal to start our Hardhat node. Make sure to open the port to public.
4. Use the address associated with port 8545 as the "RPC URL", "Chain ID" as 31337, we can leave the "Currency Symbol" .This will add a new network in MetaMask. (For more details on how to add the Hardhat network to MetaMask, kindly check: https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node)
5. Now Copy any `Private Key` from the terminal and go to MetaMask, Click on top middle "Select an account" > click "Import account" > paste the private key you just copied.
6. Go back to the terminal and use at least one of the generated account's private key to import the account to our MetaMask wallet.
7. On the 2nd terminal instance, enter `npx hardhat run --network localhost scripts/deploy.js` to deploy the smart contract.
8. Copy the address where the MathOperations contract is deployed and paste it as the value of `mathOperationsAddress` in **/src/App.jsx** on **Line 25**.
9. Enter `npm run dev` on the terminal to start the frontend server. Make sure to open the port to public.
10. Ctrl + Left Click the link where the frontend is said to be hosted.
11. Connect the wallet to interact with the app functions

## Author

Chetan

## License

This project is licensed under the MIT License - see the LICENSE file for details
