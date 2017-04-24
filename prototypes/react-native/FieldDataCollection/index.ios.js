/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import osmp2p from './lib/osm-p2p';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class FieldDataCollection extends Component {
  constructor () {
    const osm = osmp2p('db');
    osm.create({ id: 'A', lat: 64.5, lon: -147.6 }, (err, key, node) => {
      if (err) return console.error(err)
      console.log('key', key, 'node', node)
      this.setState({ key, node });
    });
    super();
  }

  render() {
    console.log('this.props', this.props);

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FieldDataCollection', () => FieldDataCollection);
