import { useState, useEffect } from 'react';

export const useSelectedAddress = (): string | null => {
    const [selectedAddress, setSelectedAddress] = useState(null);

    useEffect(() => {
        const updateSelectedAddress = () => {setSelectedAddress(window.ethereum?.selectedAddress)};

        window.ethereum?.on('accountsChanged', updateSelectedAddress);
        updateSelectedAddress();

        return () => {window.ethereum?.removeListener('accountsChanged', updateSelectedAddress)};
    });
  
  return selectedAddress;
}

export default useSelectedAddress;