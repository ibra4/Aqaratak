import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import I18n from '../../I18n'

import Layout from '../../components/layout/parallax/Layout'
import { Presets, Colors } from '../../assets/style'

function About() {
    return (
        <Layout title={I18n.t('about_us')}>
            <ScrollView>

                {I18n.locale == 'en' ? <View
                    style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Lorem Ipsum</Text>
                    <Text style={{ paddingBottom: 20 }}>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Nulla quis</Text>
                    <Text style={{ paddingBottom: 20 }}>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Sed porttitor</Text>
                    <Text style={{ paddingBottom: 20 }}>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Nulla quis</Text>
                    <Text style={{ paddingBottom: 20 }}>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Quisque velit</Text>
                    <Text style={{ paddingBottom: 20 }}>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.</Text>
                    <Text style={{paddingBottom: 100}}></Text>
                </View> : <View
                    style={[Presets.fullScreen, Presets.container, Presets.justifyCenter]}>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Lorem Ipsum</Text>
                    <Text style={{ paddingBottom: 20 }}>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Nulla quis</Text>
                    <Text style={{ paddingBottom: 20 }}>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Sed porttitor</Text>
                    <Text style={{ paddingBottom: 20 }}>Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Nulla quis</Text>
                    <Text style={{ paddingBottom: 20 }}>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</Text>
                    <Text style={{ color: Colors.claret, fontSize: 20, paddingBottom: 10 }}>Quisque velit</Text>
                    <Text style={{ paddingBottom: 20 }}>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.</Text>
                    <Text style={{paddingBottom: 100}}></Text>
                </View>}
            </ScrollView>
        </Layout>
    )
}

export default About

// Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.

// Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat.

// Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus.

// Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.

// Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.