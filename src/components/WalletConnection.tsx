import {WalletSettings} from '../constants/wallet'
import {useWalletConnect} from '../hook/useWalletConnect';

export const WalletConnection = ({handleModalOpen}: {handleModalOpen: () => void}) => {
	const {connectWallet} = useWalletConnect();

	const handleConnect = (method: string) => {
		connectWallet(method);
		handleModalOpen();
	};
	
	return (
	<>
		<div className="wallet__description">You can use 1 wallet at the same time</div>
		<div className="wallet__connect-wrapper">
			{WalletSettings.map((item)=> (
				<div className="wallet__connect-item" key={item.name}>
					<img src={item.icon}/>
					<div className="wallet__connect-block">
						<div>{item.name}</div>
						<div className="wallet__connect-button" onClick={() => handleConnect(item.method)}>Connect <div className="wallet__connect-button_icon"/></div>
					</div>
				</div>)
			)}
		</div>
	</>
	)
}
