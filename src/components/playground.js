import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native';

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		alignSelf: 'center',
		justifyContent:'center',
	},
	Row: {
		flexDirection: 'row',
		minHeight: 50,
	},
	Cell: {
		borderColor: 'green',
		minWidth: 50,
	},
	CellText: {
		fontSize: 80 ,
	},
});
export default class Playground extends Component {

	cellStyle(i, j, centerCell) {
		const borderTopWidth = (i === centerCell ? 1 : 0);
		const borderBottomWidth = (i === centerCell ? 1 : 0);
		const borderLeftWidth = (j === centerCell ? 1 : 0);
		const borderRightWidth = (j === centerCell ? 1 : 0);
		return {
			borderBottomWidth,
			borderTopWidth,
			borderLeftWidth,
			borderRightWidth,
		};
	}
	render() {
		const { board, onSelect } = this.props;
		if (!board || !onSelect) {
			return null;
		}
		const centerCell = Math.trunc(board.length / 2);
		return (
			<View style={styles.MainContainer}>
			{this.props.board.map((i, indexI) => (
				<View
					style={styles.Row}
					key={`row_${indexI}`}
				>
					{i.map((j, indexJ) => (
						<TouchableOpacity
							key={`cell_${indexI}_${indexJ}_$(j)`}
							style={[
								styles.Cell,
								this.cellStyle(indexI, indexJ, centerCell),
							]}
							onPress={() => { this.props.onSelect({ x: indexI, y: indexJ }, 'green')}}
						>
							<Text style={styles.CellText}>{j}</Text>
						</TouchableOpacity>
					))}
				</View>
			))
			}
			</View>
		);
	}
}
Playground.propTypes = {
	board: React.PropTypes.arrayOf(
		React.PropTypes.arrayOf(
			React.PropTypes.number,
		),
	).isRequired,
	onSelect: React.PropTypes.func.isRequired,
};
