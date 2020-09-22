import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TouchableOpacity,
  AsyncStorage,
  I18nManager,
  StatusBar,
} from 'react-native';
import {Presets, Colors, Spacing} from '../../assets/style';

import I18n from '../../I18n';
import RNRestart from 'react-native-restart';
import Layout from '../../components/layout/default/Layout';
import Loading from '../../components/Loading';

export default function Settings() {
  const [isNew, setIsNew] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [storageLanguage, setStorageLanguage] = useState(null);
  const [status, setStatus] = useState('loading');

  const setLanguage = async () => {
    if (isNew || storageLanguage != selectedValue) {
      await AsyncStorage.setItem('default_lang', selectedValue);
      I18n.locale = selectedValue;
      if (selectedValue === 'ar') {
        I18nManager.forceRTL(true);
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
      }
      RNRestart.Restart();
    }
  };

  useEffect(() => {
    async function initSettings() {
      const locale = await AsyncStorage.getItem('default_lang');
      if (locale) {
        setStorageLanguage(locale);
        setSelectedValue(locale);
        setIsNew(false);
      } else {
        setSelectedValue(I18n.locale.substring(0, 2));
        I18n.locale = I18n.locale.substring(0, 2);
        setIsNew(true);
      }
      setStatus('success');
    }
    initSettings();
  }, []);

  return status === 'success' ? (
    <View style={[Presets.fullScreen, Presets.centered]}>
      <StatusBar hidden />
      <Text style={[Presets.title, Presets.fontSize20]}>
        {I18n.t('please_select_a_language')}
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item style={{alignSelf: 'center'}} label="العربية" value="ar" />
        <Picker.Item style={{textAlign: 'center'}} label="English" value="en" />
      </Picker>
      <View style={styles.button2}>
        <TouchableOpacity
            activeOpacity={0}
            style={styles.button}
            onPress={setLanguage}>
           <Text style={styles.text}>{I18n.t('submit')}</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.claret,
    paddingTop: Spacing.medium,
    paddingBottom: Spacing.medium,
    paddingLeft: Spacing.xlarge,
    paddingRight: Spacing.xlarge,
    borderRadius: Spacing.medium,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  picker: {
    height: 80,
    width: 200,
    
  },
  button2: {
    marginTop:"30%",
  },
});
