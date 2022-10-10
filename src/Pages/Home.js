import {StyleSheet ,View,SafeAreaView, Text, Image,TextInput, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Color from '../details/color'
import Icon from 'react-native-vector-icons/MaterialIcons'
import categories from '../details/Categories'




const Home = () => {
  const[selectedCategory,setSelectedCategory]=useState(0);

  const ListCategories=() =>{
    return(
      <ScrollView showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.CategoriesListContainer}
      >
        {categories.map((category,index)=>(
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View Style={{
              backgroundColor:selectedCategory== index? Color.primary
              :Color.secondary,
              ...styles.categoryBtn}}></View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    )
  };
  return(
    <SafeAreaView
    style={styles.Wrapper}
    >
      <View style={styles.header}>
        <View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:28}}>hellow</Text>
          <Text style={{fontSize:28, fontWeight:'bold',marginLeft:10}}>nhlamulo</Text>
        </View>
        <Text style={{marginTop:5, fontSize:22,color:Color.grey}}>What do you what today</Text>
        </View>
        <Image source={require('../Images/profile.jpg')} style={{height:50,width:50,borderRadius:50}}
         />
      </View>
      <View
      style={{
        margin:40,
        flexDirection:'row',
        paddingHorizontal:20,
      }}>
        <View style={styles.Input}>
          <Icon name="search" size={28}/>
          <TextInput style={{flex:1, fontSize:18}} placeholder="search Food for Food" />
        </View>
      </View>
      <ListCategories/>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  Wrapper:{
    flax:1,
    backgroundColor:'white',
  },
  header:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:20,
  },

  Input:{
    flex:1,
    height:50,
    borderRadius:10,
    flexDirection:'row',
    backgroundColor:'silver',
    alignItems:'center',
    paddingHorizontal:20
  },

  CategoriesListContainer:{
    paddingVertical:30,
    alignItems:'center',
    paddingHorizontal:20,

  },

  categoryBtn:{
  height:45,
  width:120,
  marginRight:7,
  borderRadius:30,
  alignItems:'center',
  paddingHorizontal:5,
  flexDirection:'row',
  },

})

export default Home;