import * as firebase from 'firebase';
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

const firestore = firebase.firestore();
const productRef = firestore.collection("products");

async function getProductByBarcode (barcode) {

    console.log("barcode:", barcode)

    let ref = productRef.doc(barcode);

    var { doc, error } = await ref.get()

    ref.get().then(function(doc) {
        if (doc.exists) {
            console.log('data', doc.data());
            return doc.data();
        } else {
            return requestProductFromFunction();
        }
    }).catch(function(error) {
        if (error) {
            console.error("Error making product request:", error);
            return {
                status: 404,
                message: "The product could not be found in our database."
            }
        }
    });

    console.log('Request finished!');
}

async function requestProductFromFunction (barcode) {
    return product;
}

module.exports = {
    getProductByBarcode,
}