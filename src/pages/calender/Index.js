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

var {height, width} = Dimensions.get('window')

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={require('../../assets/images/background.jpg')}
        >
          <Year />
          <Month />
          <Day />
          <Month />
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  image: {
    width: width,
    height: height,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
