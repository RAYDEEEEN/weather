import React from 'react';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import FavorisScreen from '../screens/FavorisScreen';
import { createStackNavigator } from 'react-navigation-stack';
import AddFavoriteScreen from '../screens/AddFavoriteScreen';

const favoritesNabigator = createStackNavigator({
  Favorites: { screen: FavorisScreen },
  AddFavorite: { screen: AddFavoriteScreen }
}, {
  initialRouteName: 'Favorites',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});

const tabsNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-home'} />
        ),
        barStyle: { backgroundColor: 'black' }
      }
    },
    Favorites: {
      screen: favoritesNabigator,
      navigationOptions: {
        tabBarLabel: 'Favoris',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-star'} />
        ),
        barStyle: { backgroundColor: 'black' }
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Paramètres',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-settings'} />
        ),
        barStyle: { backgroundColor: 'teal' }
      },
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(tabsNavigator);