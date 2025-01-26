# CertiPort_Dapp

CertiPort is a decentralized application designed to issue certificate for each candidates. The users can take their certificates by their register number.

Features
Holsky Network Integration: Built to work with the Holsky test network, offering secure messaging via Ethereum smart contracts.
Hardhat for Smart Contracts: Uses Hardhat for deploying and managing Ethereum smart contracts.
Real-Time Messaging: Send and receive messages instantly, with messages stored securely on the blockchain.
Wallet Authentication: Users authenticate using their Ethereum wallet (e.g., MetaMask), ensuring control over their accounts and messages.
Friend Management: Add, accept friends and interact with them securely.
Encrypted Messaging: All messages are encrypted for privacy.
Immutable Storage: Messages are recorded on the blockchain, ensuring transparency and tamper-proof records.
Installation
Clone the repository: bash git clone https://github.com/MAVeny426/CertiPort_Dapp

Install Dependencies bash Copy code

Configure the .env File

Replace your_private_key with the private key of your wallet (e.g., from MetaMask). Replace your_network_name with the test network you plan to use (e.g., holesky).

Compile the Contract bash npx hardhat compile

Deploy the Contract bash npx hardhat ignition deploy ignition/modules/Certi.js --network holesky
