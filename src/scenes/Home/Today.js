import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Presets, Colors } from '../../assets/style';
import { Actions } from 'react-native-router-flux';
import { imageHeight16, imageWidth } from '../../assets/style/dimensions';

import I18n from '../../I18n';

export default function Today({ data, likeHouse }) {

  const renderSwiper = (gallery, id) => {
    return (
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
                style={{ height: imageHeight16, width: imageWidth }}
              />
            </TouchableOpacity>
          );
        })}
      </Swiper>
    )
  };

  const renderTodayItem = ({ item }) => {
    let gallery = [];
    gallery.push(item.img)
    gallery.push(item.img)
    gallery.push(item.img)
    return (
      <View style={Presets.listingItem}>
        {renderSwiper(gallery, item.id)}
        <View>
          <Text style={Presets.houseRent}>{item.type}</Text>
        </View>

        <TouchableOpacity
          style={Presets.listItemBody}
          onPress={() => Actions.push('House', { id: item.id })}>
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
                {item.beds} {I18n.t('beds')}
              </Text>
            </View>

            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="bath" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.baths} {I18n.t('baths')}
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
    );
  };

  return (
    <View style={Presets.secion}>
      <Text style={Presets.homeTitle}>{I18n.t('today_new')}</Text>
      <View>
        <FlatList data={data} renderItem={(item) => renderTodayItem(item)} />
      </View>
    </View>
  );
}
