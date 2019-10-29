import React, { Component, useState } from 'react';
import profilePic from '../images/10.jpg';
import {
	Row,
	Col,
	Spinner,
	Button,
	ButtonToolbar,
	Modal,
} from 'react-bootstrap';
import WorkshopModal from './WorkshopModal';
import Image from 'react-bootstrap/Image';
import './userpage.css';
import firebase from '../firebase';

var db = firebase.firestore();

/*
ADDING THINGS TO FIRESTORE

 The following is to add users to our collection

 const userRef = db.collection(“users”).add({
   fullname: this.state.fullname,
   email: this.state.email
 });

 An alternative way:

 let data = {
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA'
};

You can also specify the document and add to your collection:

let setDoc = db.collection('cities').doc('LA').set(data);
*/

class AdminPage extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			showModal: false,
		};
	}

	componentDidMount() {
		this.getUserAsync();
	}

	getUserAsync = async () => {
		let usersCollection = db.collection('users').doc('qm8pw3LrLNYWPXm39Vhe');

		let response = await usersCollection.get();
		let user = await response.data();
		this.setState({ user });
	};

	onButtonClick = () => this.setState({ showModal: true });
	onHideClick = () => this.setState({ showModal: false });

	render() {
		const { user, showModal } = this.state;
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
				<Row className="workshops">
					<Col>
						<ButtonToolbar>
							<Button onClick={this.onButtonClick}>New Workshop</Button>
							{showModal && (
								<WorkshopModal
									showModal={showModal}
									onHide={this.onHideClick}
								/>
							)}
						</ButtonToolbar>
					</Col>
					<Col>
						<Row>List of Workshops</Row>
						<Row>Singing 101</Row>
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

export default AdminPage;
