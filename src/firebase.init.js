// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlLVuDbFd5zqErf31RirSuTrFj8AKccOk",
    authDomain: "genius-car-services-e9299.firebaseapp.com",
    projectId: "genius-car-services-e9299",
    storageBucket: "genius-car-services-e9299.appspot.com",
    messagingSenderId: "763521799595",
    appId: "1:763521799595:web:c9c51e0cb377bde7422eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;