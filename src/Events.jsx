import React from 'react';
import './Events.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import LaunchParty1 from './images/events/Launch_Party/LaunchParty1.JPG';
import LaunchParty2 from './images/events/Launch_Party/LaunchParty2.JPG';
import LaunchParty3 from './images/events/Launch_Party/LaunchParty3.JPG';
import LaunchParty4 from './images/events/Launch_Party/LaunchParty4.JPG';
import Ecuador_Trip1 from './images/events/Ecuador_Trip/IMG_2069.JPG';
import Ecuador_Trip2 from './images/events/Ecuador_Trip/IMG_2060.JPG';
import Ecuador_Trip3 from './images/events/Ecuador_Trip/IMG_2070.JPG';
import Ecuador_Trip6 from './images/events/Ecuador_Trip/IMG_2089.JPG';
import Ecuador_Trip7 from './images/events/Ecuador_Trip/IMG_2093.JPG';
import Ecuador_Trip8 from './images/events/Ecuador_Trip/IMG_2094.JPG';
import LeonGoldstein1 from './images/events/Leon_Goldstein/LeonGoldstein1.JPG';
import LeonGoldstein2 from './images/events/Leon_Goldstein/LeonGoldstein2.jpeg';
import LeonGoldstein3 from './images/events/Leon_Goldstein/LeonGoldstein3.jpeg';
import NYCSEF1 from './images/events/NYCSEF/NYCSEF1.JPG';
import NYCSEF2 from './images/events/NYCSEF/NYCSEF2.JPG';

function Events() {
	return (
		<div className='mainEvent'>
			<header className='eventHeader'>
				<div className='blue-event'>
					<h3>New York Science and Engineering Fair</h3>
					<p>
						Our very first STEMHive tabling event at our own campus. Here we
						talked to high schools students and parents to learn more about why
						they were inspired to learn about STEM. We even posted a board
						titled "What do you love about STEM?" And we were shocked about the
						amount of responses we got from that.{' '}
					</p>
					<Container className='C1'>
						<Row>
							<Col>
								<img src={NYCSEF1} className='nycsef' alt='pic1' />
							</Col>
							<Col>
								<img src={NYCSEF2} className='nycsef' alt='pic2' />
							</Col>
						</Row>
					</Container>
				</div>
				<div className='yellow-event'>
					<h3>Leon Goldstein</h3>
					<p>
						We visited Leon M. Goldstein to talk more to the high school
						students about the importance of women in STEM. We first challenged
						them to a game of Kahoot to see how far do they know about the
						important women in STEM. We then discussed about our mission and how
						our method can help our kids younger than them. But then we
						challenge them once again to see if they can create various
						solutions of their own. It was amazing to see how diverse their
						ideas were.
					</p>
					<Container className='C1'>
						<Row>
							<Col>
								<img
									src={LeonGoldstein1}
									className='leon-goldstein'
									alt='pic1'
								/>
							</Col>
							<Col>
								<img
									src={LeonGoldstein2}
									className='leon-goldstein'
									alt='pic2'
								/>
							</Col>
							<Col>
								<img
									src={LeonGoldstein3}
									className='leon-goldstein'
									alt='pic3'
								/>
							</Col>
						</Row>
					</Container>
				</div>
				<div className='blue-event'>
					<h3>Launch Party With Beyond the Margins</h3>
					<p>
						We collaborated with Beyond the Margins, another startup with
						similar goals of aiding the younger generation on hosting our very
						own launch party. During the day, kids around 9-13 experience
						exciting topics in different subjects and seeing that learning can
						be cool. They then go through various challenges in those subjects,
						including kids in the STEM group going through STEMHive's variation
						of the lunar lander challenge, where they prototype designs to
						protect their mini astronauts from falling out of their spaceship.
						Throughout the challenges, the kids were mentored by
						STEMHive-trained high school students and they felt the connection
						of talking to someone around their same age with the same interests.
					</p>
					<Container className='C1'>
						<Row>
							<Col>
								<img src={LaunchParty1} className='Launch-Party' alt='pic1' />
							</Col>
							<Col>
								<img src={LaunchParty2} className='Launch-Party' alt='pic2' />
							</Col>
						</Row>
						<Row>
							<Col>
								<img src={LaunchParty3} className='Launch-Party' alt='pic3' />
							</Col>
							<Col>
								<img src={LaunchParty4} className='Launch-Party' alt='pic4' />
							</Col>
						</Row>
					</Container>
				</div>
				<div className='yellow-event'>
					<h3>Spreading STEM Internationally</h3>
					<p>
						One of our goals is to increase the representation of women, not
						only in the U.S but on an international scale. Our C.F.O, Karla
						Giselle, took a first step to that when she hosted a STEM Hive
						workshop in Ecauador. There she educate girls on the value of STEM.
						She even showed that even with limited resources, STEM can be
						exciting to demonstrate as challenged the kids to make architect
						using tooth picks and clay. We hope to spread this energy to many
						other countries just like Karla has done for Ecaudor.
					</p>
					<Container className='C1'>
						<Row>
							<Col>
								<img src={Ecuador_Trip1} className='Ecuador' alt='pic1' />
							</Col>
							<Col>
								<img src={Ecuador_Trip2} className='Ecuador' alt='pic2' />
							</Col>
							<Col>
								<img src={Ecuador_Trip3} className='Ecuador' alt='pic3' />
							</Col>

							<Col>
								<img src={Ecuador_Trip7} className='Ecuador' alt='pic3' />
							</Col>
							<Col>
								<img src={Ecuador_Trip8} className='Ecuador' alt='pic4' />
							</Col>
							<Col>
								<img src={Ecuador_Trip6} className='Ecuador' alt='pic4' />
							</Col>
						</Row>
					</Container>
				</div>
			</header>
		</div>
	);
}
export default Events;
