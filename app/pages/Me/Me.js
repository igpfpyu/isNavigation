import React from 'react';
import {
    View,
    Text
} from 'react-native';
import PublicHeader from "../../components/PublicHeader/PublicHeader";
export default class Me extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View>
                <PublicHeader title="我的" />
                <Text>Me</Text>
            </View>
        )
    }
}
