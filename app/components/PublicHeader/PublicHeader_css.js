import {
    Dimensions,
    Platform,

} from 'react-native';
const {width, height}=Dimensions.get('window');
const iHeight=Platform.OS==="ios"?64:44;
export default {
    container:{
        width,
        height:iHeight,
        backgroundColor:"red"
    },
    header:{
        paddingTop:20,
        height:44,
    }
}
