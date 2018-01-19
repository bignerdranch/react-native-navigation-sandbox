import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('example.DetailsScreen', () => DetailsScreen);
}
