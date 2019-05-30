import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Index from '../pages/Index/Index';
import Movie from '../pages/Movie/Movie';
import Video from '../pages/Video/Video';
import Show from '../pages/Show/Show';
import Me from '../pages/Me/Me';
import {createAppContainer, createBottomTabNavigator, createStackNavigator} from 'react-navigation';
const navConfig=(title)=>{
    return {
        navigationOptions:{
            header:null,
            tabBarLabel:title
        }
    }
}
const bottomTabNavigator={
    "Index":{
        screen:Index,
        ...navConfig('首页')
    },
    "Movie":{
        screen:Movie,
        ...navConfig('电影')
    },
    "Video":{
        screen:Video,
        ...navConfig('视频')
    },
    "Show":{
        screen:Show,
        ...navConfig('演出')
    },
    "Me":{
        screen:Me,
        ...navConfig('我的')
    }
}
const stackNavigator = new createBottomTabNavigator(bottomTabNavigator,{
    initialRouteName:"Index",
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});
const stackNavigatorConfig={
    headerMode:null,
    initialRouteName:"HomeTar",
}
const RootStack=new createStackNavigator({
    HomeTar:{
        screen:stackNavigator,
        navigationOptions:{
            header:null
        },
    },
}, stackNavigatorConfig);
export default createAppContainer(RootStack)
