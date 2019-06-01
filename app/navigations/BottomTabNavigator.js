import React from 'react';
import Index from "../pages/Index/Index";
import Movie from "../pages/Movie/Movie";
import Video from "../pages/Video/Video";
import Show from "../pages/Show/Show";
import Me from "../pages/Me/Me";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View
} from 'react-native';
const navConfig=(title)=>{
    return {
        navigationOptions:{
            header:null,
            tabBarLabel:title,
            tabBarIcon:({tintColor, focused})=>(
                <Icon name="home" size={30} color={tintColor} />
            ),
            // tabBarOnPress:(scene,jumpToIndex) => {
            //     console.log(scene);
            //     console.log(jumpToIndex)
            //     jumpToIndex(scene.index)
            // }
        },
        tabBarOptions:{
            showIcon:true

        },

    }
}
export default{
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
