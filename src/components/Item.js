import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default class Item extends Component {

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          Item
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
