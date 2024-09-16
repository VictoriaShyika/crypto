import {defaultConfig} from "@web3modal/ethers";

export const projectId = 'c3ba537ca69e1fd8580e2c3527b7c76b'

export const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'http://localhost:5173/',
  icons: ['https://avatars.mywebsite.com/']
}

export const ethersConfig = defaultConfig({metadata});
export const USDTAbi = ['function balanceOf(address) view returns (uint)']
