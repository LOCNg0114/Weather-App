/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import {  Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import DetailsScreen from './DetailsScreen';
import ControlScreen from './ControlScreen';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00ccff',
      },
      headerTitleStyle: {
        textAlign: 'center', flexGrow: 2,
        alignSelf: 'center',
      },
      headerTintColor: '#FFFFFF',
      title: 'Onsen Weather',
    },
  }
);

const ControlStack = createStackNavigator(
  {
    Controls: { screen: ControlScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
      backgroundColor: '#3366ff',
      },
      headerTitleStyle: {
        textAlign: 'center', flexGrow: 2,
        alignSelf: 'center',
      },
      headerTintColor: '#FFFFFF',
      title: 'Controls',
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Setting: { screen: SettingScreen },
  },
  {
    defaultNavigationOptions: {
       headerStyle: {
       backgroundColor: '#00ccff',
       },
       headerTitleStyle: {
        textAlign: 'center', flexGrow: 2,
        alignSelf: 'center',
      },
      headerTintColor: '#FFFFFF',
      title: 'Information',
    },
    
  }
);
const App = createBottomTabNavigator(
  {
    'Weather Details': { screen: HomeStack },
    Controls: { screen: ControlStack },
    Setting: { screen: SettingsStack },

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Weather Details') {
          iconName = require('./assets/cloud_icon.png')
        }
        else if (routeName === 'Controls') {
          iconName = require('./assets/light_bulb_icon.png')
        }
        else if (routeName === 'Setting') {
          iconName = require('./assets/setting_icon.png')
        }
        return <Image source={iconName} resizeMode={'contain'} style={{ width: 20, height: 20, tintColor: '#fff' }} />;
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#000000',
      inactiveTintColor: '#f2f2f2',
      activeBackgroundColor: '#0047b3',
      inactiveBackgroundColor: '#0099ff',
      labelStyle: {
        fontSize: 14,
      },
    },
  }
);

export default createAppContainer(App);