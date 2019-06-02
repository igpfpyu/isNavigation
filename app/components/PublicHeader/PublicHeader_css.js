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
        backgroundColor:"#f6f6f6",
        paddingTop:20,

    },
    header:{
        height:44,
        width:width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f8f8f8",
        borderBottomWidth:1,
        borderBottomColor:"#e6e6e6",
        borderBottomStyle:"solid",
    },
    title:{
        color:"#333",
    }
}
