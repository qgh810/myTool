import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
} from 'react-native';
import Footer from './components/Footer'

import Calender from './pages/calender/Index.js'
import navStore from './mobx/navStore'
var {height, width} = Dimensions.get('window')

const INITIAL_ROUTE = {
  title: 'Calender',
  navName: 'Calender',
  component: Calender
}

export default class App extends Component {
  renderScene = (route, navigator) => {
    navStore.setNav(route.navName)
    const Comp = route.component
    return (
      <Comp navigator={navigator} route={route} />
    )
  }

  render() {
    return (
      <View style={[styles.root]}>
        <Image
          style={styles.image}
          source={require('./assets/images/background.jpg')}
        >
          <Navigator
            initialRoute={INITIAL_ROUTE}
            renderScene={this.renderScene}
          />
          <Footer />
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
