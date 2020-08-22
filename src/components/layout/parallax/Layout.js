import React from 'react';
import {View, StatusBar} from 'react-native';
import Footer from '../Footer';
import Header from './Header';
import {Presets, Colors} from '../../../assets/style';

import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

export default function Layout({children, header = true, title = null}) {
  return (
    <View style={[Presets.fullScreen]}>
      <StatusBar hidden />

      <ParallaxScroll
        renderHeader={({animatedValue}) => (
          <Header animatedValue={animatedValue} title={title} />
        )}
        headerHeight={80}
        isHeaderFixed={true}
        parallaxHeight={80}
        headerFixedBackgroundColor={Colors.claret}
        parallaxBackgroundScrollSpeed={5}
        parallaxForegroundScrollSpeed={2.5}>
        <View style={Presets.fullScreen}>{children}</View>
      </ParallaxScroll>

      <Footer />
    </View>
  );
}
