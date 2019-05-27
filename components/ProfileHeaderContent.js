import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button
} from 'native-base';
import ItemList from './ItemList';

const images = [
  require('../assets/1.jpg'),
  require('../assets/3.png'),
  require('../assets/mjosh.jpg'),
  require('../assets/mjosh2.jpg'),
  require('../assets/mjosh3.jpg')
];
const { width, height } = Dimensions.get('window');

export default class ProfileHeaderContent extends Component {
  state = {
    activeIndex: 0
  };

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  renderSection = () => {
    switch (this.state.activeIndex) {
      case 0:
        return images.map((image, index) => {
          return (
            <View
              key={index}
              style={[
                { width: width / 3 },
                { height: width / 3 },
                { marginBottom: 2 },
                { marginTop: 2 },
                index % 3 != 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
              ]}
            >
              <Image
                style={{ flex: 1, width: undefined, height: undefined }}
                source={image}
              />
            </View>
          );
        });

        break;
      case 1:
        return (
          <View>
            <Text>This is second screen</Text>
            {/* <ItemList imageSource='1' likes='101' />
            <ItemList imageSource='2' likes='100' />
            <ItemList imageSource='1' likes='111' /> */}
          </View>
        );
        break;
      case 2:
        return (
          <View>
            <Text>This is third section</Text>
          </View>
        );
        break;
      case 3:
        return (
          <View>
            <Text>This is fourth section</Text>
          </View>
        );
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopColor: '#eae5e5',
            borderTopWidth: 1
          }}
        >
          <Button
            transparent
            onPress={() => this.segmentClicked(0)}
            active={this.state.activeIndex == 0}
          >
            <Icon
              name='ios-apps'
              style={[this.state.activeIndex == 0 ? {} : { color: 'grey' }]}
            />
          </Button>
          <Button
            transparent
            onPress={() => this.segmentClicked(1)}
            active={this.state.activeIndex == 1}
          >
            <Icon
              name='ios-list'
              style={[this.state.activeIndex == 1 ? {} : { color: 'grey' }]}
            />
          </Button>
          <Button
            transparent
            onPress={() => this.segmentClicked(2)}
            active={this.state.activeIndex == 2}
          >
            <Icon
              name='ios-people'
              style={[this.state.activeIndex == 2 ? {} : { color: 'grey' }]}
            />
          </Button>
          <Button
            transparent
            onPress={() => this.segmentClicked(3)}
            active={this.state.activeIndex == 3}
          >
            <Icon
              name='ios-bookmark'
              style={[this.state.activeIndex == 3 ? {} : { color: 'grey' }]}
            />
          </Button>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSection()}
        </View>
      </View>
    );
  }
}
