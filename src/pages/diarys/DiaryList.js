import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native'
import { BlurView, VibrancyView } from 'react-native-blur'

import DiaryItem from './DiaryItem'

var {height, width} = Dimensions.get('window')

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.root}>
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
        <DiaryItem />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    padding: 10
  },
})
