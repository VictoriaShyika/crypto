import {useState} from 'react';
import {useWalletConnect} from '../hook/useWalletConnect';
import {addressToShow} from '../helpers';
import {Button} from './shared/Button';
import {Slider} from './Slider';
import {Dropdown} from './shared/Dropdown';

import ArrowSvg from '../assets/icons/arrow-bottom.svg';
import useSelectedAddress from '../hook/useSelectedAddress';
import {Wallet} from './Wallet';

interface HeaderProps {
	handleModalOpen:() => void,
	handleMenuOpen: () => void,
}

export const Header = ({handleModalOpen, handleMenuOpen}: HeaderProps) => {
	const [isDropDownOpen, setDropdownOpen] = useState<boolean>(false);
	const {disconnectWallet} = useWalletConnect();

	const selectedAddress = useSelectedAddress();

  return (
	<div className='header'>
		<Slider/>

		<div className='header__button-block'>
			<Button className='header__menu-button' onClick={handleMenuOpen}/>

			{selectedAddress ? <Button className="header__connection-button" onClick={()=>setDropdownOpen(true)} content={<>{addressToShow(selectedAddress)} <img src={ArrowSvg}/></>}/> 
			: <Button className="header__connection-button" onClick={handleModalOpen} content="Connect Wallet"/>}

			<Dropdown 
				isOpen={isDropDownOpen}
				onClose={()=> setDropdownOpen(false)}
				children={<Wallet 
					disconnectWallet={disconnectWallet}
					setDropdownOpen={setDropdownOpen}
					/>} 
				/>
		</div>
	</div>
  )
}
