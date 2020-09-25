import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

import { Presets, Colors } from '../../assets/style';
import Highlights from './Highlights';
import Searches from './Searches';
import Today from './Today';
import { screenWidth, imageHeight16 } from '../../assets/style/dimensions';

import I18n from '../../I18n';

const searches = [
  {
    name: 'London',
    image:
      'https://q-cf.bstatic.com/images/hotel/max1024x768/207/207602915.jpg',
  },
  {
    name: 'Paris',
    image:
      'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg',
  },
  {
    name: 'Amman',
    image:
      'https://q-cf.bstatic.com/images/hotel/max1024x768/207/207602915.jpg',
  },
  {
    name: 'Dubai',
    image: 'https://i.pinimg.com/originals/38/d7/5b/38d75b985d9d08ce0959201f8198f405.jpg'
  },
  {
    name: 'Zarqa',
    image: 'https://lh3.googleusercontent.com/proxy/p6ypC6t33F_Hq4dUYPV6d145n0klKx0BM3e64sbwvTApy7TQlFqZmHJIYzfFxFleyFdEL_EFAalvxc4p8I2EQALIM9jByXyehY5dEUXZjLQPYm4rOl-ZEQjr567u4oc5QwLcfXXxTsuqGg'
  }
]

function Home({ props }) {
  const paddingSpace = () => <Text style={{ padding: 80 }}></Text>;

  const renderTopHeader = (data) => (
    <View>
      <View style={Presets.relative}>
        <Swiper
          style={{ height: imageHeight16 }}
          dotColor={Colors.white}
          activeDotColor={Colors.claret}
          showsButtons={false}>
          {data.map((item, key) => {
            return (
              <Image
                key={key}
                source={{ uri: item.img }}
                style={{ height: imageHeight16, width: screenWidth }}
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
      {console.log(props.data)}
      {renderTopHeader(props.data)}
      <Highlights data={props.data} />
      <Searches data={searches} />
      <Today likeHouse={props.likeHouse} data={props.data} />
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
