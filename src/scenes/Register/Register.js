import React,{useState} from 'react'
import Layout from '../../components/layout/parallax/Layout'
import {ScrollView, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Presets} from '../../assets/style';
import I18n from '../../I18n';

 export default function Register({props}) {
        const [userData, setUserData] = useState({});
    // const validate = () => {
    //     if (!userData.email || userData.email == null) {
    //       alert(I18n.t('please_enter_your_email'));
    //       return false;
    //     }
    //     if (!userData.password || userData.password == null) {
    //       alert(I18n.t('please_enter_your_password'));
    //       return false;
    //     }
    //     if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.email)) {
    //       alert(I18n.t('please_enter_a_valid_email'));
    //       return false;
    //     }
    //     return true;
    //   };
    
      const handleUserData = (name, value) => {
        const user = userData;
        user[name] = value;
        setUserData(user);
      };
    
    //   const handleSubmit = () => {
    //     if (validate()) {
    //       props.loginUser(userData);
    //     }
    //   };

return (
        <Layout title={I18n.t('Register')}>
            <ScrollView>
                 <View  style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
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
                    <TouchableOpacity style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}>
                          <Text
                                style={[
                                  Presets.colorWhite,
                                  Presets.bold,
                                  Presets.upperCase,
                                  Presets.btnText,
                                    ]}
                                // onPress={() => handleSubmit()}
                                >
                            Sign up
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    )
}

