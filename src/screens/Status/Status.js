import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Dimensions,Image, DeviceEventEmitter } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const width= Dimensions.get('window').width;
const StatusItems = () => {
    return(
        <TouchableOpacity style={styles.main} activeOpacity={0.5}>
            <Image source={{uri:"https://i.pinimg.com/736x/2d/76/3f/2d763f275d851ddb99b9aa2c4ba0577a.jpg"}} style={styles.img} />
            <View style={styles.add}>
                <Icons name="add-circle" color="#075E54" size={20} />
            </View>
            <View style={styles.midContent}>
                <Text style={{fontWeight:'700', fontSize:16, marginTop:6}}>My Status</Text>
                <Text style={{marginTop:5}}>Tap to add Status Update</Text>
            </View>
        </TouchableOpacity>
    )
}

const Status  = () => {
    
    const goToCameraScreen = () => {
        DeviceEventEmitter.emit("event.navigate", 'Camera');
    }
    return(
        <>
        <View style={{flex:1,flexDirection:'column', justifyContent:'flex-start'}}>
            <View style={styles.cont}>
                <StatusItems />
                <Text style={styles.updates}>Recent Updates</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.camera} activeOpacity={0.5} onPress={goToCameraScreen}>
            <Icons name="camera-alt" size={25} color="#fff" />
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    camera:{
        position:'absolute',
        bottom:20,
        right:15,
        backgroundColor:'#075E54',
        padding:15,
        borderRadius:100
    },
    add:{
        position:'absolute',
        left:60,
        top:50,
    },
    updates:{
        width:'100%',
        backgroundColor:'#075E54',
        color:'white',
        fontWeight:'600',
        padding:5,
        elevation:5,
        borderRadius:5
    },
    cont:{
        display:'flex',
        flexDirection:'column',
        width:width,
        justifyContent:'flex-start',
        padding:5
    },
    main:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:10,
        width:width
    },
    img:{
        width:65,
        height:65,
        borderRadius:100,
        borderColor:'#fff',
        borderWidth:5
    },
    midContent:{
        flexDirection:'column',
        flex:1,
        paddingLeft:15
    }
})
export default Status;