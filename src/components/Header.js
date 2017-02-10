import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Header extends Component {

  goBack = () => {
    const { navigator } = this.props
    navigator.pop()
    // todo
  }

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity onPress={this.goBack}>
          <Icon name="chevron-left" style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.text}>
          Header
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 44,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
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
