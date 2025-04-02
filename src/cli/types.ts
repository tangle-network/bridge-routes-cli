export type AddressType = `0x${string}`;

export enum ChainTypeEnum {
  // Mainnets
  Arbitrum = 'arbitrum',
  Base = 'base',
  BSC = 'bsc',
  Ethereum = 'ethereum',
  Linea = 'linea',
  Optimism = 'optimism',
  Polygon = 'polygon',
  Tangle = 'tangle',
  // Testnets
  Holesky = 'holesky',
  TangleTestnet = 'tangletestnet',
}

export enum ContractTypeEnum {
  TransparentUpgradeableProxy = 'transparentUpgradeableProxy',
  InterchainSecurityModule = 'interchainSecurityModule',
  ProxyAdmin = 'proxyAdmin',
}

export enum TokenTypeEnum {
  // Mainnet Tokens
  ARB = 'ARB',
  ATH = 'ATH',
  AVAIL = 'AVAIL',
  // AVAILWORMHOLE = 'AVAILWORMHOLE',
  BNB = 'BNB',
  CBBTC = 'CBBTC',
  CBETH = 'CBETH',
  DAI = 'DAI',
  eBTC = 'eBTC',
  eETH = 'eETH',
  EIGEN = 'EIGEN',
  ETH = 'ETH',
  ETHFI = 'ETHFI',
  EZETH = 'EZETH',
  hETH = 'hETH',
  LBTC = 'LBTC',
  LDO = 'LDO',
  LINK = 'LINK',
  mETH = 'mETH',
  OP = 'OP',
  pATH = 'pATH',
  POL = 'POL',
  RETH = 'RETH',
  SOLVBTC = 'SOLVBTC',
  SOLVBTCBBN = 'SOLVBTCBBN',
  STAVAIL = 'STAVAIL',
  // STAVAILWORMHOLE = 'STAVAILWORMHOLE',
  SWETH = 'SWETH',
  TBTC = 'TBTC',
  TNT = 'TNT',
  USDC = 'USDC',
  USDX = 'USDX',
  USDT = 'USDT',
  WBTC = 'WBTC',
  WETH = 'WETH',
  WSTETH = 'WSTETH',
  // Testnet Tokens
  CPT = 'CPT',
}
