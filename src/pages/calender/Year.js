import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  Dimensions,
} from 'react-native'
import { observer } from 'mobx-react/native'

import Triangle from '../../components/Triangle'
import calenderStore from './store'
var {height, width} = Dimensions.get('window')


@observer
export default class Year extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>{calenderStore.year || new Date().getFullYear()}</Text>

        <View style={styles.bottom}>
          <Triangle
            size={30}
            color="#cbdae2"
            borderColor="rgba(0,0,0,0.3)"
          />
        </View>

        <StatusBar hidden={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    height: 80,
    zIndex: 1,
    backgroundColor: '#cbdae2',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2},
    // shadowOpacity: 0.9,
    // shadowRadius: 2,
  },
  text: {
    color: '#4a5973',
    fontSize: 40,
    fontWeight: '100',
    textAlign: 'center',
    margin: 10,
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center',
    top: 80,
    width: width,
    height: 30,
  }
});
