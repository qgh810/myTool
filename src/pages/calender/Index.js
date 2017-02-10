import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
} from 'react-native'

import Year from './Year'
import Month from './Month'
import Day from './Day'
import NavBar from './NavBar'
var {height, width} = Dimensions.get('window')

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.root}>
        <Year />
        <Month />
        <Day />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
