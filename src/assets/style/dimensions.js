import {Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
export const imageHeight16 = Math.round((dimensions.width * 9) / 16);
export const screenWidth = Math.round(dimensions.width);
