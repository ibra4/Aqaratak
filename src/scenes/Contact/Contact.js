import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
} from 'react-native';
import { Presets, Colors } from '../../assets/style';
import I18n from '../../I18n'
import Layout from '../../components/layout/parallax/Layout';

import firestore from '@react-native-firebase/firestore';
import { post } from '../../providers/provider';
import { contactUsRoute } from '../../providers/routes';
import { Actions } from 'react-native-router-flux';
import LoadingSmall from '../../components/LoadingSmall';
import Title from '../../components/Title';

export default function Contact() {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const setValue = (name, value) => {
        let currentData = data;
        currentData[name] = value;
        setData(currentData);
    };

    const handleSubmit = async () => {
        setLoading(true)
        const options = {
            route: contactUsRoute
        }
        const response = await post(options);
        await response.json().then(json => {
            setLoading(false)
            if (json.status == 'success') {
                Alert.alert(I18n.t('success'), I18n.t('message_sent_successfully'))
                Actions.push("Home")
            } else {
                Alert.alert(I18n.t('error'), I18n.t('ops_error'))
            }
        })
    }

    return (
        <Layout>
            <Title>{I18n.t('contact_us')}</Title>
            <ScrollView>
                <View
                    style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('name')}</Text>
                        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
                            <TextInput style={Presets.textField} onChangeText={(value) => setValue('name', value)} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('phone_number')}</Text>
                        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
                            <TextInput style={Presets.textField} onChangeText={(value) => setValue('phone', value)} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('email')}</Text>
                        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
                            <TextInput style={Presets.textField} onChangeText={(value) => setValue('email', value)} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('address')}</Text>
                        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
                            <TextInput style={[Presets.textField]} onChangeText={(value) => setValue('address', value)} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('message')}</Text>
                        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
                            <TextInput style={[Presets.textField, { height: 100 }]} multiline={true} onChangeText={(value) => setValue('message', value)} />
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                    {loading && <LoadingSmall />}
                    </View>
                    <TouchableOpacity
                        style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}
                        onPress={() => handleSubmit()}>
                        <Text
                            style={[
                                Presets.colorWhite,
                                Presets.btnText,
                                Presets.bold,
                                Presets.upperCase,
                            ]}>
                            {I18n.t('send')}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{ padding: 100 }}></Text>
                </View>
            </ScrollView>
        </Layout>
    );
}
