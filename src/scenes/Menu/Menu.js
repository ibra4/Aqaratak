import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Presets, Colors } from '../../assets/style';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from '../../I18n';
import Footer from '../../components/layout/Footer';

import auth from '@react-native-firebase/auth';

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions';

export default function Menu() {

  const loggedIn = useSelector(state => state.user.loggedIn)

  const dispatch = useDispatch();

  const logoutUser = (userData) => {
    auth()
      .signOut()
      .then((res) => {

        dispatch(logout())
        Actions.push('Home');
        // store userdata in device storage
        // store userdata in redux
        // this.props.setUser(res);
      })
      .catch((error) => this.handleError(error));
  }

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Text style={Presets.menuHeader}>{I18n.t('menu')}</Text>
      <View style={Presets.menuContainer}>
        {!loggedIn && <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('Login')}>
          <View style={Presets.flexStart}>
            <Icon name="user" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('login')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>}
        <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('About')}>
          <View style={Presets.flexStart}>
            <Icon name="building" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('about_us')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('Privacy')}>
          <View style={Presets.flexStart}>
            <Icon name="book" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('privacy_policy')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('Contact')}>
          <View style={Presets.flexStart}>
            <Icon name="envelope" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('contact_us')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('News')}>
          <View style={Presets.flexStart}>
            <Icon name="book" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('news')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('Settings')}>
          <View style={Presets.flexStart}>
            <Icon name="gear" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('settings')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>
        {loggedIn && <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => Actions.push('HouseForm')}>
          <View style={Presets.flexStart}>
            <Icon name="home" size={20} color={Colors.silver} />
            <Text style={Presets.menuItemText}>{I18n.t('add_new_house')}</Text>
          </View>
          <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          />
        </TouchableOpacity>}

        {loggedIn && <TouchableOpacity
          style={[Presets.menuItem, Presets.spaceBetween]}
          onPress={() => logoutUser()}>
          <View style={Presets.flexStart}>
            <Icon name="sign-out" size={20} color={Colors.claret} />
            <Text style={[Presets.menuItemText, { color: Colors.claret }]}>{I18n.t('logout')}</Text>
          </View>
          {/* <Icon
            name={I18n.locale == 'ar' ? 'chevron-left' : 'chevron-right'}
            size={20}
            color={Colors.silver}
          /> */}
        </TouchableOpacity>}
      </View>
      <Footer />
    </ScrollView>
  );
}
