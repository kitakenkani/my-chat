import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDdLpkPNBtnAIoez-WJxZUm0pJHqb28yi4",
    authDomain: "my-chat-17524.firebaseapp.com",
    databaseURL: "https://my-chat-17524.firebaseio.com",
    projectId: "my-chat-17524",
    storageBucket: "my-chat-17524.appspot.com",
    messagingSenderId: "142731806654",
    appId: "1:142731806654:web:818dcf55bdc349f4649bef"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

firebase.firestore()
export default firebase;

