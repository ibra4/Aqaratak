import React from 'react';
import Gallery from 'react-native-image-gallery';
import {Presets} from '../../assets/style';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function GalleryIndex({images}) {
  return (
    <View style={[Presets.fullScreen, Presets.positionRelative]}>
      <TouchableOpacity style={Presets.back} onPress={() => Actions.pop()}>
        <Text style={[Presets.colorWhite, Presets.fontSize20]}>
          Back
        </Text>
      </TouchableOpacity>
      <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={[
          {
            source: {
              uri:
                'https://www.pcgamesn.com/wp-content/uploads/2019/08/minecraft-houses-900x506.jpg',
            },
          },
          {
            source: {
              uri:
                'https://canadanews24.ca/wp-content/uploads/2019/07/%D8%A8%D9%8A%D8%AA%D8%AA%D9%86.jpg',
            },
          },
          {
            source: {
              uri:
                'https://images.squarespace-cdn.com/content/v1/53ff083fe4b06d598893dcdf/1416059184915-NCDOYJZRT6WO5NMZ18N5/ke17ZwdGBToddI8pDm48kFwLpwhcqxzfNuBZPTq0g3kUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnihgU9gKGLroRAsvpywHz61e7rLscY9kQ8yq3Ldx1LvP7cJNZlDXbgJNE9ef52e8w/Mirror+Houses+Slide+front.jpg',
            },
          },
          {
            source: {
              uri:
                'https://www.amazingarchitecture.com/photos/1/40072611_image9724.jpg',
            },
          },
          {
            source: {
              uri:
                'https://pix10.agoda.net/hotelImages/3109398/-1/de32c962df85919b2e730b3d5386c674.jpg?s=1024x768',
            },
          },
        ]}
      />
    </View>
  );
}
