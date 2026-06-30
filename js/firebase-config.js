// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: Replace with your actual Firebase config from the Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "debatehub-xxxx.firebaseapp.com",
  projectId: "debatehub-xxxx",
  storageBucket: "debatehub-xxxx.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Global Auth Listener
onAuthStateChanged(auth, (user) => {
    const authBtn = document.getElementById('auth-btn');
    if (user && authBtn) {
        authBtn.textContent = 'Profile';
        authBtn.href = '/profile.html';
    }
});
