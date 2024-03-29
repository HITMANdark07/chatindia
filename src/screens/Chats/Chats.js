import React from 'react';
import { View, Text, StyleSheet,Image, FlatList, TouchableOpacity,Dimensions } from 'react-native';
import { contactsPermission } from '../../permissions';
import Icons from 'react-native-vector-icons/MaterialIcons';


const width= Dimensions.get('window').width;
const ChatItems = ({item:{id,name,lastmsg,image}}) => {
    return(
        <TouchableOpacity style={styles.main} activeOpacity={0.5}>
            <Image source={{uri:image ? image : "https://cdn-icons-png.flaticon.com/512/219/219983.png"}} style={styles.img} />
            <View style={styles.midContent}>
                <Text style={{fontWeight:'700', fontSize:16, marginTop:4}}>{name}</Text>
                <Text style={{marginTop:5}}>{lastmsg}</Text>
            </View>
            <View style={styles.end}>
                <Text style={{color:'#25D366'}}>11:40 pm</Text>
                <View style={{flexDirection:'row-reverse'}}>
                    <Text style={styles.badge}>{'0'+id}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const data=[
    {
        id:1,
        image:"https://www.oneindia.com/politicians/image/302x100x402x1/yogi-adityanath-36200.jpg",
        name:"Yogi ji",
        lastmsg:"Yogi ji: Jai Shree Ram"
    },
    {
        id:2,
        image:"https://i.pinimg.com/736x/9c/34/43/9c3443699319d60f00cefeff6674df97.jpg",
        name:"Ankit",
        lastmsg:"Ankit: hey"
    },
    {
        id:3,
        image:"https://img.etimg.com/thumb/msid-53900279,width-1200,height-900,imgsize-185438,overlay-economictimes/photo.jpg",
        name:"Modi ji",
        lastmsg:"Modi ji: sab changa c"
    },
    {
        id:4,
        image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Shri_Amit_Shah_taking_charge_as_the_Union_Minister_for_Home_Affairs%2C_in_New_Delhi_on_June_01%2C_2019.jpg",
        name:"Amit Shah",
        lastmsg:"Amit Shah: uthwa lenge usko"
    },
    {
        id:5,
        image:"https://static.toiimg.com/thumb/msid-69591643,width-1200,height-900,resizemode-4/.jpg",
        name:"Aman",
        lastmsg:"Aman: hey"
    },
    {
        id:6,
        image:"https://i.pinimg.com/736x/2d/76/3f/2d763f275d851ddb99b9aa2c4ba0577a.jpg",
        name:"Shekhar",
        lastmsg:"Shekhar: all right :)"
    },
    {
        id:7,
        image:"https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
        name:"Permnent Roommates",
        lastmsg:"Abhishek: :) :)"
    },
    {
        id:8,
        image:"https://i.pinimg.com/736x/9c/34/43/9c3443699319d60f00cefeff6674df97.jpg",
        name:"Ankit",
        lastmsg:"Ankit: hey"
    },
    {
        id:9,
        image:"",
        name:"Bholu (BTC)",
        lastmsg:"Bholu: all right :)"
    },
    {
        id:10,
        image:"https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg",
        name:"Permnent Roommates",
        lastmsg:"Abhishek: :) :)"
    },
    {
        id:11,
        image:"https://i.pinimg.com/736x/9c/34/43/9c3443699319d60f00cefeff6674df97.jpg",
        name:"Ankit",
        lastmsg:"Ankit: hey"
    },
    {
        id:12,
        image:"",
        name:"Bholu (BTC)",
        lastmsg:"Bholu: all right :)"
    }
]

const Chats  = () => {
    return(
        <>
        <View style={{flex:1,flexDirection:'column',alignItems:'flex-start', justifyContent:'flex-start'}}>
            <FlatList 
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={ChatItems}
                keyExtractor={item => item.id}
            />
        </View>
        <TouchableOpacity style={styles.contacts} activeOpacity={0.6} onPress={contactsPermission}>
            <Icons name="message" size={25} color="#fff" />
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    contacts:{
        position:'absolute',
        bottom:20,
        right:15,
        backgroundColor:'#075E54',
        padding:15,
        borderRadius:100
    },
    main:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:10,
        flex:1,
        width:width
    },
    img:{
        width:65,
        height:65,
        borderRadius:100,
        borderColor:'#fff',
        borderWidth:2
    },
    midContent:{
        flexDirection:'column',
        flex:1,
        paddingLeft:15
    },
    end:{
        display:'flex',
        flexDirection:'column',
        paddingTop:5
    },
    badge:{
        backgroundColor:'#25D366',
        padding:4,
        borderRadius:100,
        maxWidth:32,
        textAlign:'center',
        color:'#fff',
        fontWeight:'600'
    }
})
export default Chats;