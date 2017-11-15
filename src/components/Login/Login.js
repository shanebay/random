import React from 'react';
import LoginButton from './Buttons/LoginButton.js';
import SignupButton from './Buttons/SignupButton.js';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
      <Image style={styles.background} source={{ uri: remoteImages }}></Image>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Random.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <LoginButton></LoginButton>
          <SignupButton></SignupButton>
    </View>
    </View>
    );
  }
}

const remoteImages = 'https://source.unsplash.com/Nxy-6QwGMzA/1000x1000';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#CECECE',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundContainer: {
    position: 'absolute',  
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
  },
  logoContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    marginTop: '15%',
  },
  title: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    fontFamily: 'HoeflerText-Black',
  },
  body: {
    fontWeight: '400',
    fontSize: 18,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: '10%',
    alignItems: 'center',
  },
});
