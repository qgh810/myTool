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
import Icon from 'react-native-vector-icons/Ionicons'
import { BlurView, VibrancyView } from 'react-native-blur'

import DiaryItem from './DiaryItem'

var {height, width} = Dimensions.get('window')

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      diarys: [
        {
          time: new Date(),
          content: '内容1',
        },
        {
          time: '2014/11/12 12:00:23',
          content: '内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2内容2',
        },
        {
          time: new Date(),
          content: '',
        }
      ]
    }
  }

  renderNoDiary = () => {
    if (this.state.diarys.length) return
    return (
      <View style={styles.noDiaryBox}>
        <Icon name="ios-sad-outline" style={styles.icon} />
        <Text style={styles.tips1}>您还没有添加日记</Text>
        <Text style={styles.tips2}>点击下方 "+" 按钮可以添加日记</Text>
      </View>
    )
  }

  render() {
    let diarys = this.state.diarys
    return (
      <View style={styles.root}>
        {
          diarys.map((diary, index) => {
            return (
              <DiaryItem {...diary} key={index + ''}/>
            )
          })
        }
        {this.renderNoDiary()}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  root: {
    padding: 10
  },

  noDiaryBox: {
    // backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center'
  },

  icon: {
    color: '#bbb',
    fontSize: 60,
  },

  tips1: {
    fontSize: 22,
    height: 60,
    lineHeight: 60,
    color: '#aaa',
  },

  tips2: {
    fontSize: 12,
    height: 60,
    lineHeight: 60,
    color: '#bbb',
  }
})
