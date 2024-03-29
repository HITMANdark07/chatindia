import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Calls  = () => {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>CALLS</Text>
            <TouchableOpacity style={styles.calls} activeOpacity={0.5}>
                <Icons name="add-call" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    calls:{
        position:'absolute',
        bottom:20,
        right:15,
        backgroundColor:'#075E54',
        padding:15,
        borderRadius:100
    }
})
export default Calls;