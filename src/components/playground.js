import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native';
import Svg, {
		Circle,
		Rect,
} from 'react-native-svg';

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
export default class Playground extends Component {

	cellStyle(i, j, boardLength) {
		const borderTopWidth = (i === 0 ? null : 1);
		const borderBottomWidth = (i === boardLength ? null : 1);
		const borderLeftWidth = (j === 0 ? null : 1);
		const borderRightWidth = (j === boardLength ? null : 1);
		return {
			borderBottomWidth,
			borderTopWidth,
			borderLeftWidth,
			borderRightWidth,
		};
	}
	boardFigure(type) {
		if (type === 1) {
			return (
					<Circle
						cx="50"
						cy="50"
						r="30"
						stroke="red"
						strokeWidth="1"
						fillOpacity="0"
					/>
			);
		} else if (type === 2) {
			return (
					<Rect
						x="15"
						y="15"
						width="70"
						height="70"
						stroke="red"
						strokeWidth="1"
						fillOpacity="0"
					/>
			);
		}
		return null;
	}
	render() {
		const { board, onSelect } = this.props;
		if (!board || !onSelect) {
			return null;
		}
		const boardLength = board.length - 1;
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
								this.cellStyle(indexI, indexJ, boardLength),
							]}
							onPress={() => { this.props.onSelect({ x: indexI, y: indexJ }, j)}}
							>
							<Svg
								height="100"
								width="100"
							>
							{this.boardFigure(j)}
							</Svg>
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
