import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { Style } from '../assets/styles/style';
import WeatherService from '../services/WeatherService';
import Loading from '../components/Loading';
export default class HomeScreen extends Component {

  state = { data: null };

  serv = new WeatherService();

  componentDidMount() {
    this.state.data = this.serv.getWeatherByCity('dormelles').then(res => {
      // this.setState({data: res.data});
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <View style={Style.container}>
        {this.state.data ? (
          <>
            <View style={Style.container}>
              <Text>{this.state.data.name}</Text>
            </View>
            <View style={Style.container, Style[this.state.data.weather[0].main]}>
              <Image style={{ width: 80, height: 80}} source={{uri: `http://openweathermap.org/img/wn/${this.state.data.weather[0].icon}@2x.png`}} />
              <Text>{this.state.data.main.temp}</Text>
            </View>
            <View style={Style.container}>
              <Sunrise time={this.state.data.sys.sunrise}></Sunrise>
            </View>
          </>
        ): (<Loading displayColor="teal">
            <Text>
            <Image style={{ width: 80, height: 80}} source={{uri: `http://openweathermap.org/img/wn/10@2x.png`}} />
            </Text>
          </Loading>)}
      </View>
    )
  }
}


const Sunrise = (props) => {
  const dt = new Date(props.time * 1000);
  const result = `Levé ${dt.getHours()}:${dt.getMinutes()}`
  return (<Text>{result}</Text>)
}