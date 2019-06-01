import React from 'react';
import {
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native';
const {width, height}=Dimensions.get('window');

export function isNull(str){
    let newPass=(pass instanceof Array) || (pass instanceof Object) ? JSON.stringify(pass) : String(pass);
    switch (newPass){
        case "null":
        case "undefined":
        case "defined":
        case "{}":
        case "[]":
        case "":{
            return true;
        }
        default:
            return false;
    }
}
//px转换为dp
export function pxconvertTodp(px){
    const dpr=PixelRatio.get();
    return (px/dpr).toFixed(2);
}
//dp转换为px
export function dpConvertTopx(dp){
    console.log(PixelRatio.getPixelSizeForLayoutSize(dp))
    return PixelRatio.getPixelSizeForLayoutSize(dp)
}
