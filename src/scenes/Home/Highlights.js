import React, { createRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

import { Presets, Colors } from '../../assets/style';
import { imageHeight16, screenWidth } from '../../assets/style/dimensions';

import I18n from '../../I18n';

export default function Highlights({ data }) {
  const carouselRef = createRef();

  const renderHighLightItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => Actions.push('House', { id: item.id })}
        style={Presets.borderRadius15}>
        <Image
          source={{ uri: item.img }}
          style={{ height: imageHeight16, width: screenWidth }}
        />
        <LinearGradient
          colors={['#00000000', '#000000ff']}
          style={Presets.sectionBody}>
          <Text style={Presets.sectionTitle}>{item.Name}</Text>

          <View style={Presets.spaceBetween}>
            <View style={Presets.flexStart}>
              <View style={[Presets.spaceBetween, Presets.alignCenter]}>
                <Icon name="square" size={15} color={Colors.white} />
                <Text style={[Presets.colorWhite, Presets.ph5]}>
                  {item.area} {I18n.t('metersquare')}
                </Text>
                <Text style={[Presets.colorWhite, Presets.squareNumber]}>
                  2
                </Text>
              </View>
              <View
                style={[
                  Presets.spaceBetween,
                  Presets.alignCenter,
                  Presets.ph15,
                ]}>
                <Icon name="map-marker" size={15} color={Colors.white} />
                <Text style={[Presets.colorWhite, Presets.ph5]}>
                  {item.location}
                </Text>
              </View>
            </View>
            <Text style={Presets.sectionTitle}>${item.price}</Text>
          </View>
        </LinearGradient>
        <Text style={Presets.houseRent}>{I18n.t(item.offerType)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={Presets.secion}>
      <View style={Presets.spaceBetween}>
        <Text style={Presets.homeTitle}>{I18n.t('highlight')}</Text>
        <TouchableOpacity onPress={() => Actions.push('HouseListing', { title: I18n.t('all_houses') })}>
          <Text style={Presets.showAll}>{I18n.t('show_all')}</Text>
        </TouchableOpacity>
      </View>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderHighLightItem}
        sliderHeight={imageHeight16}
        itemHeight={imageHeight16}
        sliderWidth={screenWidth - 30}
        itemWidth={screenWidth - 30}
      />
    </View>
  );
}
