import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body
} from 'native-base';
import ItemList from '../components/ItemList';
import StoriesComponent from '../components/StoriesComponent';
import HeaderComponent from '../components/HeaderComponent';

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-home' style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container style={styles.container}>
        <HeaderComponent
          title='Instagram'
          leftIconName='ios-camera'
          rightIconName='ios-send'
        />
        <Content>
          <StoriesComponent />
          <ItemList imageSource='1' likes='101' />
          <ItemList imageSource='2' likes='100' />
          <ItemList imageSource='1' likes='111' />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});
