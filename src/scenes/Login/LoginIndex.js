import React, { Component } from 'react';
import Login from './Login';

import auth from '@react-native-firebase/auth';

import I18n from '../../I18n';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { setUser } from '../../actions';
import { Alert } from 'react-native';
import { setStorageItem } from '../../providers/provider';

class LoginIndex extends Component {
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
    this.setState({ status: 'loading' })
    const URL = 'https://aqaratkqatar.com/Routing/web.php?action=LoginUser';
    let response = fetch(URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',

      }),
      body: "phone=" + userData.email + "&password=" + userData.password,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ status: 'error' })
        console.log(responseJson);
        if (responseJson.status == 'success') {
          setStorageItem('user', responseJson.body).then(() => {
            this.props.setUser(responseJson.body)
            Actions.push('Home');
          })
        } else {
          Alert.alert(I18n.t('error'), I18n.t('invalid_username_or_password'))
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderTemplate() {
    const props = {
      loginUser: this.loginUser,
      status: this.state.status
    };
    return <Login props={props} />;
  }

  render() {
    return this.renderTemplate();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(null, mapDispatchToProps)(LoginIndex)