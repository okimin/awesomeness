import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/firestore';

var config = {
	apiKey: 'AIzaSyBrfeWaBbThKSB7CbgFZ-AiOCtEpJb0fE0',
	authDomain: 'awesomness-9b304.firebaseapp.com',
	databaseURL: 'https://awesomness-9b304.firebaseio.com',
	projectId: 'awesomness-9b304',
	storageBucket: 'awesomness-9b304.appspot.com',
	messagingSenderId: '628686231058',
	appId: '1:628686231058:web:66fb5e2cc1ec1dbb3aeacb',
};

firebase.initializeApp(config);
// now we can use the firestore in our project where we want to use it.
// var db = firebase.firestore();

ReactDOM.render(
	<Router basename="/STEMHive">
		<App />
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
