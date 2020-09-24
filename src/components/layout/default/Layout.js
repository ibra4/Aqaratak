import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, StatusBar} from 'react-native';
import Footer from '../Footer';
import Header from './Header';
import {Presets, Colors} from '../../../assets/style';

import ParallaxScroll from '@monterosa/react-native-parallax-scroll';

export default function Layout({
  children,
  header = true,
  title = null,
  slider = false,
}) {
  return (
    <SafeAreaView>
      <View style={[Presets.fullScreen, style.layout]}>
        <StatusBar hidden />
        {/* {header ? (
          <ParallaxScroll
            renderHeader={({animatedValue}) => (
              <Header
                animatedValue={animatedValue}
                title={title}
                slider={slider}
              />
            )}
            headerHeight={80}
            isHeaderFixed={true}
            parallaxHeight={80}
            headerFixedBackgroundColor={Colors.claret}
            parallaxBackgroundScrollSpeed={5}
            parallaxForegroundScrollSpeed={2.5}>
            <View style={[Presets.fullScreen, {top: slider ? -80 : 0}]}>
              {children}
            </View>
          </ParallaxScroll>
        ) : (
          <View style={Presets.fullScreen}>{children}</View>
        )} */}
        <Header
                // animatedValue={animatedValue}
                title={title}
                slider={slider}
              />
              <View style={Presets.fullScreen}>{children}</View>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  layout: {
    // backgroundColor: Colors.lightGray,
  },
});
