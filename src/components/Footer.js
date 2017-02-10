import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Footer extends Component {

  goBack = () => {
    const { navigator } = this.props
    navigator.pop()
    // todo
  }

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={this.goBack}>
          <Icon name="rocket" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.text}>
          Footer
        </Text>
        <TouchableOpacity>
          <Icon name="rocket" style={styles.right} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    // backgroundColor: '#f5f5f5',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#f5f5f5'
  },
  text: {
    fontSize: 18,
  },
  back: {
    fontSize: 20,
    color: '#900',
  },
  right: {
    fontSize: 20,
    // color: '#900',
    color: 'transparent',
  }
});
