import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

import {Presets, Colors} from '../../assets/style';
import Highlights from './Highlights';
import Searches from './Searches';
import Today from './Today';
import {screenWidth, imageHeight16} from '../../assets/style/dimensions';

import I18n from '../../I18n';

function Home({props}) {
  const paddingSpace = () => <Text style={{padding: 20}}></Text>;

  const renderTopHeader = (images) => (
    <View>
      <View style={Presets.relative}>
        <Swiper
          style={{height: imageHeight16}}
          dotColor={Colors.white}
          activeDotColor={Colors.claret}
          showsButtons={false}>
          {images.map((item, key) => {
            return (
              <Image
                key={key}
                source={{uri: item}}
                style={{height: imageHeight16, width: screenWidth}}
              />
            );
          })}
        </Swiper>
      </View>
      <View style={style.srearchContainer}>
        <TouchableOpacity
          style={style.srearchBox}
          onPress={() => Actions.push('Search')}>
          <Text style={style.srearchText}>{I18n.t('search_text')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView>
      {renderTopHeader(props.data.mainSlider)}
      <Highlights data={props.data.highlights} />
      <Searches data={props.data.searches} />
      <Today likeHouse={props.likeHouse} data={props.data.today} />
      {paddingSpace()}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  srearchContainer: {
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  srearchBox: {
    borderColor: Colors.lightGray,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    marginTop: -20,
    backgroundColor: Colors.white
  },
  srearchText: {
    color: Colors.silver,
  },
});

export default Home;
