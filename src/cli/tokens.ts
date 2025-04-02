import {
  AddressType,
  ChainTypeEnum,
  ContractTypeEnum,
  TokenTypeEnum,
} from './types';

export const tokens: Record<
  TokenTypeEnum,
  Partial<Record<ChainTypeEnum, Record<ContractTypeEnum, AddressType>>>
> = {
  [TokenTypeEnum.ARB]: {
    ethereum: {
      transparentUpgradeableProxy: '0x3De76F94e843545241DFB26b99CCf7a33E86050F',
      interchainSecurityModule: '0x25Bd880dfd52b42242b0ef0d97b5eC66BABa0d01',
      proxyAdmin: '0x2a07fB774b4B82cb3D4725c10f9A260733A838Ad',
    },
    arbitrum: {
      transparentUpgradeableProxy: '0x99Ce18058C6fE35216D8626C3D183526240CcCbb',
      interchainSecurityModule: '0x750cb389a97127D2E7f264392dFf4948ac17fBBD',
      proxyAdmin: '0x85Baa11cbb537F54338B1c035C7E9487ac18cE64',
    },
    tangle: {
      transparentUpgradeableProxy: '0xf44511BAFE78CF8DAaa2804d075B40DEFFFe63b2',
      interchainSecurityModule: '0x9a9B61F1741C63824D800CC3973f9aDD7f6830F3',
      proxyAdmin: '0x9e911A61BE3D246fA8eF6d18bE84009c86B86240',
    },
  },
  [TokenTypeEnum.ATH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x78c1A54A229C5bd3Cf84c053a76Ad09fe883E2ba',
      interchainSecurityModule: '0x0000000000000000000000000000000000000000',
      proxyAdmin: '0x565832DCd96ED90bB4cbA096c19ecbc0B1A2aE7C',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x7d34A65260B02BE334Ef2597Ad8BFaF0f34902E9',
      interchainSecurityModule: '0x0000000000000000000000000000000000000000',
      proxyAdmin: '0xA193D0d7Af5055348180Bf9989430b2F702944b8',
    },
    tangle: {
      transparentUpgradeableProxy: '0xeA7aCe3ac44F3BC6dE29535Ce89f43956c4c7B65',
      interchainSecurityModule: '0x0000000000000000000000000000000000000000',
      proxyAdmin: '0x7cD332024e2EDC19465B5a6b764410C9A7648432',
    },
  },
  [TokenTypeEnum.AVAIL]: {
    ethereum: {
      transparentUpgradeableProxy: '0xf8dC93D3FCf1b8c7C950CB4bEe9dE70633C0553f',
      interchainSecurityModule: '0x2Abd9b6C86BFEb5Bed93af13753379F6D6F8cD9C',
      proxyAdmin: '0x4cea2C2c70Ca761cb072E8763D65085b3B5F002A',
    },
    tangle: {
      transparentUpgradeableProxy: '0x4A68525B31F8C67761e0429f6e4766a55f15b7A5',
      interchainSecurityModule: '0x5842f6d7f847AA6dC823b47a1C2E016703FC0B4A',
      proxyAdmin: '0x8fBeedfB2D0BB3C11f0bAd5Ca1E6cCE1e2dc4f70',
    },
  },
  [TokenTypeEnum.BNB]: {
    bsc: {
      transparentUpgradeableProxy: '0x510b0140a4A5b12c7127fB0A6A946200d66a64C2',
      interchainSecurityModule: '0x91af95945e296Ac3e53009451A64438613a10223',
      proxyAdmin: '0x8eC690c7b6253a0F834A90E820891BCeC9FA4B3E',
    },
    tangle: {
      transparentUpgradeableProxy: '0x7497aDa0D9761ce5fc5965dDF926810BEfDDEA4d',
      interchainSecurityModule: '0x58f37BB1eA5FED3D2543b950C5879fe18d727E8a',
      proxyAdmin: '0x157F25d24579e154d088236Ac358c7fe70577B12',
    },
  },
  [TokenTypeEnum.CBBTC]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xD5B8441E2929e73f1e9a9C53b7a6863780897FFa',
      interchainSecurityModule: '0x025839f191058117ae42349fbe26c98FADa8a2bf',
      proxyAdmin: '0xF1Ae6c09856F6328C56e951a796f7bD340968E88',
    },
    base: {
      transparentUpgradeableProxy: '0x07a4568A98621f90E7D94E87D7e9Bf806d5E19f3',
      interchainSecurityModule: '0x25886D6086829883340aFb96cfb526745835Fb9c',
      proxyAdmin: '0x2Da966F48379be87c1d465104A74a823DAE6d03A',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x28db68252Ae4597cC4567d3C2A29Bc50D0BCA02d',
      interchainSecurityModule: '0x7E4265C99fA9a1a1B4558F1c0044eA49A302af2c',
      proxyAdmin: '0xe42769e8e34Cf972349B17552BA841c846d8E2E4',
    },
    tangle: {
      transparentUpgradeableProxy: '0xFa0C5466EF2D1C6b4C769c8a3BaABD9e9107a6f7',
      interchainSecurityModule: '0xD1C72546e81b58dC7119707095cA38cAcA19b16D',
      proxyAdmin: '0x25ea0474e1C1C510F9E4E1117D04D802923ed45B',
    },
  },
  [TokenTypeEnum.CBETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x77dfB661ee20af4F0C48E4d31828efC34D9a93C6',
      interchainSecurityModule: '0xA70513Ce31949414a5E188674478B91509305aE5',
      proxyAdmin: '0xb3145f03Da46dfCa35C1902A75D93d2bFfEBa1a9',
    },
    base: {
      transparentUpgradeableProxy: '0xb0cB96127e4C4bE884F71c9CF2BbbFf897271e76',
      interchainSecurityModule: '0x7609676A9bb2C7403e4bab091f230424c80d49a5',
      proxyAdmin: '0x05069eecA840144133B22a9057f52c5f44B52c65',
    },
    optimism: {
      transparentUpgradeableProxy: '0x61F71B85762c8848083506da347969c58248f0c6',
      interchainSecurityModule: '0x2974Ed686Ab889376153939e0A26DDadD45B3101',
      proxyAdmin: '0x025839f191058117ae42349fbe26c98FADa8a2bf',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x99Ce18058C6fE35216D8626C3D183526240CcCbb',
      interchainSecurityModule: '0x750cb389a97127D2E7f264392dFf4948ac17fBBD',
      proxyAdmin: '0x85Baa11cbb537F54338B1c035C7E9487ac18cE64',
    },
    tangle: {
      transparentUpgradeableProxy: '0x74CBCBa1125ec200cc63efF432B462A084E557cc',
      interchainSecurityModule: '0x403ced7a53B755b9605f7D031f4c75e9e6622B12',
      proxyAdmin: '0x1567b57b76d872a11AF3831338b165352bB51a24',
    },
  },
  [TokenTypeEnum.DAI]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xD297d7F1B1660334F98941Dc7d3BC4A49b7837EC',
      interchainSecurityModule: '0xd8b658F28b70D3580b9984477135Fff982730053',
      proxyAdmin: '0xaC19c125f0056D23c28b2DD94438eDb8B93c816D',
    },
    base: {
      transparentUpgradeableProxy: '0xfB03a8fEea1635c16Fd81731E89E5517201C20e5',
      interchainSecurityModule: '0x79E9d28da6Ffa97302f85325B1F92FAff19E80fF',
      proxyAdmin: '0x535CbDc817c1B7a6e9506C8a786323c1B8779b20',
    },
    optimism: {
      transparentUpgradeableProxy: '0x6d55528963D147BEA3e925538F2e32C24Fa0119a',
      interchainSecurityModule: '0x64937EaC761209f237bfC10718e6fD75713bA116',
      proxyAdmin: '0x0CA5F3dA87ABc52083ADeb52930868FeCb6e267E',
    },
    polygon: {
      transparentUpgradeableProxy: '0x215fF6c8C9FdC3a8635F2343112B7b5aA8194789',
      interchainSecurityModule: '0xcC1579deEE9Fd67B3F73EBA8CF2e113bcb59515C',
      proxyAdmin: '0xb4c2a9A412d4ae746706CAc8aacf6340EB3D6134',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xC5B342D3CfAd241D9300Cb76116CA4a5e30Cf2Ac',
      interchainSecurityModule: '0x3594E11576E26B71b16510ECD98Dce4Fe9DCCC92',
      proxyAdmin: '0x266c07994EdeeC3d252967935A8Ab03362f3075E',
    },
    tangle: {
      transparentUpgradeableProxy: '0xE75BE8E6C71eA004949898306DDa9BD59Cc2b0dC',
      interchainSecurityModule: '0xe9E709E681635Cb5F4C8B18759ABe5b79313130E',
      proxyAdmin: '0x86f1333F3e753036dF8487f19C719b61ee9EaB54',
    },
  },
  [TokenTypeEnum.eBTC]: {
    ethereum: {
      transparentUpgradeableProxy: '0x8a578773BdE68985B167345301B04B7368c15DAe',
      interchainSecurityModule: '0x8eC690c7b6253a0F834A90E820891BCeC9FA4B3E',
      proxyAdmin: '0xCdb39557fa155Ff98d11739B6A5F687E7Cb922d8',
    },
    tangle: {
      transparentUpgradeableProxy: '0x8360830C2BCE22a7Dd15d9350C81d8E573B563eE',
      interchainSecurityModule: '0xE6efEe4D0D8849e7635cC771A8a92F74da61AB55',
      proxyAdmin: '0x89497185712fF53507e9dd0a44cf7307d293F98C',
    },
  },
  [TokenTypeEnum.eETH]: {
    ethereum: {
      transparentUpgradeableProxy: '0x91BCcB2660802f567A48e4F636E35D2eE5d6463F',
      interchainSecurityModule: '0xc296f6304673eD443b8dbeeE1a446c0F525E36b9',
      proxyAdmin: '0xF6D2c670ebF3BC82c4Dbd1275f8c35eF80d9cd02',
    },
    tangle: {
      transparentUpgradeableProxy: '0x69cC6D7da66752B267C9F6B157F0643F54654233',
      interchainSecurityModule: '0x68a4Ce2f55a4E5DbCa62A4B428B432D4974e611b',
      proxyAdmin: '0xf25Cd75Adb9418200Ad56999ec943C1530b693Fa',
    },
  },
  [TokenTypeEnum.EIGEN]: {
    ethereum: {
      transparentUpgradeableProxy: '0x7C547f860b71399846E5CC2487f60A2b34396CC2',
      interchainSecurityModule: '0x85EC41F8C12FBAEf69367cE0d7A37a51dc2F21b4',
      proxyAdmin: '0x426e01dC3a98Fa6461de71350158Aa2dfc2148aB',
    },
    tangle: {
      transparentUpgradeableProxy: '0x322CCb93C99BDDD78eC7cc6cA55eeceF1268BC16',
      interchainSecurityModule: '0xAF61d4e398e4137A51e7cc9A1B612c8929aaAB0F',
      proxyAdmin: '0x581eE0aE51D2707b1733f585aF8a6AB1b62562E2',
    },
  },
  [TokenTypeEnum.ETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x68AbCC37de2BEb083Cd6A549f64C3494Ea418BB7',
      interchainSecurityModule: '0x0DBcA54Ad603C3A210Ba984d2AE3673BCF250716',
      proxyAdmin: '0xD1C72546e81b58dC7119707095cA38cAcA19b16D',
    },
    base: {
      transparentUpgradeableProxy: '0x61F71B85762c8848083506da347969c58248f0c6',
      interchainSecurityModule: '0x2974Ed686Ab889376153939e0A26DDadD45B3101',
      proxyAdmin: '0x025839f191058117ae42349fbe26c98FADa8a2bf',
    },
    optimism: {
      transparentUpgradeableProxy: '0x96d4357EB200f230816811b4320259b2f9228D5c',
      interchainSecurityModule: '0xf31aAA6B4E58C19DFE166Bd3ca2d902AB44aaAC8',
      proxyAdmin: '0x58f37BB1eA5FED3D2543b950C5879fe18d727E8a',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x2BAc449691070F058Fdb0E738D1bE9175f8ec63d',
      interchainSecurityModule: '0x240A5ea397e767FaF1205F25365b76Bc0E8a8826',
      proxyAdmin: '0xc80f2Bd6Bc9C74a6674bC0A0966e76a5eAC51Cf7',
    },
    tangle: {
      transparentUpgradeableProxy: '0x6341d878A7f8D1872D8EA6f10e15E89692DC7cd7',
      interchainSecurityModule: '0x649D1207F53D897338876d888508ED526BE7A898',
      proxyAdmin: '0xfE43C0ef9C60Bc76A999284E4017354902549DC4',
    },
  },
  [TokenTypeEnum.ETHFI]: {
    ethereum: {
      transparentUpgradeableProxy: '0xa0506Bea9638F3d1B83c9f0E9b9C940cA9c77338',
      interchainSecurityModule: '0x64570ea315052A04E0b476254bb142BA21759DF5',
      proxyAdmin: '0xc0CB548E329A9Fb2431E651E8e0B3269aD6F1D22',
    },
    tangle: {
      transparentUpgradeableProxy: '0xc4B1827d959d4b109787893A7C8978050fDFC58B',
      interchainSecurityModule: '0x3cd800F0D061180D866Fd933A1ACB08d0C85Aa0b',
      proxyAdmin: '0x45438f04550021467bD6A7CcB8996A18eeeCEf3e',
    },
  },
  [TokenTypeEnum.EZETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x7CFc15E7fD3998B962D1FC137b64d10513c18097',
      interchainSecurityModule: '0x0B09627852264Ab9e4545e5690A783e02CEa38BB',
      proxyAdmin: '0x896B08Be54Dd1d244b1b4367870b0dd36329E6f7',
    },
    base: {
      transparentUpgradeableProxy: '0xCa965b842699e16b367702310f50161e03eb2d27',
      interchainSecurityModule: '0x157F25d24579e154d088236Ac358c7fe70577B12',
      proxyAdmin: '0x71Ef98c7DB8bDDA376684a1739a78210dFD69CeF',
    },
    optimism: {
      transparentUpgradeableProxy: '0xb794b059bDA36a01C3757693D4136162752e03C6',
      interchainSecurityModule: '0x4AAcDc44838f110fb044fe2F145d7bc2AfEab797',
      proxyAdmin: '0x88dd0d1DA4155f453a5933310df48Ce7d7fEAbfF',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xea4866eD17f557c8E4D2fB93E705320522216145',
      interchainSecurityModule: '0x5742195A81349F1306361D71A050C4cDdC5814FE',
      proxyAdmin: '0x3ecFc99248C32baEAcA1Fd96D3130A0C49cC7B80',
    },
    tangle: {
      transparentUpgradeableProxy: '0x536889B3c998D36911BA73411F502662B0754684',
      interchainSecurityModule: '0x9D24901D1a35E16b834727e06e0f35E30b752FF5',
      proxyAdmin: '0x4463B93449EFA70dD086fCb86c6f5Bde972b3bd9',
    },
  },
  [TokenTypeEnum.hETH]: {
    ethereum: {
      transparentUpgradeableProxy: '0xFF2b0Dab4956e69bc2c78542C396EEcD9eAB3460',
      interchainSecurityModule: '0xab4E420B21DFa57b103aA09636C1CA88657CDEC7',
      proxyAdmin: '0x0778878E53c632da21cd3951A434a54f418d7CB8',
    },
    tangle: {
      transparentUpgradeableProxy: '0xcFeb82B9a9C7791683C846a69311A6885eD29A03',
      interchainSecurityModule: '0x1a92b502Eff39D5E5784F1F1D2212e57eD80218a',
      proxyAdmin: '0x4A12F2A9CD58e4092266b1f1699b6Ce2b2e80af8',
    },
  },
  [TokenTypeEnum.LBTC]: {
    base: {
      transparentUpgradeableProxy: '0xD297d7F1B1660334F98941Dc7d3BC4A49b7837EC',
      interchainSecurityModule: '0xd8b658F28b70D3580b9984477135Fff982730053',
      proxyAdmin: '0xaC19c125f0056D23c28b2DD94438eDb8B93c816D',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x88dd0d1DA4155f453a5933310df48Ce7d7fEAbfF',
      interchainSecurityModule: '0xEF783f54b69554f0A3c7263DF508A395febb407b',
      proxyAdmin: '0x16cE12C3932936deC6F2E7bb834db1d0c08aa5dC',
    },
    tangle: {
      transparentUpgradeableProxy: '0xB703e29F2b05c57Fbc2E3492bE5fC6Db62CE3188',
      interchainSecurityModule: '0xC769ECfF91b9DC0B9F14E937784E20FbC70F0523',
      proxyAdmin: '0x40C25313fF0850D7B6cb299Cf70Af0a7D1787bad',
    },
  },
  [TokenTypeEnum.LDO]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xd311608Ca8b12d3cce99D9318bc38b4BCcBdE11d',
      interchainSecurityModule: '0x0Da2b3667Ea028d4362851830c195d772F42Cc12',
      proxyAdmin: '0x4C9C077d025904F5aCc256E8a00CA952d21EE950',
    },
    optimism: {
      transparentUpgradeableProxy: '0x87228bCa8bdB5F3c1EafDddCC14a059Bcde2233b',
      interchainSecurityModule: '0x75d051cB10Dacc185D3bDB2fE781D1C624707962',
      proxyAdmin: '0x160F5cD345Db235C92B671782d27F5aA6F2f31EB',
    },
    polygon: {
      transparentUpgradeableProxy: '0x99829129a49517FAc964802cA30E75Fd96143dC2',
      interchainSecurityModule: '0x80656aaC307F8c7fc6a8ab6109604AA7314B34Ed',
      proxyAdmin: '0x988C100871A1bAA4750c70e4d50B08Dd4efEf881',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x160F5cD345Db235C92B671782d27F5aA6F2f31EB',
      interchainSecurityModule: '0xb794b059bDA36a01C3757693D4136162752e03C6',
      proxyAdmin: '0xc253bB2f8fd02d1B54eb5A9a4b421dfB2eCCE177',
    },
    tangle: {
      transparentUpgradeableProxy: '0x94AB056b6CF81464458d205E632b2757A311E821',
      interchainSecurityModule: '0xC1D1fc27D57e92d20d72a6bcb0438BA7965979A6',
      proxyAdmin: '0xf2a7a073Ce6A2c89E0fa6baa12C20Fc0e35bf499',
    },
  },
  [TokenTypeEnum.LINK]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x0251Bdc4cd9226B369859fd75D5be133EF48e7D9',
      interchainSecurityModule: '0xB4205464802DFDcC724cD180F6E1Eb526cea7f27',
      proxyAdmin: '0x7d34A65260B02BE334Ef2597Ad8BFaF0f34902E9',
    },
    base: {
      transparentUpgradeableProxy: '0xB922779bB836765598709032736C86c67E5A514e',
      interchainSecurityModule: '0x768CCaB7b567EA64c94565668a9Dcf12C3f4d6Ed',
      proxyAdmin: '0x6365416870029198661c996f6FCfFe4cBEA1bB39',
    },
    optimism: {
      transparentUpgradeableProxy: '0x7a6BB435590eab856cA0b19EF5bFC227346f0f96',
      interchainSecurityModule: '0x3fa7397570dae411CAB4e22140e1462371dDc8D2',
      proxyAdmin: '0xbD1B147Daaef235eeec053b5eA7FD0282B3BA14f',
    },
    polygon: {
      transparentUpgradeableProxy: '0xfeE0B3295D2f7e209217F33FDb46e79D6b3C15C7',
      interchainSecurityModule: '0xAA037e1cC7c8E940B506AA09677F1efd128E432C',
      proxyAdmin: '0x544257F7c3CCae078fe31C0e81CA8CA71ECF65a2',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xfD5B74BA0D507290891766D3902cfC9658F08C4E',
      interchainSecurityModule: '0x87228bCa8bdB5F3c1EafDddCC14a059Bcde2233b',
      proxyAdmin: '0xAbCD26a13F844A1038FDb7e33695BBd6c41ed4fc',
    },
    tangle: {
      transparentUpgradeableProxy: '0xd27b4c2F12d0E197c5563daa507DB31c5994180D',
      interchainSecurityModule: '0x47919C77051941cd207d0C25e409a279610567E8',
      proxyAdmin: '0xb3a1282af584D23d1E4eA488bAC9bE24788e321d',
    },
  },
  [TokenTypeEnum.mETH]: {
    ethereum: {
      transparentUpgradeableProxy: '0xA06164d6440dd1E8cb51b743d7bEAB86c44f74f1',
      interchainSecurityModule: '0xf44511BAFE78CF8DAaa2804d075B40DEFFFe63b2',
      proxyAdmin: '0x2E57D6635b81f70052AdaaE7CFF371Aec399c011',
    },
    tangle: {
      transparentUpgradeableProxy: '0x89C60DBe8F15d9567A75B0712D43CE4d44977c29',
      interchainSecurityModule: '0x8b4b071B50B6BB7E8AFA37275Cf9689359d1b651',
      proxyAdmin: '0xFDc8a830Cd86E78ba5dA166b8F6584e603f43f13',
    },
  },
  [TokenTypeEnum.OP]: {
    optimism: {
      transparentUpgradeableProxy: '0x3fD392c4b9c8ceD4bA003115A7803D0Fa0c6718B',
      interchainSecurityModule: '0x3a474145a9bEbb2D15c16b211a15Ea2c53bab906',
      proxyAdmin: '0xfD5B74BA0D507290891766D3902cfC9658F08C4E',
    },
    tangle: {
      transparentUpgradeableProxy: '0x117Ea1d145787472C368aB427ae9A4B0b5B8CEe9',
      interchainSecurityModule: '0xCba92134974d3ba84Ee10d4Ed53155Ec8E0Fa62D',
      proxyAdmin: '0xA9712fF0b387F528BD3B7ff4715c7684007880B5',
    },
  },
  [TokenTypeEnum.pATH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xf1025024e86Ffbb639A00EE7918B0411eE4B7e52',
      interchainSecurityModule: '0x0000000000000000000000000000000000000000',
      proxyAdmin: '0xDcDab4A2B7f73bC006E1dCe97FCDa67f1C2cc465',
    },
    tangle: {
      transparentUpgradeableProxy: '0xabc70B5990d6349EAd1112432b9e2357eE2D7a45',
      interchainSecurityModule: '0x0000000000000000000000000000000000000000',
      proxyAdmin: '0xFB9C07Ef1ff247848Ce4174cae98D571899ff712',
    },
  },
  [TokenTypeEnum.POL]: {
    polygon: {
      transparentUpgradeableProxy: '0xCdb39557fa155Ff98d11739B6A5F687E7Cb922d8',
      interchainSecurityModule: '0x91BCcB2660802f567A48e4F636E35D2eE5d6463F',
      proxyAdmin: '0x0b098c0f4589bB52dbD81958861f7C8916bC3689',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x9e911A61BE3D246fA8eF6d18bE84009c86B86240',
      interchainSecurityModule: '0xF852cE3E163ae2A2B43f05C6696B50D386ca44d5',
      proxyAdmin: '0x65135fb3482E86962D9C739c47D1827525AeBea5',
    },
    tangle: {
      transparentUpgradeableProxy: '0x160F5cD345Db235C92B671782d27F5aA6F2f31EB',
      interchainSecurityModule: '0xb794b059bDA36a01C3757693D4136162752e03C6',
      proxyAdmin: '0xc253bB2f8fd02d1B54eb5A9a4b421dfB2eCCE177',
    },
  },
  [TokenTypeEnum.RETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xB6e1965e8c13657e25450F0161eebAD8F2b2FC0E',
      interchainSecurityModule: '0xDdbAdE3fE659C34ba4EcA27A77944e49A081d482',
      proxyAdmin: '0xbd6651dd0DAe09818baA8950430D139BD0D899ff',
    },
    base: {
      transparentUpgradeableProxy: '0xb2434BA552d88e026c1D339CFE8c827d98A626b9',
      interchainSecurityModule: '0x988C100871A1bAA4750c70e4d50B08Dd4efEf881',
      proxyAdmin: '0xad33fE8cA89a71aBD6EECe6182B557dE65bd5C31',
    },
    optimism: {
      transparentUpgradeableProxy: '0xEF783f54b69554f0A3c7263DF508A395febb407b',
      interchainSecurityModule: '0xb4c2a9A412d4ae746706CAc8aacf6340EB3D6134',
      proxyAdmin: '0xea4866eD17f557c8E4D2fB93E705320522216145',
    },
    polygon: {
      transparentUpgradeableProxy: '0x158C33834acf0B3d061DdFA1C7784cA595AC1c25',
      interchainSecurityModule: '0x5657B3229cCdcffa863651c1D0874476A190Cf3D',
      proxyAdmin: '0x74E46BD9B48d30969aF1Ee2e381cE1B76854831C',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xD261C3F45F88169FA2b51dFA65c45e8644E2e0bB',
      interchainSecurityModule: '0x3fD392c4b9c8ceD4bA003115A7803D0Fa0c6718B',
      proxyAdmin: '0x5657B3229cCdcffa863651c1D0874476A190Cf3D',
    },
    tangle: {
      transparentUpgradeableProxy: '0xbD33235a960874027ad0C7393BE8583572EE2f5b',
      interchainSecurityModule: '0x2B6bDd96B79B5F7593B58e2CAc2C63428BE0292e',
      proxyAdmin: '0x9FBDc7bCb58c6A7193D1C95eF4Db1EC7c8bBade5',
    },
  },
  [TokenTypeEnum.SOLVBTC]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xc80f2Bd6Bc9C74a6674bC0A0966e76a5eAC51Cf7',
      interchainSecurityModule: '0xA06164d6440dd1E8cb51b743d7bEAB86c44f74f1',
      proxyAdmin: '0x41Be5bcA349306eD4cC9ef2eD4046e8D621ea22B',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x677952E2ff8c5Fb2F2455a84AC70208f4c3d7810',
      interchainSecurityModule: '0x199aE19c888E06FE1a68E8b1b588E10ca7B7B7d2',
      proxyAdmin: '0x80656aaC307F8c7fc6a8ab6109604AA7314B34Ed',
    },
    tangle: {
      transparentUpgradeableProxy: '0x223E7B1EAd79C6603a891D9e733FD5ADD1044dd1',
      interchainSecurityModule: '0xEE62091A0b49c3206Ffcae728f794Fa698399bc2',
      proxyAdmin: '0x2E50953884df5EFc272adAC60B394752e0B4Daa4',
    },
  },
  [TokenTypeEnum.SOLVBTCBBN]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x122c216D5379376413Fc7B547598AcD5268A57B4',
      interchainSecurityModule: '0xdfCaBfC097315a4aC4C70285Ad626AD94aba5b8F',
      proxyAdmin: '0xDd9A241f3219221D2a181D3465a46Bed89A3127A',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x96d4357EB200f230816811b4320259b2f9228D5c',
      interchainSecurityModule: '0xf31aAA6B4E58C19DFE166Bd3ca2d902AB44aaAC8',
      proxyAdmin: '0x58f37BB1eA5FED3D2543b950C5879fe18d727E8a',
    },
    tangle: {
      transparentUpgradeableProxy: '0xF0120960A6D667460F21f88778cb5e44cb90Ac3d',
      interchainSecurityModule: '0xFF42d986DaD3c1DC627D18E4cF5784B432772DF7',
      proxyAdmin: '0x395CA22AEa9f3d61F3D786Ad08ec6e3aF5Da1Ae9',
    },
  },
  [TokenTypeEnum.STAVAIL]: {
    base: {
      transparentUpgradeableProxy: '0xcC1579deEE9Fd67B3F73EBA8CF2e113bcb59515C',
      interchainSecurityModule: '0xf57A9F38C81aCba265522627E90AAA5EB197028f',
      proxyAdmin: '0x5180c082e7E438c80cF4235C098C8CB0a7c3E3FD',
    },
    tangle: {
      transparentUpgradeableProxy: '0xb0b1cb358f4597838859edA7dac076ada0E8aA34',
      interchainSecurityModule: '0xB8b13519281e759797c6AC18a871793a22c33E86',
      proxyAdmin: '0xdd349B107E305FBE56a64876645a947f68B5b9E3',
    },
  },
  [TokenTypeEnum.SWETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x15BC1c8861def0e6605685bFEdF3A6456f068dBa',
      interchainSecurityModule: '0xa2759368aA95c6d329260897a4c71870606bCa9f',
      proxyAdmin: '0x64570ea315052A04E0b476254bb142BA21759DF5',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xC5D0781702D9c7BCcdA04DF3F767F1058e753cd1',
      interchainSecurityModule: '0x698e3c0B5D4259bE86A3A323274A4869A97bc826',
      proxyAdmin: '0x1D6028D35494b30e7d57b0e33483c5b8CF0C6840',
    },
    tangle: {
      transparentUpgradeableProxy: '0x28ce5Ab9E7b4B04f146E3Ca5E3cb87D7b07d5497',
      interchainSecurityModule: '0x03f2Cd12D35FE6223Fb6e69182C05dFd5254DE77',
      proxyAdmin: '0x18C34a1A9A472a12C123C252bF759ED18028b570',
    },
  },
  [TokenTypeEnum.TBTC]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x8DA17A0e53EBbf10578FFBD81fEBc878AbDa6cf8',
      interchainSecurityModule: '0xa450e094a622E4d7Fdb6426061DA6660f7e16714',
      proxyAdmin: '0xfd98C553ED512b2f82426F710E900A604964DfC4',
    },
    base: {
      transparentUpgradeableProxy: '0x69F6bBb296eAB012955BbB32524E9c0d5a84153F',
      interchainSecurityModule: '0x122c216D5379376413Fc7B547598AcD5268A57B4',
      proxyAdmin: '0x460313882a7C458217903335817b354348C6E2D7',
    },
    optimism: {
      transparentUpgradeableProxy: '0x0ef4a94D10C7eb84F01247365b6983c2ACF43fc4',
      interchainSecurityModule: '0x299d468985e1a7E4979B3A18f1F2dDDb4f17dd22',
      proxyAdmin: '0xAf461f35C12d207ee533191C89B476CCB1b03D60',
    },
    polygon: {
      transparentUpgradeableProxy: '0xF852cE3E163ae2A2B43f05C6696B50D386ca44d5',
      interchainSecurityModule: '0x1e9Da23C5FEBa33bae8812C984866A4619bFC761',
      proxyAdmin: '0x0a5C7fa8B9b25F9df3211203F71139643b228d19',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xa4cFffD900758D492D022E6b67f2092b1Dc8bCD4',
      interchainSecurityModule: '0x8873D88a14889Cfd222d704b04Ac23e751Aa4807',
      proxyAdmin: '0xdfCaBfC097315a4aC4C70285Ad626AD94aba5b8F',
    },
    tangle: {
      transparentUpgradeableProxy: '0x388A9a1a38CA0079a43202817cc56315C5D4B89B',
      interchainSecurityModule: '0x2f0e8C096155B02b77b7740BE9552e4816cCD126',
      proxyAdmin: '0x2302A28Dd787589Fb7e4dD9C2cb34A939AAB7fc3',
    },
  },
  [TokenTypeEnum.TNT]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xB23565d388d03B95212Dc5b8F02e40D7edC77E1A',
      interchainSecurityModule: '0xA72AA4F5A4cF769eC5C5e766C3506e9b18cA37D7',
      proxyAdmin: '0x122b70dAF8D39cf0Caa1E46b9DcB689335835C08',
    },
    base: {
      transparentUpgradeableProxy: '0x64570ea315052A04E0b476254bb142BA21759DF5',
      interchainSecurityModule: '0xB6e1965e8c13657e25450F0161eebAD8F2b2FC0E',
      proxyAdmin: '0x9bc2623da7e10DF3C26f3ec85D5606b949Da082a',
    },
    bsc: {
      transparentUpgradeableProxy: '0x108F919b5A76B64e80dBf74130Ff6441A62F6405',
      interchainSecurityModule: '0x3De76F94e843545241DFB26b99CCf7a33E86050F',
      proxyAdmin: '0x731Dbb1e19C0688a7164Da8B9882379b85F2d863',
    },
    linea: {
      transparentUpgradeableProxy: '0x606F11cF2395881689eC7d1289A2282ab694bDa2',
      interchainSecurityModule: '0x65249c77f3C9232eDB0CF7730751BEa2526272b3',
      proxyAdmin: '0x1F6cD0aDc4627be8AE07444A5E3655eFA4271802',
    },
    optimism: {
      transparentUpgradeableProxy: '0xA06164d6440dd1E8cb51b743d7bEAB86c44f74f1',
      interchainSecurityModule: '0xf44511BAFE78CF8DAaa2804d075B40DEFFFe63b2',
      proxyAdmin: '0x2E57D6635b81f70052AdaaE7CFF371Aec399c011',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x1465399089F3bFC43E7A52637a296C46423f8417',
      interchainSecurityModule: '0x919A0974cb9B9ac7d82bA9538cB353C8c3e7C2a9',
      proxyAdmin: '0x0DD086E5F5c11b7979C30Eb51a5fb26f45183bb1',
    },
    tangle: {
      transparentUpgradeableProxy: '0xFB7D161c56FC001Ee4BD30F7B94519fEed25b22F',
      interchainSecurityModule: '0x29c197244E927A507f98AB78fcca10D672cb26c9',
      proxyAdmin: '0x82ad15AE12953A01DCb843b61CC82e587e5d0832',
    },
  },
  [TokenTypeEnum.USDC]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xd7405f4396a90cD6B1f11f172F08034dBd9265D8',
      interchainSecurityModule: '0x16778ABA2C184b84591D2a093a8DEF96b1dBc69D',
      proxyAdmin: '0xa3C6690FD69Ca6D0E1f6C903beCB1bD1b7595E29',
    },
    base: {
      transparentUpgradeableProxy: '0xf041B44EE24B5358D0999076933675fF5baCa437',
      interchainSecurityModule: '0x406ff4690378e6fdAEF359287237917d2aB68F4A',
      proxyAdmin: '0x3594E11576E26B71b16510ECD98Dce4Fe9DCCC92',
    },
    optimism: {
      transparentUpgradeableProxy: '0x7A153C00352DCb87E11684ce504bfE4dC170acCb',
      interchainSecurityModule: '0xec4f122Db7E2c3b0B5A589FCABC8B72F6F14a554',
      proxyAdmin: '0x96eC2e4a373e71974F66cFBa5C8480AE7e03E023',
    },
    polygon: {
      transparentUpgradeableProxy: '0xf041B44EE24B5358D0999076933675fF5baCa437',
      interchainSecurityModule: '0x406ff4690378e6fdAEF359287237917d2aB68F4A',
      proxyAdmin: '0x3594E11576E26B71b16510ECD98Dce4Fe9DCCC92',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x3DBBB4fdC5725FF780E653FfC3Af427029C259F3',
      interchainSecurityModule: '0xF1Ae6c09856F6328C56e951a796f7bD340968E88',
      proxyAdmin: '0x63Aa6099652b0F350e270b341e2c74993403a279',
    },
    tangle: {
      transparentUpgradeableProxy: '0x524322C9bF30137E12f86EFE74D1Cba05f4126Fa',
      interchainSecurityModule: '0x0F5b580B47262A1984B24e86c2311A10D9F8a808',
      proxyAdmin: '0x1cf07E9b44ec36fC180f29B25684fC0cAE5935E1',
    },
  },
  [TokenTypeEnum.USDX]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x4139b8F1474FFd04EE15F86103EF53f8Fdb3d8D0',
      interchainSecurityModule: '0x19f85bb15799C82728633D1730a9688e07Cf5da0',
      proxyAdmin: '0xB8b13519281e759797c6AC18a871793a22c33E86',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x21F16dB63F954E5C73e06757E0fe136f2BF91564',
      interchainSecurityModule: '0x6c1F9a4f4EfC39B2D843A4270C0c04a5c811efeC',
      proxyAdmin: '0x5f74401ce6B2a872A9A2Cff066Fa66C598Bf8bcA',
    },
    tangle: {
      transparentUpgradeableProxy: '0x04667a82F593d55aa34CE38B204Ec0Fdc54cDe0C',
      interchainSecurityModule: '0x15d273155C7a215dbB1245C247b71DF576c45EAf',
      proxyAdmin: '0x0dF83BD937BE28933dAa3AfB49F4faD2f10c73CD',
    },
  },
  [TokenTypeEnum.USDT]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x5b6C0685Fc934C53b4523Bf8df5277dC4f3914FA',
      interchainSecurityModule: '0xbD1B147Daaef235eeec053b5eA7FD0282B3BA14f',
      proxyAdmin: '0xAA037e1cC7c8E940B506AA09677F1efd128E432C',
    },
    base: {
      transparentUpgradeableProxy: '0x72141B45a23333011AaAb07D6fDEBbE97049091e',
      interchainSecurityModule: '0x681C7ce889E66c645a12C5Ab4E9651c806a5579C',
      proxyAdmin: '0x64937EaC761209f237bfC10718e6fD75713bA116',
    },
    optimism: {
      transparentUpgradeableProxy: '0x108F919b5A76B64e80dBf74130Ff6441A62F6405',
      interchainSecurityModule: '0x3De76F94e843545241DFB26b99CCf7a33E86050F',
      proxyAdmin: '0x731Dbb1e19C0688a7164Da8B9882379b85F2d863',
    },
    polygon: {
      transparentUpgradeableProxy: '0x72141B45a23333011AaAb07D6fDEBbE97049091e',
      interchainSecurityModule: '0x681C7ce889E66c645a12C5Ab4E9651c806a5579C',
      proxyAdmin: '0x64937EaC761209f237bfC10718e6fD75713bA116',
    },
    ethereum: {
      transparentUpgradeableProxy: '0x91611BFabaD20B5f8f286705C6510456E43E427F',
      interchainSecurityModule: '0xa3C6690FD69Ca6D0E1f6C903beCB1bD1b7595E29',
      proxyAdmin: '0xBE36e02544811920E48110d56A5eC65F72A36711',
    },
    tangle: {
      transparentUpgradeableProxy: '0xa06898e779998eC3a749368DF924d5b94C2465b4',
      interchainSecurityModule: '0x7E714a4E1A745f1Ae24aF3f18E47995a3002D7BD',
      proxyAdmin: '0x3936730af1b6EB36e765A54fA5476876C6c08e37',
    },
  },
  [TokenTypeEnum.WBTC]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x44626462ed716DF3569a55c3584CEe2027d061bf',
      interchainSecurityModule: '0x2BAc449691070F058Fdb0E738D1bE9175f8ec63d',
      proxyAdmin: '0x23Ca670678C0E7F1A539b537B71D8f8078927B19',
    },
    base: {
      transparentUpgradeableProxy: '0x989Ecb4dB2543b694b7496f5823DA6fDd26cb5C5',
      interchainSecurityModule: '0xd911cE17E1d894CaAd9E56b980dB457b69eF3d8C',
      proxyAdmin: '0x24f0759b4c3d8Bca1cE86118330A3Bfa74A35f58',
    },
    optimism: {
      transparentUpgradeableProxy: '0xDCb6a0a3bC5e034400e845483f21da67866691Bb',
      interchainSecurityModule: '0xC5B342D3CfAd241D9300Cb76116CA4a5e30Cf2Ac',
      proxyAdmin: '0x80DEf4e83364Cb2dac44928Bd411e6E698A0CD35',
    },
    polygon: {
      transparentUpgradeableProxy: '0x0E7f434f502200ec7BEb04Ed6B38DFaf0aD88617',
      interchainSecurityModule: '0xc253bB2f8fd02d1B54eb5A9a4b421dfB2eCCE177',
      proxyAdmin: '0x9A5561E7cd9745abe7C668eCb4f64d0DEE532b17',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xa3E0920CAf0e2eDDDe54D49fFC1d82e1a23c9693',
      interchainSecurityModule: '0xDde5FA6a9eE7650b871532d7Cf403A9981cBc873',
      proxyAdmin: '0x85b9867a52114a3f84B4bd8c3Bb957B921A4b1A5',
    },
    tangle: {
      transparentUpgradeableProxy: '0xd5c9FCfF2f362E89538E92e8B6e677571E11C1e7',
      interchainSecurityModule: '0x04E7DE4eA41363E77F8774AB8CcEB02ef48916D3',
      proxyAdmin: '0xf7daF4b9f0e94557310332b2d0b703Db69ABeaD6',
    },
  },
  [TokenTypeEnum.WETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0x02644D01979CDe915eD7D7C3a997072F5716D137',
      interchainSecurityModule: '0x0DD086E5F5c11b7979C30Eb51a5fb26f45183bb1',
      proxyAdmin: '0x0F5b580B47262A1984B24e86c2311A10D9F8a808',
    },
    base: {
      transparentUpgradeableProxy: '0xAa14351a1FdD71f5Fdf3653AF0130f79fC005F6f',
      interchainSecurityModule: '0x214C82dB4A580175f0CFE0c8B0a4455F87AAb6a4',
      proxyAdmin: '0x16778ABA2C184b84591D2a093a8DEF96b1dBc69D',
    },
    optimism: {
      transparentUpgradeableProxy: '0x677952E2ff8c5Fb2F2455a84AC70208f4c3d7810',
      interchainSecurityModule: '0x199aE19c888E06FE1a68E8b1b588E10ca7B7B7d2',
      proxyAdmin: '0x80656aaC307F8c7fc6a8ab6109604AA7314B34Ed',
    },
    polygon: {
      transparentUpgradeableProxy: '0x0fB3F8e01fAEf0eBC1E56F34E58BA3edCe75B116',
      interchainSecurityModule: '0x71Ef98c7DB8bDDA376684a1739a78210dFD69CeF',
      proxyAdmin: '0x698e3c0B5D4259bE86A3A323274A4869A97bc826',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xf57A9F38C81aCba265522627E90AAA5EB197028f',
      interchainSecurityModule: '0x053894C55dC1b2B873FC125333a31f217Bb41e74',
      proxyAdmin: '0x07a4568A98621f90E7D94E87D7e9Bf806d5E19f3',
    },
    tangle: {
      transparentUpgradeableProxy: '0xf1025024e86Ffbb639A00EE7918B0411eE4B7e52',
      interchainSecurityModule: '0xDeFfe4Fd1AC72C591cFbeF3a12e72d0DC8CAD362',
      proxyAdmin: '0x8Ab0961D06418b3169290993F579616BdBa054cd',
    },
  },
  [TokenTypeEnum.WSTETH]: {
    arbitrum: {
      transparentUpgradeableProxy: '0xa3E0920CAf0e2eDDDe54D49fFC1d82e1a23c9693',
      interchainSecurityModule: '0xDde5FA6a9eE7650b871532d7Cf403A9981cBc873',
      proxyAdmin: '0x85b9867a52114a3f84B4bd8c3Bb957B921A4b1A5',
    },
    base: {
      transparentUpgradeableProxy: '0x451c6284eEA043Fa3969bA65530E96421C89bF9b',
      interchainSecurityModule: '0xF900150228f0141a918457818Aed0E2395F21661',
      proxyAdmin: '0x215fF6c8C9FdC3a8635F2343112B7b5aA8194789',
    },
    optimism: {
      transparentUpgradeableProxy: '0x99Ce18058C6fE35216D8626C3D183526240CcCbb',
      interchainSecurityModule: '0x750cb389a97127D2E7f264392dFf4948ac17fBBD',
      proxyAdmin: '0x85Baa11cbb537F54338B1c035C7E9487ac18cE64',
    },
    polygon: {
      transparentUpgradeableProxy: '0x5180c082e7E438c80cF4235C098C8CB0a7c3E3FD',
      interchainSecurityModule: '0x07a4568A98621f90E7D94E87D7e9Bf806d5E19f3',
      proxyAdmin: '0x3240f00998fe098165b1f8fCaDBaE292e62560aD',
    },
    ethereum: {
      transparentUpgradeableProxy: '0xD297d7F1B1660334F98941Dc7d3BC4A49b7837EC',
      interchainSecurityModule: '0xd8b658F28b70D3580b9984477135Fff982730053',
      proxyAdmin: '0xaC19c125f0056D23c28b2DD94438eDb8B93c816D',
    },
    tangle: {
      transparentUpgradeableProxy: '0xC0fD9c0ee70d7d9Eede7f5918077dC506aF95E48',
      interchainSecurityModule: '0x40d91cf855a2c0fED875BC5f1Ba6f6C21299c382',
      proxyAdmin: '0xA193D0d7Af5055348180Bf9989430b2F702944b8',
    },
  },
  [TokenTypeEnum.CPT]: {
    holesky: {
      transparentUpgradeableProxy: '0x75F277a14bBe7020aaBd62c482c38391FB09E0ba',
      interchainSecurityModule: '0x3E53e868FaEE986136c1A0f738A21e47f8Da59af',
      proxyAdmin: '0x53EC3d2e3784636c5c5e5bc20AF538dd940AA955',
    },
    tangletestnet: {
      transparentUpgradeableProxy: '0xc0CB548E329A9Fb2431E651E8e0B3269aD6F1D22',
      interchainSecurityModule: '0x188E6118bA9acB5ca19e1e12717E70226Be14636',
      proxyAdmin: '0x3662e40ab30842373312ccD25823c8cC8425a8D3',
    },
  },
};
