import React from 'react';
import {
    Dimensions,
    Platform
} from 'react-native';
const {width, height}=Dimensions.get('window');
export const isNull=(str)=>{
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
