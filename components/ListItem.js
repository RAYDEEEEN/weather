import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Style } from '../assets/styles/style';
import WeatherService from '../services/WeatherService';
import Swipeout from 'react-native-swipeout';

export default class ListItem extends Component {
  serv = new WeatherService();

  static propTypes = {
    name: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
  }

  state = { cityWeather: null };

  componentDidMount() {
    this.serv.getWeatherByCity(this.props.name).then((success) => {
      console.log('result', success.data);
      this.setState({ cityWeather: success.data });
    });
  }

  render() {
    const swipeSettings = {
      autoClose: true,
      backgroundColor: 'none',
      right: [
        {
          onPress: () => {
            this.props.callback(this.props.name);
          },
          text: 'Delete',
          type: 'delete'
        }
      ]
    };

    return (
      <Swipeout {...swipeSettings}>
        <View style={Style.items}>
          <Text>{this.props.name}</Text>
          { (this.state.cityWeather) ? (
            <Image style={{ width: 40, height: 40}} source={{uri: `http://openweathermap.org/img/wn/${this.state.cityWeather.weather[0].icon}@2x.png`}} />
          ) : (<></>) }
        </View>
      </Swipeout>
    )
  }
}
