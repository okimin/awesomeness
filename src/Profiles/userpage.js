import React, { Component } from 'react';
import profilePic from '../images/10.jpg';
import { Row, Col, Spinner } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './userpage.css';
import firebase from '../firebase';

var db = firebase.firestore();

// The following is to add users to our collection
// const userRef = db.collection(“users”).add({
//   fullname: this.state.fullname,
//   email: this.state.email
// });

class UserPage extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
		};
	}

	componentDidMount() {
		this.getUserAsync();
	}

	getUserAsync = async () => {
		let usersCollection = db.collection('users').doc('qm8pw3LrLNYWPXm39Vhe');

		let response = await usersCollection.get();
		let user = await response.data();
		console.log('I got the data you need: ', user);
		this.setState({ user });
	};

	render() {
		const { user } = this.state;
		const userKey = Object.keys(user);
		const isUserLoaded = userKey && userKey.length > 0;
		return (
			<div className="user">
				<Row className="profile">
					<Col sm={4} className="profile-img">
						<Image src={profilePic} height={150} roundedCircle />
					</Col>
					<Col sm={8} className="name align-middle">
						{isUserLoaded ? (
							<div>
								<p>{user.name}</p>
								<p>{user.rank}</p>
								<p>{user.summary}</p>
							</div>
						) : (
							<Spinner animation="grow" />
						)}
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
	}
}

export default UserPage;
