import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Colors, Presets } from '../../../assets/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import I18n from '../../../I18n'

export default function Header() {
  const renderBack = () => {
    if (Actions.currentScene != 'Home') {
      return <TouchableOpacity style={style.w25} onPress={() => Actions.pop()}>
        <Icon name="chevron-left" size={30} color={Colors.claret} />
      </TouchableOpacity>
    } else {
      return <View style={style.w25}></View>
    }
  }

  return (
    <View style={[style.headerConrainer]}>
      {I18n.locale == 'en' ? <View style={style.w25}></View> : renderBack()}
      <View style={style.w50}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{ height: 55, width: 180 }}
        />
      </View>
      {I18n.locale == 'ar' ? <View style={style.w25}></View> : renderBack()}
    </View>
  );
}

const style = StyleSheet.create({
  headerConrainer: {
    backgroundColor: "#fff",
    padding: 30,
    flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 20,
  },
  w25: {
    width: '25%',
  },
  w50: {
    width: '50%',
  },
});
