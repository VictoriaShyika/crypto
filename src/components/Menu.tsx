import TelegramSvg from "../assets/icons/Telegram.svg";
import XSvg from "../assets/icons/X.svg";
import DiscordSvg from "../assets/icons/Discord.svg";

import ProfileSvg from "../assets/icons/Profile.svg";
import ReferralsSvg from "../assets/icons/Referrals.svg";
import PetsSvg from "../assets/icons/Pets.svg";
import BattleSvg from "../assets/icons/Battle.svg";
import FriendsSvg from "../assets/icons/Friends.svg";
import StakingSvg from "../assets/icons/Staking.svg";

import LogoSvg from "../assets/icons/Logo.svg";


const MenuItems = [
	{name:"Profile", icon: ProfileSvg},
	{name:"Referrals", icon: ReferralsSvg},
	{name:"Pets", icon: PetsSvg},
	{name:"Battle", icon: BattleSvg},
	{name:"Friends", icon:  FriendsSvg},
	{name:"Staking", icon:  StakingSvg},
];

const SocialMedia = [
	{icon: TelegramSvg, href:'/#'},
	{icon: XSvg, href:'/#'},
	{icon: DiscordSvg, href:'/#'},
];

export const Menu = () => {
  return (
	<div className="menu">
		<img className="menu__logo" src={LogoSvg} />

		<div className="menu__link-block">
			{MenuItems.map((item)=> <a href="/#" className="menu__link"><img src={item.icon}/><div>{item.name}</div></a>)}
			<a href="/#" className="menu__link menu__link_doc"><div>Game Dock</div></a>
		</div>

		
		<div className="menu__social-media">
			{SocialMedia.map((link)=><a href={link.href}><img src={link.icon}/></a>)}
		</div>
	</div>
  )
}
