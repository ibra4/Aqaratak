import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Presets, Colors } from '../../assets/style';
import I18n from '../../I18n'
import Layout from '../../components/layout/parallax/Layout';

import firestore from '@react-native-firebase/firestore';

export default function Contact() {

    const [data, setData] = useState({})

    const setValue = (name, value) => {
        let currentData = data;
        currentData[name] = value;
        setData(currentData);
    };

    const handleSubmit = () => {
        firestore()
            .collection('contact')
            .add(data)
            .then((data) => console.log("Success", data))
            .catch((error) => console.log("Error", error));
        console.log(data)
    }

    return (
        <Layout title={I18n.t('contact_us')}>
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
