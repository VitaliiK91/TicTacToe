import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class App extends Component {
	render() {
		return (
			<View style={styles.MainContainer}>
				<Text>Tic Tac Toe</Text>
			</View>
		);
	}
}
