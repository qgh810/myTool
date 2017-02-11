import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { observer } from 'mobx-react/native'
import Icon from 'react-native-vector-icons/Ionicons';

import calenderStore from './store'


const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default class Month extends Component {
  constructor (props) {
    super(props)
  }

  onLeft = () => {
    calenderStore.onPrevMonth()
  }

  onRight = () => {
    calenderStore.onNextMonth()
  }

  @observer
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={this.onLeft}>
          <Icon name="ios-arrow-round-back" style={[styles.icon, styles.iconLeft]}/>
        </TouchableOpacity>
        <Text style={styles.text}>{MONTHS[calenderStore.month - 1] || MONTHS[new Date().getMonth()]}</Text>
        <TouchableOpacity onPress={this.onRight}>
          <Icon name="ios-arrow-round-forward" style={[styles.icon, styles.iconRight]}/>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: 'rgba(211, 261, 215, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    // shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'normal',
    textAlign: 'center',
    margin: 10,
    fontWeight: '100',
  },

  icon: {
    transform: [{translateY: 4}],
    width: 60,
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },
});
