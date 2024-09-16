import {useState} from 'react'
import {Header} from './components/Header'
import {Menu} from './components/Menu'
import {Referrals} from './components/Referrals'
import {Modal} from './components/shared/Modal'
import {WalletConnection} from './components/WalletConnection'

import './styles/index.scss'
import {NetworkList} from './components/NetworkList'
import useNetwork from './hook/useNetwork'


function App() {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

   const {isWrongNetwork} = useNetwork();

   function handleModalOpen() {
      return setIsModalOpen((prev) => !prev)
   }
   const handleMenuOpen = () => setIsMenuOpen((prev)=> !prev);

   return (
      <div className='layout'>
            <Menu isOpen={isMenuOpen} handleMenuOpen={handleMenuOpen}/>
            <div className='layout__page-content'>
               <Header handleModalOpen={handleModalOpen} handleMenuOpen={handleMenuOpen} />
               <Referrals/>
            </div>
            <Modal 
               onClose={handleModalOpen}
               isOpen={isModalOpen}
               content={<>{isWrongNetwork && <NetworkList/>}<WalletConnection handleModalOpen={handleModalOpen}/></>}
            />
      </div>
  )
}

export default App
