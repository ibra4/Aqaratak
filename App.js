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
import Router from './src/Router';

import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';

import {Provider} from 'react-redux';
import {store} from './src/store';

import Loading from './src/components/Loading';

const App: () => React$Node = () => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    // LogBox.ignoreAllLogs();
    // console.log(firebase.database());
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
    switch (status) {
      case 'success':
        return <Router />;
      case 'missing_lang':
        return <Settings init={true} />;
      case 'loading':
        return <Loading />;
    }
  };

  return <Provider store={store}>{renderTemplate()}</Provider>;
};

export default App;
