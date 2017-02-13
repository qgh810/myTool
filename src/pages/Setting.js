import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { BlurView } from 'react-native-blur'
import Icon from 'react-native-vector-icons/Ionicons';

import navStore from '../mobx/navStore'
var {height, width} = Dimensions.get('window')

export default class Setting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blurType: 'light' // xlight / light / dark
    }
  }

  onClose = () => {
    navStore.closeSetting()
  }

  render() {
    return (
      <BlurView blurType={this.state.blurType} blurAmount={6} style={styles.root}>
        <TouchableOpacity style={styles.closeBox} onPress={this.onClose}>
          <Icon name="ios-close" style={styles.close} />
        </TouchableOpacity>
        <View style={styles.contentBox}>
        <View style={styles.headerImageBox}>
          <Image
            style={styles.headerImage}
            source={require('../assets/images/header.jpg')}>
          </Image>
        </View>
        <ScrollView style={styles.settingContentBox}>
          <TouchableOpacity style={styles.settingItemBox}>
            <Icon name="ios-color-palette-outline" style={styles.settingIcon} />
            <Text style={styles.settingItemText}>风格设置</Text>
            <Icon name="ios-arrow-forward" style={styles.rightItem} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItemBox}>
            <Icon name="ios-images-outline" style={styles.settingIcon} />
            <Text style={styles.settingItemText}>日记背景</Text>
            <Icon name="ios-arrow-forward" style={styles.rightItem} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItemBox}>
            <Icon name="ios-unlock-outline" style={styles.settingIcon} />
            <Text style={styles.settingItemText}>日记密码</Text>
            <Icon name="ios-arrow-forward" style={styles.rightItem} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItemBox}>
            <Icon name="ios-alert-outline" style={styles.settingIcon} />
            <Text style={styles.settingItemText}>关于</Text>
            <Icon name="ios-arrow-forward" style={styles.rightItem} />
          </TouchableOpacity>
        </ScrollView>
        </View>
      </BlurView>
      // <View style={[styles.root]}>
      //   <Text style={{color: '#000'}} onPress={this.close}>setting</Text>
      // </View>
    );
  }
}

let fontColor = '#fff'
const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
    // backgroundColor: 'rgba(255,255,255,1)',
  },

  closeBox: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
  },

  close: {
    color: '#4a5973',
    fontSize: 60,
  },

  contentBox: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  headerImageBox: {
    paddingTop: 100,
    // height: 200,
    paddingBottom: 50,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.5)',
    // justifyContent: 'flex-end',
  },

  headerImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: '#fff',
    borderWidth: 5,
  },

  settingContentBox: {
    paddingTop: 10,
  },

  settingItemBox: {
    paddingLeft: 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.4)',
  },

  settingIcon: {
    width: 50,
    height: 50,
    fontSize: 26,
    paddingTop: 10,
    color: fontColor,
    textAlign: 'center',
  },

  settingItemText: {
    fontSize: 15,
    color: fontColor,
    lineHeight: 50,
  },

  rightItem: {
    position: 'absolute',
    right: 15,
    color: fontColor,
    fontSize: 20,
    lineHeight: 50,
  }
});
