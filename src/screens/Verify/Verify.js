import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import { setCurrentUser } from '../../redux/user/user.action';

const Verify  = ({route,navigation}) => {
    const mob = route.params.mobile;
    const [code, setCode] = React.useState("");
    const [confirm, setConfirm] = React.useState(null);
    const [signedin, setSignedin] = React.useState(null);
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const handleChange = (val) => {
        if(val.length<7){
            setCode(val);
        }
    }
    const verify = async() => {
        if(!confirm) return;
        try{
            const user = await confirm.confirm(code);
            dispatch(setCurrentUser(user));
        }catch(err){
            ToastAndroid.showWithGravity("Something Went Wrong",ToastAndroid.CENTER,ToastAndroid.LONG);
        }
    }
    const signInWithPhoneNumber = async (phoneNumber) => {
        try{
            const confirmation = await auth().signInWithPhoneNumber('+91 '+phoneNumber);
            setConfirm(confirmation);
        }catch(err){
            ToastAndroid.showWithGravity("Something Went Wrong",ToastAndroid.CENTER,ToastAndroid.LONG);
        }
    }
    React.useEffect(() => {
        signInWithPhoneNumber(mob);
    },[mob]);
    console.log(currentUser);
    return(
        <View style={styles.main}>
            <View style={styles.top}>
                <Text style={styles.h1}>Verifying your Number</Text>
                <Text style={styles.h2}>We have sent an SMS with a code to +91 {mob}. <Text style={{color:'#128C7E'}} onPress={() => {
                    navigation.goBack();
                }}>Wrong Number?</Text></Text>
                <View style={styles.mobip}>
                    <TextInput keyboardType='number-pad' value={code} onChangeText={handleChange} placeholder="--- ---" style={{fontSize:30,fontWeight:'800',width:250, textAlign:'center',letterSpacing:5}} autoFocus  />
                </View>
                <Text style={{alignSelf:'center', marginTop:10, marginBottom:20}}>Enter 6-digit Code</Text>
                <View>
                    <TouchableOpacity style={{display:'flex', flexDirection:'row', justifyContent:'flex-start'}} activeOpacity={0.5}
                    
                    >
                        <Icon name="message" style={{marginRight:20}} size={20} color="#128C7E" />
                        <Text style={{color:'black', fontWeight:'600'}}>Resend SMS</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {code.length===6 && 
            <TouchableOpacity style={styles.next} onPress={verify}>
            <Text style={styles.nexttext}>VERIFY</Text>
            </TouchableOpacity>}
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        justifyContent:'space-between',
        margin:40,
        marginLeft:10,
        marginRight:10
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
        borderColor:'green', 
        borderBottomWidth:2,
        width:250
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
        margin:10,
        marginBottom:20,
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
export default Verify;