import React from 'react';
import { LogBox,View,Text,DeviceEventEmitter } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSelector } from 'react-redux';
import Start from './src/screens/Start/Start';
import Phone from './src/screens/Phone/Phone';
import Verify from './src/screens/Verify/Verify';
import Chats from './src/screens/Chats/Chats';
import Status from './src/screens/Status/Status';
import Calls from './src/screens/Calls/Calls';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Camera from './src/screens/Camera/Camera';


LogBox.ignoreLogs(['react-native-gesture-handler']);
const Stack = createNativeStackNavigator();
const TopTabNavigator = createMaterialTopTabNavigator();

const ChatsIcon = (icon) => {
    return (
        <Icon name={icon} size={20} color="green" />
    )
}

const MainRoutes = ({navigation}) => {

    React.useEffect(() => {
        DeviceEventEmitter.addListener("event.navigate", (route) => navigation.navigate(route));
        return () => {
            DeviceEventEmitter.removeAllListeners("event.navigate");
        }
    },[]);
    return(
        <>
        <View style={{padding:15, display:'flex', flexDirection:'row', justifyContent:'space-between', backgroundColor:'white'}}>
            <Text style={{fontSize:20, fontWeight:'600'}}>WhatsApp</Text>
            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity style={{marginRight:10}}>
                    <Icon name="search" size={30} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icons name="dots-three-vertical" size={20} />
                </TouchableOpacity>
            </View>
        </View>
        <TopTabNavigator.Navigator>
        <TopTabNavigator.Screen name="Chats" component={Chats} options={{tabBarIcon:()  => ChatsIcon('message'),tabBarItemStyle:{display:'flex',flexDirection:'row'}, tabBarIndicatorStyle:{backgroundColor:'#075E54'}}}  />

        <TopTabNavigator.Screen name="Status" component={Status} options={{tabBarIcon: () => ChatsIcon('whatshot'),tabBarItemStyle:{display:'flex',flexDirection:'row'},tabBarIndicatorStyle:{backgroundColor:'#075E54'}}} />

        <TopTabNavigator.Screen name="Calls" component={Calls} options={{tabBarIcon: () => ChatsIcon('call'),tabBarItemStyle:{display:'flex',flexDirection:'row'},tabBarIndicatorStyle:{backgroundColor:'#075E54'}}} />
        </TopTabNavigator.Navigator>
        </>
    )
}


const Routes = () => {

    const currentUser = useSelector(state => state.user.currentUser);

    return(
        <NavigationContainer>
            <Stack.Navigator>
                {
                    !currentUser &&
                    <>
                    <Stack.Screen name="Start" component={Start} options={{headerShown:false}} />
                    <Stack.Screen name="Phone" component={Phone} options={{headerShown:false}} />
                    <Stack.Screen name="Verify" component={Verify} options={{headerShown:false}} />
                    </>
                }
                {
                    currentUser && 
                    <>
                    <Stack.Screen name="Home" component={MainRoutes} options={{headerShown:false}} />
                    <Stack.Screen name="Camera" component={Camera} options={{headerShown:false}} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
