import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>这是首页</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
