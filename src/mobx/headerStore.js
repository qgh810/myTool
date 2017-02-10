import { observable, action } from 'mobx'

const headerStore = observable(
  {
    show: true,
    title: '',
    showLeftBtn: false,
    showRightBtn: false,
    backgroundColor: '#333238',
    backText: '',
    titleColor: '#fff',
    backTextColor: '#fff',
    icon: 'navicon',
    iconColor: '#fff'
  }
)

headerStore.set = function (key, value) {
  setTimeout(() => {
    this[key] = value
  }, 0)
}

headerStore.leftClick = function () {}
headerStore.rightClick = function () {}


export default headerStore
