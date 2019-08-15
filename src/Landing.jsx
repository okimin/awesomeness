import React from 'react';
//import { Button } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import logo from './logo.svg';
import './Landing.css';

function Landing() {
	return (
		<div className="landing">
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
			 <div className="new-app">
      			<header className="App-header">
        		<img src={logo} className="App-logo" alt="logo" />
        		
        		<a
          		className="App-link"
          		href="https://www.stemhivenyc.org/"
          		target="_blank"
          		rel="noopener noreferrer"
        		>
          		Learn more about us!
        		</a>
      			</header>
    		</div>


		</div>
	);
}

export default Landing;
