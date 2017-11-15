import React from 'react';
import MainService from './src/services/MainService.js';
import Button from 'react-native-button';
import Splash from './Splash.js';
import Login from './src/components/Login/Login.js';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
    state = {
      loaded: false
    }
  constructor(){
      super();
      MainService.load(v => this.setState({loaded: true}));
    }
  render() {
    return (
      <View style={styles.container}>
      {this.state.loaded ? <Login></Login> : <Splash></Splash>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
