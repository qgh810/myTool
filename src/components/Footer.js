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
import calenderStore from '../pages/calender/store'

@observer
export default class Footer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedSetting: navStore.settingIsOpen
    }
  }

  onPress = (name) => {
    // 如果当前是日历 则点击日历导航会定位到今天
    if (name === 'Calender' && navStore.selectedNav === 'Calender') return calenderStore.today()
    if (name === 'Diarys' && navStore.selectedNav === 'Diarys') return this.addDiart()
    // if (name === 'Setting') {
    //   if (navStore.selectedNav === 'Diarys') {
    //     return navStore.closeSetting()
    //   } else {
    //     navStore.openSetting()
    //   }
    // }
    navStore.setNav(name)
  }

  addDiart = () => {
    console.log('这里需要跳转到新建日志页面')
  }

  onSetting = () => {
    if (navStore.settingIsOpen) {
      navStore.closeSetting()
    } else {
      navStore.openSetting()
    }
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
            name={navStore.selectedNav === 'Diarys' ? 'ios-add-circle-outline' :  'ios-list-box-outline'}
            style={[styles.icon, {opacity: navStore.selectedNav === 'Diarys' ? 1 : 0.7}]} />
          <Text
            style={[styles.text, {opacity: navStore.selectedNav === 'Diarys' ? 1 : 0.7}]}>
            {navStore.selectedNav === 'Diarys' ? 'Add' : 'Diarys'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.onSetting}>
          <Icon
            name="ios-options-outline"
            style={[styles.icon, {opacity: navStore.settingIsOpen ? 1 : 0.7}]} />
          <Text
            style={[styles.text, {opacity: navStore.settingIsOpen ? 1 : 0.7}]}>
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
