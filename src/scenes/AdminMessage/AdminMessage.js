import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert
} from 'react-native';
import { Presets, Colors } from '../../assets/style';
import I18n from '../../I18n'
import Layout from '../../components/layout/parallax/Layout';
import { post } from '../../providers/provider'
import { MessageRoute } from '../../providers/routes';
import { Actions } from 'react-native-router-flux';
import Loading from '../../components/LoadingSmall'

export default function AdminMessage() {

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
            route: MessageRoute,
            body: data
        }
        const response = await post(options)
        await response.json().then(json => {
            setLoading(false)
            if (json.status == 'success') {
                Alert.alert(I18n.t('message_sent_successfully'))
                Actions.push('Home')
            } else {
                Alert.alert(I18n.t('ops_error'))
            }
        })
    }

    return (
        <Layout title={I18n.t('MassageAdmin')}>
            <ScrollView>
                <View
                    style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('name')}</Text>
                        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
                            <TextInput style={[Presets.textField, { borderColor: "#8C1B3D", borderWidth: 0.25, borderRadius: 10 }]} onChangeText={(value) => setValue('name', value)} />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ color: Colors.silver }}>{I18n.t('message')}</Text>
                        <View style={Presets.fieldMargin}>
                            <TextInput style={Presets.MessageInput}
                                multiline={true}
                                numberOfLines={30}
                                onChangeText={(value) => setValue('Message', value)} />
                        </View>
                    </View>
                    {loading && <Loading />}
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
