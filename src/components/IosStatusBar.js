import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { observer } from 'mobx-react/native'

import navStore from '../mobx/navStore'

@observer
export default class IosStatusBar extends Component {
  render() {
    return (
      <StatusBar
        animated={true}
        hidden={!navStore.statusBarColor}
        barStyle={navStore.statusBarColor === 'white' ? 'light-content' : 'default'}
      />
    );
  }
}
