import React from 'react';

import App from './App';

import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyArsfgFgV5OJHOIBbcY2RFuyp6OkJJm-mM',
  authDomain: 'just-a-test-f26bc.firebaseapp.com',
  databaseURL: 'https://just-a-test-f26bc.firebaseio.com',
  projectId: 'just-a-test-f26bc',
  storageBucket: 'just-a-test-f26bc.appspot.com',
  messagingSenderId: '614656651353',
  appId: '1:614656651353:web:977e7b77a7a5487aba8148',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};

function Setup() {
  return <App />;
}

export default Setup;
