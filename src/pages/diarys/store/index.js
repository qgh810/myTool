import { observable, computed } from 'mobx'
import { getPrevMonth, getNextMonth, getMonthDays, getGroupDays } from '../../../utils/date'

const date = new Date()
const thisYear = date.getFullYear()
const thisMonth = date.getMonth() + 1
const thisWeek = date.getDay()
const thisDay = date.getDate()

const DAY_TEMPLATE = {
  date: 1,
  today: false,
  thisMonth: true,
}

const calenderStore = observable({
  year: '2017',
  month: '2',
  day: '10',
  get isThisYear () {
    return new Date().getFullYear() === (this.year - 0)
  },
  get isThisMonth () {
    if (!this.isThisYear) return false
    return new Date().getMonth() === this.month - 1
  },
  get isToday () {
    if (!this.isThisYear) return false
    if (!this.isThisMonth) return false
    return new Date().getDate() === this.day - 0
  },
  get groupDays () {
    return getGroupDays(this.year, this.month)
  }
})

calenderStore.onPrevMonth = function () {
  let { year, month } = getPrevMonth(calenderStore.year, calenderStore.month)
  calenderStore.year = year - 0
  calenderStore.month = month - 0
}
calenderStore.onNextMonth = function () {
  let { year, month } = getNextMonth(calenderStore.year, calenderStore.month)
  calenderStore.year = year - 0
  calenderStore.month = month - 0
}

export default calenderStore
