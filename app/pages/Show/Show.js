import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PublicHeader from "../../components/PublicHeader/PublicHeader";
export default class Show extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View>
                <PublicHeader title="演出" />
                <Text>Show</Text>
            </View>
        )
    }
}
