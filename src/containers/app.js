import React from 'react';
import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Game from './game';

// screen related book keeping
Navigation.registerComponent('ticTacToe.game', () => Game);
Navigation.registerComponent('ticTacToe.settings', () => (() => <Text>Test</Text>));

const tabs = [{
	label: 'Game',
	screen: 'ticTacToe.game',
    // icon: require('../img/list.png'),
	title: 'Tic Tac Toe',
}, {
	label: 'Settings',
	screen: 'ticTacToe.settings',
	// icon: require('../img/swap.png'),
	title: 'Settings',
}];

// this will start our app
Navigation.startTabBasedApp({
	tabs,
	tabsStyle: {
		tabBarBackgroundColor: '#003a66',
		navBarButtonColor: '#ffffff',
		tabBarButtonColor: '#ffffff',
		navBarTextColor: '#ffffff',
		tabBarSelectedButtonColor: '#ff505c',
		navigationBarColor: '#003a66',
		navBarBackgroundColor: '#003a66',
		statusBarColor: '#002b4c',
		tabFontFamily: 'BioRhyme-Bold',
	},
	appStyle: {
		tabBarBackgroundColor: '#003a66',
		navBarButtonColor: '#ffffff',
		tabBarButtonColor: '#ffffff',
		navBarTextColor: '#ffffff',
		tabBarSelectedButtonColor: '#ff505c',
		navigationBarColor: '#003a66',
		navBarBackgroundColor: '#003a66',
		statusBarColor: '#002b4c',
		tabFontFamily: 'BioRhyme-Bold',
	},
});
