import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Presets, Colors } from '../../assets/style';

import I18n from '../../I18n'
import Swiper from 'react-native-swiper';

import { imageHeight16, screenWidth } from '../../assets/style/dimensions';
import { Actions } from 'react-native-router-flux';

export default function HouseListing({ props }) {

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

    const renderSpacing = () => <Text style={{ padding: 80 }}></Text>

    return <ScrollView>
        <View style={[Presets.fullScreen, Presets.container, Presets.justifyCenter, { paddingTop: 30 }]}>
            {props.data.length > 0 && props.data[0] ? props.data.map(item => renderHouseItem(item, item.id)) : <Text>No Results</Text>}
            {renderSpacing()}
        </View>
    </ScrollView>
}
