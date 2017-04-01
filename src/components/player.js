import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	Row: {
		flexDirection: 'row',
	},
	Cell: {
		borderColor: 'green',
	},
	CellText: {
		fontSize: 80,
	},
});

export default class Player extends Component {
	render() {
		let { name } = this.props;
		const { active } = this.props;

		if (!name) {
			name = 'player 1';
		}

		const border = active ? 1 : 0;
		return (
			<View style={{ borderWidth: border }}>
				<Text>
				{name}
				</Text>
			</View>
		);
	}
}
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	active: React.PropTypes.bool,
};
