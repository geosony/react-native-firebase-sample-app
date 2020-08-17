const data = require("./data");
const firebase = require("firebase");
require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXvCc",
    authDomain: "xxxxxxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxxxxxx.firebaseio.com",
    projectId: "xxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxxx",
    appId: "1:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxxxxxxfe"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

data.restaurants.forEach(obj => {
    db.collection("restaurants").add(obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});


data.categories.forEach(obj => {
    db.collection("categories").add(obj).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});
