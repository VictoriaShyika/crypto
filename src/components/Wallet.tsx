import {useEffect, useState} from 'react'
import {useWeb3ModalAccount} from '@web3modal/ethers/react';
import {addressToShow} from '../helpers';
import useSelectedAddress from '../hook/useSelectedAddress';
import {useWalletConnect} from '../hook/useWalletConnect';
import {Button} from './shared/Button';
import {WalletInfo} from './WalletInfo';
import useNetwork from '../hook/useNetwork';

interface WalletProps {
	disconnectWallet: () => void;
	setDropdownOpen: (arg: boolean) => void;
}

export const Wallet = ({disconnectWallet, setDropdownOpen} : WalletProps) => {
	const [userBalance, setUserBalance] = useState("");
	const {getBalance, switchNetwork} = useWalletConnect();
	const {address, isConnected} = useWeb3ModalAccount();

	const selectedAddress = useSelectedAddress();
	const {isWrongNetwork} = useNetwork();


	useEffect(() => {
		const fetchBalance = async () => {
		  if (isConnected && address) {
			const balance = await getBalance();
			setUserBalance(balance);
		  }
		};
		fetchBalance();
	  }, [isConnected, address, getBalance]);

	const handleDisconnect = () => {
		disconnectWallet();
		setDropdownOpen(false)
	};

	const handleNewNetworkConnect = () => {
		switchNetwork('0x1');
		setDropdownOpen(false)
	};

  return (
	<>
	<WalletInfo address={addressToShow(selectedAddress!)} balance={userBalance}/>
	{isWrongNetwork ? 
		<Button className="header__wrong-button" onClick={handleNewNetworkConnect} content={"Wrong Network"}/> : <Button className="header__disconnect-button" onClick={handleDisconnect} content={"Disconnect"}/>}
	</>
  )
}
