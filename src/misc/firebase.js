import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyA6lZWmKTt_wEm5pIvPu1Qaoy3I_AvhDPQ',
  authDomain: 'chat-web-app-6617e.firebaseapp.com',
  projectId: 'chat-web-app-6617e',
  storageBucket: 'chat-web-app-6617e.appspot.com',
  messagingSenderId: '1070135608260',
  appId: '1:1070135608260:web:43eac1232f35bd09751a91',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();