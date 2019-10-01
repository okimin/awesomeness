import React from 'react';
import SocialIcons from './SocialIcons';
import './Footer.css';

function Footer(){
	return(
		<div className="mainFooter">
			<header className="socialHeader">

				<SocialIcons className="sc"/>
				<div className ="copyright">
					&copy;StemHive inc
				</div>
			</header>

		</div>
	)
}
export default Footer;