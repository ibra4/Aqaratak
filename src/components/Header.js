import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '../assets/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import I18n from '../I18n'

export default function Header({ title }) {
  return (
    <View style={[style.headerConrainer]}>
      <TouchableOpacity style={style.w25} onPress={() => Actions.pop()}>
        <Icon name="chevron-left" size={30} color={Colors.white} />
      </TouchableOpacity>
      <Text style={style.headerTitle}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ height: 50, width: 150 }}
        />
      </Text>
      <View style={style.w25}></View>
    </View>
  );
}

const style = StyleSheet.create({
  headerConrainer: {
    backgroundColor: Colors.claret,
    padding: 30,
    flexDirection: I18n.locale == 'ar' ? 'row-reverse' : 'row',
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
});
