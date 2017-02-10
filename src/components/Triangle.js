import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';

export default class Triangle extends Component {
  static defaultProps = {
    size: 10,
    color: '#000',
    borderColor: '#000',
    direction: 'bottom',
    style: {},
  }
  styles = () => {
    let size = this.props.size
    let triangleWidth = size * Math.sqrt(2) / 2
    let color = this.props.color
    let triangleContainerWdith = size
    let triangleContainerHeight = size
    if (this.props.direction === 'top' || this.props.direction === 'bottom') {
      triangleContainerHeight = size / 2
    } else {
      triangleContainerWdith = size / 2
    }
    let triangleContainer = {
      width: triangleContainerWdith,
      height: triangleContainerHeight,
      overflow: 'hidden',
    }
    let baseTranslate = size / 2 - (size * Math.sqrt(2) / 4)
    let translateX = size / 2 - (size * Math.sqrt(2) / 4)
    let translateY = size / 2 - (size * Math.sqrt(2) / 4)
    if (this.props.direction === 'right') {
      translateX = translateX - size / 2
    } else if (this.props.direction === 'bottom') {
      translateY = translateY - size / 2
    }
    let triangle = {
      width: triangleWidth,
      height: triangleWidth,
      transform: [{translate: [translateX, translateY]},{rotate: '45deg'}],
      backgroundColor: color,
      borderWidth: 1,
      borderColor: this.props.borderColor,
    }

    return StyleSheet.create({ triangleContainer, triangle })
  }
  render () {
    return (
      <View style={[this.styles().triangleContainer, this.props.style]}>
        <View style={this.styles().triangle}></View>
      </View>
    )
  }
}

let width = 100
let triangleWidth = width * Math.sqrt(2) / 2
let translate = width / 2 - (width * Math.sqrt(2) / 4)
const styles = StyleSheet.create({
  triangleContainer: {
    width: width,
    height: width / 2,
    overflow: 'hidden',
  },
  triangle: {
    width: triangleWidth,
    height: triangleWidth,
    transform: [{translate: [translate, translate]},{rotate: '45deg'}],
  }
})
