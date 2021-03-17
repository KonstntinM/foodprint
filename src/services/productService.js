import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAjCseS8CDxDlh4F9WKeQNRHt79VKyWJBQ",
    authDomain: "foodprint-c08ba.firebaseapp.com",
    projectId: "foodprint-c08ba",
    storageBucket: "foodprint-c08ba.appspot.com",
    messagingSenderId: "751645975588",
    appId: "1:751645975588:web:43cacfd95ffd5c965e64b1",
    measurementId: "G-QFMBHW04J0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

var db = firebase.firestore();

async function getProductByBarcode (barcode) {

    console.log("barcode:", barcode)

    var doc = await db.collection("products").doc(barcode).get();

    if (!doc) {
        console.error("Error making product request: doc:", doc);
        return new Promise((resolve, reject) => { reject({
            status: 404,
            message: "The product could not be found in our database."
        })})
    }

    if (doc.exists) {
        console.log('data', doc.data());
        const data = doc.data();
        return new Promise((resolve, reject) => { resolve(data) })
    } else {
        return requestProductFromFunction();
    }
}

async function requestProductFromFunction (barcode) {
    return product;
}

module.exports = {
    getProductByBarcode,
}