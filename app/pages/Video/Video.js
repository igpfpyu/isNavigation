import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PublicHeader from "../../components/PublicHeader/PublicHeader";
export default class Video extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View>
                <PublicHeader />
                <Text>Video</Text>
            </View>
        )
    }
}
