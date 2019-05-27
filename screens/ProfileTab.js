import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
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
import ProfileHeaderComponent from '../components/ProfileHeaderComponent';
import ProfileContent from '../components/ProfileContent';

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' style={{ color: tintColor }} />
    )
  };

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: 'white' }}>
        <ProfileHeaderComponent
          title='Mugisha Joshua'
          leftIconName='md-person-add'
          rightIconName='back-in-time'
        />
        <ProfileContent />
      </Container>
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
