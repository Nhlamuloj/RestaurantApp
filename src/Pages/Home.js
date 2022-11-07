import React,{useState} from 'react';
import {StyleSheet ,View,SafeAreaView, Text, Image,TextInput, StatusBar, ScrollView, TouchableOpacity,FlatList, Dimensions} from 'react-native'
import food from '../details/food'
import Pic from "@fortawesome/free-regular-svg-icons"

const width = Dimensions.get('screen') .width/2-30
const Home = ({navigation}) => {
  const categories=['Seafood','Salad', 'Drinks'];

  const [currentSelectedIndex, setCurrentSelectedIndex]= useState(0)
  const CategoryList=()=>{
    return(
      <View style={styles.categoryContainer}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} onPress={()=>setCurrentSelectedIndex(index)}>
            <Text style={[styles.categoryText , currentSelectedIndex== index && styles.categoryTextSelected]}>{item}</Text>
          </TouchableOpacity>
          
        ))}
      </View>
    )
  }
  const Card= ({food})=>{
    return(
      <View style={styles.card}>
        <View style={{height:'70%', width:'70', alignItems:'center'}}>
          <Image style={{flex:1,resizeMode:'center'}} source={food.image} />
        </View>

        <View>
          <Text>{food.name}</Text>
        </View>

      </View>
    )
  }
  return(
    <SafeAreaView style={{ flax:1,
      height:'100%',
      paddingHorizontal:30,
      backgroundColor:'lightblue'}}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25,fontWeight:'bold'}}>Welcome to </Text>
          <Text style={{fontSize:30,fontWeight:'bold',color:'blue'}}>Restaurant</Text>
        </View>
      </View>
      <View style={{marginTop:30,flexDirection:'row' }}>
        <View style={styles.search}>
          <TextInput placeholder='search' style={styles.input}/>
        </View>
      </View>
      <CategoryList/>
      <FlatList numColumns={2}
      columnWrapperStyle={{justifyContent:'space-between'}}
      contentContainerStyle={{
        marginTop:10,
        paddingBottom:50
      }}
      showsVerticalScrollIndicator={false}
       data={food}
        renderItem={({item})=><Card food={item }/>}
        />
    </SafeAreaView>
  )
}
 const styles=StyleSheet.create({
 
  header:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  search:{
    flex:1,
    height:20,
    backgroundColor:'lightgrey',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center'
  },

  input:{
    fontSize:18,
    fontWeight:'bold',
    flex:1,
     
  },

  categoryContainer:{
    flexDirection:'row',
    marginTop:30,
    marginBottom:20,
    justifyContent:'space-between'
    
  },

  categoryText:{ 
    fontSize:16,
    color:'grey',
    fontWeight:'bold'
  },

  categoryTextSelected:{
    color:'white',
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:'white'
  },

  card:{
    height:255,
    backgroundColor:'white',
    width,
    marginHorizontal:2,
    borderRadius:10,
    marginBottom:20,
    padding:15,
  },


  
 })

export default Home;