import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
} from 'react-native'
import { observer } from 'mobx-react/native'

import Week from './Week'
import DayItem from './components/DayItem'
import Triangle from '../../components/Triangle'
import { getMonthDays, getGroupDays, getPrevMonth, getNextMonth } from '../../utils/date'
import calenderStore from './store'

var {height, width} = Dimensions.get('window')

@observer
export default class Day extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollX: width
    }
  }

  isToday = (year, month, day) => {
    if (day.type !== 0) return false
    if (new Date().getMonth() !== month - 1) return false
    if (new Date().getDate() !== day.value - 0) return false
    return true
  }

  onScroll = (event) => {
    let {x} = event.nativeEvent.contentOffset
    if (x === 0 ) {
      console.log('上个月')
      setTimeout(() => {
        calenderStore.onPrevMonth()
        this.setState({scrollX: width})
      }, 0)
    } else if (x === width * 2) {
      console.log('下个月')
      calenderStore.onNextMonth()
    }
  }

  onScrollAnimationEnd = () => {
    console.log('滚动动画结束')
  }

  renderDays = (year, month) => {
    return (
      <View style={styles.dayBox}>
        {
          getGroupDays(year, month).map((group, groupIndex) => {
            return (
              <View style={styles.dayGroup} key={groupIndex + ''}>
                {/* <Text>123</Text> */}
                {
                  group.map((day, dayIndex) => {
                    return (
                      <DayItem
                        key={(groupIndex + '-' + dayIndex)}
                        day={day.value}
                        selected={this.isToday(year, month, day)}
                        disabled={!(day.type === 0)}
                      />
                    )
                  })
                }
              </View>
            )
          })
        }
      </View>
    )
  }

  render() {
    console.log('render')
    return (
      <View style={styles.root}>
        <Week />
        <ScrollView
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentOffset={{x: this.state.scrollX}}
          pagingEnabled={true}
          onScrollAnimationEnd={() => {console.log('滚动结束!!!!!!!!!')}}
          onScroll={this.onScroll}
          >
          {
            this.renderDays(getPrevMonth(calenderStore.year, calenderStore.month))
          }
          {
            this.renderDays(calenderStore.year, calenderStore.month)
          }
          {
            this.renderDays(getNextMonth(calenderStore.year, calenderStore.month))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 10,
  },

  scrollView: {
    flex: 1,
    flexDirection: 'row',
  },

  dayBox: {
    flex: 1,
    width,
    // backgroundColor: 'red',
    height: height - 290,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },

  dayGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  }
});
