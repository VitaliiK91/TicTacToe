import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import PlayersContainer from './playersContainer';
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
	constructor() {
		super();
		this.move = this.move.bind(this);
		this.state = {
			players: [
				{
					id: 1,
					name: 'vitalii',
					active: true,
				},
				{
					id: 2,
					name: 'not vitalii',
					active: false,
				},
			],
		};
	}

	move() {
		this.setState({
			players: this.state.players.map(i => ({ ...i, active: !i.active })),
		});
	}
	render() {
		const activePlayer = this.state.players.find(p => p.active);
		return (
			<View style={styles.MainContainer}>
				<View style={styles.HeaderContainer} />
				<View style={styles.PlayersContainer}>
					<PlayersContainer players={this.state.players} />
				</View>
				<View style={styles.PlaygroundContainer}>
					<PlaygroundContainer active={activePlayer} onMove={this.move} />
				</View>
			</View>
		);
	}
}
