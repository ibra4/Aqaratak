import React, { Component } from 'react';
import Login from './Login';

import auth from '@react-native-firebase/auth';

import I18n from '../../I18n';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';

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
    auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then((res) => {
        this.props.setUser(res.user)
        Actions.push('Home');
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

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(null, mapDispatchToProps)(LoginIndex)