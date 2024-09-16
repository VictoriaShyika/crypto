import {NETWORKS} from '../constants/wallet';
import {useWalletConnect} from '../hook/useWalletConnect';

export const NetworkList = () => {
	const {switchNetwork} = useWalletConnect();

  return (
	<div className='network'>
		{NETWORKS.map(item => 
			<div className='network__item' onClick={() => switchNetwork(item.chainId)}>
				<p>{item.title}:</p> 
				<p>{item.chainId}</p>
			</div> )}
	</div>
  )
}
