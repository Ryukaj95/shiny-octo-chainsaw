import React from 'react'
import { StyleSheet, View } from 'react-native'

import { GenericButton } from '../components'

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'HomePage',
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <GenericButton
          onGenericPress={() => navigate('Greetings')}
          text='Navigate to Greetings'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
