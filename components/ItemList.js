import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from 'native-base';

export default class componentName extends Component {
  render() {
    const images = {
      '1': require('../assets/1.jpg'),
      '2': require('../assets/3.png')
    };
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail large source={require('../assets/mjosh.jpg')} />
            <Body>
              <Text>Joshua </Text>
              <Text note>May 25, 2019</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name='ios-heart' style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name='ios-chatbubbles' style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name='ios-send' style={{ color: 'black' }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes} </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: '900' }}>varun</Text>
              Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim eiusmod
              dolore cupidatat magna exercitation amet proident qui. Est do
              irure magna dolor adipisicing do quis labore excepteur. Commodo
              veniam dolore cupidatat nulla consectetur do nostrud ea cupidatat
              ullamco labore. Consequat ullamco nulla ullamco minim.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
