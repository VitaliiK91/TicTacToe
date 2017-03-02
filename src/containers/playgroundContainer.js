import React, { Component } from 'react';

import Playground from '../components/playground';

export default class PlaygroundContainer extends Component {
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

	onSelect(coords, type, test) {
		const updatedBoard = test || this.state.board.map(inner => inner.slice());
		updatedBoard[coords.x][coords.y] = type;

		this.setState({ board: updatedBoard });
	}

	createBoard(n) {
		const boardContructor = [];
		for (let i = 0; i < n; i += 1) {
			boardContructor[i] = [];
			for (let j = 0; j < n; j += 1) {
				boardContructor[i][j] = 'red';
			}
		}

		this.setState({ board: boardContructor });
	}

	render() {
		return (<Playground board={this.state.board} onSelect={this.onSelect} />);
	}
}
