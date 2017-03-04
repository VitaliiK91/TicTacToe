import React, { Component } from 'react';

import Playground from '../components/playground';

export default class PlaygroundContainer extends Component {
	constructor(props) {
		super(props);
		this.createBoard = this.createBoard.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.state = {
			board: [],
			player: 0,
		};
	}

	componentWillMount() {
		this.createBoard(3);
	}


	isWinner(board, player) {
		let result = false;
		let rowScore = [0, 0, 0];
		let columnScore = [0, 0, 0];
		let diagScore = [0, 0];
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board.length; j++) {
				if (board[i][j] === player) {
					columnScore[i]++;
					rowScore[j]++;
					if (i === j) {
						if (i < board.length / 2) {
							diagScore[0]++;
						} else if (i > board.length / 2) {
							diagScore[1]++;
						} else {
							diagScore[0]++;
							diagScore[1]++;
						}
					}
				}
			}
		}
		return columnScore.includes(3) || rowScore.includes(3) || diagScore.includes(3);
	}

	onSelect(coords, type, test) {
		const updatedBoard = test || this.state.board.map(inner => inner.slice());

		const newPlayer = this.state.player === 1 ? 2 : 1;
		updatedBoard[coords.x][coords.y] = newPlayer;

		this.setState({ board: updatedBoard, player: newPlayer });
		if (this.isWinner(updatedBoard, newPlayer)) {
			alert('yay');
		}
	}

	createBoard(n) {
		const boardContructor = [];
		for (let i = 0; i < n; i += 1) {
			boardContructor[i] = [];
			for (let j = 0; j < n; j += 1) {
				boardContructor[i][j] = 0;
			}
		}

		this.setState({ board: boardContructor });
	}


	render() {
		return (<Playground board={this.state.board} onSelect={this.onSelect} />);
	}
}
