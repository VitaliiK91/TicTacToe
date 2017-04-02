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

		const border = active ? 1 : 0;
		return (
			<View style={{ borderWidth: border }}>
				<Text>
				{name}
				</Text>
				<Text>
					SCORE: {this.props.score}
				</Text>
			</View>
		);
	}
}
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	active: React.PropTypes.bool,
	score: React.PropTypes.number.isRequired,
};

