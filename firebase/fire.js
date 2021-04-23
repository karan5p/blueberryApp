import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_QGcljcfTwQnLf0fPe_vJXv76ioDMV94",
    authDomain: "blueberry-3fccc.firebaseapp.com",
    projectId: "blueberry-3fccc",
    storageBucket: "blueberry-3fccc.appspot.com",
    messagingSenderId: "376925361210",
    appId: "1:376925361210:web:3b2abbc041a84f2d3cd103"
  };
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


export default firebase