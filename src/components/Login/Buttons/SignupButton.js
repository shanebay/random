import React from 'react';
import Button from 'react-native-button';
import { StyleSheet, Text, View } from 'react-native';

export default class SignupButton extends React.Component {
  render() {
    return (
    	<View style={styles.buttonContainer}>
      		<Button style={styles.loginButton}>
     			Create Account
  			</Button>
  		</View>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: '80%',
		justifyContent: 'center',
		height: 55,
		overflow: 'hidden',
		backgroundColor: 'black',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
		borderRadius: 50,
	},
	loginButton: {
		fontSize: 20, 
		color: 'white', 
		fontFamily:'AvenirNext-UltraLight',
	},
});