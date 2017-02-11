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
import Page from './pages/Index'
var {height, width} = Dimensions.get('window')

export default class App extends Component {
  renderScene = (route, navigator) => {
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
          <Page/>
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
