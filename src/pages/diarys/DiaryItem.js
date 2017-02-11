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

import { numberToString } from '../../utils/date'
import Triangle from '../../components/Triangle'
import navStore from '../../mobx/navStore'
import Top from './Top'
import DiaryList from './DiaryList'
const {height, width} = Dimensions.get('window')
const contentColor = '#fff2fb'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      month: new Date(this.props.time).getMonth() + 1,
      day: new Date(this.props.time).getDate(),
      hour: numberToString(new Date(this.props.time).getHours(), 2),
      minute: numberToString(new Date(this.props.time).getMinutes(), 2),
      second: numberToString(new Date(this.props.time).getSeconds(), 2),
    }
  }

  componentDidMount () {
    navStore.statusBarColor = 'white'
  }

  render() {
    let { month, day, hour, minute, second } = this.state
    let time = `${hour}:${minute}:${second}`
    return (
      <View style={styles.root}>
        <View style={styles.dateBox}>
          <View style={styles.line}/>
          <View style={styles.textBox}>
            <Text style={styles.date}>{`${month}-${day}`}</Text>
          </View>
          <View style={styles.icon}/>
        </View>
        <View style={styles.contentBox}>
          <Triangle size={20} color={contentColor} borderColor="#fff" direction="left" style={styles.triangle}/>
          <View style={styles.contentTextBox}>
            <Text numberOfLines={6} style={styles.contentText}>
              {this.props.content}
            </Text>
          </View>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    // alignItems: 'center',
    // height: 150,
    paddingBottom: 80,
  },

  dateBox: {
    width: 71.5,
  },

  textBox: {
    // justifyContent: 'center',
    paddingRight: 20,
  },

  line: {
    position: 'absolute',
    top: 5,
    right: 6 - StyleSheet.hairlineWidth,
    width: StyleSheet.hairlineWidth,
    height: 500,
    backgroundColor: '#b79db5',
    // shadowColor: '#000',
    // shadowOpacity: 0.4,
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 2,
  },

  date: {
    fontSize: 20,
    fontWeight: '100',
    textAlign: 'right',
    color: '#9e899c',
  },

  icon: {
    position: 'absolute',
    right: 0,
    top: 5,
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 6,
    backgroundColor: contentColor,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },

  contentBox: {
    width: width - 110,
    minHeight: 70,
    backgroundColor: contentColor,
    borderWidth: 5,
    borderColor: '#fff',
    marginLeft: 10,
    marginTop: -12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },

  triangle: {
    position: 'absolute',
    left: -10,
    top: 8,
  },

  contentTextBox: {
    padding: 10,
  },

  contentText: {
    color: '#777'
  },

  timeBox: {
    position: 'absolute',
    bottom: 55,
    right: 10,
  },

  time: {
    fontSize: 12,
    color: '#ccc'
  },
});
