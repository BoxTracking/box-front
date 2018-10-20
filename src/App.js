import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    name: "Box",
    subtitle: "Order Tracking Application"
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{this.state.name}</Text>
        <Text style={styles.subtitle}>{this.state.subtitle}</Text>
        <Text style={styles.instructions}>To get started, edit this file</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191C25',
  },
  name: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFE500',
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FFE500',
    fontWeight: "600",
    paddingBottom: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#FFE500',
    marginBottom: 5,
  },
});
