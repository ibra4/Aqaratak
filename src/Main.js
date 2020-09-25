import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import Router from './Router';

import { useDispatch } from 'react-redux';
import { setUser } from './actions';
import { getStorageItem } from './providers/provider';
import SplashScreen from 'react-native-splash-screen';

function Main() {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("loading")

  useEffect(() => {
    async function checkUser() {
      const user = await getStorageItem('user');
      if (user) {
        dispatch(setUser(user));
      }
      setStatus("success");
      SplashScreen.hide()
    }
    checkUser();
  }, []);

  return status == 'success' && <Router />;
}

export default Main;
