import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Dimensions,
} from 'react-native'

import Triangle from '../../components/Triangle'
var {height, width} = Dimensions.get('window')

const WEEKS = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

export default class Year extends Component {
  render() {
    return (
      <View style={styles.root}>
        {
          WEEKS.map(week => <View style={styles.weekItem} key={week}><Text style={styles.week} >{week}</Text></View>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },

  weekItem: {
    width: width / 7,
  },

  week: {
    color: '#fff',
    fontWeight: '200',
    fontSize: 20,
    textAlign: 'center',
  }
});
