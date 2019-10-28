import React, { Component } from 'react';
import profilePic from '../images/10.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Image from 'react-bootstrap/Image';
import { Button } from 'react-bootstrap';
import './userpage.css';

/* 
  The static user, we are going to make a 
  generic page that will accept any user.
  NOTE: the profile pic must be a square image
*/
const user = {
	name: 'Jessica Smith',
	summary: 'Young studious coder, graduate of MakeGamesWithUs',
	img: profilePic,
	rank: 'QueenBee',
	badges: [
		{ type: 'stem', name: 'Ecology' },
		{ type: 'stem', name: 'Chemistry' },
	],
	workshops: 32,
};

/*
  We can use a functional component since 
  we are not using React Lifecycle Methods (like componentDidMount)
  or state.
*/
const userpage = () => {
	return (
		<div className="user">
			<Row className="profile">
				<Col sm={4} className="profile-img">
					<Image src={user.img} height={150} roundedCircle />
				</Col>
				<Col sm={8} className="name align-middle">
					<p>{user.name}</p>
					<p>{user.rank}</p>
					<p>{user.summary}</p>
				</Col>
			</Row>
			<Row className="logistics">
				<Col>
					<Row>{user.badges && user.badges.length}</Row>
					<Row># of Badges</Row>
				</Col>
				<Col>
					<Row>{user.workshops}</Row>
					<Row># of Worshops</Row>
				</Col>
			</Row>
		</div>
	);
};

export default userpage;
