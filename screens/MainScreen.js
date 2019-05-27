import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import HomeTab from './HomeTab';
import SearchTab from './SearchTab';
import AddMediaTab from './AddMediaTab';
import LikesTab from './LikesTab';
import ProfileTab from './ProfileTab';

export default class MainScreen extends Component {
  static navigationOptions = {
    // headerLeft: (
    //   <Icon
    //     name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
    //     style={{ paddingLeft: 10 }}
    //   />
    // ),
    // title: 'Instagram',
    // headerRight: (
    //   <Icon
    //     style={{ paddingRight: 10 }}
    //     name={Platform.OS === 'ios' ? 'ios-send' : 'md-send'}
    //   />
    // )
    header: null
  };
  render() {
    return <AppContainer />;
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

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,

    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white'
          }
        })
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true
    }
  }
);

const AppContainer = createAppContainer(AppTabNavigator);
