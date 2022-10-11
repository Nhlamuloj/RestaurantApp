import {StyleSheet ,View,SafeAreaView, Text, Image,TextInput, StatusBar, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React, {useState} from 'react'
import Color from '../details/color'
import Icon from 'react-native-vector-icons/MaterialIcons'
import categories from '../details/Categories'
import food from '../details/food'


const {width} =Dimensions.get('screen');
const cardWidth =width/ 2-20;

const Home = () => {
  const[selectedCategory,setSelectedCategory]=useState(0);

  const ListCategories=() =>{
    return(
      <ScrollView showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoriesListContainer} style={{backgroundColor:'red'}}
      >
      {categories.map((category, index)=>(
        <TouchableOpacity 
          key={index} 
          activeOpacity={0.8}
          onPress={() => setSelectedCategory(index)}
        >
          <View style={{
            backgroundColor:selectedCategory== index
            ?Color.primary 
            :Color.secondary,
            ...styles.categoryBtn
          }}>
            <View style={styles.categoryBtnImg}>
              <Image source={category.image}style={{width:25,height:25, resizeMode:'cover'}}  />
            </View>
            <Text 
            style={{fontSize:15, 
            fontWeight:'bold', 
            marginLeft:10,
            color:selectedCategory == index
            ? Color.white
            : Color.primary,
          }}
            
            >{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
      </ScrollView>
    )
  };
  const  Card=({food}) =>{
    return(
      <TouchableHighlight
        underlayColor={Color.white}
       activeOpacity={0.9}
      >
        <View style={styles.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.image} style={{height: 120, width: 120, borderRadius:50}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color:'grey', marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View style={{marginTop:10,marginHorizontal:20,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:18, fontWeight:'bold' }}>R{food.price} </Text>
        </View>
        <View style={styles.addToCard}></View>
        </View> 
      </TouchableHighlight>
    )
  }


  return(
    <SafeAreaView
    style={styles.Wrapper}
    >
      <View style={styles.header}>
        <View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:28, fontWeight:'bold',marginLeft:10}}>nhlamulo</Text>
        </View>
        <Text style={{marginTop:5, fontSize:22,color:Color.grey}}>What would you like to order</Text>
        </View>
        <Image source={require('../Images/logo.jpg')} style={{height:70,width:70,borderRadius:50}}
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
      <View>
      <ListCategories/>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
      numColumns={2}
      data={food}
      renderItem={({item}) => <Card food={item}/>}
      />
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  Wrapper:{
    flax:1,
    backgroundColor:'white',
    height:'100%',
   
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

  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',

  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor:"white",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: 200,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor:'lightblue',
  },

  addToCard:{
    height:30,
    width:30,
    borderRadius:20,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    
  },




})

export default Home;