import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

export default class GenericButton extends React.Component {
  render () {
    return (
      <TouchableHighlight>
        <View style={this.state.containerLayout || {}}>
          <Text style={this.state.textLayout || {}}>
            {this.state.buttonText}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
};

GenericButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  containerLayout: PropTypes.object,
  textLayout: PropTypes.object,
  onPress: PropTypes.func
}
