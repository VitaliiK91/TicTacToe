import React, { Component } from 'react';

import {
	View,
} from 'react-native';
import Player from '../components/player';

export default class PlayersContainer extends Component {

	render() {
		const { players } = this.props;
		if (!players) {
			return null;
		}
		return (
			<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
			{
				players.map(player => (
					<Player name={player.name} active={player.active} />
				))
			}
			</View>
		);
	}
}

PlayersContainer.propTypes = {
	players: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			id: React.PropTypes.number.isRequired,
			name: React.PropTypes.string,
			isActive: React.PropTypes.bool,
		}),
	).isRequired,
};
