import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { HomePage, Greetings } from './screens'

const RootStack = createStackNavigator({
  Home: HomePage,
  Greetings: Greetings
},
{
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render () {
    return <RootStack />
  }
}
