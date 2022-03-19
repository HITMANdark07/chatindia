import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { requestCameraPermission } from '../../permissions';

const CameraScreen = () =>{
    const init = async() => {
        requestCameraPermission().then(() => {
            console.log("GRANTED")
        }).catch((err) => {
            console.log(err);
        })
    }
    // const devices = useCameraDevices()
    // const device = devices.back
    React.useEffect(() => {
        init();
    },[])
    return(
        <View style={{flex:1}}>
            {/* <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            /> */}
            <Text>CAMERA</Text>
        </View>
    )
}

export default CameraScreen;