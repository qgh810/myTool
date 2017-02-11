import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
} from 'react-native'
import { observer } from 'mobx-react/native'

import Week from './Week'
import DayItem from './components/DayItem'
import Triangle from '../../components/Triangle'
import { getMonthDays } from '../../utils/date'
import calenderStore from './store'

var {height, width} = Dimensions.get('window')

@observer
export default class Day extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <View style={styles.root}>
        <Week />
        <View style={styles.dayBox}>
          {
            calenderStore.groupDays.map((group, groupIndex) => {
              return (
                <View style={styles.dayGroup} key={groupIndex + ''}>
                  {/* <Text>123</Text> */}
                  {
                    group.map((day, dayIndex) => {
                      return (
                        <DayItem
                          key={(groupIndex + '-' + dayIndex)}
                          day={day.value}
                          selected={day.type === 0 && calenderStore.isThisMonth && day.value === new Date().getDate()}
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

  dayBox: {
    flex: 1,
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
