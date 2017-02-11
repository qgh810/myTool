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
  constructor (props) {
    super(props)
  }

  renderScene = (route, navigator) => {
    let Comp = route.component
    if (navStore.selectedNav !== route.navName) {
      Comp = navStore.route.component
    }
    return (
      <Comp navigator={navigator} route={route} />
    )
  }

  render() {
    return (
      <Navigator
        initialRoute={navStore.route}
        renderScene={this.renderScene}
      />
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
