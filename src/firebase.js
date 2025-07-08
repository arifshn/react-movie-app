import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVL41o6B3f0XCqTcGNUiJqm_VLm5skyEw",
  authDomain: "movie-app-e2ec5.firebaseapp.com",
  projectId: "movie-app-e2ec5",
  storageBucket: "movie-app-e2ec5.firebasestorage.app",
  messagingSenderId: "360142369765",
  appId: "1:360142369765:web:294ae3418295cedbcdf50c",
  measurementId: "G-Q8ND5R5QGM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
