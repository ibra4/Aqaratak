import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Presets } from '../../assets/style';

import I18n from '../../I18n';
import { Actions } from 'react-native-router-flux';
import Header from '../../components/Header';

export default function Login({ props }) {
  const [userData, setUserData] = useState({});

  const validate = () => {
    if (!userData.email || userData.email == null) {
      alert(I18n.t('please_enter_your_email'));
      return false;
    }
    if (!userData.password || userData.password == null) {
      alert(I18n.t('please_enter_your_password'));
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
      alert(I18n.t('please_enter_a_valid_email'));
      return false;
    }
    return true;
  };

  const handleUserData = (name, value) => {
    const user = userData;
    user[name] = value;
    setUserData(user);
  };

  const handleSubmit = () => {
    if (validate()) {
      props.loginUser(userData);
    }
  };

  return (
    <View>
      <Header />
      <View
        style={[Presets.container, Presets.justifyCenter, {height: '80%'}]}>
        <Text style={Presets.title}>Login</Text>
        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
          <TextInput
            placeholder="email"
            style={Presets.textField}
            onChangeText={(value) => handleUserData('email', value)}
          />
        </View>
        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            style={Presets.textField}
            onChangeText={(value) => handleUserData('password', value)}
          />
        </View>
        <TouchableOpacity
          style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}>
          <Text
            style={[
              Presets.colorWhite,
              Presets.bold,
              Presets.upperCase,
              Presets.btnText,
            ]}
            onPress={() => handleSubmit()}>
            Login
        </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Presets.btn, Presets.fieldMargin]} activeOpacity="0.9"
          onPress={() => Actions.Register()} >
          <Text style={[Presets.colorBlack, Presets.btnText, Presets.upperCase]}>
            Register
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
