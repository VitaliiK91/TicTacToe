import { Navigation } from 'react-native-navigation';
import Game from './game';
import Settings from './settings';

const registerScenes = () => {
	Navigation.registerComponent('game', () => Game);
	Navigation.registerComponent('settings', () => Settings);
};

export default registerScenes;
