import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3kV-ePqsNE-_KDLY1ptOBijX-ZDwXg2M",
   authDomain: "mates-f5fc5.firebaseapp.com",
   projectId: "mates-f5fc5",
   storageBucket: "mates-f5fc5.appspot.com",
   messagingSenderId: "705824891164",
   appId: "1:705824891164:web:37b29313a01944fd3b1ad9",
   measurementId: "G-GX881CLJ20"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
