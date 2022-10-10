import 'react-native-gesture-handler'
import React from 'react'
import  {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from  'react-native-vector-icons/MaterialIcons'
import Color from '../details/color'
import { View } from 'react-native'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'


const Tab = createBottomTabNavigator();

const BottomNavigator = () =>{
    return(
        <Tab.Navigator tabBarOptions={{
            style:{
                height:55,
                borderTopWidth:0,
                elevation:0,
            },
            showLabel:false,
            activeTintColor: Color.grey
        }}>
            <Tab.Screen name="Home" component={Home}
            options={{
                tabBarIcon:({color})=>(
                <Icon name="home-filled" color={color}s size={28}/>)
            }}
            />

            <Tab.Screen name="LocalMall" component={Home}
            options={{
                tabBarIcon:({color})=>(
                <Icon name="local-Mall" color={color}s size={28}/>)
            }}
            />

             <Tab.Screen name="Search" 
                component={Home}
                options={{
                tabBarIcon:({color})=>(
                    <View>
                        style={{
                             height: 60,
                             width: 60,
                             justifyContent: 'center',
                             alignItems: 'center',
                             backgroundColor: COLORS.white,
                             borderColor: COLORS.primary,
                             borderWidth: 2,
                             borderRadius: 30,
                             top: -25,
                             elevation: 5,
                        }}

                        <Icon name="home-filled" color={color}s size={28}/>
                    </View>
                ),               
                }}
            />
            <Tab.Screen
            name='favorite'
            component={Home}
            options={{
                tabBarIcon:({color})=>(
                    <Icon name="favorite" color={color} size={28}/>
                ),
            }}
            />

            <Tab.Screen
            name='favorite'
            component={Cart}
            options={{
                tabBarIcon:({color})=>(
                    <Icon name="shopping-cart" color={color} size={28}/>
                ),
            }}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigator;