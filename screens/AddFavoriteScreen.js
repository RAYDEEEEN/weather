import React, { Component } from 'react'
import { View, TextInput, Button , AsyncStorage } from 'react-native'


export default class AddFavoriteScreen extends Component {
  static navigationOptions = (e) => {
    return {
      title: 'Ajout une ville'
    }
  }
  state = { cityName: ''};
  onChange = (value) => {
    this.setState({ cityName: value})
  }

  save = () => {
    AsyncStorage.getItem('cities').then((data) => {
      let tab = [];
      if (data) {
        tab = JSON.parse(data);
      }
      if (!tab.includes(this.state.cityName) || this.state.cityName) {
        tab.push(this.state.cityName);
      }
      AsyncStorage.setItem('cities', JSON.stringify(tab)).then(() => { this.props.navigation.goBack()});
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput onChangeText={this.onChange} style={{ borderColor: 'red'}} />
        <Button onPress={this.save} title="Ajouter" />
      </View>
    )
  }
}
