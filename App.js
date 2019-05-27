import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MainScreen from './screens/MainScreen';
import HomeTab from './screens/HomeTab';
import SearchTab from './screens/SearchTab';
import AddMediaTab from './screens/AddMediaTab';
import LikesTab from './screens/LikesTab';
import ProfileTab from './screens/ProfileTab';
import { Icon } from 'native-base';

export default class App extends React.Component {
  render() {
    return <AppConatiner />;
  }
}

// const AppTabNavigator = createBottomTabNavigator({
//   HomeTab: {
//     screen: HomeTab
//   },
//   SearchTab: {
//     screen: SearchTab
//   },
//   AddMediaTab: {
//     screen: AddMediaTab
//   },
//   LikesTab: {
//     screen: LikesTab
//   },
//   ProfileTab: {
//     screen: ProfileTab
//   }
// });
const AppStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen
  }
});

// const AppSwitchNavigator = createSwitchNavigator({
//   Welcome: { screen: AppStackNavigator },
//   Dashboard: { screen: AppTabNavigator }
// });

const AppConatiner = createAppContainer(AppStackNavigator);
