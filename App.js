import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Instascreen from './screens/in';
import Facebookscreen from './screens/fb';


export default class App extends React.Component{
  render(){
    return (
       <AppContainer/>
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  Instagram : {screen:Instascreen},
  Facebook  : {screen:Facebookscreen}
})

const AppContainer = createAppContainer(TabNavigator)