import React from 'react';

import {View, ActivityIndicator} from 'react-native';
import { Colors } from '../assets/style';

export default function LoadingSmall() {
  return (
    <View
      style={{
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={Colors.claret} />
    </View>
  );
}
