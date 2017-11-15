import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  LogIn: {
    screen: LogInScreen,
    navigationOptions: {
      headerTitle: 'Log In',
    },
  },
});
