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

import navStore from '../../mobx/navStore'
import Top from './Top'
var {height, width} = Dimensions.get('window')

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    navStore.statusBarColor = 'white'
  }

  render() {
    return (
      <View style={styles.root}>
        {/* <BlurView
          blurType="mark"
          blurAmount={2}
          style={styles.blur}
          >
            <Text>123123123123123123123123</Text>
            <View style={styles.mask}></View>
        </BlurView> */}
        <ScrollView
            style={styles.scrollView}
          >
            <Top/>
            <Text>日记日记日记日记日记日记日记日记日记</Text>
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },

  scrollView: {
    // width,
    // height,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
