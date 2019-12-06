import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Style } from '../assets/styles/style';
export default class SettingsScreen extends Component {
  render() {
    return (
      <View style={Style.container}>
        <Text>Settings</Text>
      </View>
    )
  }
}
