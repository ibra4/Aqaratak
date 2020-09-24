import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import NewsListing from '../../components/listings/NewsListing';
import {Presets} from '../../assets/style';
import Title from '../../components/Title';
import I18n from '../../I18n'

export default function News({props}) {
  return (
    <View>
      <Title>{I18n.t('news')}</Title>
      <View style={Presets.container}>
        <View style={Presets.fullScreen}>
          <NewsListing props={props} />
        </View>
      </View>
    </View>
  );
}
