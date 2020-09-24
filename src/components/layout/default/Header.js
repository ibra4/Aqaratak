import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet,Image} from 'react-native';
import {Colors} from '../../../assets/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

import I18n from '../../../I18n'

export default function Header({title}) {
  return (
    <View style={style.headerConrainer}>
      <View style={style.w25}></View>
      <TouchableOpacity style={[style.w50]} onPress={() => Actions.Home()}>
             <Image
                source={require('../../../assets/images/logo.png')}
                style={{height: 50, width: 150}}
              />
      </TouchableOpacity>
      {title !== 'home' ? <TouchableOpacity style={style.w25} onPress={() => Actions.pop()}>
        <Icon name="chevron-left" size={30} color={"#000"} />
      </TouchableOpacity>:<View style={style.w25} ></View>}
      {/* <Text style={style.headerTitle}>{title}</Text> */}
    </View>
  );
}

const style = StyleSheet.create({
  headerConrainer: {
    // padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: Colors.claret
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 20,
  },
  w25: {
    width: '25%',
    alignItems:"center"
  },
  w50: {
    width: '50%',
    // backgroundColor:"red",
    alignItems:"center"
  },
});
