import { observable } from 'mobx'

const navStore = observable({
  selectedNav: ''
})

navStore.setNav = function (name) {
  this.selectedNav = name
}
export default navStore
