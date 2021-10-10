import firebase from "firebase/app";
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXOKLz-EtQYFZS8SLTD4aYcIEuwQ1tE1U",
    authDomain: "kd-internal-delivery-system.firebaseapp.com",
    projectId: "kd-internal-delivery-system",
    storageBucket: "kd-internal-delivery-system.appspot.com",
    messagingSenderId: "620787785517",
    appId: "1:620787785517:web:f1aba8ba9ebad4f3743da4",
    measurementId: "G-6ETPD8QW0D"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };