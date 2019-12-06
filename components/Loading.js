import React, { Component } from 'react'
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native-paper';
import { Style } from '../assets/styles/style';

export default class Loading extends Component {

  static propTypes = {
    displayColor: PropTypes.string.isRequired
  }
  state = {};
  render() {
    return (
      <View style={Style.container}>
        <ActivityIndicator size="large" color={this.props.displayColor} />
        {/* <Text style={{color: this.props.displayColor}}>Chargement...</Text> */}
        {this.props.children}
      </View>
    )
  }
}
