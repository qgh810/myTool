import { observable, computed } from 'mobx'
import { getPrevMonth, getNextMonth, getMonthDays, getGroupDays } from '../../../utils/date'

const date = new Date()
const thisYear = date.getFullYear()
const thisMonth = date.getMonth() + 1
const thisWeek = date.getDay()
const thisDay = date.getDate()

const calenderStore = observable({
  year: thisYear,
  month: thisMonth,
  day: thisDay,
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

// 切换到上个月
calenderStore.onPrevMonth = function (animated) {
  if (animated && this.onAnimatedPrevMonth) return this.onAnimatedPrevMonth()
  let { year, month } = getPrevMonth(calenderStore.year, calenderStore.month)
  calenderStore.year = year - 0
  calenderStore.month = month - 0
}


// 切换到下个月
calenderStore.onNextMonth = function (animated) {
  if (animated && this.onAnimatedNextMonth) return this.onAnimatedNextMonth()
  let { year, month } = getNextMonth(calenderStore.year, calenderStore.month)
  calenderStore.year = year - 0
  calenderStore.month = month - 0
}

// 这两个方法在渲染日历的时候挂上去的 Day.js
calenderStore.onAnimatedPrevMonth = null
calenderStore.onAnimatedNextMonth = null

// 回到今天
calenderStore.today = function () {
  calenderStore.year = thisYear
  calenderStore.month = thisMonth
  calenderStore.day = thisDay
}

export default calenderStore
