/**
 * header模块
 * 作者 邱国辉
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { observer } from 'mobx-react/native'
import headerStore from '../mobx/headerStore'

@observer
export default class header extends Component {
  onLeftPress = () => {
    headerStore.leftClick()
  }

  onRightPress = () => {
    headerStore.rightClick()
  }


  render() {
    var {height, width} = Dimensions.get('window')
    return (
      <View
        style={[styles.headerBox, {width: width, backgroundColor: headerStore.backgroundColor}]}>

        <LeftBtn onPress={this.onLeftPress}/>
        <Title />
        <RightBtn onPress={this.onRightPress}/>

        {/* <StatusBar barStyle="light-content" /> */}
      </View>
    );
  }
}

@observer
class Title extends Component {
  render() {
    return (
      <Text style={[styles.headerTitle, {color: headerStore.titleColor}]}>{headerStore.title}</Text>
    )
  }
}

@observer
class LeftBtn extends Component {
  constructor (props) {
    super(props)
  }

  onPress = () => {
    this.props.onPress && this.props.onPress()
  }

  render() {
    return (
      headerStore.showLeftBtn ?
      <TouchableOpacity
        style={styles.headerBack}
        onPress={this.onPress}>
        <Text
          style={[styles.BackText, {color: headerStore.backTextColor}]}>
          <Icon
            name="angle-left"
            style={[styles.BackText, {fontSize: 19, color: headerStore.backTextColor}]} /> {headerStore.backText}
        </Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.headerBack} />
    )
  }
}

@observer
class RightBtn extends Component {
  constructor (props) {
    super(props)
  }

  onPress = () => {
    this.props.onPress && this.props.onPress()
  }

  render() {
    return (
      headerStore.showRightBtn ?
      <TouchableOpacity style={styles.headerMenu} onPress={this.onPress}>
        <Text style={styles.menuText}>
          <Icon name={headerStore.icon} style={[styles.menuText, {color: headerStore.iconColor}]}/>
        </Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.headerMenu} />
    )
  }
}

const styles = StyleSheet.create({
  headerBox: {
    height: 60,
    paddingTop: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerBack: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  headerMenu: {
    flex: 1,
    paddingRight: 10,
    height: 40,
    overflow: 'hidden',
  },
  BackText: {
    lineHeight: 45,
    textAlign: 'left',
    color: 'blue',
    fontSize: 15,
  },
  menuText: {
    fontSize: 23,
    lineHeight: 40,
    textAlign: 'right',
  },
  headerTitle: {
    flex: 5,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 18,
    overflow: 'hidden',
    fontWeight: 'bold',
    color: '#fff',
  }
})
