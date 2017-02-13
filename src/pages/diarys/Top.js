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

  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.backgroundImage}
          source={require('../../assets/images/background-diary.png')}>
            <View style={styles.mask}/>
        </Image>
        <Image
          style={styles.headerImage}
          source={require('../../assets/images/header.jpg')}>
        </Image>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 290,
    // backgroundColor: 'rgba(0,0,0,0.2)',

  },

  backgroundImage: {
    width,
    height: 200,
    shadowColor: '#000',
    // shadowOpacity: 0.8,
    // shadowRadius: 3,
    // shadowOffset: {width: 0, height: 5},
  },
  mask: {
    flex: 1,
    backgroundColor: 'rgba(222,124,176,0.3)',
  },
  headerImage: {
    position: 'absolute',
    top: 130,
    left: 0,
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: '#fff',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
