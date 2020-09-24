import React, {useEffect, useState} from 'react';
import Gallery from 'react-native-image-gallery';
import {Presets} from '../../assets/style';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function GalleryIndex({images}) {

  const [gallery, setGallery] = useState([])
  
  useEffect(() => {
    let galleryImages = []
    images.map(image => {
      galleryImages.push({
        source: {
          uri: image
        }
      })
    })
    setGallery(galleryImages)
  }, [])
  
  return (
    <View style={[Presets.fullScreen, Presets.positionRelative]}>
      <TouchableOpacity style={Presets.back} onPress={() => Actions.pop()}>
        <Text style={[Presets.colorWhite, Presets.fontSize20]}>
          Back
        </Text>
      </TouchableOpacity>
      <Gallery
        style={{flex: 1, backgroundColor: 'black'}}
        images={gallery}
      />
    </View>
  );
}
