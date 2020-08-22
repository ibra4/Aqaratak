import React, {createRef} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Presets} from '../../assets/style';

import I18n from '../../I18n'

const screenWidth = Math.round(Dimensions.get('window').width);

export default function Searches({data}) {
  const searchCarouselRef = createRef('');

  const renderSearchItem = ({item}) => {
    return (
      <View style={Presets.searchItem}>
        <Image source={{uri: item.image}} style={{height: '100%', width: '100%'}} />
        <View style={Presets.searchItemTextContainer}>
          <Text style={Presets.searchItemText}>{item.name}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={Presets.secion}>
      <Text style={Presets.homeTitle}>{I18n.t('top_searches')}</Text>
      <Carousel
        ref={searchCarouselRef}
        inactiveSlideScale={1}
        data={data}
        activeSlideAlignment="start"
        renderItem={renderSearchItem}
        sliderHeight={150}
        itemHeight={150}
        sliderWidth={screenWidth - 30}
        itemWidth={150}
      />
    </View>
  );
}
