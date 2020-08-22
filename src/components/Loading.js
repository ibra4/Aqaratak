import React from 'react';

import {View, ActivityIndicator} from 'react-native';
import { Colors } from '../assets/style';

export default function Loading() {
  return (
    <View
      style={{
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
      <ActivityIndicator size="large" color={Colors.claret} />
    </View>
  );
}
