import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import _ from 'lodash'

export default class GenericButton extends React.Component {
  constructor () {
    super()
    this.getStylesheet = this.getStylesheet.bind(this)
  }

  getStylesheet (defaultStyle, userStyle) {
    const style =
      this.props.clearStyle
        ? userStyle
        : {...defaultStyle, ...userStyle}

    if (_.isNil(style)) return {}
    if (_.isInteger(style)) return style
    if (_.isObject(style)) return StyleSheet.create({style}).style
  }

  render () {
    return (
      <TouchableHighlight
        onPress={() => this.props.onGenericPress()}
        underlayColor={this.props.underlayColor || defaultStyle.underlayColor}
        style={
          this.getStylesheet(defaultStyle.container, this.props.containerLayout)
        }
      >
        <View>
          <Text style={this.getStylesheet(
            defaultStyle.text, this.props.textLayout
          )}
          >
            {this.props.text}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
};

const defaultStyle = {
  text: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '100'
  },
  container: {
    padding: 4,
    backgroundColor: 'rgba(149, 149, 148, 0.4)',
    borderRadius: 8
  },
  underlayColor: 'rgba(196, 196, 196, 1.0)'
}

GenericButton.propTypes = {
  text: PropTypes.string.isRequired,
  containerLayout: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  textLayout: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  underlayColor: PropTypes.string,
  onGenericPress: PropTypes.func.isRequired,
  clearStyle: PropTypes.bool
}
