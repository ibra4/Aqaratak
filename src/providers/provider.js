/* */
import {AsyncStorage, Platform} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export const setStorageItem = async (key, object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(object));
    return true;
  } catch (e) {
    return e;
  }
};

export const getStorageItem = async (key) => {
  try {
    const object = await AsyncStorage.getItem(key);
    return JSON.parse(object);
  } catch (error) {
    return 'Error : ', error;
  }
};

export const ImageUploader = () =>
  ImagePicker.showImagePicker(options, async (response) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const fileLocalPath =
        Platform.OS === 'android' ? response.path : response.uri;
      const storageRef = storage().ref(response.fileName);
      const downloadableUrl = await storageRef.getDownloadURL();
      storageRef.putFile(fileLocalPath).then(() => {
        return {
          localUri: response.uri,
          url: downloadableUrl,
        };
      });
    }
  });
