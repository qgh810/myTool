import { observable, autorun } from 'mobx'

const configStore = observable({
  style: '',
  headerImage: '',
  password: '',
})
