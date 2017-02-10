/*
* 安卓和ios的公共入口文件
*/

import { AppRegistry } from 'react-native'
import App from './App'

// 生产环境下console会极大消耗性能 所以加了这个让生产环境没有这几个函数 优化应用性能
if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {}
  }
}

AppRegistry.registerComponent('myTool', () => App);
