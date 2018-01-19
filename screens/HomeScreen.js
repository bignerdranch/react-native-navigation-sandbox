import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return <Button onPress={() => this.myNav()} title="HomeScreen"/>;
  }

  myNav() {
    this.props.navigator.push({
      screen: 'example.DetailsScreen',
      title: 'Details Screen'
    });
  }
}
