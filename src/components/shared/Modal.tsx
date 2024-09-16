import ReactDOM from "react-dom";
import {ReactNode} from "react";
import {Button} from "./Button";

interface ModalProps {
	isOpen: boolean,
	onClose: () => void,
	content: ReactNode
}

export const  Modal = ({ isOpen, onClose, content}: ModalProps) => {
	
	if (!isOpen) return null;
  
	return ReactDOM.createPortal(
	  <div className="modal__overlay" onClick={onClose}>
		<div className="modal__content" onClick={(e) => e.stopPropagation()}>
		<div className="modal__header">
			<div className="modal__title">Connect Wallet</div>
			<Button className="close" onClick={onClose}/>
		</div>
		{content}	
		</div>
	  </div>,
	  document.body
	);
  };

