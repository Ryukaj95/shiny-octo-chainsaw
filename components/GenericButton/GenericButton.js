import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

export default class GenericButton extends React.Component {
  render () {
    return (
      <TouchableHighlight onPress={() => this.props.onGenericPress()}>
        <View style={this.props.containerLayout || {}}>
          <Text style={this.props.textLayout || {}}>
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
};

GenericButton.propTypes = {
  text: PropTypes.string.isRequired,
  containerLayout: PropTypes.object,
  textLayout: PropTypes.object,
  onGenericPress: PropTypes.func.isRequired
}
