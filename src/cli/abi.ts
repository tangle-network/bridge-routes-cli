import { Abi } from 'viem';
import { ContractTypeEnum } from './types';

const ownershipAbi: Abi = [
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const abis: Record<ContractTypeEnum, Abi> = {
  transparentUpgradeableProxy: ownershipAbi,
  interchainSecurityModule: ownershipAbi,
  proxyAdmin: ownershipAbi,
};
