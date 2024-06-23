import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_AUTH_DOMAIN,
  // storageBucket: process.env.REACT_APP_AUTH_DOMAIN,
  // messagingSenderId: process.env.REACT_APP_AUTH_DOMAIN,
  // appId: process.env.REACT_APP_AUTH_DOMAIN,
  // measurementId: process.env.REACT_APP_AUTH_DOMAIN,
  apiKey: 'AIzaSyBrPLLlHr3NQJj0WJMBrDnjDYl3agRHm8g',
  authDomain: 'hyun-project-1.firebaseapp.com',
  projectId: 'hyun-project-1',
  storageBucket: 'hyun-project-1.appspot.com',
  messagingSenderId: '851381111657',
  appId: '1:851381111657:web:3dc62b273f3f9e0f524bf8',
  measurementId: 'G-GDYYM8B7L8',
});

export const auth = app.auth();
export default app;
