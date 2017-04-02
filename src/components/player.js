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
		const { name } = this.props;
		const { active } = this.props;

		return (
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={{ flex: 1, backgroundColor: active ? 'red' : 'white', alignItems: 'center', justifyContent:'space-around'}}>
					<Text style={{ fontSize: 20 }}>
					{name}
					</Text>
					<Text style={{ fontSize: 50 }}>
						{this.props.score}
					</Text>
				</View>
			</View>
		);
	}
}
Player.propTypes = {
	name: React.PropTypes.string.isRequired,
	active: React.PropTypes.bool,
	score: React.PropTypes.number.isRequired,
};

