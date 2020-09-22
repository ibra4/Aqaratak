import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import Router from './Router';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './actions';

function Main() {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn);

  const loginUser = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser(user._user))
      }
    });
  }

  useEffect(() => {
    if (!loggedIn) {
      loginUser();
    }
  }, []);

  return <Router />;
}

export default Main;
