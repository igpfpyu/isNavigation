import React from 'react';
import {
    View,
    Text,
    StatusBar
} from 'react-native';
import styles from './PublicHeader_css';
export default class PublicHeader extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        let {title}=this.props;
        console.log(title);
        return (
            <View style={styles.container}>
                <StatusBar />
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        )
    }
}
