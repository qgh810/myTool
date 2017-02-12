import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Navigator,
} from 'react-native'
import { observer } from 'mobx-react/native'
import navStore from '../mobx/navStore'

@observer
export default class Index extends Component {

  render() {
    let Comp = navStore.route.component
    return (
      <Comp />
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
