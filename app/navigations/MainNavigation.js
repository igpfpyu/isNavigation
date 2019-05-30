import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PublicHeader from '../components/PublicHeader/PublicHeader'
class HomeScreen extends React.Component{
    render(){
        return (
            <View>
                <PublicHeader />
                <Text>Home</Text>
            </View>
        )
    }
}
class AboutScreen extends React.Component{
    render(){
        return (
            <View>
                <Text>AboutScreen</Text>
            </View>
        )
    }
}
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
    Home:{
        screen:HomeScreen,
        ...navConfig('首页')
    },
    About:{
        screen:AboutScreen,
        ...navConfig('关于我们')
    }
}
const stackNavigator = new createBottomTabNavigator(bottomTabNavigator,{
    initialRouteName:"Home",
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
    Abouts:{
        screen:AboutScreen,
        navigationOptions:{
            header:null
        }
    }
}, stackNavigatorConfig);
export default createAppContainer(RootStack)
