import { Navigation } from 'react-native-navigation';
import registerScenes from './scenes';

// register all scenes
registerScenes();

const tabs = [{
	label: 'Game',
	screen: 'game',
    // icon: require('../img/list.png'),
	title: 'Tic Tac Toe',
	passProps: { players: ['wowo', 'dodo'] },
}, {
	label: 'Settings',
	screen: 'settings',
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
