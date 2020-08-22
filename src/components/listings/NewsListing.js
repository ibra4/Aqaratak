import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Presets} from '../../assets/style';

const activeOpacity = 0.7;

class ListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={Presets.listingItems}>
        <TouchableOpacity
          style={[Presets.bordered, Presets.listingItem]}
          onPress={() => Actions.push('NewsInner', {id: this.props.item.id})}>
          <Image
            source={{uri: this.props.item.image}}
            style={{height: 200, width: '100%'}}
          />
          <View style={Presets.listItemBody}>
            <Text style={[Presets.sectionTitle, Presets.colorClaret]}>
              {this.props.item.title}
            </Text>
            <Text style={[Presets.colorSilver]}>{this.props.item.date}</Text>
            <Text>{this.props.item.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

function renderItem(item) {
  return <ListItem item={item.item} key={item.id} />;
}

export default function NewsListing({props}) {
  return (
    // <Text>ssssssss</Text>
    <FlatList
      data={props.data}
      renderItem={(item) => renderItem(item)}
      keyExtractor={(item, index) => String(index)}
      onEndReached={() => (props.loadMore ? props.loadMore() : null)}
      removeClippedSubviews={true}
      onEndThreshold={60}
    />
  );
}
