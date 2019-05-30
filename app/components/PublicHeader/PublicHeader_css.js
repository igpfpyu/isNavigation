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
        backgroundColor:"#fff",
        paddingTop:20,

    },
    header:{
        height:44,
        width:width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"blue"
    },
    title:{
        color:"#fff",
    }
}
