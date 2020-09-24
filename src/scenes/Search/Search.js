import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Picker, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Presets, Colors } from '../../assets/style';

import I18n from '../../I18n'
import Swiper from 'react-native-swiper';

import { imageHeight16, screenWidth } from '../../assets/style/dimensions';
import { Actions } from 'react-native-router-flux';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { housesRoute, searchRoute } from '../../providers/routes';

export default function Search({ props }) {

  const [search, setSearch] = useState(null)
  const [selectedOffer, setSelectedOffer] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [priceValues, setPriceValues] = useState([100, 500000])
  const [roomNumbers, setRoomNumbers] = useState({
    kitchen: null,
    bedroom: null,
    bathroom: null,
    parking: null
  })
  const [collapsed, setCollapsed] = useState(false)

  const cities = [{
    value: 'amman',
    label: 'Amman'
  }, {
    value: 'istanbul',
    label: 'Istanbul'
  },
  {
    value: 'london',
    label: 'London'
  },
  {
    value: 'paris',
    label: 'Paris'
  }];

  const handleSearch = () => {
    if (search && search != '') {
      const options = {
        route: searchRoute,
        params: {
          Name: search
        }
      }
      props.handleSearch(options)
    } else {
      Alert.alert(I18n.t('error'), I18n.t('you_shoud_enter_a_text_in_search_field'))
    }
  }

  const resetFilters = () => {
    const options = {
      route: housesRoute
    }
    props.handleSearch(options)
  }

  const renderSwiper = (gallery, id) => (
    <Swiper
      style={{
        height: imageHeight16,
      }}
      dotColor={Colors.white}
      activeDotColor={Colors.claret}
      showsButtons={false}>
      {gallery.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            onPress={() => Actions.push('House', { id: id })}>
            <Image
              source={{ uri: item }}
              style={{ height: imageHeight16, width: screenWidth }}
            />
          </TouchableOpacity>
        );
      })}
    </Swiper>
  );

  const renderHouseItem = (item, id) => {
    item.gallery = []
    item.gallery.push(item.img)
    return (
      <View style={[Presets.listingItem]}>
        {item.gallery && renderSwiper(item.gallery, item.id)}
        {item.offerType != "" && <Text style={Presets.houseRent}>{I18n.t(item.offerType)}</Text>}
        <TouchableOpacity
          style={Presets.listItemBody}
          onPress={() => Actions.push('House', { id: id })}>
          <TouchableOpacity
            style={[Presets.homeHeartContainer, { top: -20 }]}>
            <Icon name="heart-o" size={20} color={Colors.silver} />
          </TouchableOpacity>
          <Text style={[Presets.sectionTitle, Presets.colorSilver]}>
            {item.Name}
          </Text>
          <Text style={[Presets.sectionTitle, Presets.colorBlack]}>
            ${item.price}
          </Text>
          <View style={Presets.spaceBetween}>
            <View style={Presets.flexStart}>
              <Icon name="home" size={20} color={Colors.silver} />
              <Text style={[Presets.colorSilver, Presets.ph5]}>
                {item.location}
              </Text>
            </View>
            <View style={[Presets.spaceBetween, Presets.alignCenter]}>
              <Icon name="square" size={15} color={Colors.silver} />
              <Text style={[Presets.colorSilver, Presets.ph5]}>
                {item.area} {I18n.t('metersquare')}
              </Text>
              <Text style={[Presets.colorSilver, Presets.squareNumber]}>2</Text>
            </View>
          </View>
          <View style={[Presets.spaceBetween, Presets.sectionActions]}>
            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="bed" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.bedroom} {I18n.t('beds')}
              </Text>
            </View>

            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="bath" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.bathroom} {I18n.t('baths')}
              </Text>
            </View>

            <View style={[Presets.flexStart, Presets.alignCenter]}>
              <Icon name="car" size={15} color={Colors.claret} />
              <Text style={[Presets.ph5, Presets.sectionActionsText]}>
                {item.parking} {I18n.t('parkings')}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const handleSelectedOffer = (offerType) => {
    if (selectedOffer == offerType) {
      setSelectedOffer(null)
    } else {
      setSelectedOffer(offerType)
    }
  }

  const renderRoomNumbers = (key, title) => <View style={{ width: 80, marginRight: 10 }}>
    <View style={{ marginTop: 10 }}>
      <View>
        <Text style={{ color: Colors.silver }}>{I18n.t(title)}</Text>
        <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
          <TextInput style={Presets.textField} onChangeText={(value) => setRoomNumbers({ ...roomNumbers, [key]: value })} />
        </View>
      </View>
    </View>
  </View>

  const handleFilters = () => {
    setCollapsed(!collapsed)
    let params = {}
    Object.keys(roomNumbers).map(i => {
      if (roomNumbers[i]) {
        params[i] = roomNumbers[i]
      }
    })
    params.price = priceValues.join()
    if (selectedCity) {
      params.location = selectedCity
    }
    if (selectedOffer) {
      params.offerType = selectedOffer
    }
    const options = {
      route: searchRoute,
      params: params
    }
    props.handleSearch(options)
  }

  const renderFilters = () => <View>
    <View style={[Presets.fieldMargin]}>
      <View style={[Presets.verticalCenter, Presets.flexStart]}>
        <Text style={{ color: Colors.silver }}>{I18n.t('offerType')}</Text>
        <View style={[Presets.flexStart, { marginTop: 10, marginLeft: 10 }]}>
          <TouchableOpacity style={[
            Presets.buttonSelectItemContainer,
            { backgroundColor: selectedOffer == 'rent' ? Colors.claret : Colors.white }
          ]} onPress={() => handleSelectedOffer('rent')}>
            <Text style={[
              Presets.buttonSelectItem,
              { color: selectedOffer == 'rent' ? Colors.white : Colors.claret }
            ]}>{I18n.t('for_rent')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[
            Presets.buttonSelectItemContainer,
            { backgroundColor: selectedOffer == 'sale' ? Colors.claret : Colors.white }
          ]} onPress={() => handleSelectedOffer('sale')}>
            <Text style={[
              Presets.buttonSelectItem,
              { color: selectedOffer == 'sale' ? Colors.white : Colors.claret }
            ]}>{I18n.t('for_sale')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: Colors.silver }}>{I18n.t('price')}</Text>
        <View style={[Presets.spaceBetween, { marginTop: 10 }]}>
          <Text style={{ color: Colors.silver }}>{priceValues[0]}</Text>
          <Text style={{ color: Colors.silver }}>{priceValues[1]}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <MultiSlider
            min={0}
            max={100000}
            // sliderLength={180}
            onValuesChange={values => setPriceValues(values)}
            minMarkerOverlapDistance={10}
            step={1000}
            values={priceValues}
          />
        </View>
      </View>
      <View style={Presets.flexStart}>
        {renderRoomNumbers('kitchen', 'kitchens')}
        {renderRoomNumbers('parking', 'parkings')}
        {renderRoomNumbers('bedroom', 'bedrooms')}
        {renderRoomNumbers('bathroom', 'bathrooms')}
      </View>
      <View style={Presets.spaceBetween}>
      </View>
    </View>
    <View style={[Presets.fieldMargin]}>
      <Text style={{ color: Colors.silver }}>City</Text>
      <View style={{ width: '100%' }}>
        <Picker
          selectedValue={selectedCity}
          // style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}>
          <Picker.Item style={{ alignSelf: 'center' }} label={I18n.t('all')} value="all" />
          {cities.map(item =>
            <Picker.Item style={{ alignSelf: 'center' }} label={item.value} value={item.value} />
          )}
        </Picker>
      </View>
    </View>
    <TouchableOpacity
      style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}
      onPress={() => handleFilters()}>
      <Text
        style={[
          Presets.colorWhite,
          Presets.btnText,
          Presets.bold,
          Presets.upperCase,
        ]}>
        {I18n.t('apply_filters')}
      </Text>
    </TouchableOpacity>
  </View>

  const renderSearchForm = () => {
    return <View>
      <View style={[Presets.flexStart, Presets.alignCenter]}>
        <View style={{ width: '80%' }}>
          <Text style={{ color: Colors.silver }}>{I18n.t('search')}</Text>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput style={Presets.textField} onChangeText={(value) => setSearch(value)} />
          </View>
        </View>
        <TouchableOpacity
          style={{ width: '20%', justifyCenter: 'center', alignItems: 'center', marginTop: 30 }}
          onPress={() => handleSearch()}>
          <Icon name="search" size={30} color={Colors.claret} />
        </TouchableOpacity>
      </View>
      <Collapse isCollapsed={collapsed}>
        <CollapseHeader>
          <View style={[Presets.spaceBetween, { marginTop: 20, fontWeight: 'bold' }]}>
            <Text style={{ color: Colors.claret }}>More filters</Text>
            <TouchableOpacity onPress={() => resetFilters()}>
              <Text>{I18n.t('reset_filters')}</Text>
            </TouchableOpacity>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {renderFilters()}
        </CollapseBody>
      </Collapse>
    </View>
  }

  return <ScrollView>
    <View style={[Presets.fullScreen, Presets.container, Presets.justifyCenter, { paddingTop: 30 }]}>
      {renderSearchForm()}
      {/* {props.data.map(item => console.log(item))} */}
      <View style={{ marginTop: 30, borderTopWidth: 1, borderTopColor: Colors.claret, paddingTop: 20 }}>
        {props.data.length > 0 ? props.data.map(item => renderHouseItem(item, item.id)) : <Text>No Results</Text>}
      </View>
      {/* {status === 'success' ?
        data.map(item => renderHouseItem(item._data, item.id))
        : <Loading />} */}
    </View>
  </ScrollView>
}
