import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Phone  = ({navigation}) => {
    const [mobile, setMobile] = React.useState("");
    const handleChange = (val) => {
        if(val.length<11){
            setMobile(val);
        }
    }
    
    return(
        <View style={styles.main}>
            <View style={styles.top}>
                <Text style={styles.h1}>Enter your Phone Number</Text>
                <Text style={styles.h2}>WhatsApp will need to verify your phone number.</Text>
                <Text style={styles.india}>INDIA</Text>
                <View style={styles.mobip}>
                    <View style={{marginRight:20,borderColor:'green', borderBottomWidth:2,alignSelf:'flex-end'}}>
                        <Text style={{fontSize:20, marginBottom:12}}>
                            + 91
                        </Text>
                    </View>
                    <View style={{borderColor:'green', borderBottomWidth:2}}>
                    <TextInput keyboardType='number-pad' value={mobile} onChangeText={handleChange} placeholder='Phone Number' style={{alignSelf:'flex-end',fontSize:20}} autoFocus  />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.next} onPress={() => {
                navigation.navigate('Verify',{mobile:mobile});
            }}>
                <Text style={styles.nexttext}>NEXT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        justifyContent:'space-between',
        margin:40
    },
    india:{
        fontSize:16,
        fontWeight:'800',
        textAlign:'center',
        margin:10
    },
    mobip:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center'
    },
    h2:{
        fontSize:14,
        color:'#000',
        textAlign:'center',
        fontWeight:'600',
    },
    h1:{
        fontSize:18,
        color:'#075E54',
        fontWeight:'600',
        textAlign:'center',
        margin:20,
        marginTop:-5
    },
    top:{
        display:'flex',
        flexDirection:'column',
        alignSelf:'center'
    },
    next:{
        backgroundColor:'#075E54',
        alignSelf:'center',
        borderRadius:5,
        elevation:5,
        padding:10,
        paddingLeft:20,
        paddingRight:20
    },
    nexttext:{
        color:'white'
    }
})
export default Phone;