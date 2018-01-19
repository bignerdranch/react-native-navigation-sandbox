import React, { Component } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends Component {
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
