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
import DiaryList from './DiaryList'
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
        <ScrollView
            style={styles.scrollView}
          >
            <Top/>
            <DiaryList/>
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
