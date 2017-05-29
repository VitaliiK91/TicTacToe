import React from 'react';
import { Dimensions } from 'react-native';
import Svg, {
		Text,
} from 'react-native-svg';

const { width } = Dimensions.get('window');

export default () => (
	<Svg
		height={width / 6}
		width={width}
	>
		<Text
			fill="none"
			stroke="red"
			fontSize="30"
			fontWeight="bold"
			x={width / 2}
			y={width / 24}
			textAnchor="middle"
		>Tic Tac Toe</Text>
	</Svg>
);
