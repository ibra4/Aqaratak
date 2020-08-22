import React from 'react';
import {View, Text} from 'react-native';

import NewsListing from '../../components/listings/NewsListing';
import {Presets} from '../../assets/style';

export default function News({props}) {
  return (
    <View style={Presets.container}>
      <View style={Presets.fullScreen}>
        <NewsListing props={props} />
      </View>
    </View>
  );
}
