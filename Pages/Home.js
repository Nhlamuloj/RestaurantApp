import {StyleSheet ,View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-web'
import { COLORS } from '../src/components/database/Details'

const Home = () => {
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
            Lover's
          </Text>

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
    backgroundColor:'lightblue'
  },
  //Header
  header:{
    padding:'20px'
  },
  headerTxt:{
    fontSize:'16',
    color:COLORS.black,
    fontWeight:'20',
  }
 

})

export default Home