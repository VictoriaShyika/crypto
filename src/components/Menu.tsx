import LogoSvg from "../assets/icons/Logo.svg";
import {MenuItems, SocialMedia} from "../constants/menu";
import {Button} from "./shared/Button";

interface MenuProps {
	isOpen: boolean,
	handleMenuOpen: () => void
}

export const Menu = ({isOpen, handleMenuOpen} : MenuProps) => {
	const handleLinkClick = () => {
		if (isOpen) handleMenuOpen()
	};

  return (
	<div className={`menu ${isOpen && "menu__mobile"}`}>
        <div className="menu__header">
            <img className="menu__logo" src={LogoSvg} />
            <Button className="close" onClick={handleMenuOpen}/>
        </div>

		<div className="menu__link-block">
			{MenuItems.map((item) => 
				<a href="/#" className={`menu__link ${item.name === 'Referrals' && "menu__link_current"}`} key={item.name} onClick={handleLinkClick}>
					<img src={item.icon}/>
					<div>{item.name}</div>
				</a>)}

			<a href="/#" className="menu__link menu__link_doc"><div>Game Dock</div></a>
		</div>

		<div className="menu__social-media">
			{SocialMedia.map((link)=><a href={link.href} key={link.icon} style={{backgroundImage: `url(${link.icon})`}}></a>)}
		</div>
	</div>
  )
}
