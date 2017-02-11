import { observable, autorun } from 'mobx'
import routes from '../routes'

const navStore = observable({
  selectedNav: 'Diarys', // 默认首页
  statusBarColor: 'black', // 默认状态栏颜色 可选: white / black
  get route () {
    return routes[this.selectedNav]
  }
})

// autorun(() => {
//   console.log('navStore.selectedNav发生变化:' + navStore.selectedNav)
// })

navStore.setNav = function (name) {
  this.selectedNav = name
}
export default navStore
