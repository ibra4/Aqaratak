import React, {createRef} from 'react';
import {
  Dimensions,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Button,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Presets, Colors, Spacing} from '../../assets/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import {Actions} from 'react-native-router-flux';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

import I18n from '../../I18n';

const screenWidth = Math.round(Dimensions.get('window').width);
const dimensions = Dimensions.get('window');
const imageHeight = Math.round((dimensions.width * 9) / 10);
const imageWidth = dimensions.width;

export default function House({props}) {
  const searchCarouselRef = createRef('');

  const renderTopHeader = (data) => {
    return (
    <View>
      <Swiper
        showsButtons={false}
        style={{height: imageHeight}}
        dotColor={Colors.white}
        activeDotColor={Colors.claret}>
        {data.gallery.map((item, key) => (
          <Image
            source={{uri: item}}
            style={{height: imageHeight, width: imageWidth}}
          />
        ))}
      </Swiper>
      <TouchableOpacity
        style={Presets.homeHeartContainer}
        onPress={() => props.likeHouse()}>
        <Icon name="heart-o" size={20} color={Colors.silver} />
      </TouchableOpacity>
      <View style={{}}>
        <LinearGradient
          colors={['#00000000', '#000000ff']}
          style={Presets.sectionBody}>
          <Text style={style.houseRent}>{I18n.t(data.offerType)}</Text>
          <Text style={style.houseTitle}>{data.Name}</Text>
          <View style={Presets.spaceBetween}>
            <View style={Presets.flexStart}>
              <Text style={Presets.colorWhite}>{data.location}</Text>
              <View style={[Presets.flexStart, Presets.ph15]}>
                <Icon name="map" size={20} color={Colors.white} />
                <Text style={[Presets.colorWhite, Presets.ph5]}>
                  {data.area} {I18n.t('metersquare')}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  )};

  const renderBody = (data) => (
    <View>
      <View style={Presets.container}>
        <Text style={[Presets.colorLime, Presets.fontSize18]}>
          {I18n.t('price')}
        </Text>
        <Text style={[Presets.fontSize20, Presets.bold]}>${data.price}</Text>
      </View>
      <View style={[Presets.houseNumbersContainer, Presets.spaceBetween]}>
        <View style={Presets.verticalCenter}>
          <Icon
            name="bed"
            size={20}
            style={Presets.pb5}
            color={Colors.claret}
          />
          <Text style={Presets.colorSilver}>
            {data.bedroom} {I18n.t('beds')}
          </Text>
        </View>
        <View style={Presets.verticalCenter}>
          <Icon
            name="bath"
            size={20}
            style={Presets.pb5}
            color={Colors.claret}
          />
          <Text style={Presets.colorSilver}>
            {data.bathroom} {I18n.t('baths')}
          </Text>
        </View>
        <View style={Presets.verticalCenter}>
          <Icon
            name="cutlery"
            size={20}
            style={Presets.pb5}
            color={Colors.claret}
          />
          <Text style={Presets.colorSilver}>
            {data.kitchen} {I18n.t('kitchens')}
          </Text>
        </View>
        <View style={Presets.verticalCenter}>
          <Icon
            name="car"
            size={20}
            style={Presets.pb5}
            color={Colors.claret}
          />
          <Text style={Presets.colorSilver}>
            {data.parking} {I18n.t('parkings')}
          </Text>
        </View>
      </View>
      {/* <View style={Presets.Connecticons}>
        <TouchableOpacity
          // onPress={() => logoutUser()}
          >
          <View style={Presets.Connecticon}>
            <Icon name="phone" size={40} color={Colors.Instagram} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => logoutUser()}
          >
          <View style={Presets.Connecticon}>
            <Icon name="whatsapp" size={40} color={Colors.Whatsapp} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => logoutUser()} 
          >
          <View style={Presets.Connecticon}>
            <Icon name="comment-o" size={40} color={Colors.Instagram} />
          </View>
        </TouchableOpacity>
      </View> */}
      <View style={[Presets.container, Presets.flexStart]}>
        <TouchableOpacity
          style={[style.bookButton]}
          onPress={() => Actions.push('BookForm', {id: data.id})}>
          <Text style={Presets.colorWhite}>{I18n.t('booking_for_review')}</Text>
        </TouchableOpacity>
      </View>
      <View style={Presets.container}>
        <Text style={[Presets.fontSize20]}>{I18n.t('description')}</Text>
        <Text style={Presets.colorSilver}>{data.description}ssss</Text>
      </View>
    </View>
  );

  const renderProperties = (data) => (
    <View style={Presets.container}>
      <Text style={[Presets.fontSize20]}>{I18n.t('property_details')}</Text>
      <View style={Presets.propertyItemContainer}>
        {data.map((item, key) => (
          <View
            style={[
              Presets.flexStart,
              Presets.alignCenter,
              Presets.propertyItem,
            ]}>
            <View style={Presets.checkIcon}>
              <Icon name="check" size={15} color={Colors.claret} />
            </View>
            <Text style={[Presets.ph5, Presets.colorSilver]}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const renderGalaryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={Presets.searchItem}
        onPress={() => Actions.push('Gallery', {images: props.data.gallery})}>
        <Image source={{uri: item}} style={{height: '100%', width: '100%'}} />
      </TouchableOpacity>
    );
  };

  const renderGallerySection = (data) => (
    <View style={Presets.secion}>
      <Text style={[Presets.fontSize20, {paddingBottom: 15}]}>
        {I18n.t('gallery')}
      </Text>
      <Carousel
        ref={searchCarouselRef}
        inactiveSlideScale={1}
        data={data.gallery}
        activeSlideAlignment="start"
        renderItem={renderGalaryItem}
        sliderHeight={150}
        itemHeight={150}
        sliderWidth={screenWidth - 30}
        itemWidth={150}
      />
    </View>
  );

  const renderSpacing = () => <Text style={{padding: 40}}></Text>;

  const renderLocation = (location) => (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{
        height: 10000,
        width: 200,
      }}
      region={{
        latitude: 22.917923,
        longitude: 26.274856,
        latitudeDelta: 0.0252,
        longitudeDelta: 0.0251,
      }}>
      {/* <Marker
                      coordinate={{latitude: data.Location["Ra"],longitude: data.Location["Pa"]}}
                     > */}
    </MapView>
  );

  const renderContact = (owner) => (
    <View style={Presets.secion}>
      <Text style={[Presets.fontSize20, {paddingBottom: 15}]}>Contact</Text>
      <View>
        <View style={[Presets.spaceBetween, Presets.alignCenter]}>
          <View>
            <Text style={[Presets.ripeTitle]}>{owner.name}</Text>
            <Text style={[Presets.colorSilver, {marginTop: 5}]}>
              {owner.location}
            </Text>
          </View>
          <View style={Presets.flexStart}>
            <TouchableOpacity
              style={Presets.contactButton}
              onPress={() => Linking.openURL(`tel: ${owner.phone}`)}>
              <Icon name="phone" size={20} color={Colors.claret} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[Presets.contactButton, {marginLeft: 10}]}
              onPress={() => Linking.openURL(`sms: ${owner.phone}`)}>
              <Icon name="comment-o" size={20} color={Colors.claret} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[Presets.contactButton, {marginLeft: 10}]}
              onPress={() => Linking.openURL(`mailto: ${owner.mail}`)}>
              <Icon name="envelope" size={20} color={Colors.claret} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView>
      {renderTopHeader(props.data)}
      {renderBody(props.data)}
      {renderGallerySection(props.data)}
      {/* {renderProperties(
        I18n.locale == 'ar'
          ? props.data.propertyDetails_ar
          : props.data.propertyDetails,
      )} */}
      {/* {renderLocation(props.data.location)} */}
      {renderContact(props.data.owner)}
      {renderSpacing()}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  houseRent: {
    width: 100,
    backgroundColor: Colors.claret,
    paddingRight: Spacing.medium,
    paddingLeft: Spacing.medium,
    borderRadius: 5,
    color: Colors.white,
    fontWeight: 'bold',
  },
  houseTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5,
  },
  bookButton: {
    backgroundColor: Colors.claret,
    padding: 10,
    borderRadius: 5,
  },
});
