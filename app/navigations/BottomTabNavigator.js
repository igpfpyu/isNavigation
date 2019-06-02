import React from 'react';
import Index from "../pages/Index/Index";
import Movie from "../pages/Movie/Movie";
import Video from "../pages/Video/Video";
import Show from "../pages/Show/Show";
import Me from "../pages/Me/Me";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
    View
} from 'react-native';
const navConfig=(title, img)=>{
    return {
        navigationOptions:{
            header:null,
            tabBarLabel:title,
            tabBarIcon:({tintColor, focused})=>(
                <Icon name={img} size={20} color={tintColor} />
            ),
            // tabBarOnPress:(scene,jumpToIndex) => {
            //     console.log(scene);
            //     console.log(jumpToIndex)
            //     jumpToIndex(scene.index)
            // }
        }
    }
}
export default{
    "Index":{
        screen:Index,
        ...navConfig('首页', "home")
    },
    "Movie":{
        screen:Movie,
        ...navConfig('电影', "film")
    },
    "Video":{
        screen:Video,
        ...navConfig('视频', 'camrecorder')
    },
    "Show":{
        screen:Show,
        ...navConfig('演出', 'control-play')
    },
    "Me":{
        screen:Me,
        ...navConfig('我的', "user")
    }
}
