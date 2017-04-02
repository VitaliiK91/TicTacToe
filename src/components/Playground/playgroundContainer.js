import React, { Component } from 'react';

import Playground from './playground';

export default class PlaygroundContainer extends Component {

	static isWinner(board, player) {
		const rowScore = [0, 0, 0];
		const columnScore = [0, 0, 0];
		const diagScore = [0, 0];

		for (let i = 0; i < board.length; i += 1) {
			for (let j = 0; j < board.length; j += 1) {
				if (board[i][j] === player) {
					columnScore[i] += 1;
					rowScore[j] += 1;
					if (i === j) {
						diagScore[0] += 1;
						if (i === Math.trunc(board.length / 2)) {
							diagScore[1] += 1;
						}
					} else if ((i + j) === (board.length - 1)) {
						diagScore[1] += 1;
					}
				}
			}
		}
		if (columnScore.includes(board.length)) {
			return {
				type: 'column',
				line: columnScore.findIndex(i => i === board.length),
			};
		} else if (rowScore.includes(board.length)) {
			return {
				type: 'row',
				line: rowScore.findIndex(i => i === board.length),
			};
		} else if (diagScore.includes(board.length)) {
			return {
				type: 'diag',
				line: diagScore.findIndex(i => i === board.length),
			};
		}
		return null;
	}

	constructor(props) {
		super(props);
		this.createBoard = this.createBoard.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.state = {
			board: [],
		};
	}

	componentWillMount() {
		this.createBoard(3);
	}

	componentWillReceiveProps(newProps) {
		if (newProps.reset) {
			this.setState({
				board: [],
				player: 0,
				winner: null,
			});
			this.createBoard(3);
		}
	}

	onSelect(coords, type, test) {
		const updatedBoard = test || this.state.board.map(inner => inner.slice());

		const newPlayer = this.props.active === 1 ? 2 : 1;
		if (updatedBoard[coords.x][coords.y] !== -1) {
			return;
		}
		updatedBoard[coords.x][coords.y] = newPlayer;

		this.setState({ board: updatedBoard, player: newPlayer });

		if ([].concat(...updatedBoard).filter(i => i === -1).length < 1) {
			this.props.onReset();
		} else if (PlaygroundContainer.isWinner(updatedBoard, newPlayer)) {
			const winLine = PlaygroundContainer.isWinner(updatedBoard, newPlayer);
			this.setState({ winner: winLine });
			this.props.onWin(this.props.active);
		} else {
			this.props.onMove();
		}
	}

	createBoard(n) {
		const boardContructor = [];
		for (let i = 0; i < n; i += 1) {
			boardContructor[i] = [];
			for (let j = 0; j < n; j += 1) {
				boardContructor[i][j] = -1;
			}
		}

		this.setState({ board: boardContructor });
	}

	render() {
		return (<Playground board={this.state.board} onSelect={this.onSelect} winner={this.state.winner} />);
	}
}

PlaygroundContainer.propTypes = {
	active: React.PropTypes.number.isRequired,
	onMove: React.PropTypes.func.isRequired,
	onWin: React.PropTypes.func.isRequired,
	onReset: React.PropTypes.func.isRequired,
};
