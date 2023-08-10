const address = "0x2799cF6213864217adA86189c9Be77C3E70BaAE2"

const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "increaseIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]
module.exports = { address, abi }
