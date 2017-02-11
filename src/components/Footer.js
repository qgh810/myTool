import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { observer } from 'mobx-react/native'

import Icon from 'react-native-vector-icons/Ionicons'
import navStore from '../mobx/navStore'

@observer
export default class Footer extends Component {

  onPress = (name) => {
    navStore.setNav(name)
  }

  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { this.onPress('Calender') }}>
          <Icon
            name="ios-apps-outline"
            style={[styles.icon, {opacity: navStore.selectedNav === 'Calender' ? 1 : 0.7}]} />
          <Text
            style={[styles.text, {opacity: navStore.selectedNav === 'Calender' ? 1 : 0.7}]}>
            Calender
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => { this.onPress('Diarys') }}>
          <Icon
            name="ios-list-box-outline"
            style={[styles.icon, {opacity: navStore.selectedNav === 'Diarys' ? 1 : 0.7}]} />
          <Text
            style={[styles.text, {opacity: navStore.selectedNav === 'Diarys' ? 1 : 0.7}]}>
            Diarys
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}>
          <Icon
            name="ios-options-outline"
            style={[styles.icon, {opacity: navStore.selectedNav === 'Setting' ? 1 : 0.7}]} />
          <Text
            style={[styles.text, {opacity: navStore.selectedNav === 'Setting' ? 1 : 0.7}]}>
            Setting
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    // backgroundColor: 'rgba(130,116,125,0.4)',
    backgroundColor: 'rgba(255,255,255,0.5)',
    zIndex: 2,
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderTopColor: 'rgba()'
  },

  btn: {
  },
  icon: {
    fontSize: 35,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '100',
    marginBottom: 3,
  },
  text: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '100',
  }
});
