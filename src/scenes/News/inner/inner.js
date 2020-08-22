import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {Presets} from '../../../assets/style';

import I18n from '../../../I18n';

const paddingSpace = () => <Text style={{padding: 5}}></Text>;

export default function NewsInner({props}) {
  return (
    <ScrollView style={Presets.fullScreen}>
      <Image
        source={{uri: props.data.image}}
        style={{height: 200, width: '100%'}}
      />
      <View style={Presets.container}>
        <Text style={[Presets.sectionTitle, Presets.colorBlack]}>
          {props.data.title}
        </Text>
        {paddingSpace()}
        <Text style={Presets.colorClaret}>{props.data.date}</Text>
        {paddingSpace()}
        <Text style={[Presets.fontSize20, Presets.colorBlack]}>
          {I18n.t('description')}
        </Text>
        <Text style={Presets.colorSilver}>{props.data.description}</Text>
      </View>
    </ScrollView>
  );
}
