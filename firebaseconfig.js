 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCZAN5X4uiRJbHZx-lZCOiMpO6Y603z5bA",
    authDomain: "webtext-a4797.firebaseapp.com",
    projectId: "webtext-a4797",
    storageBucket: "webtext-a4797.appspot.com",
    messagingSenderId: "465796039873",
    appId: "1:465796039873:web:bf919d0d4f4c0b15804040",
    measurementId: "G-F4BZM9R12N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInsnapShots: true});
firebase.analytics();