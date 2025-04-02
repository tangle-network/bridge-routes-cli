import { defineChain, Chain } from 'viem';
import { ChainTypeEnum } from './types';

const ArbitrumConfig: Chain = defineChain({
  id: 42161,
  name: 'Arbitrum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://arbitrum.llamarpc.com', 'https://arb1.arbitrum.io/rpc'],
    },
  },
  blockExplorers: {
    default: { name: 'Arbiscan', url: 'https://api.arbiscan.io/api' },
  },
});

const BaseConfig: Chain = defineChain({
  id: 8453,
  name: 'Base',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [
        'https://base.publicnode.com/',
        'https://mainnet.base.org',
        'https://base.blockpi.network/v1/rpc/public',
      ],
    },
  },
  blockExplorers: {
    default: { name: 'BaseScan', url: 'https://arbiscan.io' },
  },
});

const BSCConfig: Chain = defineChain({
  id: 56,
  name: 'Binance Smart Chain',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: {
      http: ['https://binance.llamarpc.com', 'https://bsc-rpc.publicnode.com'],
    },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
});

const EthereumConfig: Chain = defineChain({
  id: 1,
  name: 'Ethereum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [
        'https://ethereum-rpc.publicnode.com',
        'https://ethereum.publicnode.com',
        'https://cloudflare-eth.com',
        'https://eth.drpc.org',
      ],
    },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://etherscan.io' },
  },
});

const LineaConfig: Chain = defineChain({
  id: 59144,
  name: 'Linea',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: [
        'https://rpc.linea.build',
        'https://linea.blockpi.network/v1/rpc/public',
        'https://1rpc.io/linea',
        'https://linea.drpc.org',
      ],
    },
  },
  blockExplorers: {
    default: { name: 'LineaScan', url: 'https://lineascan.build' },
  },
});

const OptimismConfig: Chain = defineChain({
  id: 10,
  name: 'Optimism',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.optimism.io'],
    },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://optimistic.etherscan.io' },
  },
});

const PolygonConfig: Chain = defineChain({
  id: 137,
  name: 'Polygon',
  nativeCurrency: {
    decimals: 18,
    name: 'Polygon Ecosystem Token',
    symbol: 'POL',
  },
  rpcUrls: {
    default: {
      http: ['https://polygon-bor.publicnode.com', 'https://polygon-rpc.com'],
    },
  },
  blockExplorers: {
    default: { name: 'PolygonScan', url: 'https://polygonscan.com' },
  },
});

const TangleConfig: Chain = defineChain({
  id: 5845,
  name: 'Tangle',
  nativeCurrency: {
    decimals: 18,
    name: 'Tangle Network Token',
    symbol: 'TNT',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.tangle.tools'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Tangle EVM Explorer',
      url: 'https://explorer.tangle.tools',
    },
  },
});

const HoleskyConfig: Chain = defineChain({
  id: 17000,
  name: 'Holesky',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://ethereum-holesky-rpc.publicnode.com'],
    },
  },
  blockExplorers: {
    default: { name: 'Etherscan', url: 'https://holesky.etherscan.io' },
  },
});

const TangleTestnetConfig: Chain = defineChain({
  id: 3799,
  name: 'Tangle Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Tangle Testnet Token',
    symbol: 'tTNT',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.tangle.tools'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Tangle Testnet Explorer',
      url: 'https://testnet-explorer.tangle.tools',
    },
  },
});

export const chains: Record<ChainTypeEnum, Chain> = {
  // Mainnets
  arbitrum: ArbitrumConfig,
  base: BaseConfig,
  bsc: BSCConfig,
  ethereum: EthereumConfig,
  linea: LineaConfig,
  optimism: OptimismConfig,
  polygon: PolygonConfig,
  tangle: TangleConfig,
  // Testnets
  holesky: HoleskyConfig,
  tangletestnet: TangleTestnetConfig,
};
