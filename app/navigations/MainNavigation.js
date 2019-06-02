import React from 'react';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator'
const stackNavigator = new createBottomTabNavigator(BottomTabNavigator,{
    initialRouteName:"Index",
    tabBarOptions: {
        activeTintColor: '#34c099',
        inactiveTintColor: '#fff',
        inactiveBackgroundColor:"#232631",
        activeBackgroundColor:"#232631",
        style:{
        },
        tabStyle:{
            paddingTop:6,
            paddingBottom:3,
            border:0
        },
        iconStyle:{
            paddingBottom:0,
        },

    },
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
