import { useState, useEffect } from 'react';

const WRONG_NETWORK_LIST = ["0x38"];

function useNetwork() {
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);

  useEffect(() => {
    const fetchNetwork = async () => {
		
      if (window.ethereum) {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        setIsWrongNetwork(WRONG_NETWORK_LIST.includes(chainId));
      }
    };
    fetchNetwork();
    window.ethereum.on('chainChanged', fetchNetwork);

    return () => {
      window.ethereum.removeListener('chainChanged', fetchNetwork);
    };
  }, []);

  return { isWrongNetwork };
}

export default useNetwork;
