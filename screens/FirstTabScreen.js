import React, { Component } from 'react';
import { Text, Button } from 'react-native';

export default class FirstTabScreen extends Component {
  render() {
    return <Button onPress={() => this.myNav()} title="FirstTabScreen"/>;
  }

  myNav() {
    this.props.navigator.push({
      screen: 'example.PushedScreen',
      title: 'Pushed Screen'
    });
  }
}
