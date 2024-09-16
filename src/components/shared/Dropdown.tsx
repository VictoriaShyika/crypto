import {ReactNode} from "react"
import ReactDOM from "react-dom";

interface DropdownProps {
    children: ReactNode,
    isOpen:boolean,
    onClose: ()=> void,
}

export const Dropdown = ({children, isOpen, onClose}: DropdownProps) => {
	
	if (!isOpen) return null;
  
	return ReactDOM.createPortal(
	  <div className="dropdown__overlay" onClick={onClose}>
		<div className="dropdown" onClick={(e) => e.stopPropagation()}>
            {children}
		</div>
	  </div>,
	  document.body
	);
}
