import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Calender from './pages/calender/Index.js'

const INITIAL_ROUTE = {
  title: '首页',
  component: Calender
}

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
        <Navigator
          initialRoute={INITIAL_ROUTE}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
