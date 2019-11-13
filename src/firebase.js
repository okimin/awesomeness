/*/ Firebase App (the core Firebase SDK) is always required and
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

const firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;
*/