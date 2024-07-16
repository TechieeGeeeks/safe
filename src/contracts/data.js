export const erc20abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "getallowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const erc20bytecode =
  "0x60c06040526005608090815264045524332360dc1b60a052600090610024908261010d565b50604080518082019091526005815264045524332360dc1b602082015260019061004e908261010d565b506002805460ff1916600417905534801561006857600080fd5b506101cc565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061009857607f821691505b6020821081036100b857634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561010857600081815260208120601f850160051c810160208610156100e55750805b601f850160051c820191505b81811015610104578281556001016100f1565b5050505b505050565b81516001600160401b038111156101265761012661006e565b61013a816101348454610084565b846100be565b602080601f83116001811461016f57600084156101575750858301515b600019600386901b1c1916600185901b178555610104565b600085815260208120601f198616915b8281101561019e5788860151825594840194600190910190840161017f565b50858210156101bc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610684806101db6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c806338cc48311161008157806370a082311161005b57806370a08231146101cb57806395d89b41146101eb578063a9059cbb146101f357600080fd5b806338cc48311461019557806340c10f19146101a357806342966c68146101b857600080fd5b806321c4f09f116100b257806321c4f09f1461012a57806323b872dd14610163578063313ce5671461017657600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610206565b6040516100ee91906104ca565b60405180910390f35b61010a610105366004610534565b610294565b60405190151581526020016100ee565b475b6040519081526020016100ee565b61011c61013836600461055e565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b61010a610171366004610591565b610301565b6002546101839060ff1681565b60405160ff90911681526020016100ee565b6040513081526020016100ee565b6101b66101b1366004610534565b610435565b005b6101b66101c63660046105cd565b610466565b61011c6101d93660046105e6565b60036020526000908152604090205481565b6100e16104a9565b61010a610201366004610534565b6104b6565b6000805461021390610601565b80601f016020809104026020016040519081016040528092919081815260200182805461023f90610601565b801561028c5780601f106102615761010080835404028352916020019161028c565b820191906000526020600020905b81548152906001019060200180831161026f57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102ef9086815260200190565b60405180910390a35060015b92915050565b60006001600160a01b038416331480159061034157506001600160a01b038416600090815260046020908152604080832033845290915290205460001914155b156103af576001600160a01b038416600090815260046020908152604080832033845290915290205482111561037657600080fd5b6001600160a01b0384166000908152600460209081526040808320338452909152812080548492906103a9908490610651565b90915550505b6001600160a01b038316600090815260036020526040812080548492906103d7908490610664565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161042391815260200190565b60405180910390a35060019392505050565b6001600160a01b0382166000908152600360205260408120805483929061045d908490610664565b90915550505050565b3360009081526003602052604090205481111561048257600080fd5b33600090815260036020526040812080548392906104a1908490610651565b909155505050565b6001805461021390610601565b60006104c3338484610301565b9392505050565b600060208083528351808285015260005b818110156104f7578581018301518582016040015282016104db565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461052f57600080fd5b919050565b6000806040838503121561054757600080fd5b61055083610518565b946020939093013593505050565b6000806040838503121561057157600080fd5b61057a83610518565b915061058860208401610518565b90509250929050565b6000806000606084860312156105a657600080fd5b6105af84610518565b92506105bd60208501610518565b9150604084013590509250925092565b6000602082840312156105df57600080fd5b5035919050565b6000602082840312156105f857600080fd5b6104c382610518565b600181811c9082168061061557607f821691505b60208210810361063557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102fb576102fb61063b565b808201808211156102fb576102fb61063b56fea164736f6c6343000814000a";

export const safeabi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AddedOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "approvedHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ApproveHash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "ChangedFallbackHandler",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "ChangedGuard",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "moduleGuard",
        type: "address",
      },
    ],
    name: "ChangedModuleGuard",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "ChangedThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "ExecutionFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "ExecutionSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "RemovedOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "owners",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "initializer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fallbackHandler",
        type: "address",
      },
    ],
    name: "SafeSetup",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "SignMsg",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "addOwnerWithThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "addressToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hashToApprove",
        type: "bytes32",
      },
    ],
    name: "approveHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "approvedHashes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "changeThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "requiredSignatures",
        type: "uint256",
      },
    ],
    name: "checkNSignatures",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "requiredSignatures",
        type: "uint256",
      },
    ],
    name: "checkNSignatures",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "checkSignatures",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "checkSignatures",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "safeTxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gasToken",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "refundReceiver",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signatures",
        type: "bytes",
      },
    ],
    name: "execTransaction",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "getStorageAt",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "safeTxGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "baseGas",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gasToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "refundReceiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
    ],
    name: "getTransactionHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "handler",
        type: "address",
      },
    ],
    name: "setFallbackHandler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guard",
        type: "address",
      },
    ],
    name: "setGuard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "moduleGuard",
        type: "address",
      },
    ],
    name: "setModuleGuard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "fallbackHandler",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "paymentReceiver",
        type: "address",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "signedMessages",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "calldataPayload",
        type: "bytes",
      },
    ],
    name: "simulateAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "swapOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export const safebytecode =
  "0x608060405234801561001057600080fd5b5060016004556133ac806100256000396000f3fe6080604052600436106102085760003560e01c8063934f3a1111610118578063e068df37116100a0578063ed516d511161006f578063ed516d51146106bf578063f08a0323146106df578063f698da25146106ff578063f8dc5dd914610769578063ffa1ad741461078957610244565b8063e068df371461064a578063e19a9dd91461066a578063e318b52b1461068a578063e75235b8146106aa57610244565b8063b63e800d116100e7578063b63e800d1461059c578063cc2f8452146105bc578063d4d9bdcd146105ea578063d8d11f781461060a578063e009cfde1461062a57610244565b8063934f3a1114610524578063a0e67e2b14610544578063affed0e014610566578063b4faba091461057c57610244565b8063468721a71161019b5780635e57966d1161016a5780635e57966d14610479578063610b592514610499578063694e80c3146104b95780636a761202146104d95780637d832974146104ec57610244565b8063468721a7146103d15780635229073f146103f15780635624b25b1461041f5780635ae6bd371461044c57610244565b80631fcac7f3116101d75780631fcac7f31461034e5780632d9ad53d1461036e5780632f54bf6e1461039e57806338cc4831146103be57610244565b80630d582f13146102ab5780630db02622146102cd57806312fb68e0146102f657806319c4b5931461031657610244565b366102445760405134815233907f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d9060200160405180910390a2005b34801561025057600080fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d5548061027a57005b60405136600082373360601b3682015260008060143601836000865af191503d6000823e816102a7573d81fd5b3d81f35b3480156102b757600080fd5b506102cb6102c6366004612830565b6107ba565b005b3480156102d957600080fd5b506102e360035481565b6040519081526020015b60405180910390f35b34801561030257600080fd5b506102cb610311366004612948565b61090a565b34801561032257600080fd5b50600554610336906001600160a01b031681565b6040516001600160a01b0390911681526020016102ed565b34801561035a57600080fd5b506102cb6103693660046129c3565b61091d565b34801561037a57600080fd5b5061038e610389366004612a24565b610bde565b60405190151581526020016102ed565b3480156103aa57600080fd5b5061038e6103b9366004612a24565b610c19565b3480156103ca57600080fd5b5030610336565b3480156103dd57600080fd5b5061038e6103ec366004612a50565b610c52565b3480156103fd57600080fd5b5061041161040c366004612a50565b610c8d565b6040516102ed929190612b00565b34801561042b57600080fd5b5061043f61043a366004612b1b565b610ce4565b6040516102ed9190612b3d565b34801561045857600080fd5b506102e3610467366004612b50565b60086020526000908152604090205481565b34801561048557600080fd5b5061043f610494366004612a24565b610d6a565b3480156104a557600080fd5b506102cb6104b4366004612a24565b610faf565b3480156104c557600080fd5b506102cb6104d4366004612b50565b6110a8565b61038e6104e7366004612b69565b61111f565b3480156104f857600080fd5b506102e3610507366004612830565b600960209081526000928352604080842090915290825290205481565b34801561053057600080fd5b506102cb61053f366004612c42565b611420565b34801561055057600080fd5b50610559611430565b6040516102ed9190612cf9565b34801561057257600080fd5b506102e360065481565b34801561058857600080fd5b506102cb610597366004612d0c565b611521565b3480156105a857600080fd5b506102cb6105b7366004612d5c565b611548565b3480156105c857600080fd5b506105dc6105d7366004612830565b61164a565b6040516102ed929190612e51565b3480156105f657600080fd5b506102cb610605366004612b50565b6117cd565b34801561061657600080fd5b506102e3610625366004612e7c565b611843565b34801561063657600080fd5b506102cb610645366004612f3d565b611870565b34801561065657600080fd5b506102cb610665366004612a24565b611952565b34801561067657600080fd5b506102cb610685366004612a24565b611a50565b34801561069657600080fd5b506102cb6106a5366004612f76565b611b4d565b3480156106b657600080fd5b506004546102e3565b3480156106cb57600080fd5b506102cb6106da366004612fc1565b611cee565b3480156106eb57600080fd5b506102cb6106fa366004612a24565b611d1c565b34801561070b57600080fd5b506102e3604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602082015246918101829052306060820152600091906080016040516020818303038152906040528051906020012091505090565b34801561077557600080fd5b506102cb610784366004612ff2565b611d64565b34801561079557600080fd5b5061043f60405180604001604052806005815260200164312e342e3160d81b81525081565b6107c2611e9b565b6001600160a01b03821615806107e157506001600160a01b0382166001145b806107f457506001600160a01b03821630145b1561080a5761080a64475332303360d81b611eb5565b6001600160a01b03828116600090815260026020526040902054161561083b5761083b6411d4cc8c0d60da1b611eb5565b60026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e080546001600160a01b038481166000818152604081208054939094166001600160a01b0319938416179093556001835283549091161790915560038054916108a883613049565b9091555050600580546001600160a01b0319166001600160a01b0384169081179091556040517f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea2690600090a2806004541461090657610906816110a8565b5050565b6109163386848461091d565b5050505050565b610928816041611eda565b825110156109415761094164047533032360dc1b611eb5565b6000808060008060005b86811015610bd25760418102880160208101516040820151606090920151600090811a96509094509092508490036109b657919350839161098d876041611eda565b8210156109a5576109a564475330323160d81b611eb5565b6109b1858a8a85611f16565b610b3f565b83600103610a1d578260001c9450846001600160a01b03168a6001600160a01b031614158015610a0757506001600160a01b03851660009081526009602090815260408083208c8452909152902054155b156109b1576109b164475330323560d81b611eb5565b601e841115610adf576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018a9052600190605c0160405160208183030381529060405280519060200120600486610a7f9190613062565b6040805160008152602081018083529390935260ff90911690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610ace573d6000803e3d6000fd5b505050602060405103519450610b3f565b6040805160008152602081018083528b905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa158015610b32573d6000803e3d6000fd5b5050506020604051035194505b856001600160a01b0316856001600160a01b0316111580610b7857506001600160a01b0385811660009081526002602052604090205416155b80610b8c57506001600160a01b0385166001145b15610bbc57610b9a85610d6a565b60405162461bcd60e51b8152600401610bb39190612b3d565b60405180910390fd5b8495508080610bca90613049565b91505061094b565b50505050505050505050565b600060016001600160a01b03831614801590610c1357506001600160a01b038281166000908152600160205260409020541615155b92915050565b60006001600160a01b03821660011480610c4b57506001600160a01b0382811660009081526002602052604090205416155b1592915050565b6000806000610c638787878761201b565b91509150610c7687878787600019612136565b9250610c8382828561217d565b5050949350505050565b60006060600080610ca08888888861201b565b91509150610cb388888888600019612136565b9350604051925060203d0183016040523d83523d6000602085013e610cd982828661217d565b505094509492505050565b60606000610cf3836020613075565b67ffffffffffffffff811115610d0b57610d0b6128a5565b6040519080825280601f01601f191660200182016040528015610d35576020820181803683370190505b50905060005b83811015610d62578481015460208083028401015280610d5a81613049565b915050610d3b565b509392505050565b604051606082811b6bffffffffffffffffffffffff191660208301529060009060340160408051601f19818403018152828201909152601082526f181899199a1a9b1b9c1cb0b131b232b360811b60208301528051909250600090610dd0906002613075565b610ddb90600261308c565b67ffffffffffffffff811115610df357610df36128a5565b6040519080825280601f01601f191660200182016040528015610e1d576020820181803683370190505b509050600360fc1b81600081518110610e3857610e3861309f565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e6757610e6761309f565b60200101906001600160f81b031916908160001a90535060005b8351811015610fa657826004858381518110610e9f57610e9f61309f565b016020015182516001600160f81b031990911690911c60f81c908110610ec757610ec761309f565b01602001516001600160f81b03191682610ee2836002613075565b610eed90600261308c565b81518110610efd57610efd61309f565b60200101906001600160f81b031916908160001a90535082848281518110610f2757610f2761309f565b602091010151815160f89190911c600f16908110610f4757610f4761309f565b01602001516001600160f81b03191682610f62836002613075565b610f6d90600361308c565b81518110610f7d57610f7d61309f565b60200101906001600160f81b031916908160001a90535080610f9e81613049565b915050610e81565b50949350505050565b610fb7611e9b565b6001600160a01b0381161580610fd657506001600160a01b0381166001145b15610fec57610fec64475331303160d81b611eb5565b6001600160a01b03818116600090815260016020526040902054161561101d5761101d6423a998981960d91b611eb5565b600160208190527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80546001600160a01b03848116600081815260408082208054949095166001600160a01b031994851617909455948552835490911681179092555190917fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844091a250565b6110b0611e9b565b6003548111156110cb576110cb64475332303160d81b611eb5565b806000036110e4576110e46423a999181960d91b611eb5565b60048190556040518181527f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c939060200160405180910390a150565b60008061114b8d8d8d8d8d8d8d8d8d8d6006600081548092919061114290613049565b91905055611843565b905060006111777f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c85490565b90506001600160a01b038116156111fd57806001600160a01b03166375f0bb528f8f8f8f8f8f8f8f8f8f8f336040518d63ffffffff1660e01b81526004016111ca9c9b9a999897969594939291906130ed565b600060405180830381600087803b1580156111e457600080fd5b505af11580156111f8573d6000803e3d6000fd5b505050505b61122961120c8a6109c461308c565b603f6112198c6040613075565b61122391906131b1565b90612255565b611235906101f461308c565b5a101561124d5761124d64047533031360dc1b611eb5565b60005a90506112be8f8f8f8f8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508e8c6000146112ab578e612136565b6109c45a6112b99190613062565b612136565b9350836112ca57600080fd5b6112d55a829061226c565b9050831580156112e3575089155b80156112ed575087155b156113035761130364475330313360d81b611eb5565b6000881561131b57611318828b8b8b8b61228f565b90505b841561136057837f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e8260405161135391815260200190565b60405180910390a261139b565b837f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d238260405161139291815260200190565b60405180910390a25b50506001600160a01b0381161561140f57604051631264e26d60e31b81526004810183905283151560248201526001600160a01b03821690639327136890604401600060405180830381600087803b1580156113f657600080fd5b505af115801561140a573d6000803e3d6000fd5b505050505b50509b9a5050505050505050505050565b61142a8482611cee565b50505050565b6060600060035467ffffffffffffffff81111561144f5761144f6128a5565b604051908082528060200260200182016040528015611478578160200160208202803683370190505b506001600090815260026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e054919250906001600160a01b03165b6001600160a01b03811660011461151957808383815181106114d9576114d961309f565b6001600160a01b0392831660209182029290920181019190915291811660009081526002909252604090912054168161151181613049565b9250506114b5565b509092915050565b600080825160208401855af46040518181523d60208201523d6000604083013e60403d0181fd5b6115868a8a808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508c9250612389915050565b6001600160a01b0384161561159e5761159e84612515565b6115de8787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061255a92505050565b81156115f5576115f38260006001868561228f565b505b336001600160a01b03167f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a88b8b8b8b896040516116369594939291906131d3565b60405180910390a250505050505050505050565b606060006001600160a01b03841660011480159061166e575061166c84610bde565b155b156116845761168464475331303560d81b611eb5565b8260000361169d5761169d6423a998981b60d91b611eb5565b8267ffffffffffffffff8111156116b6576116b66128a5565b6040519080825280602002602001820160405280156116df578160200160208202803683370190505b506001600160a01b03808616600090815260016020526040812054929450911691505b6001600160a01b0382161580159061172457506001600160a01b038216600114155b801561172f57508381105b1561178a57818382815181106117475761174761309f565b6001600160a01b0392831660209182029290920181019190915292811660009081526001909352604090922054909116908061178281613049565b915050611702565b6001600160a01b0382166001146117c257826117a7600183613062565b815181106117b7576117b761309f565b602002602001015191505b808352509250929050565b336000908152600260205260409020546001600160a01b03166117fb576117fb64047533033360dc1b611eb5565b336000818152600960209081526040808320858452909152808220600190555183917ff2a0eb156472d1440255b0d7c1e19cc07115d1051fe605b0dce69acfec884d9c91a350565b60006118588c8c8c8c8c8c8c8c8c8c8c61262f565b8051906020012090509b9a5050505050505050505050565b611878611e9b565b6001600160a01b038116158061189757506001600160a01b0381166001145b156118ad576118ad64475331303160d81b611eb5565b6001600160a01b038281166000908152600160205260409020548116908216146118e2576118e264475331303360d81b611eb5565b6001600160a01b03818116600081815260016020526040808220805487861684528284208054919096166001600160a01b0319918216179095558383528054909416909355915190917faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace405427691a25050565b61195a611e9b565b6001600160a01b038116158015906119de57506040516301ffc9a760e01b8152630b0803db60e31b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa1580156119b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119dc919061323f565b155b156119f4576119f464475333303160d81b611eb5565b7fb104e0b93118902c651344349b610029d694cfdec91c589c91ebafbcd02899478181556040516001600160a01b038316907fcd1966d6be16bc0c030cc741a06c6e0efaf8d00de2c8b6a9e11827e125de8bb890600090a25050565b611a58611e9b565b6001600160a01b03811615801590611adc57506040516301ffc9a760e01b815263736bd41d60e11b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015611ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ada919061323f565b155b15611af257611af264047533330360dc1b611eb5565b7f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c88190556040516001600160a01b038216907f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa290600090a250565b611b55611e9b565b6001600160a01b0381161580611b7457506001600160a01b0381166001145b80611b8757506001600160a01b03811630145b15611b9d57611b9d64475332303360d81b611eb5565b6001600160a01b038181166000908152600260205260409020541615611bce57611bce6411d4cc8c0d60da1b611eb5565b6001600160a01b0382161580611bed57506001600160a01b0382166001145b15611c0357611c0364475332303360d81b611eb5565b6001600160a01b03838116600090815260026020526040902054811690831614611c3857611c3864475332303560d81b611eb5565b6001600160a01b03828116600081815260026020526040808220805486861680855283852080549288166001600160a01b03199384161790559589168452828420805482169096179095558383528054909416909355915190917ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf91a26040516001600160a01b038216907f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea2690600090a2505050565b6004546000819003611d0b57611d0b64475330303160d81b611eb5565b611d173384848461091d565b505050565b611d24611e9b565b611d2d81612515565b6040516001600160a01b038216907f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b090600090a250565b611d6c611e9b565b806001600354611d7c9190613062565b1015611d9357611d9364475332303160d81b611eb5565b6001600160a01b0382161580611db257506001600160a01b0382166001145b15611dc857611dc864475332303360d81b611eb5565b6001600160a01b03838116600090815260026020526040902054811690831614611dfd57611dfd64475332303560d81b611eb5565b6001600160a01b03828116600081815260026020526040808220805488861684529183208054929095166001600160a01b03199283161790945591815282549091169091556003805491611e5083613261565b90915550506040516001600160a01b038316907ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf90600090a28060045414611d1757611d17816110a8565b333014611eb357611eb364475330333160d81b611eb5565b565b60405162461bcd60e51b81526020600482015260056024820152816044820152606481fd5b600082600003611eec57506000610c13565b6000611ef88385613075565b905082611f0585836131b1565b14611f0f57600080fd5b9392505050565b8151611f2382602061275d565b1115611f3a57611f3a6423a998191960d91b611eb5565b60006020828401015190508251611f6582611f5f60208661275d90919063ffffffff16565b9061275d565b1115611f7c57611f7c64475330323360d81b611eb5565b604051630b135d3f60e11b808252848401602001916001600160a01b03881690631626ba7e90611fb29089908690600401613278565b602060405180830381865afa158015611fcf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ff39190613291565b6001600160e01b03191614612013576120136411d4cc0c8d60da1b611eb5565b505050505050565b6000806120467fb104e0b93118902c651344349b610029d694cfdec91c589c91ebafbcd02899475490565b9150336001148015906120705750336000908152600160205260409020546001600160a01b031615155b6120a45760405162461bcd60e51b815260206004820152600560248201526411d4cc4c0d60da1b6044820152606401610bb3565b6001600160a01b0382161561212d5760405163394614b960e11b81526001600160a01b0383169063728c2972906120e790899089908990899033906004016132bb565b6020604051808303816000875af1158015612106573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061212a9190613306565b90505b94509492505050565b6000600183600181111561214c5761214c6130b5565b03612164576000808551602087018986f49050612174565b600080855160208701888a87f190505b95945050505050565b6001600160a01b038316156121ef576040516315661bd560e11b81526004810183905281151560248201526001600160a01b03841690632acc37aa90604401600060405180830381600087803b1580156121d657600080fd5b505af11580156121ea573d6000803e3d6000fd5b505050505b80156122255760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb890600090a2505050565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd37590600090a2505050565b6000818310156122655781611f0f565b5090919050565b60008282111561227b57600080fd5b60006122878385613062565b949350505050565b6000806001600160a01b038316156122a757826122a9565b325b90506001600160a01b03841661234f576122db3a86106122c9573a6122cb565b855b6122d5898961275d565b90611eda565b91506000816001600160a01b03168360405160006040518083038185875af1925050503d806000811461232a576040519150601f19603f3d011682016040523d82523d6000602084013e61232f565b606091505b50509050806123495761234964475330313160d81b611eb5565b5061237f565b61235d856122d5898961275d565b915061236a848284612779565b61237f5761237f6423a998189960d91b611eb5565b5095945050505050565b600454156123a2576123a264047533230360dc1b611eb5565b81518111156123bc576123bc64475332303160d81b611eb5565b806000036123d5576123d56423a999181960d91b611eb5565b600160005b83518110156124e25760008482815181106123f7576123f761309f565b6020026020010151905060006001600160a01b0316816001600160a01b0316148061242b57506001600160a01b0381166001145b8061243e57506001600160a01b03811630145b8061245a5750806001600160a01b0316836001600160a01b0316145b156124705761247064475332303360d81b611eb5565b6001600160a01b0381811660009081526002602052604090205416156124a1576124a16411d4cc8c0d60da1b611eb5565b6001600160a01b03928316600090815260026020526040902080546001600160a01b03191693821693909317909255806124da81613049565b9150506123da565b506001600160a01b0316600090815260026020526040902080546001600160a01b03191660011790559051600355600455565b306001600160a01b038216036125365761253664047533430360dc1b611eb5565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b600160008190526020527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f546001600160a01b0316156125a5576125a564047533130360dc1b611eb5565b6001600081905260208190527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80546001600160a01b03191690911790556001600160a01b0382161561090657813b612609576126096423a998181960d91b611eb5565b61261a826000836001600019612136565b6109065761090664047533030360dc1b611eb5565b606060007fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d860001b8d8d8d8d60405161266992919061331f565b60405190819003812061268f949392918e908e908e908e908e908e908e9060200161332f565b60408051601f1981840301815291905280516020909101209050601960f81b600160f81b612710604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a79469218602082015246918101829052306060820152600091906080016040516020818303038152906040528051906020012091505090565b6040516001600160f81b031993841660208201529290911660218301526022820152604281018290526062016040516020818303038152906040529150509b9a5050505050505050505050565b60008061276a838561308c565b905083811015611f0f57600080fd5b604080516001600160a01b03841660248201526044808201849052825180830390910181526064909101909152602080820180516001600160e01b031663a9059cbb60e01b1781528251600093929184919082896127105a03f13d80156127eb57602081146127f357600093506127fe565b8193506127fe565b600051158215171593505b5050509392505050565b6001600160a01b038116811461281d57600080fd5b50565b803561282b81612808565b919050565b6000806040838503121561284357600080fd5b823561284e81612808565b946020939093013593505050565b60008083601f84011261286e57600080fd5b50813567ffffffffffffffff81111561288657600080fd5b60208301915083602082850101111561289e57600080fd5b9250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126128cc57600080fd5b813567ffffffffffffffff808211156128e7576128e76128a5565b604051601f8301601f19908116603f0116810190828211818310171561290f5761290f6128a5565b8160405283815286602085880101111561292857600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060006080868803121561296057600080fd5b85359450602086013567ffffffffffffffff8082111561297f57600080fd5b61298b89838a0161285c565b909650945060408801359150808211156129a457600080fd5b506129b1888289016128bb565b95989497509295606001359392505050565b600080600080608085870312156129d957600080fd5b84356129e481612808565b935060208501359250604085013567ffffffffffffffff811115612a0757600080fd5b612a13878288016128bb565b949793965093946060013593505050565b600060208284031215612a3657600080fd5b8135611f0f81612808565b80356002811061282b57600080fd5b60008060008060808587031215612a6657600080fd5b8435612a7181612808565b935060208501359250604085013567ffffffffffffffff811115612a9457600080fd5b612aa0878288016128bb565b925050612aaf60608601612a41565b905092959194509250565b6000815180845260005b81811015612ae057602081850181015186830182015201612ac4565b506000602082860101526020601f19601f83011685010191505092915050565b82151581526040602082015260006122876040830184612aba565b60008060408385031215612b2e57600080fd5b50508035926020909101359150565b602081526000611f0f6020830184612aba565b600060208284031215612b6257600080fd5b5035919050565b60008060008060008060008060008060006101408c8e031215612b8b57600080fd5b612b948c612820565b9a5060208c0135995067ffffffffffffffff8060408e01351115612bb757600080fd5b612bc78e60408f01358f0161285c565b909a509850612bd860608e01612a41565b975060808d0135965060a08d0135955060c08d01359450612bfb60e08e01612820565b9350612c0a6101008e01612820565b9250806101208e01351115612c1e57600080fd5b50612c308d6101208e01358e016128bb565b90509295989b509295989b9093969950565b60008060008060608587031215612c5857600080fd5b84359350602085013567ffffffffffffffff80821115612c7757600080fd5b612c838883890161285c565b90955093506040870135915080821115612c9c57600080fd5b50612ca9878288016128bb565b91505092959194509250565b600081518084526020808501945080840160005b83811015612cee5781516001600160a01b031687529582019590820190600101612cc9565b509495945050505050565b602081526000611f0f6020830184612cb5565b60008060408385031215612d1f57600080fd5b8235612d2a81612808565b9150602083013567ffffffffffffffff811115612d4657600080fd5b612d52858286016128bb565b9150509250929050565b6000806000806000806000806000806101008b8d031215612d7c57600080fd5b8a3567ffffffffffffffff80821115612d9457600080fd5b818d0191508d601f830112612da857600080fd5b813581811115612db757600080fd5b8e60208260051b8501011115612dcc57600080fd5b60208381019d50909b508d01359950612de760408e01612820565b985060608d0135915080821115612dfd57600080fd5b50612e0a8d828e0161285c565b9097509550612e1d905060808c01612820565b9350612e2b60a08c01612820565b925060c08b01359150612e4060e08c01612820565b90509295989b9194979a5092959850565b604081526000612e646040830185612cb5565b90506001600160a01b03831660208301529392505050565b60008060008060008060008060008060006101408c8e031215612e9e57600080fd5b8b35612ea981612808565b9a5060208c0135995060408c013567ffffffffffffffff811115612ecc57600080fd5b612ed88e828f0161285c565b909a509850612eeb905060608d01612a41565b965060808c0135955060a08c0135945060c08c0135935060e08c0135612f1081612808565b92506101008c0135612f2181612808565b809250506101208c013590509295989b509295989b9093969950565b60008060408385031215612f5057600080fd5b8235612f5b81612808565b91506020830135612f6b81612808565b809150509250929050565b600080600060608486031215612f8b57600080fd5b8335612f9681612808565b92506020840135612fa681612808565b91506040840135612fb681612808565b809150509250925092565b60008060408385031215612fd457600080fd5b82359150602083013567ffffffffffffffff811115612d4657600080fd5b60008060006060848603121561300757600080fd5b833561301281612808565b9250602084013561302281612808565b929592945050506040919091013590565b634e487b7160e01b600052601160045260246000fd5b60006001820161305b5761305b613033565b5060010190565b81810381811115610c1357610c13613033565b8082028115828204841417610c1357610c13613033565b80820180821115610c1357610c13613033565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b600281106130e957634e487b7160e01b600052602160045260246000fd5b9052565b60006101606001600160a01b038f1683528d60208401528060408401528b81840152506101808b8d828501376000838d01820152601f8c01601f19168301613138606085018d6130cb565b8a60808501528960a08501528860c085015261315f60e08501896001600160a01b03169052565b6001600160a01b038716610100850152818482030161012085015261318682820187612aba565b925050506131a06101408301846001600160a01b03169052565b9d9c50505050505050505050505050565b6000826131ce57634e487b7160e01b600052601260045260246000fd5b500490565b6080808252810185905260008660a08301825b888110156132165782356131f981612808565b6001600160a01b03168252602092830192909101906001016131e6565b50602084019690965250506001600160a01b039283166040820152911660609091015292915050565b60006020828403121561325157600080fd5b81518015158114611f0f57600080fd5b60008161327057613270613033565b506000190190565b8281526040602082015260006122876040830184612aba565b6000602082840312156132a357600080fd5b81516001600160e01b031981168114611f0f57600080fd5b60006001600160a01b03808816835286602084015260a060408401526132e460a0840187612aba565b91506132f360608401866130cb565b8084166080840152509695505050505050565b60006020828403121561331857600080fd5b5051919050565b8183823760009101908152919050565b6000610160820190508c82526001600160a01b03808d1660208401528b60408401528a6060840152613364608084018b6130cb565b60a083019890985260c082019690965260e081019490945291851661010084015290931661012082015261014001919091529594505050505056fea164736f6c6343000814000a";

export const encryptederc20abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_erc20",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "publicKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "getTotalSupply",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "make",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "mintTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "originalToken",
    outputs: [
      {
        internalType: "contract ERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "euint32",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "euint32",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "encryptedAmount",
        type: "bytes",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "depositData",
        type: "bytes",
      },
    ],
    name: "wrapAndDistribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const encryptederc20bytecode =
  "0x6101606040523480156200001257600080fd5b5060405162002046380380620020468339810160408190526200003591620001f4565b604080518082018252601381527f417574686f72697a6174696f6e20746f6b656e00000000000000000000000000602080830191909152825180840190935260018352603160f81b90830152908181620000918260006200016f565b61012052620000a28160016200016f565b61014052815160208084019190912060e052815190820120610100524660a0526200013060e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052505060078054336001600160a01b031991821617909155600380549091166001600160a01b03929092169190911790556200040c565b60006020835110156200018f576200018783620001a8565b9050620001a2565b816200019c8482620002cb565b5060ff90505b92915050565b600080829050601f81511115620001df578260405163305a27a960e01b8152600401620001d6919062000397565b60405180910390fd5b8051620001ec82620003e7565b179392505050565b6000602082840312156200020757600080fd5b81516001600160a01b03811681146200021f57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200025157607f821691505b6020821081036200027257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002c657600081815260208120601f850160051c81016020861015620002a15750805b601f850160051c820191505b81811015620002c257828155600101620002ad565b5050505b505050565b81516001600160401b03811115620002e757620002e762000226565b620002ff81620002f884546200023c565b8462000278565b602080601f8311600181146200033757600084156200031e5750858301515b600019600386901b1c1916600185901b178555620002c2565b600085815260208120601f198616915b82811015620003685788860151825594840194600190910190840162000347565b5085821015620003875787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208083528351808285015260005b81811015620003c657858101830151858201604001528201620003a8565b506000604082860101526040601f19601f8301168501019250505092915050565b80516020808301519190811015620002725760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611bdf62000467600039600061064a0152600061062001526000610f3301526000610f0b01526000610e6601526000610e9001526000610eba0152611bdf6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80634e71d92d116100a2578063a9059cbb11610071578063a9059cbb14610249578063b6ce514b1461025c578063c20382361461026f578063c6dad0821461012e578063f98aa0851461028257600080fd5b80634e71d92d146102005780637b7c65c9146102085780637ba0e2e71461021b57806384b0196e1461022e57600080fd5b806329723511116100e957806329723511146101a7578063313ce567146101ba57806338cc4831146101d45780633d3503d9146101da57806349972663146101ed57600080fd5b8063014647f41461011b57806306fdde03146101305780630e7c1cb51461016957806323b872dd14610194575b600080fd5b61012e61012936600461149b565b610295565b005b6101536040518060400160405280600481526020016310d554d160e21b81525081565b6040516101609190611540565b60405180910390f35b60035461017c906001600160a01b031681565b6040516001600160a01b039091168152602001610160565b61012e6101a2366004611553565b610310565b61012e6101b536600461149b565b610327565b6101c2601281565b60405160ff9091168152602001610160565b3061017c565b61012e6101e8366004611682565b61036f565b61012e6101fb3660046116d2565b6103ce565b61012e610412565b610153610216366004611737565b6104c7565b61012e61022936600461176a565b6105c6565b610236610612565b604051610160979695949392919061179f565b61012e610257366004611835565b61069a565b61015361026a366004611861565b6106a9565b61015361027d3660046118a5565b610794565b61012e6102903660046118d5565b6107c5565b600033905061030a81856102de86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061091192505050565b6001600160a01b0392831660009081526006602090815260408083209490951682529290925291902055565b50505050565b3361031c84828461091e565b61030a848484610965565b61036a8361025784848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061091192505050565b505050565b600061037a82610911565b6001600160a01b0384166000908152600560205260409020549091506103a09082610a00565b6001600160a01b0384166000908152600560205260409020556002546103c69082610a00565b600255505050565b61030a84846101a285858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061091192505050565b3360009081526005602052604081205461042b90610a32565b60035460405163a9059cbb60e01b815233600482015263ffffffff929092166024830181905292506001600160a01b03169063a9059cbb906044016020604051808303816000875af1158015610485573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a99190611906565b506104b46000610a3d565b3360009081526005602052604090205550565b6007546060906001600160a01b031633146104e157600080fd5b8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce602082015290810187905290935061056d925060600190505b60405160208183030381529060405280519060200120610a4a565b9050600061057b8284610a77565b90506001600160a01b03811633146105ae5760405162461bcd60e51b81526004016105a590611928565b60405180910390fd5b6105ba60025489610a9b565b98975050505050505050565b60006105d182610911565b336000908152600560205260409020549091506105ee9082610a00565b3360009081526005602052604090205560025461060b9082610a00565b6002555050565b6000606080828080836106457f000000000000000000000000000000000000000000000000000000000000000083610aa7565b6106707f00000000000000000000000000000000000000000000000000000000000000006001610aa7565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6106a5338383610965565b5050565b60608383838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce602082015290810187905290935061072092506060019050610552565b9050600061072e8284610a77565b90506001600160a01b03811633146107585760405162461bcd60e51b81526004016105a590611928565b3360008181526006602090815260408083206001600160a01b038e168452909152902054610786908a610a9b565b9a9950505050505050505050565b6001600160a01b0381166000908152600560205260408120546060916107bc91908590610b52565b90505b92915050565b6003546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561081c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108409190611906565b5060008180602001905181019061085791906119be565b90506000805b82518110156108ed576108aa83828151811061087b5761087b611ac8565b60200260200101516000015184838151811061089957610899611ac8565b60200260200101516020015161036f565b6108d9826108d48584815181106108c3576108c3611ac8565b602002602001015160200151610911565b610a00565b9150806108e581611ade565b91505061085d565b506109086109036108fd86610a3d565b83610b8a565b610bc6565b61030a57600080fd5b60006107bf826002610bd9565b6001600160a01b038381166000908152600660209081526040808320938616835292905220546109566109518383610c6f565b610ca4565b61030a84846102de8486610cb0565b6001600160a01b03831660009081526005602052604090205461098d90610951908390610c6f565b6001600160a01b0382166000908152600560205260409020546109b09082610a00565b6001600160a01b0380841660009081526005602052604080822093909355908516815220546109df9082610cb0565b6001600160a01b039093166000908152600560205260409020929092555050565b600082610a1457610a116000610a3d565b92505b81610a2657610a236000610a3d565b91505b6107bc83836000610ce2565b60006107bf82610d7c565b60006107bf826002610de0565b60006107bf610a57610e59565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000610a868585610f89565b91509150610a9381610fce565b509392505050565b60606107bc8383611118565b606060ff8314610ac157610aba83611187565b90506107bf565b818054610acd90611b05565b80601f0160208091040260200160405190810160405280929190818152602001828054610af990611b05565b8015610b465780601f10610b1b57610100808354040283529160200191610b46565b820191906000526020600020905b815481529060010190602001808311610b2957829003601f168201915b505050505090506107bf565b60608315610b6b57610b648484611118565b9050610b83565b610b64610b7d8363ffffffff16610a3d565b84611118565b9392505050565b600082610b9e57610b9b6000610a3d565b92505b81610bb057610bad6000610a3d565b91505b6107bc610bbf848460006111c6565b600061121a565b6000610bd182610d7c565b151592915050565b600080838360f81b604051602001610bf2929190611b3f565b60408051601f1981840301815290829052630964a5d960e31b82529150605d90634b252ec890610c26908490600401611540565b602060405180830381865afa158015610c43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c679190611b6e565b949350505050565b600082610c8357610c806000610a3d565b92505b81610c9557610c926000610a3d565b91505b6107bc610bbf84846000611256565b610cad816112aa565b50565b600082610cc457610cc16000610a3d565b92505b81610cd657610cd36000610a3d565b91505b6107bc83836000611304565b6000808215610cf65750600160f81b610cfa565b5060005b60405163f953e42760e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063f953e427906064015b602060405180830381865afa158015610d4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d739190611b6e565b95945050505050565b6040516301693b9160e61b815260048101829052600090605d90635a4ee44090602401602060405180830381865afa158015610dbc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bf9190611b6e565b604051631ce2e8d760e31b8152600481018390526001600160f81b031960f883901b166024820152600090605d9063e71746b8906044015b602060405180830381865afa158015610e35573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107bc9190611b6e565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610eb257507f000000000000000000000000000000000000000000000000000000000000000046145b15610edc57507f000000000000000000000000000000000000000000000000000000000000000090565b610f84604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b905090565b6000808251604103610fbf5760208301516040840151606085015160001a610fb387828585611358565b94509450505050610fc7565b506000905060025b9250929050565b6000816004811115610fe257610fe2611b87565b03610fea5750565b6001816004811115610ffe57610ffe611b87565b0361104b5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105a5565b600281600481111561105f5761105f611b87565b036110ac5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105a5565b60038160048111156110c0576110c0611b87565b03610cad5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105a5565b60405163d6ad57cd60e01b81526004810183905260248101829052606090605d9063d6ad57cd90604401600060405180830381865afa15801561115f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107bc9190810190611b9d565b606060006111948361141c565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b60008082156111da5750600160f81b6111de565b5060005b60405163052896f160e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063052896f190606401610d32565b60405163025f346960e51b8152600481018390526001600160f81b031960f883901b166024820152600090605d90634be68d2090604401610e18565b600080821561126a5750600160f81b61126e565b5060005b6040516334a6d7b960e11b815260048101869052602481018590526001600160f81b031982166044820152605d9063694daf7290606401610d32565b6000816040516024016112bf91815260200190565b60408051601f198184030181529190526020810180516001600160e01b0316634ee071a160e01b1781528151919250605d9060009081908490845afa61030a57600080fd5b60008082156113185750600160f81b61131c565b5060005b604051638c14cc2160e01b815260048101869052602481018590526001600160f81b031982166044820152605d90638c14cc2190606401610d32565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561138f5750600090506003611413565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156113e3573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661140c57600060019250925050611413565b9150600090505b94509492505050565b600060ff8216601f8111156107bf57604051632cd44ac360e21b815260040160405180910390fd5b6001600160a01b0381168114610cad57600080fd5b60008083601f84011261146b57600080fd5b50813567ffffffffffffffff81111561148357600080fd5b602083019150836020828501011115610fc757600080fd5b6000806000604084860312156114b057600080fd5b83356114bb81611444565b9250602084013567ffffffffffffffff8111156114d757600080fd5b6114e386828701611459565b9497909650939450505050565b60005b8381101561150b5781810151838201526020016114f3565b50506000910152565b6000815180845261152c8160208601602086016114f0565b601f01601f19169290920160200192915050565b6020815260006107bc6020830184611514565b60008060006060848603121561156857600080fd5b833561157381611444565b9250602084013561158381611444565b929592945050506040919091013590565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156115cd576115cd611594565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156115fc576115fc611594565b604052919050565b600067ffffffffffffffff82111561161e5761161e611594565b50601f01601f191660200190565b600082601f83011261163d57600080fd5b813561165061164b82611604565b6115d3565b81815284602083860101111561166557600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561169557600080fd5b82356116a081611444565b9150602083013567ffffffffffffffff8111156116bc57600080fd5b6116c88582860161162c565b9150509250929050565b600080600080606085870312156116e857600080fd5b84356116f381611444565b9350602085013561170381611444565b9250604085013567ffffffffffffffff81111561171f57600080fd5b61172b87828801611459565b95989497509550505050565b60008060006040848603121561174c57600080fd5b83359250602084013567ffffffffffffffff8111156114d757600080fd5b60006020828403121561177c57600080fd5b813567ffffffffffffffff81111561179357600080fd5b610c678482850161162c565b60ff60f81b881681526000602060e0818401526117bf60e084018a611514565b83810360408501526117d1818a611514565b606085018990526001600160a01b038816608086015260a0850187905284810360c0860152855180825283870192509083019060005b8181101561182357835183529284019291840191600101611807565b50909c9b505050505050505050505050565b6000806040838503121561184857600080fd5b823561185381611444565b946020939093013593505050565b6000806000806060858703121561187757600080fd5b843561188281611444565b935060208501359250604085013567ffffffffffffffff81111561171f57600080fd5b600080604083850312156118b857600080fd5b8235915060208301356118ca81611444565b809150509250929050565b600080604083850312156118e857600080fd5b82359150602083013567ffffffffffffffff8111156116bc57600080fd5b60006020828403121561191857600080fd5b81518015158114610b8357600080fd5b60208082526031908201527f454950373132207369676e657220616e64207472616e73616374696f6e2073696040820152700cedccae440c8de40dcdee840dac2e8c6d607b1b606082015260800190565b600082601f83011261198a57600080fd5b815161199861164b82611604565b8181528460208386010111156119ad57600080fd5b610c678260208301602087016114f0565b600060208083850312156119d157600080fd5b825167ffffffffffffffff808211156119e957600080fd5b818501915085601f8301126119fd57600080fd5b815181811115611a0f57611a0f611594565b8060051b611a1e8582016115d3565b9182528381018501918581019089841115611a3857600080fd5b86860192505b83831015611abb57825185811115611a565760008081fd5b86016040818c03601f1901811315611a6e5760008081fd5b611a766115aa565b89830151611a8381611444565b8152908201519087821115611a985760008081fd5b611aa68d8b84860101611979565b818b0152845250509186019190860190611a3e565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b600060018201611afe57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c90821680611b1957607f821691505b602082108103611b3957634e487b7160e01b600052602260045260246000fd5b50919050565b60008351611b518184602088016114f0565b6001600160f81b0319939093169190920190815260010192915050565b600060208284031215611b8057600080fd5b5051919050565b634e487b7160e01b600052602160045260246000fd5b600060208284031215611baf57600080fd5b815167ffffffffffffffff811115611bc657600080fd5b610c678482850161197956fea164736f6c6343000814000a0000000000000000000000007725a89ac9b9f65d6477434d3f557b822c7fee1f";

export const deployerABIBytecode =
  "erc608060405234801561000f575f80fd5b506167ac8061001d5f395ff3fe608060405234801562000010575f80fd5b50600436106200002c575f3560e01c80634c643be81462000030575b5f80fd5b62000047620000413660046200036e565b6200008a565b604080516001600160a01b03978816815295871660208701529386168585015291851660608501528416608084015290921660a082015290519081900360c00190f35b5f805f805f805f8a6001604051620000a29062000269565b620000af92919062000421565b604051809103905ff080158015620000c9573d5f803e3d5ffd5b5090505f8a6001604051620000de9062000269565b620000eb92919062000421565b604051809103905ff08015801562000105573d5f803e3d5ffd5b5090505f8a60016040516200011a9062000269565b6200012792919062000421565b604051809103905ff08015801562000141573d5f803e3d5ffd5b5090505f8a6001604051620001569062000269565b6200016392919062000421565b604051809103905ff0801580156200017d573d5f803e3d5ffd5b5090505f6040516200018f9062000277565b604051809103905ff080158015620001a9573d5f803e3d5ffd5b5090505f81604051620001bc9062000285565b6001600160a01b039091168152602001604051809103905ff080158015620001e6573d5f803e3d5ffd5b506040516340c10f1960e01b81526001600160a01b038881166004830152620f42406024830152919250908316906340c10f19906044015f604051808303815f87803b15801562000235575f80fd5b505af115801562000248573d5f803e3d5ffd5b50979d50959b50939950919750955093505050509499939850945094509450565b613b0d806200047483390190565b6108508062003f8183390190565b611fa680620047d183390190565b634e487b7160e01b5f52604160045260245ffd5b80356001600160a01b0381168114620002be575f80fd5b919050565b5f82601f830112620002d3575f80fd5b8135602067ffffffffffffffff80831115620002f357620002f362000293565b8260051b604051601f19603f830116810181811084821117156200031b576200031b62000293565b60405293845285810183019383810192508785111562000339575f80fd5b83870191505b8482101562000363576200035382620002a7565b835291830191908301906200033f565b979650505050505050565b5f805f806080858703121562000382575f80fd5b843567ffffffffffffffff808211156200039a575f80fd5b620003a888838901620002c3565b95506020870135915080821115620003be575f80fd5b620003cc88838901620002c3565b94506040870135915080821115620003e2575f80fd5b620003f088838901620002c3565b9350606087013591508082111562000406575f80fd5b506200041587828801620002c3565b91505092959194509250565b604080825283519082018190525f906020906060840190828701845b82811015620004645781516001600160a01b0316845292840192908401906001016200043d565b5050509201929092529291505056fe608060405234801562000010575f80fd5b5060405162003b0d38038062003b0d833981016040819052620000339162000647565b6040805161dead60208201526200006591849184915f910160408051601f198184030181529190525f8080806200006e565b506200082e9050565b6200007a88886200010d565b6001600160a01b0384161562000095576200009584620002ab565b620000a18686620002f3565b8115620000ba57620000b8825f60018685620003b0565b505b336001600160a01b03167f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a889898988604051620000fb94939291906200071c565b60405180910390a25050505050505050565b6004541562000129576200012964047533230360dc1b620004bc565b815181111562000146576200014664475332303160d81b620004bc565b805f036200016157620001616423a999181960d91b620004bc565b60015f5b835181101562000279575f84828151811062000185576200018562000787565b602002602001015190505f6001600160a01b0316816001600160a01b03161480620001b957506001600160a01b0381166001145b80620001cd57506001600160a01b03811630145b80620001ea5750806001600160a01b0316836001600160a01b0316145b1562000203576200020364475332303360d81b620004bc565b6001600160a01b038181165f9081526002602052604090205416156200023657620002366411d4cc8c0d60da1b620004bc565b6001600160a01b039283165f90815260026020526040902080546001600160a01b03191693821693909317909255806200027081620007af565b91505062000165565b506001600160a01b03165f90815260026020526040902080546001600160a01b03191660011790559051600355600455565b306001600160a01b03821603620002cf57620002cf64047533430360dc1b620004bc565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b60015f8190526020525f8051602062003aed833981519152546001600160a01b0316156200032e576200032e64047533130360dc1b620004bc565b60015f81905260208190525f8051602062003aed83398151915280546001600160a01b03191690911790556001600160a01b03821615620003ac57813b6200038357620003836423a998181960d91b620004bc565b62000394825f8360015f19620004e1565b620003ac57620003ac64047533030360dc1b620004bc565b5050565b5f806001600160a01b03831615620003c95782620003cb565b325b90506001600160a01b0384166200047a57620004043a8610620003ef573a620003f1565b855b620003fd89896200052a565b9062000550565b91505f816001600160a01b0316836040515f6040518083038185875af1925050503d805f811462000451576040519150601f19603f3d011682016040523d82523d5f602084013e62000456565b606091505b505090508062000473576200047364475330313160d81b620004bc565b50620004b2565b6200048b85620003fd89896200052a565b91506200049a84828462000587565b620004b257620004b26423a998189960d91b620004bc565b5095945050505050565b60405162461bcd60e51b81526020600482015260056024820152816044820152606481fd5b5f6001836001811115620004f957620004f9620007ca565b0362000512575f808551602087018986f4905062000521565b5f80855160208701888a87f190505b95945050505050565b5f80620005388385620007de565b90508381101562000547575f80fd5b90505b92915050565b5f825f036200056157505f6200054a565b5f6200056e8385620007f4565b9050826200057d85836200080e565b1462000547575f80fd5b604080516001600160a01b03841660248201526044808201849052825180830390910181526064909101909152602080820180516001600160e01b031663a9059cbb60e01b17815282515f93929184919082896127105a03f13d8015620005fa576020811462000603575f93506200060d565b8193506200060d565b5f51158215171593505b5050509392505050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b038116811462000642575f80fd5b919050565b5f806040838503121562000659575f80fd5b82516001600160401b038082111562000670575f80fd5b818501915085601f83011262000684575f80fd5b81516020828211156200069b576200069b62000617565b8160051b604051601f19603f83011681018181108682111715620006c357620006c362000617565b604052928352818301935084810182019289841115620006e1575f80fd5b948201945b838610156200070a57620006fa866200062b565b85529482019493820193620006e6565b97909101519698969750505050505050565b608080825285519082018190525f9060209060a0840190828901845b828110156200075f5781516001600160a01b03168452928401929084019060010162000738565b50505090830195909552506001600160a01b0392831660408201529116606090910152919050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201620007c357620007c36200079b565b5060010190565b634e487b7160e01b5f52602160045260245ffd5b808201808211156200054a576200054a6200079b565b80820281158282048414176200054a576200054a6200079b565b5f826200082957634e487b7160e01b5f52601260045260245ffd5b500490565b6132b1806200083c5f395ff3fe608060405260043610610237575f3560e01c8063934f3a1111610137578063e068df37116100af578063ed516d511161007e578063f698da2511610063578063f698da2514610708578063f8dc5dd914610770578063ffa1ad741461078f57610273565b8063ed516d51146106ca578063f08a0323146106e957610273565b8063e068df3714610659578063e19a9dd914610678578063e318b52b14610697578063e75235b8146106b657610273565b8063b63e800d11610106578063d4d9bdcd116100eb578063d4d9bdcd146105fc578063d8d11f781461061b578063e009cfde1461063a57610273565b8063b63e800d146105b0578063cc2f8452146105cf57610273565b8063934f3a111461053c578063a0e67e2b1461055b578063affed0e01461057c578063b4faba091461059157610273565b8063468721a7116101ca5780635e57966d11610199578063694e80c31161017e578063694e80c3146104d45780636a761202146104f35780637d8329741461050657610273565b80635e57966d14610496578063610b5925146104b557610273565b8063468721a7146103f35780635229073f146104125780635624b25b1461043f5780635ae6bd371461046b57610273565b80631fcac7f3116102065780631fcac7f3146103745780632d9ad53d146103935780632f54bf6e146103c257806338cc4831146103e157610273565b80630d582f13146102d55780630db02622146102f657806312fb68e01461031e57806319c4b5931461033d57610273565b366102735760405134815233907f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d9060200160405180910390a2005b34801561027e575f80fd5b507f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d554806102a857005b604051365f82373360601b368201525f8060143601835f865af191503d5f823e816102d1573d81fd5b3d81f35b3480156102e0575f80fd5b506102f46102ef366004612767565b6107bf565b005b348015610301575f80fd5b5061030b60035481565b6040519081526020015b60405180910390f35b348015610329575f80fd5b506102f4610338366004612887565b61090c565b348015610348575f80fd5b5060055461035c906001600160a01b031681565b6040516001600160a01b039091168152602001610315565b34801561037f575f80fd5b506102f461038e3660046128fc565b61091f565b34801561039e575f80fd5b506103b26103ad366004612959565b610bd3565b6040519015158152602001610315565b3480156103cd575f80fd5b506103b26103dc366004612959565b610c0c565b3480156103ec575f80fd5b503061035c565b3480156103fe575f80fd5b506103b261040d366004612982565b610c43565b34801561041d575f80fd5b5061043161042c366004612982565b610c7b565b604051610315929190612a2b565b34801561044a575f80fd5b5061045e610459366004612a45565b610cce565b6040516103159190612a65565b348015610476575f80fd5b5061030b610485366004612a77565b60086020525f908152604090205481565b3480156104a1575f80fd5b5061045e6104b0366004612959565b610d52565b3480156104c0575f80fd5b506102f46104cf366004612959565b610f9c565b3480156104df575f80fd5b506102f46104ee366004612a77565b611093565b6103b2610501366004612a8e565b611109565b348015610511575f80fd5b5061030b610520366004612767565b600960209081525f928352604080842090915290825290205481565b348015610547575f80fd5b506102f4610556366004612b5e565b611402565b348015610566575f80fd5b5061056f611412565b6040516103159190612c0e565b348015610587575f80fd5b5061030b60065481565b34801561059c575f80fd5b506102f46105ab366004612c20565b611500565b3480156105bb575f80fd5b506102f46105ca366004612c6d565b611525565b3480156105da575f80fd5b506105ee6105e9366004612767565b6115b8565b604051610315929190612d91565b348015610607575f80fd5b506102f4610616366004612a77565b611737565b348015610626575f80fd5b5061030b610635366004612dbb565b6117ab565b348015610645575f80fd5b506102f4610654366004612e74565b6117d7565b348015610664575f80fd5b506102f4610673366004612959565b6118b7565b348015610683575f80fd5b506102f4610692366004612959565b6119b2565b3480156106a2575f80fd5b506102f46106b1366004612eab565b611aac565b3480156106c1575f80fd5b5060045461030b565b3480156106d5575f80fd5b506102f46106e4366004612ef3565b611c49565b3480156106f4575f80fd5b506102f4610703366004612959565b611c76565b348015610713575f80fd5b5061030b604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152469181018290523060608201525f91906080016040516020818303038152906040528051906020012091505090565b34801561077b575f80fd5b506102f461078a366004612f21565b611cbd565b34801561079a575f80fd5b5061045e60405180604001604052806005815260200164312e342e3160d81b81525081565b6107c7611df1565b6001600160a01b03821615806107e657506001600160a01b0382166001145b806107f957506001600160a01b03821630145b1561080f5761080f64475332303360d81b611e0b565b6001600160a01b038281165f90815260026020526040902054161561083f5761083f6411d4cc8c0d60da1b611e0b565b60026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e080546001600160a01b038481165f818152604081208054939094166001600160a01b0319938416179093556001835283549091161790915560038054916108ab83612f73565b9091555050600580546001600160a01b0319166001600160a01b0384169081179091556040517f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea26905f90a280600454146109085761090881611093565b5050565b6109183386848461091f565b5050505050565b61092a816041611e30565b825110156109435761094364047533032360dc1b611e0b565b5f80805f805f5b86811015610bc757604181028801602081015160408201516060909201515f90811a96509094509092508490036109b457919350839161098b876041611e30565b8210156109a3576109a364475330323160d81b611e0b565b6109af858a8a85611e67565b610b35565b83600103610a1957825f1c9450846001600160a01b03168a6001600160a01b031614158015610a0357506001600160a01b0385165f9081526009602090815260408083208c8452909152902054155b156109af576109af64475330323560d81b611e0b565b601e841115610ad8576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018a9052600190605c0160405160208183030381529060405280519060200120600486610a7b9190612f8b565b604080515f8152602081018083529390935260ff90911690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610ac7573d5f803e3d5ffd5b505050602060405103519450610b35565b604080515f8152602081018083528b905260ff861691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa158015610b28573d5f803e3d5ffd5b5050506020604051035194505b856001600160a01b0316856001600160a01b0316111580610b6d57506001600160a01b038581165f9081526002602052604090205416155b80610b8157506001600160a01b0385166001145b15610bb157610b8f85610d52565b60405162461bcd60e51b8152600401610ba89190612a65565b60405180910390fd5b8495508080610bbf90612f73565b91505061094a565b50505050505050505050565b5f60016001600160a01b03831614801590610c0657506001600160a01b038281165f908152600160205260409020541615155b92915050565b5f6001600160a01b03821660011480610c3c57506001600160a01b038281165f9081526002602052604090205416155b1592915050565b5f805f610c5287878787611f69565b91509150610c64878787875f1961207f565b9250610c718282856120c3565b5050949350505050565b5f60605f80610c8c88888888611f69565b91509150610c9e888888885f1961207f565b9350604051925060203d0183016040523d83523d5f602085013e610cc38282866120c3565b505094509492505050565b60605f610cdc836020612f9e565b67ffffffffffffffff811115610cf457610cf46127d6565b6040519080825280601f01601f191660200182016040528015610d1e576020820181803683370190505b5090505f5b83811015610d4a578481015460208083028401015280610d4281612f73565b915050610d23565b509392505050565b604051606082811b6bffffffffffffffffffffffff19166020830152905f9060340160408051601f19818403018152828201909152601082527f3031323334353637383961626364656600000000000000000000000000000000602083015280519092505f90610dc3906002612f9e565b610dce906002612fb5565b67ffffffffffffffff811115610de657610de66127d6565b6040519080825280601f01601f191660200182016040528015610e10576020820181803683370190505b509050600360fc1b815f81518110610e2a57610e2a612fc8565b60200101906001600160f81b03191690815f1a905350600f60fb1b81600181518110610e5857610e58612fc8565b60200101906001600160f81b03191690815f1a9053505f5b8351811015610f9357826004858381518110610e8e57610e8e612fc8565b016020015182516001600160f81b031990911690911c60f81c908110610eb657610eb6612fc8565b01602001516001600160f81b03191682610ed1836002612f9e565b610edc906002612fb5565b81518110610eec57610eec612fc8565b60200101906001600160f81b03191690815f1a90535082848281518110610f1557610f15612fc8565b602091010151815160f89190911c600f16908110610f3557610f35612fc8565b01602001516001600160f81b03191682610f50836002612f9e565b610f5b906003612fb5565b81518110610f6b57610f6b612fc8565b60200101906001600160f81b03191690815f1a90535080610f8b81612f73565b915050610e70565b50949350505050565b610fa4611df1565b6001600160a01b0381161580610fc357506001600160a01b0381166001145b15610fd957610fd964475331303160d81b611e0b565b6001600160a01b038181165f908152600160205260409020541615611009576110096423a998981960d91b611e0b565b600160208190527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80546001600160a01b038481165f81815260408082208054949095166001600160a01b031994851617909455948552835490911681179092555190917fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f844091a250565b61109b611df1565b6003548111156110b6576110b664475332303160d81b611e0b565b805f036110ce576110ce6423a999181960d91b611e0b565b60048190556040518181527f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c939060200160405180910390a150565b5f806111338d8d8d8d8d8d8d8d8d8d60065f81548092919061112a90612f73565b919050556117ab565b905061113f8184611c49565b5f6111687f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c85490565b90506001600160a01b038116156111e957806001600160a01b03166375f0bb528f8f8f8f8f8f8f8f8f8f8f336040518d63ffffffff1660e01b81526004016111bb9c9b9a99989796959493929190613010565b5f604051808303815f87803b1580156111d2575f80fd5b505af11580156111e4573d5f803e3d5ffd5b505050505b6112156111f88a6109c4612fb5565b603f6112058c6040612f9e565b61120f91906130d2565b90612194565b611221906101f4612fb5565b5a10156112395761123964047533031360dc1b611e0b565b5f5a90506112a78f8f8f8f8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f820116905080830192505050505050508e8c5f14611294578e61207f565b6109c45a6112a29190612f8b565b61207f565b9350836112b2575f80fd5b6112bd5a82906121aa565b9050831580156112cb575089155b80156112d5575087155b156112eb576112eb64475330313360d81b611e0b565b5f8815611302576112ff828b8b8b8b6121ca565b90505b841561134757837f442e715f626346e8c54381002da614f62bee8d27386535b2521ec8540898556e8260405161133a91815260200190565b60405180910390a2611382565b837f23428b18acfb3ea64b08dc0c1d296ea9c09702c09083ca5272e64d115b687d238260405161137991815260200190565b60405180910390a25b50506001600160a01b038116156113f157604051631264e26d60e31b81526004810183905283151560248201526001600160a01b038216906393271368906044015f604051808303815f87803b1580156113da575f80fd5b505af11580156113ec573d5f803e3d5ffd5b505050505b50509b9a5050505050505050505050565b61140c8482611c49565b50505050565b60605f60035467ffffffffffffffff811115611430576114306127d6565b604051908082528060200260200182016040528015611459578160200160208202803683370190505b5060015f90815260026020527fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e054919250906001600160a01b03165b6001600160a01b0381166001146114f857808383815181106114b9576114b9612fc8565b6001600160a01b039283166020918202929092018101919091529181165f908152600290925260409091205416816114f081612f73565b925050611495565b509092915050565b5f80825160208401855af46040518181523d60208201523d5f604083013e60403d0181fd5b61152f88886122bf565b6001600160a01b038416156115475761154784612444565b6115518686612489565b811561156757611565825f600186856121ca565b505b336001600160a01b03167f141df868a6331af528e38c83b7aa03edc19be66e37ae67f9285bf4f8e3c6a1a8898989886040516115a694939291906130f1565b60405180910390a25050505050505050565b60605f6001600160a01b0384166001148015906115db57506115d984610bd3565b155b156115f1576115f164475331303560d81b611e0b565b825f03611609576116096423a998981b60d91b611e0b565b8267ffffffffffffffff811115611622576116226127d6565b60405190808252806020026020018201604052801561164b578160200160208202803683370190505b506001600160a01b038086165f90815260016020526040812054929450911691505b6001600160a01b0382161580159061168f57506001600160a01b038216600114155b801561169a57508381105b156116f457818382815181106116b2576116b2612fc8565b6001600160a01b039283166020918202929092018101919091529281165f908152600190935260409092205490911690806116ec81612f73565b91505061166d565b6001600160a01b03821660011461172c5782611711600183612f8b565b8151811061172157611721612fc8565b602002602001015191505b808352509250929050565b335f908152600260205260409020546001600160a01b03166117645761176464047533033360dc1b611e0b565b335f818152600960209081526040808320858452909152808220600190555183917ff2a0eb156472d1440255b0d7c1e19cc07115d1051fe605b0dce69acfec884d9c91a350565b5f6117bf8c8c8c8c8c8c8c8c8c8c8c61255a565b8051906020012090509b9a5050505050505050505050565b6117df611df1565b6001600160a01b03811615806117fe57506001600160a01b0381166001145b156118145761181464475331303160d81b611e0b565b6001600160a01b038281165f908152600160205260409020548116908216146118485761184864475331303360d81b611e0b565b6001600160a01b038181165f81815260016020526040808220805487861684528284208054919096166001600160a01b0319918216179095558383528054909416909355915190917faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace405427691a25050565b6118bf611df1565b6001600160a01b0381161580159061194157506040516301ffc9a760e01b8152630b0803db60e31b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa15801561191b573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061193f9190613129565b155b156119575761195764475333303160d81b611e0b565b7fb104e0b93118902c651344349b610029d694cfdec91c589c91ebafbcd02899478181556040516001600160a01b038316907fcd1966d6be16bc0c030cc741a06c6e0efaf8d00de2c8b6a9e11827e125de8bb8905f90a25050565b6119ba611df1565b6001600160a01b03811615801590611a3c57506040516301ffc9a760e01b815263736bd41d60e11b60048201526001600160a01b038216906301ffc9a790602401602060405180830381865afa158015611a16573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611a3a9190613129565b155b15611a5257611a5264047533330360dc1b611e0b565b7f4a204f620c8c5ccdca3fd54d003badd85ba500436a431f0cbda4f558c93c34c88190556040516001600160a01b038216907f1151116914515bc0891ff9047a6cb32cf902546f83066499bcf8ba33d2353fa2905f90a250565b611ab4611df1565b6001600160a01b0381161580611ad357506001600160a01b0381166001145b80611ae657506001600160a01b03811630145b15611afc57611afc64475332303360d81b611e0b565b6001600160a01b038181165f908152600260205260409020541615611b2c57611b2c6411d4cc8c0d60da1b611e0b565b6001600160a01b0382161580611b4b57506001600160a01b0382166001145b15611b6157611b6164475332303360d81b611e0b565b6001600160a01b038381165f90815260026020526040902054811690831614611b9557611b9564475332303560d81b611e0b565b6001600160a01b038281165f81815260026020526040808220805486861680855283852080549288166001600160a01b03199384161790559589168452828420805482169096179095558383528054909416909355915190917ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf91a26040516001600160a01b038216907f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea26905f90a2505050565b6004545f819003611c6557611c6564475330303160d81b611e0b565b611c713384848461091f565b505050565b611c7e611df1565b611c8781612444565b6040516001600160a01b038216907f5ac6c46c93c8d0e53714ba3b53db3e7c046da994313d7ed0d192028bc7c228b0905f90a250565b611cc5611df1565b806001600354611cd59190612f8b565b1015611cec57611cec64475332303160d81b611e0b565b6001600160a01b0382161580611d0b57506001600160a01b0382166001145b15611d2157611d2164475332303360d81b611e0b565b6001600160a01b038381165f90815260026020526040902054811690831614611d5557611d5564475332303560d81b611e0b565b6001600160a01b038281165f81815260026020526040808220805488861684529183208054929095166001600160a01b03199283161790945591815282549091169091556003805491611da783613148565b90915550506040516001600160a01b038316907ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf905f90a28060045414611c7157611c7181611093565b333014611e0957611e0964475330333160d81b611e0b565b565b60405162461bcd60e51b81526020600482015260056024820152816044820152606481fd5b5f825f03611e3f57505f610c06565b5f611e4a8385612f9e565b905082611e5785836130d2565b14611e60575f80fd5b9392505050565b8151611e74826020612685565b1115611e8b57611e8b6423a998191960d91b611e0b565b5f6020828401015190508251611eb582611eaf60208661268590919063ffffffff16565b90612685565b1115611ecc57611ecc64475330323360d81b611e0b565b604051630b135d3f60e11b808252848401602001916001600160a01b03881690631626ba7e90611f02908990869060040161315d565b602060405180830381865afa158015611f1d573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611f419190613175565b6001600160e01b03191614611f6157611f616411d4cc0c8d60da1b611e0b565b505050505050565b5f80611f937fb104e0b93118902c651344349b610029d694cfdec91c589c91ebafbcd02899475490565b915033600114801590611fbc5750335f908152600160205260409020546001600160a01b031615155b611ff05760405162461bcd60e51b815260206004820152600560248201526411d4cc4c0d60da1b6044820152606401610ba8565b6001600160a01b038216156120765760405163394614b960e11b81526001600160a01b0383169063728c297290612033908990899089908990339060040161319c565b6020604051808303815f875af115801561204f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061207391906131e6565b90505b94509492505050565b5f600183600181111561209457612094612fdc565b036120ab575f808551602087018986f490506120ba565b5f80855160208701888a87f190505b95945050505050565b6001600160a01b03831615612130576040516315661bd560e11b81526004810183905281151560248201526001600160a01b03841690632acc37aa906044015f604051808303815f87803b158015612119575f80fd5b505af115801561212b573d5f803e3d5ffd5b505050505b80156121655760405133907f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8905f90a2505050565b60405133907facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375905f90a2505050565b5f818310156121a35781611e60565b5090919050565b5f828211156121b7575f80fd5b5f6121c28385612f8b565b949350505050565b5f806001600160a01b038316156121e157826121e3565b325b90506001600160a01b038416612285576122153a8610612203573a612205565b855b61220f8989612685565b90611e30565b91505f816001600160a01b0316836040515f6040518083038185875af1925050503d805f8114612260576040519150601f19603f3d011682016040523d82523d5f602084013e612265565b606091505b505090508061227f5761227f64475330313160d81b611e0b565b506122b5565b6122938561220f8989612685565b91506122a084828461269f565b6122b5576122b56423a998189960d91b611e0b565b5095945050505050565b600454156122d8576122d864047533230360dc1b611e0b565b81518111156122f2576122f264475332303160d81b611e0b565b805f0361230a5761230a6423a999181960d91b611e0b565b60015f5b8351811015612412575f84828151811061232a5761232a612fc8565b602002602001015190505f6001600160a01b0316816001600160a01b0316148061235d57506001600160a01b0381166001145b8061237057506001600160a01b03811630145b8061238c5750806001600160a01b0316836001600160a01b0316145b156123a2576123a264475332303360d81b611e0b565b6001600160a01b038181165f9081526002602052604090205416156123d2576123d26411d4cc8c0d60da1b611e0b565b6001600160a01b039283165f90815260026020526040902080546001600160a01b031916938216939093179092558061240a81612f73565b91505061230e565b506001600160a01b03165f90815260026020526040902080546001600160a01b03191660011790559051600355600455565b306001600160a01b038216036124655761246564047533430360dc1b611e0b565b7f6c9a6c4a39284e37ed1cf53d337577d14212a4870fb976a4366c693b939918d555565b60015f8190526020527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f546001600160a01b0316156124d3576124d364047533130360dc1b611e0b565b60015f81905260208190527fcc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f80546001600160a01b03191690911790556001600160a01b0382161561090857813b612536576125366423a998181960d91b611e0b565b612545825f8360015f1961207f565b6109085761090864047533030360dc1b611e0b565b60605f7fbb8310d486368db6bd6f849402fdd73ad53d316b5a4b2644ad6efe0f941286d85f1b8d8d8d8d6040516125929291906131fd565b6040519081900381206125b8949392918e908e908e908e908e908e908e9060200161320c565b60408051601f1981840301815291905280516020909101209050601960f81b600160f81b612638604080517f47e79534a245952e8b16893a336b85a3d9ea9fa8c573f3d803afb92a794692186020820152469181018290523060608201525f91906080016040516020818303038152906040528051906020012091505090565b6040516001600160f81b031993841660208201529290911660218301526022820152604281018290526062016040516020818303038152906040529150509b9a5050505050505050505050565b5f806126918385612fb5565b905083811015611e60575f80fd5b604080516001600160a01b03841660248201526044808201849052825180830390910181526064909101909152602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b17815282515f93929184919082896127105a03f13d8015612724576020811461272c575f9350612736565b819350612736565b5f51158215171593505b5050509392505050565b6001600160a01b0381168114612754575f80fd5b50565b803561276281612740565b919050565b5f8060408385031215612778575f80fd5b823561278381612740565b946020939093013593505050565b5f8083601f8401126127a1575f80fd5b50813567ffffffffffffffff8111156127b8575f80fd5b6020830191508360208285010111156127cf575f80fd5b9250929050565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612813576128136127d6565b604052919050565b5f82601f83011261282a575f80fd5b813567ffffffffffffffff811115612844576128446127d6565b612857601f8201601f19166020016127ea565b81815284602083860101111561286b575f80fd5b816020850160208301375f918101602001919091529392505050565b5f805f805f6080868803121561289b575f80fd5b85359450602086013567ffffffffffffffff808211156128b9575f80fd5b6128c589838a01612791565b909650945060408801359150808211156128dd575f80fd5b506128ea8882890161281b565b95989497509295606001359392505050565b5f805f806080858703121561290f575f80fd5b843561291a81612740565b935060208501359250604085013567ffffffffffffffff81111561293c575f80fd5b6129488782880161281b565b949793965093946060013593505050565b5f60208284031215612969575f80fd5b8135611e6081612740565b803560028110612762575f80fd5b5f805f8060808587031215612995575f80fd5b84356129a081612740565b935060208501359250604085013567ffffffffffffffff8111156129c2575f80fd5b6129ce8782880161281b565b9250506129dd60608601612974565b905092959194509250565b5f81518084525f5b81811015612a0c576020818501810151868301820152016129f0565b505f602082860101526020601f19601f83011685010191505092915050565b8215158152604060208201525f6121c260408301846129e8565b5f8060408385031215612a56575f80fd5b50508035926020909101359150565b602081525f611e6060208301846129e8565b5f60208284031215612a87575f80fd5b5035919050565b5f805f805f805f805f805f6101408c8e031215612aa9575f80fd5b612ab28c612757565b9a5060208c0135995067ffffffffffffffff8060408e01351115612ad4575f80fd5b612ae48e60408f01358f01612791565b909a509850612af560608e01612974565b975060808d0135965060a08d0135955060c08d01359450612b1860e08e01612757565b9350612b276101008e01612757565b9250806101208e01351115612b3a575f80fd5b50612b4c8d6101208e01358e0161281b565b90509295989b509295989b9093969950565b5f805f8060608587031215612b71575f80fd5b84359350602085013567ffffffffffffffff80821115612b8f575f80fd5b612b9b88838901612791565b90955093506040870135915080821115612bb3575f80fd5b50612bc08782880161281b565b91505092959194509250565b5f8151808452602080850194508084015f5b83811015612c035781516001600160a01b031687529582019590820190600101612bde565b509495945050505050565b602081525f611e606020830184612bcc565b5f8060408385031215612c31575f80fd5b8235612c3c81612740565b9150602083013567ffffffffffffffff811115612c57575f80fd5b612c638582860161281b565b9150509250929050565b5f805f805f805f80610100898b031215612c85575f80fd5b67ffffffffffffffff808a351115612c9b575f80fd5b89358a018b601f820112612cad575f80fd5b803582811115612cbf57612cbf6127d6565b8060051b612ccf602082016127ea565b9182526020818401810192908101908f841115612cea575f80fd5b6020850194505b83851015612d1657612d038535612740565b8435825260209485019490910190612cf1565b9c5050505060208b01359850612d30905060408b01612757565b965060608a013581811115612d43575f80fd5b612d4f8c828d0161281b565b96505050612d5f60808a01612757565b9350612d6d60a08a01612757565b925060c08901359150612d8260e08a01612757565b90509295985092959890939650565b604081525f612da36040830185612bcc565b90506001600160a01b03831660208301529392505050565b5f805f805f805f805f805f6101408c8e031215612dd6575f80fd5b8b35612de181612740565b9a5060208c0135995060408c013567ffffffffffffffff811115612e03575f80fd5b612e0f8e828f01612791565b909a509850612e22905060608d01612974565b965060808c0135955060a08c0135945060c08c0135935060e08c0135612e4781612740565b92506101008c0135612e5881612740565b809250506101208c013590509295989b509295989b9093969950565b5f8060408385031215612e85575f80fd5b8235612e9081612740565b91506020830135612ea081612740565b809150509250929050565b5f805f60608486031215612ebd575f80fd5b8335612ec881612740565b92506020840135612ed881612740565b91506040840135612ee881612740565b809150509250925092565b5f8060408385031215612f04575f80fd5b82359150602083013567ffffffffffffffff811115612c57575f80fd5b5f805f60608486031215612f33575f80fd5b8335612f3e81612740565b92506020840135612f4e81612740565b929592945050506040919091013590565b634e487b7160e01b5f52601160045260245ffd5b5f60018201612f8457612f84612f5f565b5060010190565b81810381811115610c0657610c06612f5f565b8082028115828204841417610c0657610c06612f5f565b80820180821115610c0657610c06612f5f565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52602160045260245ffd5b6002811061300c57634e487b7160e01b5f52602160045260245ffd5b9052565b5f6101606001600160a01b038f1683528d60208401528060408401528b81840152506101808b8d828501375f838d01820152601f8c01601f19168301613059606085018d612ff0565b8a60808501528960a08501528860c085015261308060e08501896001600160a01b03169052565b6001600160a01b03871661010085015281848203016101208501526130a7828201876129e8565b925050506130c16101408301846001600160a01b03169052565b9d9c50505050505050505050505050565b5f826130ec57634e487b7160e01b5f52601260045260245ffd5b500490565b608081525f6131036080830187612bcc565b6020830195909552506001600160a01b0392831660408201529116606090910152919050565b5f60208284031215613139575f80fd5b81518015158114611e60575f80fd5b5f8161315657613156612f5f565b505f190190565b828152604060208201525f6121c260408301846129e8565b5f60208284031215613185575f80fd5b81516001600160e01b031981168114611e60575f80fd5b5f6001600160a01b03808816835286602084015260a060408401526131c460a08401876129e8565b91506131d36060840186612ff0565b8084166080840152509695505050505050565b5f602082840312156131f6575f80fd5b5051919050565b818382375f9101908152919050565b5f610160820190508c82526001600160a01b03808d1660208401528b60408401528a6060840152613240608084018b612ff0565b60a083019890985260c082019690965260e081019490945291851661010084015290931661012082015261014001919091529594505050505056fea26469706673582212208c067563d8c9cb66132573244921ca5f57ae72d87dc643dfec2931fdc5ce43b764736f6c63430008140033cc69885fda6bcc1a4ace058b4a62bf5e179ea78fd58a1ccd71c22cc9b688792f60c06040526005608090815264045524332360dc1b60a0525f906100239082610106565b50604080518082019091526005815264045524332360dc1b602082015260019061004d9082610106565b506002805460ff19166004179055348015610066575f80fd5b506101c1565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061009457607f821691505b6020821081036100b257634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610101575f81815260208120601f850160051c810160208610156100de5750805b601f850160051c820191505b818110156100fd578281556001016100ea565b5050505b505050565b81516001600160401b0381111561011f5761011f61006c565b6101338161012d8454610080565b846100b8565b602080601f831160018114610166575f841561014f5750858301515b5f19600386901b1c1916600185901b1785556100fd565b5f85815260208120601f198616915b8281101561019457888601518255948401946001909101908401610175565b50858210156101b157878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b610682806101ce5f395ff3fe608060405234801561000f575f80fd5b50600436106100cf575f3560e01c806338cc48311161007d57806370a082311161005857806370a08231146101c457806395d89b41146101e3578063a9059cbb146101eb575f80fd5b806338cc48311461018e57806340c10f191461019c57806342966c68146101b1575f80fd5b806321c4f09f116100ad57806321c4f09f1461012457806323b872dd1461015c578063313ce5671461016f575f80fd5b806306fdde03146100d3578063095ea7b3146100f157806318160ddd14610114575b5f80fd5b6100db6101fe565b6040516100e891906104b2565b60405180910390f35b6101046100ff366004610518565b610289565b60405190151581526020016100e8565b475b6040519081526020016100e8565b610116610132366004610540565b6001600160a01b039182165f90815260046020908152604080832093909416825291909152205490565b61010461016a366004610571565b6102f5565b60025461017c9060ff1681565b60405160ff90911681526020016100e8565b6040513081526020016100e8565b6101af6101aa366004610518565b610422565b005b6101af6101bf3660046105aa565b610452565b6101166101d23660046105c1565b60036020525f908152604090205481565b6100db610492565b6101046101f9366004610518565b61049f565b5f805461020a906105da565b80601f0160208091040260200160405190810160405280929190818152602001828054610236906105da565b80156102815780601f1061025857610100808354040283529160200191610281565b820191905f5260205f20905b81548152906001019060200180831161026457829003601f168201915b505050505081565b335f8181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906102e39086815260200190565b60405180910390a35060015b92915050565b5f6001600160a01b038416331480159061033257506001600160a01b0384165f9081526004602090815260408083203384529091529020545f1914155b1561039d576001600160a01b0384165f908152600460209081526040808320338452909152902054821115610365575f80fd5b6001600160a01b0384165f90815260046020908152604080832033845290915281208054849290610397908490610626565b90915550505b6001600160a01b0383165f90815260036020526040812080548492906103c4908490610639565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161041091815260200190565b60405180910390a35060019392505050565b6001600160a01b0382165f9081526003602052604081208054839290610449908490610639565b90915550505050565b335f9081526003602052604090205481111561046c575f80fd5b335f908152600360205260408120805483929061048a908490610626565b909155505050565b6001805461020a906105da565b5f6104ab3384846102f5565b9392505050565b5f6020808352835180828501525f5b818110156104dd578581018301518582016040015282016104c1565b505f604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610513575f80fd5b919050565b5f8060408385031215610529575f80fd5b610532836104fd565b946020939093013593505050565b5f8060408385031215610551575f80fd5b61055a836104fd565b9150610568602084016104fd565b90509250929050565b5f805f60608486031215610583575f80fd5b61058c846104fd565b925061059a602085016104fd565b9150604084013590509250925092565b5f602082840312156105ba575f80fd5b5035919050565b5f602082840312156105d1575f80fd5b6104ab826104fd565b600181811c908216806105ee57607f821691505b60208210810361060c57634e487b7160e01b5f52602260045260245ffd5b50919050565b634e487b7160e01b5f52601160045260245ffd5b818103818111156102ef576102ef610612565b808201808211156102ef576102ef61061256fea26469706673582212201b19e007b6b22969f54d7946cb92afda8663a358af219002be9c28a8b2177cf964736f6c6343000814003361016060405234801562000011575f80fd5b5060405162001fa638038062001fa68339810160408190526200003491620001ef565b604080518082018252601381527f417574686f72697a6174696f6e20746f6b656e00000000000000000000000000602080830191909152825180840190935260018352603160f81b908301529081816200008f825f6200016c565b61012052620000a08160016200016c565b61014052815160208084019190912060e052815190820120610100524660a0526200012d60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b60805250503060c052505060078054336001600160a01b031991821617909155600380549091166001600160a01b0392909216919091179055620003f7565b5f6020835110156200018b576200018383620001a4565b90506200019e565b81620001988482620002be565b5060ff90505b92915050565b5f80829050601f81511115620001da578260405163305a27a960e01b8152600401620001d1919062000386565b60405180910390fd5b8051620001e782620003d3565b179392505050565b5f6020828403121562000200575f80fd5b81516001600160a01b038116811462000217575f80fd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200024757607f821691505b6020821081036200026657634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620002b9575f81815260208120601f850160051c81016020861015620002945750805b601f850160051c820191505b81811015620002b557828155600101620002a0565b5050505b505050565b81516001600160401b03811115620002da57620002da6200021e565b620002f281620002eb845462000232565b846200026c565b602080601f83116001811462000328575f8415620003105750858301515b5f19600386901b1c1916600185901b178555620002b5565b5f85815260208120601f198616915b82811015620003585788860151825594840194600190910190840162000337565b50858210156200037657878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b5f6020808352835180828501525f5b81811015620003b35785810183015185820160400152820162000395565b505f604082860101526040601f19601f8301168501019250505092915050565b8051602080830151919081101562000266575f1960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611b5d620004495f395f610b1901525f610ae801525f610f0401525f610edc01525f610e3701525f610e6101525f610e8b0152611b5d5ff3fe608060405234801561000f575f80fd5b506004361061012f575f3560e01c80634e71d92d116100ad578063a9059cbb1161007d578063c203823611610063578063c203823614610287578063c6dad08214610146578063f98aa0851461029a575f80fd5b8063a9059cbb14610261578063b6ce514b14610274575f80fd5b80634e71d92d146102185780637b7c65c9146102205780637ba0e2e71461023357806384b0196e14610246575f80fd5b8063297235111161010257806338cc4831116100e857806338cc4831146101ec5780633d3503d9146101f25780634997266314610205575f80fd5b806329723511146101bf578063313ce567146101d2575f80fd5b8063014647f41461013357806306fdde03146101485780630e7c1cb51461018157806323b872dd146101ac575b5f80fd5b61014661014136600461148b565b6102ad565b005b61016b6040518060400160405280600481526020016310d554d160e21b81525081565b6040516101789190611529565b60405180910390f35b600354610194906001600160a01b031681565b6040516001600160a01b039091168152602001610178565b6101466101ba36600461153b565b610325565b6101466101cd36600461148b565b61033c565b6101da601281565b60405160ff9091168152602001610178565b30610194565b610146610200366004611660565b610383565b6101466102133660046116ad565b6103df565b610146610422565b61016b61022e36600461170e565b6104d1565b61014661024136600461173d565b610613565b61024e61065c565b604051610178979695949392919061176f565b61014661026f366004611803565b61069e565b61016b61028236600461182d565b6106ad565b61016b61029536600461186d565b6107df565b6101466102a836600461189b565b61080f565b5f33905061031f81856102f486868080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061095492505050565b6001600160a01b039283165f9081526006602090815260408083209490951682529290925291902055565b50505050565b33610331848284610960565b61031f8484846109a6565b61037e8361026f84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061095492505050565b505050565b5f61038d82610954565b6001600160a01b0384165f908152600560205260409020549091506103b29082610a3d565b6001600160a01b0384165f908152600560205260409020556002546103d79082610a3d565b600255505050565b61031f84846101ba85858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061095492505050565b335f9081526005602052604081205461043a90610a6b565b60035460405163a9059cbb60e01b815233600482015263ffffffff929092166024830181905292506001600160a01b03169063a9059cbb906044016020604051808303815f875af1158015610491573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104b591906118c9565b506104bf5f610a75565b335f9081526005602052604090205550565b6007546060906001600160a01b031633146104ea575f80fd5b8383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce6020820152908101879052909350610575925060600190505b60405160208183030381529060405280519060200120610a81565b90505f6105828284610aad565b90506001600160a01b03811633146105fb5760405162461bcd60e51b815260206004820152603160248201527f454950373132207369676e657220616e64207472616e73616374696f6e2073696044820152700cedccae440c8de40dcdee840dac2e8c6d607b1b60648201526084015b60405180910390fd5b61060760025489610ad5565b98975050505050505050565b5f61061d82610954565b335f908152600560205260409020549091506106399082610a3d565b335f908152600560205260409020556002546106559082610a3d565b6002555050565b5f6060805f805f606061066d610ae1565b610675610b12565b604080515f80825260208201909252600f60f81b9b939a50919850469750309650945092509050565b6106a93383836109a6565b5050565b60608383838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920182905250604080517f051d137ae0e1fae6e3b6559fed4442b35a85a9a39789838ad5c9ea05e7da2dce60208201529081018790529093506107239250606001905061055a565b90505f6107308284610aad565b90506001600160a01b03811633146107a45760405162461bcd60e51b815260206004820152603160248201527f454950373132207369676e657220616e64207472616e73616374696f6e2073696044820152700cedccae440c8de40dcdee840dac2e8c6d607b1b60648201526084016105f2565b335f8181526006602090815260408083206001600160a01b038e1684529091529020546107d1908a610ad5565b9a9950505050505050505050565b6001600160a01b0381165f9081526005602052604081205460609161080691908590610b3f565b90505b92915050565b6003546040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b03909116906323b872dd906064016020604051808303815f875af1158015610863573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061088791906118c9565b505f8180602001905181019061089d919061192a565b90505f805b8251811015610931576108ee8382815181106108c0576108c0611a2c565b60200260200101515f01518483815181106108dd576108dd611a2c565b602002602001015160200151610383565b61091d8261091885848151811061090757610907611a2c565b602002602001015160200151610954565b610a3d565b91508061092981611a40565b9150506108a2565b5061094c61094761094186610a75565b83610b77565b610bae565b61031f575f80fd5b5f610809826002610bc0565b6001600160a01b038381165f908152600660209081526040808320938616835292905220546109976109928383610c53565b610c84565b61031f84846102f48486610c90565b6001600160a01b0383165f908152600560205260409020546109cd90610992908390610c53565b6001600160a01b0382165f908152600560205260409020546109ef9082610a3d565b6001600160a01b038084165f908152600560205260408082209390935590851681522054610a1d9082610c90565b6001600160a01b039093165f908152600560205260409020929092555050565b5f82610a4f57610a4c5f610a75565b92505b81610a6057610a5d5f610a75565b91505b61080683835f610cbe565b5f61080982610d54565b5f610809826002610db5565b5f610809610a8d610e2b565b8360405161190160f01b8152600281019290925260228201526042902090565b5f805f80610abb8686610f54565b925092509250610acb8282610f9d565b5090949350505050565b60606108068383611055565b6060610b0d7f00000000000000000000000000000000000000000000000000000000000000005f6110c0565b905090565b6060610b0d7f000000000000000000000000000000000000000000000000000000000000000060016110c0565b60608315610b5857610b518484611055565b9050610b70565b610b51610b6a8363ffffffff16610a75565b84611055565b9392505050565b5f82610b8957610b865f610a75565b92505b81610b9a57610b975f610a75565b91505b610806610ba884845f611169565b5f6111bb565b5f610bb882610d54565b151592915050565b5f80838360f81b604051602001610bd8929190611a64565b60408051601f1981840301815290829052630964a5d960e31b82529150605d90634b252ec890610c0c908490600401611529565b602060405180830381865afa158015610c27573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610c4b9190611a92565b949350505050565b5f82610c6557610c625f610a75565b92505b81610c7657610c735f610a75565b91505b610806610ba884845f6111f6565b610c8d81611248565b50565b5f82610ca257610c9f5f610a75565b92505b81610cb357610cb05f610a75565b91505b61080683835f6112b4565b5f808215610cd15750600160f81b610cd4565b505f5b60405163f953e42760e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063f953e427906064015b602060405180830381865afa158015610d27573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610d4b9190611a92565b95945050505050565b6040516301693b9160e61b8152600481018290525f90605d90635a4ee44090602401602060405180830381865afa158015610d91573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108099190611a92565b604051631ce2e8d760e31b8152600481018390526001600160f81b031960f883901b1660248201525f90605d9063e71746b8906044015b602060405180830381865afa158015610e07573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108069190611a92565b5f306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610e8357507f000000000000000000000000000000000000000000000000000000000000000046145b15610ead57507f000000000000000000000000000000000000000000000000000000000000000090565b610b0d604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a08201525f9060c00160405160208183030381529060405280519060200120905090565b5f805f8351604103610f8b576020840151604085015160608601515f1a610f7d88828585611306565b955095509550505050610f96565b505081515f91506002905b9250925092565b5f826003811115610fb057610fb0611aa9565b03610fb9575050565b6001826003811115610fcd57610fcd611aa9565b03610feb5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610fff57610fff611aa9565b036110205760405163fce698f760e01b8152600481018290526024016105f2565b600382600381111561103457611034611aa9565b036106a9576040516335e2f38360e21b8152600481018290526024016105f2565b60405163d6ad57cd60e01b81526004810183905260248101829052606090605d9063d6ad57cd906044015f60405180830381865afa158015611099573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f191682016040526108069190810190611abd565b606060ff83146110da576110d3836113ce565b9050610809565b8180546110e690611aef565b80601f016020809104026020016040519081016040528092919081815260200182805461111290611aef565b801561115d5780601f106111345761010080835404028352916020019161115d565b820191905f5260205f20905b81548152906001019060200180831161114057829003601f168201915b50505050509050610809565b5f80821561117c5750600160f81b61117f565b505f5b60405163052896f160e01b815260048101869052602481018590526001600160f81b031982166044820152605d9063052896f190606401610d0c565b60405163025f346960e51b8152600481018390526001600160f81b031960f883901b1660248201525f90605d90634be68d2090604401610dec565b5f8082156112095750600160f81b61120c565b505f5b6040516334a6d7b960e11b815260048101869052602481018590526001600160f81b031982166044820152605d9063694daf7290606401610d0c565b5f8160405160240161125c91815260200190565b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16634ee071a160e01b1781528151919250605d905f9081908490845afa61031f575f80fd5b5f8082156112c75750600160f81b6112ca565b505f5b604051638c14cc2160e01b815260048101869052602481018590526001600160f81b031982166044820152605d90638c14cc2190606401610d0c565b5f80807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a084111561133f57505f915060039050826113c4565b604080515f808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611390573d5f803e3d5ffd5b5050604051601f1901519150506001600160a01b0381166113bb57505f9250600191508290506113c4565b92505f91508190505b9450945094915050565b60605f6113da8361140b565b6040805160208082528183019092529192505f91906020820181803683375050509182525060208101929092525090565b5f60ff8216601f81111561080957604051632cd44ac360e21b815260040160405180910390fd5b6001600160a01b0381168114610c8d575f80fd5b5f8083601f840112611456575f80fd5b50813567ffffffffffffffff81111561146d575f80fd5b602083019150836020828501011115611484575f80fd5b9250929050565b5f805f6040848603121561149d575f80fd5b83356114a881611432565b9250602084013567ffffffffffffffff8111156114c3575f80fd5b6114cf86828701611446565b9497909650939450505050565b5f5b838110156114f65781810151838201526020016114de565b50505f910152565b5f81518084526115158160208601602086016114dc565b601f01601f19169290920160200192915050565b602081525f61080660208301846114fe565b5f805f6060848603121561154d575f80fd5b833561155881611432565b9250602084013561156881611432565b929592945050506040919091013590565b634e487b7160e01b5f52604160045260245ffd5b6040805190810167ffffffffffffffff811182821017156115b0576115b0611579565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156115df576115df611579565b604052919050565b5f67ffffffffffffffff82111561160057611600611579565b50601f01601f191660200190565b5f82601f83011261161d575f80fd5b813561163061162b826115e7565b6115b6565b818152846020838601011115611644575f80fd5b816020850160208301375f918101602001919091529392505050565b5f8060408385031215611671575f80fd5b823561167c81611432565b9150602083013567ffffffffffffffff811115611697575f80fd5b6116a38582860161160e565b9150509250929050565b5f805f80606085870312156116c0575f80fd5b84356116cb81611432565b935060208501356116db81611432565b9250604085013567ffffffffffffffff8111156116f6575f80fd5b61170287828801611446565b95989497509550505050565b5f805f60408486031215611720575f80fd5b83359250602084013567ffffffffffffffff8111156114c3575f80fd5b5f6020828403121561174d575f80fd5b813567ffffffffffffffff811115611763575f80fd5b610c4b8482850161160e565b60ff60f81b881681525f602060e08184015261178e60e084018a6114fe565b83810360408501526117a0818a6114fe565b606085018990526001600160a01b038816608086015260a0850187905284810360c086015285518082528387019250908301905f5b818110156117f1578351835292840192918401916001016117d5565b50909c9b505050505050505050505050565b5f8060408385031215611814575f80fd5b823561181f81611432565b946020939093013593505050565b5f805f8060608587031215611840575f80fd5b843561184b81611432565b935060208501359250604085013567ffffffffffffffff8111156116f6575f80fd5b5f806040838503121561187e575f80fd5b82359150602083013561189081611432565b809150509250929050565b5f80604083850312156118ac575f80fd5b82359150602083013567ffffffffffffffff811115611697575f80fd5b5f602082840312156118d9575f80fd5b81518015158114610b70575f80fd5b5f82601f8301126118f7575f80fd5b815161190561162b826115e7565b818152846020838601011115611919575f80fd5b610c4b8260208301602087016114dc565b5f602080838503121561193b575f80fd5b825167ffffffffffffffff80821115611952575f80fd5b818501915085601f830112611965575f80fd5b81518181111561197757611977611579565b8060051b6119868582016115b6565b918252838101850191858101908984111561199f575f80fd5b86860192505b83831015611a1f578251858111156119bc575f8081fd5b86016040818c03601f19018113156119d3575f8081fd5b6119db61158d565b898301516119e881611432565b81529082015190878211156119fc575f8081fd5b611a0a8d8b848601016118e8565b818b01528452505091860191908601906119a5565b9998505050505050505050565b634e487b7160e01b5f52603260045260245ffd5b5f60018201611a5d57634e487b7160e01b5f52601160045260245ffd5b5060010190565b5f8351611a758184602088016114dc565b6001600160f81b0319939093169190920190815260010192915050565b5f60208284031215611aa2575f80fd5b5051919050565b634e487b7160e01b5f52602160045260245ffd5b5f60208284031215611acd575f80fd5b815167ffffffffffffffff811115611ae3575f80fd5b610c4b848285016118e8565b600181811c90821680611b0357607f821691505b602082108103611b2157634e487b7160e01b5f52602260045260245ffd5b5091905056fea2646970667358221220acf647497648972594c123ce379a801792c9d05336d92c242d3870d14ab38fc364736f6c63430008140033a2646970667358221220371274c6dec3585900f144131415dd5acc48ece36dc4cbb77ad80cfba5e866fc64736f6c63430008140033";
