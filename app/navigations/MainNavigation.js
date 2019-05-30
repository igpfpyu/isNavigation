import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator'
const stackNavigator = new createBottomTabNavigator(BottomTabNavigator,{
    initialRouteName:"Index",
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});
const RootStack=new createStackNavigator({
    HomeTar:{
        screen:stackNavigator,
        navigationOptions:{
            header:null
        },
    },
}, {
    headerMode:null,
    initialRouteName:"HomeTar",
});
export default createAppContainer(RootStack)
