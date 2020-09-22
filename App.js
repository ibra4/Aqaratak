/**
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useState} from 'react';
import {AsyncStorage, LogBox} from 'react-native';

import I18n from './src/I18n/index';

import Settings from './src/scenes/Settings';
import Main from './src/Main'

import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';
import {store} from './src/store';

import Loading from './src/components/Loading';
import firebase from '@react-native-firebase/app';


const App: () => React$Node = () => {


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

  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function getLocaleFromStorage() {

      const locale = await AsyncStorage.getItem('default_lang');
      if (locale) {
        I18n.locale = locale;
        setStatus('success');
      } else {
        I18n.locale = I18n.locale.substring(0, 2);
        setStatus('missing_lang');
      }
    }
    getLocaleFromStorage();
    SplashScreen.hide();
  }, []);

  const renderTemplate = () => {
    console.log(status)
    switch (status) {
      case 'success':
        return <Main />;
      case 'missing_lang':
        return <Settings init={true} />;
      case 'loading':
        return <Loading />;
    }
  };

  return <Provider store={store}>{renderTemplate()}</Provider>;
};

export default App;
