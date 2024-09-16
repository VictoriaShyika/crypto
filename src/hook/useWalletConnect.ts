import {useState} from 'react';
import { BrowserProvider, Contract } from 'ethers';
import { createWeb3Modal, useWeb3Modal, useWeb3ModalAccount, useDisconnect, useWeb3ModalProvider} from '@web3modal/ethers/react';
import {Web3Provider} from '@ethersproject/providers';
import {ethersConfig, mainnet, projectId, USDTAbi} from '../constants/connection';
import useSelectedAddress from './useSelectedAddress';
import {NETWORKS} from '../constants/wallet';


createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
})

interface WalletConnect {
	connectWallet: (method: string) => Promise<void>, 
	disconnectWallet: () => void,
	getBalance: () => Promise<string>,
	getNetwork: () => Promise<{chainId: number}>,
    switchNetwork: (desiredChainId: string) => Promise<void>
}

export const useWalletConnect = ():WalletConnect => {
	const { open } = useWeb3Modal();
	const {disconnect} = useDisconnect();

	const provider = window.ethereum && new Web3Provider(window.ethereum);

	const [account, setAccount] = useState("");
	const {address, isConnected} = useWeb3ModalAccount();
	const selectedAddress = useSelectedAddress();

	const { walletProvider } = useWeb3ModalProvider();

	const connectWallet = async (method: string) => {
		if (method === 'metamask') { 
			if (window.ethereum) {
				const accounts = await provider.send('eth_requestAccounts', []);
				setAccount(accounts[0]);
                console.log(account, "Account connected");
                
		  } else {
			alert('Metamask is not installed!');
		  }
		} else {
			open();
		}
	};

	const disconnectWallet = () => {				
		if (isConnected) {
			disconnect();
		} else if (selectedAddress){
			alert("Please disconnect wallet in Metamask extension")
		}
	}


	async function getBalance() {
	  if (!isConnected) throw Error('User disconnected')
  
	  const ethersProvider = new BrowserProvider(walletProvider!);
	  
	  const signer = await ethersProvider.getSigner();
	  const USDTContract = new Contract(address!, USDTAbi, signer);
	  return await USDTContract?.balanceOf(address)

	};

	async function getNetwork() {
		return await provider.getNetwork();
	};

	async function switchNetwork(desiredChainId: string) {
        const chainId = await provider.getNetwork().then((network: {chainId: number;}) => network.chainId);        
		if (chainId !== desiredChainId) {
            const network = NETWORKS.find( item => item.chainId === desiredChainId);
            try {
                await provider.send('wallet_addEthereumChain', [
                    {
                        chainId: desiredChainId,
                        chainName: network?.title,
                        rpcUrls: network?.rpcUrls,
                        nativeCurrency: network?.nativeCurrency,
                    }]);
                await provider.send('wallet_switchEthereumChain', [{ chainId: desiredChainId }]);
			}catch{console.log();
            }
		const accounts = await provider.send('eth_requestAccounts', []);
		setAccount(accounts[0]);
	  };}

	return {connectWallet, disconnectWallet, getBalance, getNetwork, switchNetwork};
}
