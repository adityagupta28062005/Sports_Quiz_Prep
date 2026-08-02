/* ============================================
   Firebase Configuration
   ============================================
   
   SETUP INSTRUCTIONS:
   1. Go to https://console.firebase.google.com
   2. Click "Create a project" (free)
   3. Name it something like "olympics-kb"
   4. Once created, click the web icon (</>) to add a web app
   5. Copy the firebaseConfig object and paste it below
   6. Go to Firestore Database → Create Database → Start in TEST mode
   7. Go to Authentication → Sign-in method → Enable Email/Password
   8. Go to Authentication → Users → Add user (your email + password)
   9. That's it! Only you can edit notes now.
   
   ============================================ */

const firebaseConfig = {
  apiKey: "AIzaSyCXz2z3c4DLhbkkTubt2th5cPyDF4I_QeU",
  authDomain: "olympics-kb.firebaseapp.com",
  projectId: "olympics-kb",
  storageBucket: "olympics-kb.firebasestorage.app",
  messagingSenderId: "683990160572",
  appId: "1:683990160572:web:a3e1444baf98b57978acb9",
  measurementId: "G-S27CR4ELHG"
};

// Initialize Firebase — only if config has been filled in
let db = null;
let auth = null;
const isConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY" && firebaseConfig.projectId !== "YOUR_PROJECT_ID";

if (isConfigured) {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
    console.log("🔥 Firebase connected (Firestore + Auth)");
  } catch (e) {
    console.warn("⚠️ Firebase initialization failed:", e.message);
    db = null;
    auth = null;
  }
} else {
  console.warn("⚠️ Firebase not configured — editing disabled. See firebase-config.js for setup instructions.");
}
