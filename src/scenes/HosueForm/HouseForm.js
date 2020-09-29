import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  Image,
} from 'react-native';
import { Presets, Spacing, Colors } from '../../assets/style';

import I18n from '../../I18n';

import ImagePicker from 'react-native-image-picker';

import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoadingSmall from '../../components/LoadingSmall';
import { uploadImagesRoute } from '../../providers/routes';
import { post } from '../../providers/provider'
import { useSelector } from 'react-redux'

const options = {
  title: 'Select Image',
  base64: true,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

function HouseForm({ props }) {

  const [offerType, setOfferType] = useState('1');

  const [data, setData] = useState({});

  const [specs, setSpecs] = useState([]);

  const [gallery, setGallery] = useState([]);

  const [galleryUri, setGalleryUri] = useState([]);

  const [currentTitle, setCurrentTitle] = useState('');

  const [imageUri, setImageUri] = useState(null);

  const [galleryLoader, setGalleryLoader] = useState(false);

  const [imageLoader, setImageLoader] = useState(false)

  const user_id = useSelector(state => state.user.user.id)

  const fields = {
    title: { required: true, error: false },
    price: { required: true, error: false },
    area: { required: true },
    error: false,
    kitchens: { required: true, error: false },
    parkings: { required: true },
    error: false,
    bathrooms: { required: true, error: false },
    bedrooms: { required: true, error: false },
    location: { required: true, error: false },
    offerType: { required: true, error: false },
    description: { required: true, error: false },
  };

  const setValue = (name, value) => {
    let currentData = data;
    currentData[name] = value;
    setData(currentData);
  };

  const addSpec = () => {
    if (currentTitle && currentTitle != '') {
      setSpecs([...specs, currentTitle]);
      setCurrentTitle('');
    }
  };

  const addGalleryUri = (uri) => {
    setGalleryUri([...galleryUri, uri]);
  };

  const addGelleryImage = (url) => {
    setGallery([...gallery, url]);
  };

  const removeSpec = (idx) => {
    setSpecs(specs.filter((item, index) => index !== idx));
  };

  const removeGalleryUri = (idx) => {
    setGalleryUri(galleryUri.filter((item, index) => index !== idx));
  };

  const validate = () => {
    console.log(data)
    if (!data.Name || !data.location || !data.description || !data.price || !data.area) {
      alert('Please fill the missing fields')
      return false
    }
    return true
  }

  const submitForm = () => {
    const valid = validate();
    if (valid) {
      data.properties = specs.join();
      data.gellery = gallery.join();
      data.offerType = offerType
      data.id_user = user_id
      setData({});
      props.handleSubmit(data);
    }
  };

  const uploadImage = async () => {
    setImageLoader(true);
    ImagePicker.showImagePicker(options, async (response) => {
      console.log("Upoad Pressed")
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageUri(response.uri);
        // const fileLocalPath =
        //   Platform.OS === 'android' ? response.path : response.uri;
        const resp = await post({
          route: uploadImagesRoute,
          body: {
            image: response.data
          }
        })
        await resp.json().then(data => {
          setImageLoader(false)
          if (data.status == 'success') {
            console.log(data.body[0].ID)
            setValue('img', data.body[0].ID)
          }
        })
      }
    });
  }

  const uploadGallery = async () => {
    setGalleryLoader(true);
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        addGalleryUri(response.uri);
        const resp = await post({
          route: uploadImagesRoute,
          body: {
            image: response.data
          }
        })
        await resp.json().then(data => {
          addGelleryImage(data.body[0].ID)
          setGalleryLoader(false);
        })
      }
    });
  };

  const renderSpecs = () => {
    return (
      <View style={{ paddingTop: Spacing.large }}>
        <Text style={[Presets.title, { fontSize: 20 }]}>
          {I18n.t('specifications')}
        </Text>
        <View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              value={currentTitle}
              style={Presets.textField}
              onChangeText={(value) => setCurrentTitle(value)}
            />
          </View>
          <TouchableOpacity
            style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}
            onPress={() => addSpec()}>
            <Text style={[Presets.btnText, { color: Colors.white }]}>
              {I18n.t('add')}
            </Text>
          </TouchableOpacity>
        </View>
        {specs.map((item, index) => (
          <View key={index} style={Presets.spcsContainer}>
            <TouchableOpacity
              onPress={() => removeSpec(index)}
              style={{
                width: '10%',
              }}>
              <Icon name="trash" size={20} color="red" />
            </TouchableOpacity>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderTextField = (name, number = false) => <View style={{ paddingTop: 10 }}>
    <Text style={Presets.colorSilver}>{I18n.t(name)}</Text>
    <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
      <TextInput
        key="price"
        onChangeText={(value) => setValue(name, value)}
        keyboardType={number ? 'numeric' : 'default'}
        style={Presets.textField}
      />
    </View>
  </View>

  return (
    <View
      style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
      <ScrollView>
        {renderSpecs()}
        {renderTextField('Name')}
        <View style={[Presets.fieldMargin]}>
          <Text style={Presets.colorSilver}>{I18n.t('image')}</Text>
          {!imageLoader ? <TouchableOpacity
            style={Presets.ImageUploadFieldContainer}
            onPress={() => uploadImage()}>
            <Text style={Presets.ImageUploadField}>Upload</Text>
          </TouchableOpacity> : <LoadingSmall />}
          <View style={[{ alignItems: 'center' }, Presets.container]}>
            {imageUri && (
              <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: imageUri }}
              />
            )}
          </View>
        </View>
        <View style={[Presets.fieldMargin]}>
          <Text style={Presets.colorSilver}>{I18n.t('gallery')}</Text>
          {!galleryLoader ? (
            <TouchableOpacity
              style={Presets.ImageUploadFieldContainer}
              onPress={() => uploadGallery()}>
              <Text style={Presets.ImageUploadField}>Upload</Text>
            </TouchableOpacity>
          ) : (
              <LoadingSmall />
            )}
          <View
            style={[
              {
                flexDirection: 'row',
                flexWrap: 'wrap',
              },
              Presets.container,
            ]}>
            {galleryUri.length > 0 &&
              galleryUri.map((item, index) => (
                <View style={{ width: '49.9%' }}>
                  <Image
                    key={index}
                    style={{ height: 100, margin: 10 }}
                    source={{ uri: item }}
                  />
                  <TouchableOpacity
                    onPress={() => removeGalleryUri(index)}
                    style={{
                      position: 'absolute',
                    }}>
                    <View style={Presets.trashTopIcon}>
                      <Icon name="trash" size={20} color="red" />
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
        {renderTextField('description')}
        {renderTextField('price', true)}
        {renderTextField('area', true)}
        {renderTextField('kitchen', true)}
        {renderTextField('parking', true)}
        {renderTextField('bathroom', true)}
        {renderTextField('bedroom', true)}
        {renderTextField('location')}
        <Picker
          selectedValue={offerType}
          onValueChange={(itemValue, itemIndex) => setOfferType(itemValue)}
        >
          <Picker.Item value="0" label={I18n.t('choose_offer_type')} />
          <Picker.Item value="1" label={I18n.t('for_rent')} />
          <Picker.Item value="2" label={I18n.t('for_sale')} />
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
        <Text style={{ paddingTop: 250 }}></Text>
      </ScrollView>
    </View>
  );
}

export default HouseForm;
