import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from '../../components/layout/parallax/Layout';
import firestore from '@react-native-firebase/firestore'
import { Presets, Colors } from '../../assets/style';

import I18n from '../../I18n'
import Loading from '../../components/Loading';
import Swiper from 'react-native-swiper';

import { imageHeight16, screenWidth } from '../../assets/style/dimensions';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

export default function Search() {

  const [data, setData] = useState([])
  const [status, setStatus] = useState("loading")
  const [search, setSearch] = useState(null)

  const handleSearch = () => {
    setStatus('loading')
    var housesRef = firestore().collection('houses');
    housesRef.where('title', '>=', search).where('title', '<=', search + '\uf8ff').get().then(data => {
      setData(data.docs);
      setStatus('success')
    });
  }

  const renderSwiper = (gallery, id) => (
    <Swiper
      style={{
        height: imageHeight16,
      }}
      dotColor={Colors.white}
      activeDotColor={Colors.claret}
      showsButtons={false}>
      {gallery.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => Actions.push('House', { id: id })}>
            <Image
              source={{ uri: item }}
              style={{ height: imageHeight16, width: screenWidth }}
            />
          </TouchableOpacity>
        );
      })}
    </Swiper>
  );

  const renderHouseItem = (item, id) => {
    return (
      <View style={Presets.listingItem}>
        {item.gallery && console.log(item)}
        {renderSwiper(item.gallery, item.id)}
        <LinearGradient
          colors={['#00000000', '#000000ff']}
          style={Presets.sectionBody}>

          <Text>{item.title}</Text>
        </LinearGradient>
        <View>
          <Text style={Presets.houseRent}>{item.type}</Text>

          <TouchableOpacity
            style={Presets.homeHeartContainer}>
            <Icon name="heart-o" size={20} color={Colors.silver} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={Presets.listItemBody}
          onPress={() => Actions.push('House', { id: id })}>
          <Text style={[Presets.sectionTitle, Presets.colorSilver]}>
            {item.title}
          </Text>
          <Text style={[Presets.sectionTitle, Presets.colorBlack]}>
            ${item.price}
          </Text>
          <View style={Presets.spaceBetween}>
            <View style={Presets.flexStart}>
              <Icon name="home" size={20} color={Colors.silver} />
              <Text style={[Presets.colorSilver, Presets.ph5]}>
                {item.location}
              </Text>
            </View>
            <View style={[Presets.spaceBetween, Presets.alignCenter]}>
              <Icon name="square" size={15} color={Colors.silver} />
              <Text style={[Presets.colorSilver, Presets.ph5]}>
                {item.area} {I18n.t('metersquare')}
              </Text>
              <Text style={[Presets.colorSilver, Presets.squareNumber]}>2</Text>
            </View>
          </View>
          <View style={[Presets.spaceBetween, Presets.sectionActions]}>
            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="bed" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.bedrooms} {I18n.t('beds')}
              </Text>
            </View>

            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="bath" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.bathrooms} {I18n.t('baths')}
              </Text>
            </View>

            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="car" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.parkings} {I18n.t('parkings')}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  useEffect(() => {
    var housesRef = firestore().collection('houses');
    async function getData() {
      housesRef.where('area', '==', '1').get().then(data => {
        setData(data.docs);
        setStatus('success')
      });
    }
    getData();
  }, [])

  return <Layout title={I18n.t('search')}>
    <ScrollView>
      <View style={[Presets.fullScreen, Presets.container, Presets.justifyCenter, {paddingTop: 30}]}>
        <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={{ width: '65%' }}>

            <Text style={{ color: Colors.silver }}>{I18n.t('search')}</Text>
            <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
              <TextInput style={Presets.textField} onChangeText={(value) => setSearch(value)} />
            </View>
          </View>
          <View style={{ width: '29%', height: 50 }}>
            <TouchableOpacity
              style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}
              onPress={() => handleSearch()}>
              <Text
                style={[
                  Presets.colorWhite,
                  Presets.btnText,
                  Presets.bold,
                  Presets.upperCase,
                ]}>
                {I18n.t('search')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {status === 'success' ?
          data.map(item => renderHouseItem(item._data, item.id))
          : <Loading />}
      </View>
    </ScrollView>
  </Layout>;
}
