export const WalletInfo = ({balance, address}: {balance:string, address:string}) => {
  return (

	<div className="wallet-info">
        <div className="wallet-info__section">
            <div className="wallet-info__title">Balance:</div> 
            <div className="wallet-info__value">{balance}</div>
        </div>
       
        <div className="wallet-info__section">
            <div className="wallet-info__title">Address:</div> 
            <div className="wallet-info__value">{address}</div>
        </div>
        
    </div>
  )
}
