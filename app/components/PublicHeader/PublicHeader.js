import React from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './PublicHeader_css';
export default class PublicHeader extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>头部</Text>
                </View>
            </View>
        )
    }
}
