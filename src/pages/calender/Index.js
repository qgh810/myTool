import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
} from 'react-native'

import navStore from '../../mobx/navStore'
import Year from './Year'
import Month from './Month'
import Day from './Day'
import NavBar from './NavBar'
var {height, width} = Dimensions.get('window')

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // 设置状态栏字体颜色 只支持白色和黑色
    navStore.statusBarColor = 'black'
  }

  render() {
    return (
      <View style={styles.root}>
        <Year />
        <Month />
        <Day {...this.props} />
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
