import React, { Component } from 'react';
import { View, Text, AsyncStorage, FlatList } from 'react-native';
import { Style } from '../assets/styles/style';
import Icon from 'react-native-vector-icons/Ionicons';
import ListItem from '../components/ListItem';

export default class FavorisScreen extends Component {

  eventListener = null;
  state = { cities: null };

  static navigationOptions = (e) => {
    return {
      title: 'Favoris',
      headerRight: (
        <Icon size={25} name={'ios-add'}
          onPress={() => {
            e.navigation.push('AddFavorite');
          }} />
      )
    };
  };

  componentDidMount() {
    this.eventListener = this.props.navigation.addListener('willFocus', () => {
      this.getCities();
    });
  }

  deleteCity = async (city) => {
    if (city) {
      const data = JSON.parse(await AsyncStorage.getItem('cities'));
      const index = data.indexOf(city);
      data.splice(index, 1);
      await AsyncStorage.setItem('cities', JSON.stringify(data));
      this.setState({ cities: data})
    }
  } 

  getCities = () => {
    AsyncStorage.getItem('cities').then((cities) => {
      console.log(cities);
      const c = (cities) ? JSON.parse(cities) : [];
      this.setState({ cities: c});
    });
  }

  componentWillUnmount() {
    this.eventListener.remove();
  }
  render() {
    return (
      <View style={{ flex: 1}}>
        {(
          <>
            <FlatList
              data={this.state.cities}
              keyExtractor={item => item}
              renderItem={({ item }) => <ListItem name={item} callback={this.deleteCity} />}
            />
          </>
        )}
      </View>
    )
  }
}
