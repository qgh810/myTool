/**
 * 日期相关工具函数
 */

// 判断是否闰年
export const isLeapYear = function (year) {//判断闰年
  return (0==year%4&&((year%100!=0)||(year%400==0)));
}

// 获取某月最大天数
export const monthmaxday = function (year,month) {//返回某年某月有多少天
  if(month==2){
    var today = new Date();
    if(isLeapYear(year)){
      return 29;
    }else{
      return 28;
    }
  }else if(month==4||month==6||month==9||month==11){
    return 30;
  }else{
    return 31;
  }
}

// 获取上个月年月信息
export const getPrevMonth = function (year, month) {
  if (month > 1) return { year: year, month: month - 1 }
  return { year: year - 1, month: 12 }
}

// 获取下个月年月信息
export const getNextMonth = function (year, month) {
  if (month < 12) return { year: year, month: month - 0 + 1 }
  return { year: year - 0 + 1, month: 1 }
}

export const numberToString = function (number, length) {
  let stringNumber = number + ''
  if (stringNumber.length >= length) return stringNumber
  if (stringNumber.length < length) {
    let d = length = stringNumber.length
    for (let i = 0; i < d; i++) {
      stringNumber = '0' + stringNumber
    }
    return stringNumber
  }
}

// 获取某月所有日期 默认返回42个
export const getMonthDays = function (year, month, allDays = 42) {
  let firstDateWeek = new Date(`${year}/${month}/1`).getDay()
  let { prevYear, prevMonth} = getPrevMonth(year, month)
  let prevMonthDay = monthmaxday(prevYear, prevMonth)
  let result = []
  for (let i = 0; i < firstDateWeek; i++) {
    result.unshift({value: prevMonthDay - i, type: -1})
  }
  let thisMonthDays = monthmaxday(year, month)
  for (let i = 0; i < thisMonthDays; i++) {
    result.push({value: i + 1, type: 0})
  }
  let showNextDays = allDays - result.length
  for (let i = 0; i < showNextDays; i++) {
    result.push({value: i + 1, type: 1})
  }
  return result
}

export const getGroupDays = function (year, month, groupCount = 6) {
  let allDays = getMonthDays(year, month, groupCount * 7)
  let groupDays = []
  for (let i = 0; i < groupCount; i++) {
    groupDays[i] = allDays.splice(0, 7)
  }
  return groupDays
}
