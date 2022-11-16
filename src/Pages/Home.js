import React,{useState} from 'react';
import {StyleSheet ,View,SafeAreaView, Text, Image,TextInput, StatusBar, ScrollView, TouchableOpacity,FlatList, Dimensions} from 'react-native'
import PRODUCTS from '../details/food';
import { CartIcon } from '../components/CartIcon';


const width = Dimensions.get('screen') .width/2-30
const Home = ({navigation}) => {
  

  const [currentSelectedIndex, setCurrentSelectedIndex]= useState([0])
  
  const CategoryList=()=>{
    return(
      <View style={styles.categoryContainer}>
       
      </View>
    )
  }
  const Card= ({PRODUCTS})=>{
    return(
      <TouchableOpacity onPress={()=> navigation.navigate("Information",PRODUCTS)}>
        <View style={styles.card}>
          <View style={{height:'70%', width:'70%', alignItems:'center'}}>
            <Image style={{flex:1,resizeMode:'center',height:'100%',width:'100%'}} source={PRODUCTS. image} />
          </View>

          <View>
                <Text style={{fontWeight:'bold', fontSize:17,marginTop:10}}> 
                   {PRODUCTS.name}
                </Text>

                <View style={{flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:5
                  }}>
                    <Text style={{fontWeight:'bold'}}>R{PRODUCTS.price}</Text>
                    <View style={{
                      height:25, 
                      width:25, 
                      backgroundColor:'grey',
                      borderRadius:5,
                      justifyContent:'center',
                      alignItems:'center'
                      }}>
                      <Text style={{fontSize:10,color:'white'}}>+</Text>
                    </View>
                </View>
          </View>
        </View>
      </TouchableOpacity>
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
          <Text style={{fontSize:30,fontWeight:'bold',color:'	#F3F6FB'}}>Restaurant</Text>
        </View>
        <View>
          <CartIcon navigation={navigation} />
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
       data={PRODUCTS}
        renderItem={({item})=><Card PRODUCTS={item }/>}
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