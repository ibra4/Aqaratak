import React, {Component} from 'react';
import Login from './Login';

import auth from '@react-native-firebase/auth';

import I18n from '../../I18n';

export default class LoginIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'success',
    };

    this.loginUser = this.loginUser.bind(this);
  }

  handleError(error) {
    switch (error.code) {
      case 'auth/wrong-password':
        alert(I18n.t('wrong_password'));
        break;
      case 'auth/user-not-found':
        alert(I18n.t('user_not_found'));
    }
  }

  loginUser(userData) {
    auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        // store userdata in device storage
        // store userdata in redux
        console.log('Success');
      })
      .catch((error) => this.handleError(error));
  }

  renderTemplate() {
    const props = {
      loginUser: this.loginUser,
    };
    return <Login props={props} />;
  }

  render() {
    return this.renderTemplate();
  }
}
