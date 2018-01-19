import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.HomeScreen', // this is a registered name for a screen
    // icon: require('../img/one.png'),
    // selectedIcon: require('../img/one_selected.png'), // iOS only
    title: 'Home Screen'
  }
});
