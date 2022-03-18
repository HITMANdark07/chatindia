import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import wt from '../../assets/lottie/whatsapp.json';
const Start  = ({navigation}) => {

    const jumpToPhone = () => {
        navigation.navigate('Phone');
    }
    return(
        <View style={styles.main}>
            <View>
                <Text style={styles.welcome}>Welcome to WhatsApp</Text>
            </View>
            <LottieView
                source={wt}
                autoPlay
                style={styles.wt}
                loop={false}
            />
            <View style={styles.tnc}>
                <Text style={styles.policy}>Read our Privacy Policy. Tap "Agree and Continue" to accept the Terms of Services.</Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={jumpToPhone}>
                    <Text style={styles.butext}>AGREE AND CONTINUE</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:60,
        marginBottom:60
    },
    welcome:{
        textAlign:'center',
        fontSize:28,
        color:'#075E54',
        fontWeight:'600'
    },
    tnc:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    policy:{
        textAlign:'center',
        margin:15,
        fontSize:12,
        fontWeight:'500'
    },
    button:{
        alignSelf:'center',
        backgroundColor:'#075E54',
        padding:10,
        paddingLeft:30,
        paddingRight:30,
        borderRadius:5,
        elevation:5
    },
    butext:{
        fontWeight:'500',
        color:'white'
    },
    wt:{
        margin:40
    }
})

export default Start;