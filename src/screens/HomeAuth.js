import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button';

import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default ({ navigation }) => (
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
      <Image style={styles.background} source={{ uri: remoteImages }}></Image>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Random.</Text>
        </View>
        <View style={styles.buttonContainer}>

      <View style={styles.loginButtonContainer}>
          <Button onPress={() => navigation.navigate("SignIn")} style={styles.loginButton}>
          Log In
        </Button>
      </View>

      <View style={styles.signupButtonContainer}>
          <Button onPress={() => navigation.navigate("SignUp")} style={styles.signupButton}>
          Create Account
        </Button>
      </View>

    </View>
    </View>
    );

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
  loginButton: {
    fontSize: 20, 
    color: 'black', 
    fontFamily:'AvenirNext-UltraLight',
  },
  signupButton: {
    fontSize: 20, 
    color: 'white', 
    fontFamily:'AvenirNext-UltraLight',
  },
  loginButtonContainer: {
    width: '80%',
    justifyContent: 'center',
    height: 55,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 15,
  },
  signupButtonContainer: {
    width: '80%',
    justifyContent: 'center',
    height: 55,
    overflow: 'hidden',
    backgroundColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 50,
  },
});
