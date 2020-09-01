import React, {useEffect, useState} from 'react';

import Router from './Router';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';

function Main() {
  const [currentUser, setCurrentUser] = useState(null);

  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {
    console.log(dispatch);

    async function checkUser() {
      const user = await auth().currentUser;

      // console.log('test', user);
      // if (user) {
      //   alert('Log in');
      // } else {
      //   alert('not logged in');
      // }
    }
    // checkUser();
  }, []);

  return <Router />;
}

export default Main;
