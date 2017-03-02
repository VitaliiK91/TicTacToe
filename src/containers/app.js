import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import PlaygroundContainer from './playgroundContainer';

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
		paddingTop: 15,
	},
	HeaderContainer: {
		flex: 1,
		borderWidth: 1,
		borderColor: 'red',
	},
	PlayersContainer: {
		flex: 2,
		borderWidth: 1,
		borderColor: 'blue',
	},
	PlaygroundContainer: {
		flex: 8,
	},
});

export default class App extends Component {
	render() {
		return (
			<View style={styles.MainContainer}>
				<View style={styles.HeaderContainer} />
				<View style={styles.PlayersContainer} />
				<View style={styles.PlaygroundContainer}>
					<PlaygroundContainer />
				</View>
			</View>
		);
	}
}
