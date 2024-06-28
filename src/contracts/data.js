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
