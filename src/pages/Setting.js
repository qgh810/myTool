import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';

var {height, width} = Dimensions.get('window')

export default class Setting extends Component {
  constructor (props) {
    super(props)
  }

  close = () => {
    this.props.onClose()
  }

  render() {
    return (
      <View style={[styles.root]}>
        <Text style={{color: '#000'}} onPress={this.close}>setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },

  image: {
    width: width,
    height: height,
  },
});
