import {StyleSheet ,View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { FlatList, ScrollView, TextInput } from 'react-native-web'
import {Categories, COLORS } from '../src/components/items'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const Home = () => {

  const [currentSelected,setCurrentSelected]= useState([0])

  const renderCategories=({item,index}) =>{
    return(
      <TouchableOpacity activeOpacity={0.9}>
        <View
        style={{
          width:120,
          height:180,
          justifyContent:'space-evenly',
          alignItems:'center',
          backgroundColor:
          currentSelected== index ? COLORS.lightBlue: COLORS.white,
          borderRadius:20,
          margin:10,
          elevation:5,

          
        }}
        >
          <View style={{width:60, height:60}}>
            <Image source={item.image} style={{
              width:'100%',
              height:'100%',
              resizeMode:'center'
            }}/>
          </View>
          <Text
            style={{
              fontSize:16,
              color:'black',
              fontWeight:'600',
            }}
          >
            {item.name}
          </Text>
          <View
          style={{
            width:30,
             height:30,
             borderRadius:100,
             backgroundColor: currentSelected ==index? COLORS.white: COLORS.red,
             justifyContent:'center',
             alignItems:'center'
          }}
          >
            <FontAwesome name='angle-right' style={{ 
              fontSize:12,
              color: currentSelected==index ? COLORS.black : COLORS.white
            }}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.wrapper} > 
    <ScrollView>
      <View style={{
        flex:1,
        justifyContent:'space-around',
        padding:20,
      }}>
        <TouchableOpacity 
          style={{
            width:40,
            height:40,
          }}
        >
          <Image
            source={require('../src/images/pic.jpg')}
            style={{
              width:'100%',
              height:'100%',
              resizeMode:'contain',
              borderRadius:500,
            }}
          />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.headerTxt}>Food</Text>
          <Text
            style={{
              fontSize:40,
              fontWeight:'600',
              
            }}
          >

          </Text>
        </View>

        <View style={styles.search}> 
            <Ionicons name='search'
            style={{fontSize:20, color:COLORS.black, opacity:0.8}}
            />
            <TextInput
            placeholder="search"
            style={{
              color:COLORS.black,
              fontSize:16,
              paddingVertical:5, 
              borderBottomWidth:1,
              width:'90%',
              marginLeft:10,
              letterSpacing:1,
            }}
            />
        </View>

        <View>
          <Text style={styles.txtCategories}>Categories</Text>

          <FlatList
            horizontal={true}
            data ={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>


      
    </View>
  )
}

const styles= StyleSheet.create({
  wrapper:{
    flex:1,
    width:'100%',
    height:'100%',
    backgroundColor:' butter'
  },
  //Header
  header:{
    padding:'20px'
  },
  headerTxt:{
    fontSize:'16',
    color:COLORS.black,
    fontWeight:'20',
  },

  search:{
    paddingHorizontal:'20',
    paddingVertical:'10',
    flexDirection:'row',
    alignItems:'center',
  },

  txtCategories:{
    paddingTop:'20px',
    paddingHorizontal:'5px',
    fontSize:'20px',
    fontWeight:'700',
    color:'black',
    letterSpacing:1,
  },
 

})

export default Home