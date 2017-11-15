import React from 'react';
import Button from 'react-native-button';
import { StyleSheet, Text, View } from 'react-native';

export default class LoginButton extends React.Component {
  render() {
    return (
    	<View style={styles.buttonContainer}>
      		<Button style={styles.loginButton}>
     			Log In
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
		backgroundColor: 'white',
		borderStyle: 'solid',
		borderWidth: 1,
		// borderColor: 'black',
		borderRadius: 50,
		marginBottom: 15,
	},
	loginButton: {
		fontSize: 20, 
		color: 'black', 
		fontFamily:'AvenirNext-UltraLight',
	},
});