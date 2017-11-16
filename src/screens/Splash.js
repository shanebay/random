import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Splash extends React.Component {
  render() {
    return (
    	<View style={styles.wrapper}>
    		<Text style={styles.title}>Random.</Text>
    	</View>
    	);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'black',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 40,
		color: 'white',
		fontWeight: '800',
		fontFamily: 'HoeflerText-Black',
	},
});