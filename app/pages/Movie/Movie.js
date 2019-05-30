import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PublicHeader from "../../components/PublicHeader/PublicHeader";
export default class Movie extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View>
                <PublicHeader />
                <Text>Movie</Text>
            </View>
        )
    }
}
