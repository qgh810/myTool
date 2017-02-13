import { observable, autorun } from 'mobx'
import routes from '../routes'

const navStore = observable({
  selectedNav: 'Calender', // 默认首页
  statusBarColor: 'black', // 默认状态栏颜色 可选: white / black
  settingIsOpen: false,
  get route () {
    return routes[this.selectedNav] || null
  }
})

// autorun(() => {
//   console.log('navStore.selectedNav发生变化:' + navStore.selectedNav)
// })

navStore.setNav = function (name) {
  this.selectedNav = name
}

navStore.openSetting = function () {
  this.settingIsOpen = true
}
navStore.closeSetting = function () {
  this.settingIsOpen = false
}

export default navStore
