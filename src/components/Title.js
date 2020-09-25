import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Presets, Colors } from '../assets/style'

function Title({ children }) {
    return (
        <View style={style.positionRelative}>
            <Text style={style.sceneTitle}>{children}</Text>
            <View style={style.borderBottom}></View>
        </View>
    )
}

const style = StyleSheet.create({
    positionRelative: {
        position: 'relative',
    },
    sceneTitle: {
        fontWeight: 'bold',
        color: Colors.claret,
        fontSize: 26,
        padding: 15
    },
    borderBottom: {
        height: 3,
        width: 200,
        backgroundColor: Colors.claret,
        position: 'absolute',
        bottom: 5,
        left: 15
    }
})

export default Title
