const { SafeFactory } = require("@gnosis.pm/safe-core-sdk");
const { EthersAdapter } = require("@gnosis.pm/safe-core-sdk");
const { EthSignSignature } = require("@gnosis.pm/safe-core-sdk");
const  Safe = require('@gnosis.pm/safe-core-sdk')
console.log(Safe)

// console.log(Safe);
const web3 = require("web3");
const ethers = require("ethers");
const { default: Web3 } = require("web3");
let abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "_mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "test",
				"type": "address"
			}
		],
		"name": "addToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const infuraURL =
  "https://rinkeby.infura.io/v3/0a2c350c40b442b895262df39adcd52c";
  let tempWeb3 = new web3(infuraURL)
const web3Provider = new ethers.providers.JsonRpcProvider(infuraURL);
//0x0f561eF8a55137bE95bCbF60B34d9b22634B91FA
let userAccount = new ethers.Wallet(
    "",
    web3Provider
  );
 
  let userAccount2 = new ethers.Wallet(
    "",
    web3Provider
  );
  async function main () {
  const ethAdapter = await new EthersAdapter({
    ethers,
    signer: userAccount,
  });
  const ethAdapter2 = await new EthersAdapter({
    ethers,
    signer: userAccount2,
  });
//   const safeAccountConfig = {
//     owners:['0x0f561eF8a55137bE95bCbF60B34d9b22634B91FA','0x131F90cb08c8E95B7A18e433E5D496B2f4b24Cbe'],
//     threshold:2,
// }
const safeAddress = "0x12050F7090cb2a1620dA2cb8651489675394D0B8";
let erc20Address = "0x448de722BD3b081F97131De6987a9E1f6b3dd87f"

const safeConnection = await Safe.default.create({ ethAdapter, safeAddress });
const safeConnection2 = await Safe.default.create	;
let cInstance= new tempWeb3.eth.Contract(abi,erc20Address);
let funcAbi = await cInstance.methods._mint("0x0f561eF8a55137bE95bCbF60B34d9b22634B91FA",web3.utils.toWei('2','ether')).encodeABI();
//function _mint(address account, uint256 amount) public whiteListOnly

let transactions = [
    {
        to:erc20Address,
        value : 0,
        data:funcAbi,
     
    }
];
//0x131F90cb08c8E95B7A18e433E5D496B2f4b24Cbe

let safeTransaction = await safeConnection.createTransaction(...transactions);
await safeConnection.signTransaction(safeTransaction);
await safeConnection2.signTransaction(safeTransaction);
let executeTxResponse = await safeConnection.executeTransaction(safeTransaction);
const receipt =
  executeTxResponse.transactionResponse &&
  (await executeTxResponse.transactionResponse.wait());
console.log(receipt);
 }
 main();