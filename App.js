import React from 'react'
import { StyleSheet, Text, Alert, View, Button, TouchableHighlight } from 'react-native'
import { GenericButton } from './components'

export default class App extends React.Component {
  popupAlert (text) {
    Alert.alert(
      `I'm an alert ! :)`,
      `You clicked the ${text} button`,
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Ok'}
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <GenericButton
          onGenericPress={() => this.popupAlert('working')}
          text='Test prova 123'
          containerLayout={componentsStyle.popupButtonContainerStyle}
          textLayout={componentsStyle.popupButtonStyle}
        />
      </View>
    )
  }
}

const componentsStyle = {
  popupButtonContainerStyle: {
    backgroundColor: 'black'
  },
  popupButtonStyle: {
    color: 'white'
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
