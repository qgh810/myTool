import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native'

var {height, width} = Dimensions.get('window')

export default class Year extends Component {
  constructor (props) {
    super(props)
  }

  onPress = () => {
    this.props.onPress && this.props.onPress()
  }

  render() {
    return (
      <View style={[styles.root, {opacity: this.props.disabled ? 0.2 : 1}]}>
        <TouchableOpacity style={[styles.textBox, this.props.selected && styles.selected]}>
          <Text style={styles.text}>{this.props.day}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: width / 7.9,
    width: width / 7.9,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBox: {
    width: 50,
    height: 50,
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    borderColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 40,
  },

  selected: {
    borderColor: '#fff',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },

  text: {
    lineHeight: 50,
    textAlign: 'center',
    color: 'rgba(255,255,255,0.8)',
    fontSize: 28,
    fontWeight: '200'
  }
});
