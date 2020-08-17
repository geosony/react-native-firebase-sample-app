import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import "firebase/database";
import "firebase/functions";
import "firebase/storage";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const firebaseConfig = {
	apiKey: 'AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
	authDomain: 'XXXXXXXXXXXXXXXXXXXXXXp.com',
	databaseURL: 'https://xxxxxxxxxxx.firebaseio.com',
	projectId: 'xxxxxxxxf71',
	storageBucket: 'xxxxxxxxf71.appspot.com',
	messagingSenderId: 'xxxxxxxxxxxx',
	appId: '1:xxxxxxxxxxxx:web:exxxxxxxxxxxxxxxxxxxf5',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
