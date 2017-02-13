import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  StatusBar,
} from 'react-native';
import {observer} from 'mobx-react/native'
import Drawer from 'react-native-drawer'

import IosStatusBar from './components/IosStatusBar'
import Footer from './components/Footer'
import Page from './pages/Index'
import Setting from './pages/Setting'
import navStore from './mobx/navStore'
var {height, width} = Dimensions.get('window')

@observer
export default class App extends Component {

  render() {
    return (
      <View style={[styles.root]}>
        <IosStatusBar/>
        <Image
          style={styles.image}
          source={require('./assets/images/background-base.png')}
        >
          <Drawer
            type="overlay" // displace overlay static
            tapToClose={true} // 点击边边是否关闭
            open={navStore.settingIsOpen}
            openDrawerOffset={0.2}
            onClose={() => {console.log('关闭了');navStore.closeSetting()}}
            ref={(ref) => this._drawer = ref}
            content={<Setting/>}
            >
            <Page />
            <Footer />
          </Drawer>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    width: width,
    height: height,
  },

  image: {
    width: width,
    height: height,
  },
});
