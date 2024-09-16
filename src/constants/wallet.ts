import WalletConnectSvg from  "../assets/icons/wallet-connect.svg"
import MetamaskSvg from  "../assets/icons/metamask.svg"

export const WalletSettings = [
	{
		name: "Metamask",
		icon: MetamaskSvg, 
		method: "metamask"
	},
	{
		name: "Wallet Connect",
		icon: WalletConnectSvg,
		method: "connectWallet"
	}
];

export const NETWORKS = [
	{
	  chainId: '0x38',
	  title: 'Binance Smart Chain Mainnet',
	  rpcUrls: ['https://bsc-dataseed.binance.org/'],
	  nativeCurrency: {
		name: 'Binance Coin',
		symbol: 'BNB',
		decimals: 18,
	  },
	},
	{
	  chainId: '0x89',
	  title: 'Polygon Mainnet',
	  rpcUrls: ['https://polygon-rpc.com/'],
	  nativeCurrency: {
		name: 'Matic',
		symbol: 'MATIC',
		decimals: 18,
	  },
	},
	{
	  chainId: '0xa86a',
	  title: 'Avalanche Mainnet',
	  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
	  nativeCurrency: {
		name: 'Avalanche',
		symbol: 'AVAX',
		decimals: 18,
	  },
	},
	{
	  chainId: '0xfa',
	  title: 'Fantom Opera Mainnet',
	  rpcUrls: ['https://rpc.ftm.tools/'],
	  nativeCurrency: {
		name: 'Fantom',
		symbol: 'FTM',
		decimals: 18,
	  },
	},
	{
		chainId: '0x1',
		title: 'Ethereum Mainnet',
		rpcUrls: ['https://mainnet.infura.io/v3/6b287bcc0d8046fcb3399285fbb6951c'],
		nativeCurrency: {
		  name: 'Ether',
		  symbol: 'ETH',
		  decimals: 18,
		},
	  },
  ];
  