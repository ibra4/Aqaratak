import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Presets} from '../../assets/style';

export default function BookForm() {
  return (
    <ScrollView>
      <View
        style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
          <TextInput placeholder="test 1" style={Presets.textField} />
        </View>
        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
          <TextInput placeholder="test 2" style={Presets.textField} />
        </View>
        <TouchableOpacity
          style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}>
          <Text
            style={[
              Presets.colorWhite,
              Presets.btnText,
              Presets.bold,
              Presets.upperCase,
            ]}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
