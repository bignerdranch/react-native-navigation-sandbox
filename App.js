import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native'

import { NativeRouter, Route, Link } from 'react-router-native'

const Home = () => (
  <View>
    <Text style={styles.header}>
      Home
    </Text>
    <Link
      to="/details"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
        <Text>Go to details</Text>
    </Link>
  </View>
)

const Details = () => (
  <View>
    <Text style={styles.header}>
      Details
    </Text>
    <Link
      to="/"
      underlayColor='#f0f4f7'
      style={styles.navItem}>
        <Text>Go back</Text>
    </Link>
  </View>
)

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Text>React Router Native</Text>

      <Route exact path="/" component={Home}/>
      <Route path="/details" component={Details}/>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

export default App;
