import { observable } from 'mobx'
import routes from '../routes'

const navStore = observable({
  selectedNav: 'Diarys', // 默认首页
  get route () {
    return routes[this.selectedNav]
  }
})

navStore.setNav = function (name) {
  this.selectedNav = name
}
export default navStore
