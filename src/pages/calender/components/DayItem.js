import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
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
      <View style={[styles.root, {opacity: this.props.opacity ? 0.2 : 1}]}>
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
    width: 40,
    height: 40,
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 1,
    borderColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 40,
  },

  selected: {
    borderColor: '#fd8d99',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },

  text: {
    lineHeight: 40,
    textAlign: 'center',
    color: '#fff',
    fontSize: 28,
    fontWeight: '200'
  }
});
