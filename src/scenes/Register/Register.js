import React from 'react'
import Layout from '../../components/layout/parallax/Layout'
import { ScrollView, View, Text } from 'react-native'

function Register() {
    return (
        <Layout>
            <ScrollView>
                <View style={[Presets.fullScreen, Presets.container, Presets.justifyCenter, { paddingTop: 30 }]}>
                    <Text>Register</Text>
                </View>
            </ScrollView>
        </Layout>
    )
}

export default Register
