import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Presets, Spacing} from '../../assets/style';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';

import I18n from '../../I18n'
import auth from '@react-native-firebase/auth';

export default function Footer() {
  const goTo = (name) => {
    if (Actions.currentScene !== name) {
      Actions.push(name);
    }
  };

  return (
    <View style={[style.footerWrapper, Presets.spaceBetween]}>
      <TouchableOpacity style={style.footerItem} onPress={() => goTo("Home")}>
        <Icon name="home" size={20} color={Colors.silver} />
        <Text style={{color: Colors.silver}}>{I18n.t('home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.footerItem}>
        <Icon name="search" size={20} color={Colors.silver} />
        <Text style={{color: Colors.silver}}>{I18n.t('search')}</Text>
      </TouchableOpacity>
      {!auth().currentUser && <TouchableOpacity style={style.footerItem} onPress={() => goTo("Login")}>
        <Icon name="user" size={20} color={Colors.silver} />
        <Text style={{color: Colors.silver}}>{I18n.t('profile')}</Text>
      </TouchableOpacity>}
      <TouchableOpacity style={style.footerItem} onPress={() => goTo("Menu")}>
        <Icon name="bars" size={20} color={Colors.silver} />
        <Text style={{color: Colors.silver}}>{I18n.t('menu')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  footerWrapper: {
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  footerItem: {
    flex: 1,
    paddingLeft: Spacing.small,
    paddingRight: Spacing.small,
    paddingTop: Spacing.large,
    paddingBottom: Spacing.large,
    color: Colors.silver,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
