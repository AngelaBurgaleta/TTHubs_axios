

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN, 
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID, 
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASURAMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app, {ignoreUndefinedProperties: true});







/* CON LA BBDD ANTIGUA

//con variable de entorno

//$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\aburgaleta\Desktop\TTHubs\Prueba_hosting\Secrets\upm-lifestech-firebase-adminsdk-90kn1-e4579ee6d6.json"
import firebaseAdmin from 'firebase-admin'
'use strict';

const { initializeApp, applicationDefault } = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore')
//const { getFirestore, Timestamp, GeoPoint } = require('firebase-admin/firestore');



const app = initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://data.firebaseio.com'
});


export const db = getFirestore(app, {ignoreUndefinedProperties: true});
*/