import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import Svg, {
		Circle,
		Line,
		G,
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

	static cellStyle(i, j, boardLength) {
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
	static getShape(type) {
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
					<G>
						<Line
							x1="25"
							y1="25"
							x2="75"
							y2="75"
							stroke="red"
							strokeWidth="1"
						/>
						<Line
							x1="25"
							y1="75"
							x2="75"
							y2="25"
							stroke="red"
							strokeWidth="1"
						/>
					</G>
			);
		}
		return null;
	}

	static winCell(type, line, i, j, center) {
		if (type === 'row') {
			if (j === line) {
				return (
					<Line
						x1="50"
						y1="0"
						x2="50"
						y2="100"
						stroke="green"
						strokeWidth="3"
					/>
				);
			}
		} else if (type === 'column') {
			if (i === line) {
				return (
					<Line
						x1="0"
						y1="50"
						x2="100"
						y2="50"
						stroke="green"
						strokeWidth="3"
					/>
				);
			}
		} else if (line === 0 && i === j) {
			return (
				<Line
					x1="0"
					y1="0"
					x2="100"
					y2="100"
					stroke="green"
					strokeWidth="3"
				/>
			);
		} else if (line === 1 && (i + j) === center) {
			return (
				<Line
					x1="0"
					y1="100"
					x2="100"
					y2="0"
					stroke="green"
					strokeWidth="3"
				/>
			);
		}
		return null;
	}

	render() {
		const { board, onSelect, winner } = this.props;
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
								Playground.cellStyle(indexI, indexJ, boardLength),
							]}
							onPress={() => { this.props.onSelect({ x: indexI, y: indexJ }); }}
						>
							<Svg
								height="100"
								width="100"
							>
							{Playground.getShape(j)}
							{winner && Playground.winCell(winner.type, winner.line, indexI, indexJ, boardLength)}
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
	winner: React.PropTypes.shape({
		type: React.PropTypes.string,
		line: React.PropTypes.number,
	}),
};

Playground.defaultProps = {
	winner: null,
};

