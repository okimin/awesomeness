import React from 'react';
//import { Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.svg';
import './SocialIcons.css';

function Landing() {
	return (
		<div className="Main-socialIcons">
			<div className="social-links">
				<SocialIcon
					url="https://twitter.com/stemhivenyc"
					bgColor="#ffde00"
					fgColor="#ffffff"
				/>
				<SocialIcon
					url="https://www.instagram.com/stemhivenyc/"
					bgColor="#ffde00"
					fgColor="#ffffff"
				/>
				<SocialIcon
					url="https://www.facebook.com/stemhivenyc/"
					bgColor="#ffde00"
					fgColor="#ffffff"
				/>
				<SocialIcon
					url="https://www.linkedin.com/company/stemhive/"
					bgColor="#ffde00"
					fgColor="#ffffff"
				/>
			</div>
		</div>
	);
}

export default Landing;
