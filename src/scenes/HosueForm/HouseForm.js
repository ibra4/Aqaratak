import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  Platform,
  Image,
} from 'react-native';
import {Presets, Spacing, Colors} from '../../assets/style';

import I18n from '../../I18n';

import ImagePicker from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from '../../components/Loading';
import LoadingSmall from '../../components/LoadingSmall';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const ar = {
  title: 'العنوان',
  description: 'الوصف',
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
  description: 'Description',
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

  const [specs, setSpecs] = useState([]);

  const [gallery, setGallery] = useState([]);

  const [galleryUri, setGalleryUri] = useState([]);

  const [currentTitle, setCurrentTitle] = useState('');

  const [imageUri, setImageUri] = useState(null);

  const [galleryLoader, setGalleryLoader] = useState(false);

  const fields = {
    title: {required: true, error: false},
    price: {required: true, error: false},
    area: {required: true},
    error: false,
    kitchens: {required: true, error: false},
    parkings: {required: true},
    error: false,
    bathrooms: {required: true, error: false},
    bedrooms: {required: true, error: false},
    location: {required: true, error: false},
    offerType: {required: true, error: false},
    description: {required: true, error: false},
  };

  const setValue = (name, value) => {
    let currentData = data;
    currentData[name] = value;
    setData(currentData);
  };

  useEffect(() => {
    console.log(specs);
  }, [specs]);

  useEffect(() => {
    console.log(gallery);
  }, [gallery]);

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

  useEffect(() => {
    if (I18n.locale == 'ar') {
      setLabels(ar);
    } else {
      setLabels(en);
    }
  }, []);

  const submitForm = () => {
    const valid = true;
    data.specs = specs;
    data.gallery = gallery;
    if (valid) {
      setData({});
      props.handleSubmit(data);
      Actions.push('Home', {message: 'Added Successfully'});
    }
  };

  const uploadImage = async () =>
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImageUri(response.uri);
        const fileLocalPath =
          Platform.OS === 'android' ? response.path : response.uri;
        const storageRef = storage().ref(response.fileName);
        storageRef
          .putFile(fileLocalPath)
          .then(async () => {
            const downloadableUrl = await storageRef.getDownloadURL();
            setValue('image', downloadableUrl);
          })
          .catch((err) => console.log(err));
      }
    });

  const uploadGallery = async () => {
    setGalleryLoader(true);
    ImagePicker.showImagePicker(options, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        addGalleryUri(response.uri);
        const fileLocalPath =
          Platform.OS === 'android' ? response.path : response.uri;
        const storageRef = storage().ref(response.fileName);
        storageRef
          .putFile(fileLocalPath)
          .then(async () => {
            const downloadableUrl = await storageRef.getDownloadURL();
            addGelleryImage(downloadableUrl);
            setGalleryLoader(false);
          })
          .catch((err) => setGalleryLoader(false));
      }
    });
  };

  const renderSpecs = () => {
    return (
      <View style={{paddingTop: Spacing.large}}>
        <Text style={[Presets.title, {fontSize: 20}]}>
          {I18n.t('specifications')}
        </Text>
        <View>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              value={currentTitle}
              onChangeText={(value) => setCurrentTitle(value)}
            />
          </View>
          <TouchableOpacity
            style={[Presets.btn, Presets.primaryBtn, Presets.fieldMargin]}
            onPress={() => addSpec()}>
            <Text style={[Presets.btnText, {color: Colors.white}]}>
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

  return (
    labels && (
      <View
        style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
        {renderSpecs()}
        <ScrollView>
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="title"
              onChangeText={(value) => setValue('title', value)}
              placeholder={labels.title}
              style={Presets.textField}
            />
          </View>
          <View style={[Presets.fieldMargin]}>
            <Text>Image</Text>
            <TouchableOpacity
              style={Presets.ImageUploadFieldContainer}
              onPress={() => uploadImage()}>
              <Text style={Presets.ImageUploadField}>Upload</Text>
            </TouchableOpacity>
            <View style={[{alignItems: 'center'}, Presets.container]}>
              {imageUri && (
                <Image
                  style={{height: 100, width: 100}}
                  source={{uri: imageUri}}
                />
              )}
            </View>
          </View>
          <View style={[Presets.fieldMargin]}>
            <Text>Gallery</Text>
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
                  // alignItems: 'space-between',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  // flex: 1,
                  // backgroundColor: 'red',
                },
                Presets.container,
              ]}>
              {galleryUri.length > 0 &&
                galleryUri.map((item, index) => (
                  <View style={{width: '49.9%'}}>
                    <Image
                      key={index}
                      style={{height: 100, margin: 10}}
                      source={{uri: item}}
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
          <View style={[Presets.textFieldContainer, Presets.fieldMargin]}>
            <TextInput
              key="description"
              onChangeText={(value) => setValue('description', value)}
              placeholder={labels.description}
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
              value={data.bedrooms}
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
          <Text style={{paddingTop: 150}}></Text>
        </ScrollView>
      </View>
    )
  );
}

export default HouseForm;
