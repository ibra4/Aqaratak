import React, { useState } from 'react'
import Layout from '../../components/layout/parallax/Layout'
import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Presets } from '../../assets/style';
import I18n from '../../I18n';
import { setUser } from '../../actions';
import { useDispatch } from 'react-redux'
import { Actions } from 'react-native-router-flux';
import LoadingSmall from '../../components/LoadingSmall';

export default function Register({ props }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

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
      RegisteUser();
    } else {
      Alert.alert(I18n.t('error', I18n.t('invalid_registration_data')))
    }
  };

  const RegisteUser = () => {
    setLoading(true)
    const URL = 'http://aqaratkqatar.com/Routing/web.php?action=AddeUser';
    let response = fetch(URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',

      }),
      body: "name=" + userData.username + "&email=" + userData.email + "&password=" + userData.password + "&phone=" + userData.Phone + "&status=0",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false)
        if (responseJson.status !== "success") {
          Actions.push("Login")
        } else {
          Alert.alert(I18n.t('error', I18n.t('register_field')))
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Layout title={I18n.t('Register')}>
      <ScrollView>
        <View style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
          <Text style={Presets.title}>Register</Text>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              placeholder="Username"
              style={Presets.textField}
              onChangeText={(value) => handleUserData('username', value)}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              placeholder="Phone"
              secureTextEntry={true}
              style={Presets.textField}
              onChangeText={(value) => handleUserData('Phone', value)}
            />
          </View>
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
          {loading ? <LoadingSmall /> : <TouchableOpacity style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}>
            <Text
              style={[
                Presets.colorWhite,
                Presets.bold,
                Presets.upperCase,
                Presets.btnText,
              ]}
              onPress={() => handleSubmit()}
            >
              Sign up
                            </Text>
          </TouchableOpacity>}
        </View>
      </ScrollView>
    </Layout>
  )
}

