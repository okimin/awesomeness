import React from 'react';
import './Events.css';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import LaunchParty1 from './images/events/Launch_Party/LaunchParty1.JPG'
import LaunchParty2 from './images/events/Launch_Party/LaunchParty2.JPG' 
import LaunchParty3 from './images/events/Launch_Party/LaunchParty3.JPG'
import LaunchParty4 from './images/events/Launch_Party/LaunchParty4.JPG'
import Ecuador_Trip1 from './images/events/Ecuador_Trip/IMG_2069.JPG'
import Ecuador_Trip2 from './images/events/Ecuador_Trip/IMG_2060.JPG' 
import Ecuador_Trip3 from './images/events/Ecuador_Trip/IMG_2070.JPG'
import Ecuador_Trip6 from './images/events/Ecuador_Trip/IMG_2089.JPG'
import Ecuador_Trip7 from './images/events/Ecuador_Trip/IMG_2093.JPG'
import Ecuador_Trip8 from './images/events/Ecuador_Trip/IMG_2094.JPG'
import Jelly_Bean1 from './images/events/JellyBean/IMG_8699.JPG'
import Jelly_Bean2 from './images/events/JellyBean/IMG_8710.JPG' 
import Jelly_Bean3 from './images/events/JellyBean/JellyBean3.jpeg'
import Jelly_Bean4 from './images/events/JellyBean/JellyBean4.jpeg'
import LeonGoldstein1 from './images/events/Leon_Goldstein/LeonGoldstein1.JPG'
import LeonGoldstein2 from './images/events/Leon_Goldstein/LeonGoldstein2.jpeg' 
import LeonGoldstein3 from './images/events/Leon_Goldstein/LeonGoldstein3.jpeg'
import NYCSEF1 from './images/events/NYCSEF/NYCSEF1.JPG'
import NYCSEF2 from './images/events/NYCSEF/NYCSEF2.JPG'

function Events() {
	return(
		<div className='mainEvent'>
			<header className='eventHeader'>
			<div className='blue-event'>
				<h3>NYSCEF</h3>				
				<p>this event had a few things go on</p>
				<Container className='C1'>
					<Row>
						<Col>
                			<img src={NYCSEF1} className="nycsef" alt="pic1" />
              			</Col>
              			<Col>
                			<img src={NYCSEF2} className="nycsef" alt="pic2" />
              			</Col>
              		</Row>
              	</Container>	
			</div>
			<div className='yellow-event'>
				<h3>Leon Goldstein</h3>				
				<p>this event had a few things go on</p>
				<Container className='C1'>
					<Row>
						<Col>
                			<img src={LeonGoldstein1} className="leon-goldstein" alt="pic1" />
              			</Col>
              			<Col>
                			<img src={LeonGoldstein2} className="leon-goldstein" alt="pic2" />
              			</Col>
              			<Col>
                			<img src={LeonGoldstein3} className="leon-goldstein" alt="pic3" />
              			</Col> 
					</Row>
				</Container>				
			</div>	
			<div className='blue-event'>
				<h3>Launch Party</h3>
				<p>this event had a few things go on</p>
				<Container className='C1'>
					<Row>
						<Col>
                			<img src={LaunchParty1} className="Launch-Party" alt="pic1" />
              			</Col>
              			<Col>
                			<img src={LaunchParty2} className="Launch-Party" alt="pic2" />
              			</Col>
              		</Row>
              		<Row>	
              			<Col>
                			<img src={LaunchParty3} className="Launch-Party" alt="pic3" />
              			</Col>
              			<Col>
                			<img src={LaunchParty4} className="Launch-Party" alt="pic4" />              
              			</Col>
					</Row>
				</Container>
			</div>
			<div className='yellow-event'>
				<h3>Ecuador Trip</h3>	
				<p>this event had a few things go on</p>
				<Container className='C1'>
					<Row>
						<Col>
                			<img src={Ecuador_Trip1} className="Ecuador" alt="pic1" />
              			</Col>
              			<Col>
                			<img src={Ecuador_Trip2} className="Ecuador" alt="pic2" />
              			</Col>
              			<Col>
                			<img src={Ecuador_Trip3} className="Ecuador" alt="pic3" />
              			</Col>
              			
              			<Col>
                			<img src={Ecuador_Trip7} className="Ecuador" alt="pic3" />
              			</Col>
              			<Col>
                			<img src={Ecuador_Trip8} className="Ecuador" alt="pic4" />              
              			</Col>              			
              			<Col>
                			<img src={Ecuador_Trip6} className="Ecuador" alt="pic4" />              
              			</Col>						
              		</Row>
				</Container>
			</div>	
			<div className='blue-event'>
				<h3>Jelly Bean</h3>		
				<p>this event had a few things go on</p>
				<Container className='C1'>
					<Row>
						<Col>
                			<img src={Jelly_Bean1} className="jelly-bean" alt="pic1" />
              			</Col>
              			<Col>
                			<img src={Jelly_Bean2} className="jelly-bean" alt="pic2" />
              			</Col>
              			<Col>
                			<img src={Jelly_Bean3} className="jelly-bean" alt="pic3" />
              			</Col>
              			<Col>
                			<img src={Jelly_Bean4} className="jelly-bean" alt="pic4" />              
              			</Col>
					</Row>
				</Container>
			</div>
					

			</header>
		</div>
	);
}
export default Events;