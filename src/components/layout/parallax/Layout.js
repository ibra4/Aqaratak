import React from 'react';
import { View, StatusBar } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import { Presets } from '../../../assets/style';

export default function Layout({ children }) {
  return (
    <View style={[Presets.fullScreen]}>
      <StatusBar hidden />
      <Header />
      <View style={Presets.fullScreen}>{children}</View>
      <Footer />
    </View>
  );
}
