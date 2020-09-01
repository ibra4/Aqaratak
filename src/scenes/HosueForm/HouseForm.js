import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';

import {Presets} from '../../assets/style';

import I18n from '../../I18n';

const ar = {
  title: 'العنوان',
  price: 'السعر',
  area: 'المساحة',
  kitchens: 'المطالخ',
  parkings: 'كراج',
  bathrooms: 'تواليت',
  bedrooms: 'غرف',
  location: 'الموفع',
  choose_offer_type: 'إختر نوع العرض',
  for_rent: 'للإيجار',
  for_sale: 'للبيع',
};
const en = {
  title: 'Title',
  price: 'Price',
  area: 'Area',
  kitchens: 'Kitchens',
  parkings: 'Parkings',
  bathrooms: 'Bathroom',
  bedrooms: 'Bedrooms',
  location: 'Location',
  choose_offer_type: 'Choose Offer Type',
  for_rent: 'For Rent',
  for_sale: 'For Sale',
};

function HouseForm({props}) {
  const [labels, setLabels] = useState(null);

  const [data, setData] = useState({offerType: 0});

  const setValue = (name, value) => {
    let currentData = data;
    currentData[name] = value;
    setData(currentData);
  };

  useEffect(() => {
    if (I18n.locale == 'ar') {
      setLabels(ar);
    } else {
      setLabels(en);
    }
  }, []);

  const submitForm = () => {
    props.handleSubmit(data);
  };

  return (
    labels && (
      <View
        style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
        <ScrollView>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="title"
              onChangeText={(value) => setValue('title', value)}
              placeholder={labels.title}
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="price"
              onChangeText={(value) => setValue('price', value)}
              placeholder={labels.price}
              keyboardType="numeric"
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="area"
              onChangeText={(value) => setValue('area', value)}
              placeholder={labels.area}
              keyboardType="numeric"
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="kitchens"
              onChangeText={(value) => setValue('kitchens', value)}
              keyboardType="numeric"
              placeholder={labels.kitchens}
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="parkings"
              onChangeText={(value) => setValue('parkings', value)}
              keyboardType="numeric"
              placeholder={labels.parkings}
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="bathrooms"
              onChangeText={(value) => setValue('bathrooms', value)}
              keyboardType="numeric"
              placeholder={labels.bathrooms}
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="bedrooms"
              onChangeText={(value) => setValue('bedrooms', value)}
              keyboardType="numeric"
              placeholder={labels.bedrooms}
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="location"
              onChangeText={(value) => setValue('location', value)}
              placeholder={labels.location}
              style={Presets.textField}
            />
          </View>
          <Picker
            onValueChange={(itemValue, itemIndex) =>
              setValue('offerType', itemValue)
            }
            selectedValue={data.offerType}>
            <Picker.Item value={0} label={labels.choose_offer_type} />
            <Picker.Item value={1} label={labels.for_rent} />
            <Picker.Item value={2} label={labels.for_sale} />
          </Picker>
          <TouchableOpacity
            style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}
            onPress={() => submitForm()}>
            <Text
              style={[
                Presets.colorWhite,
                Presets.btnText,
                Presets.bold,
                Presets.upperCase,
              ]}>
              {I18n.t('add')}
            </Text>
          </TouchableOpacity>
          <Text style={{paddingTop: 100}}></Text>
        </ScrollView>
      </View>
    )
  );
}

export default HouseForm;
