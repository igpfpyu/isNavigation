import React from 'react';
import Index from "../pages/Index/Index";
import Movie from "../pages/Movie/Movie";
import Video from "../pages/Video/Video";
import Show from "../pages/Show/Show";
import Me from "../pages/Me/Me";
const navConfig=(title)=>{
    return {
        navigationOptions:{
            header:null,
            tabBarLabel:title
        }
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
