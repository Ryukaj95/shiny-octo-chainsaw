import React from 'react'
import { StyleSheet, Alert, View } from 'react-native'

import { GenericButton } from '../components'

export default class Greetings extends React.Component {
  static navigationOptions = {
    title: 'Greetings',
  }

  popupAlert () {
    Alert.alert(
      `Greetings`,
      `Thank you, the button works :)`,
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
          onGenericPress={() => this.popupAlert()}
          text={`I wanna greet you`}
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
