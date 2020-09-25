import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Presets, Colors } from '../../assets/style';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import I18n from '../../I18n';
import Footer from '../../components/layout/parallax/Footer';

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions';
import { setStorageItem } from '../../providers/provider';
import Title from '../../components/Title'

export default function Menu() {

  const loggedIn = useSelector(state => state.user.loggedIn)

  const dispatch = useDispatch();

  const logoutUser = (userData) => {
    setStorageItem('user', null).then(() => {
      dispatch(logout())
      Actions.push('Home');
    })
  }

  const renderSpacing = () => <Text style={{padding: 80}}></Text>
  
  return (
    <View style={{ flex: 1 }}>
      <Title>{I18n.t('menu')}</Title>
      <ScrollView>
        {/* <Text style={Presets.menuHeader}></Text> */}
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
          <TouchableOpacity
            style={[Presets.menuItem, Presets.spaceBetween]}
            onPress={() => Actions.push('Message')}>
            <View style={Presets.flexStart}>
              <Icon name="gear" size={20} color={Colors.silver} />
              <Text style={Presets.menuItemText}>{I18n.t('MassageAdmin')}</Text>
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
          </TouchableOpacity>}

          <View style={Presets.socailicons}>
            <TouchableOpacity
            >
              <View style={Presets.socailicon}>
                <Icon name="whatsapp" size={30} color={Colors.Whatsapp} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={Presets.socailicon}>
                <Icon name="instagram" size={30} color={Colors.Instagram} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={Presets.socailicon}>
                <Icon name="facebook" size={30} color={Colors.Facebook} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={Presets.socailicon}>
                <Icon name="twitter" size={30} color={Colors.twitter} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={Presets.socailicon}>
                <Icon name="snapchat-ghost" size={30} color={Colors.Snapchat} />
              </View>
            </TouchableOpacity>
            {renderSpacing()}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
