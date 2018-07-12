import React from 'react'
import { StyleSheet, Text, Alert, View, Button, TouchableHighlight } from 'react-native'

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
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
