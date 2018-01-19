import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => this.myNav()} title="Go to details"/>
      </View>
    );
  }

  myNav() {
    this.props.navigator.push({
      screen: 'example.DetailsScreen',
      title: 'Details Screen'
    });
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

Navigation.registerComponent('example.HomeScreen', () => HomeScreen);
Navigation.registerComponent('example.DetailsScreen', () => DetailsScreen);

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.HomeScreen', // this is a registered name for a screen
    // icon: require('../img/one.png'),
    // selectedIcon: require('../img/one_selected.png'), // iOS only
    title: 'Home Screen'
  }
});
