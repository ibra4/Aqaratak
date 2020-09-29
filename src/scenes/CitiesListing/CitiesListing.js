import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Presets } from '../../assets/style'
import { Actions } from 'react-native-router-flux';
import { TextInput } from 'react-native-gesture-handler';

function CitiesListing({ props }) {

    const renderSearchItem = (item) => {
        return (
            // <View>
                <TouchableOpacity
                    style={[Presets.searchItem, styles.cityItem]}
                    onPress={() => Actions.push('HouseListing', { location: item.value })}
                >
                    <Image source={{ uri: item.img }} style={{ height: '100%', width: '100%' }} />
                    <View style={Presets.searchItemTextContainer}>
                        <Text style={Presets.searchItemText}>{item.value}</Text>
                    </View>
                </TouchableOpacity>
            // </View>
        );
    };

    const renderCity = (item) => {
        return <View style={styles.cityItem}>
            <Text>{item.img}</Text>
        </View>
    }

    const renderSpacing = () => <Text style={{padding: 80}}></Text>
    
    return (
        <View style={[Presets.container, styles.mainContainer]}>
            {props.data.map(item => renderSearchItem(item))}
            {renderSpacing()}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: 15
    },
    cityItem: {
        width: "45%",
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 0
    }
})

export default CitiesListing
