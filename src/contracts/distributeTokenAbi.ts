export const DistributorAbi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "_tokenAddress",
          type: "address"
        }
      ],
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      inputs: [],
      name: "admin",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "claimAmount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address"
        }
      ],
      name: "claimTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "gameToken",
      outputs: [
        {
          internalType: "contract IERC20",
          name: "",
          type: "address"
        }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256"
        }
      ],
      name: "setClaimAmount",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ] as const;