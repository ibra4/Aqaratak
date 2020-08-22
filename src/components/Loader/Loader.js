import React from 'react';
import {Bubbles} from 'react-native-loader';
import {Presets} from '../../assets/style';

export default function Loader() {
  return (
    <View style={Presets.fullScreen}>
      <Bubbles size={20} color="red" />
    </View>
  );
}
