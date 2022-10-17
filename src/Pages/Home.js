import {StyleSheet ,View,SafeAreaView, Text, Image,TextInput, StatusBar, ScrollView, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import React, {useState} from 'react'
import Color from '../details/color'
import Icon from 'react-native-vector-icons/MaterialIcons'
import categories from '../details/Categories'
import food from '../details/food'
const {width} =Dimensions.get('screen');
const  cardWidth =width/2-779

const Home = ({navigation}) => {
  const [selectedCategory,setSelectedCategory]= useState(0)
  const ListCategories= ()=>{
    return(
      <ScrollView 
        horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles}
      >
        {categories.map((category,index)=>(
          <TouchableHighlight 
            key={index} activeOpacity={0.8}
            onPress ={()=> setSelectedCategory(index)}
          >
            <View style={{
              backgroundColor:selectedCategory == index
              ? Color.primary
              : Color.secondary,
              ...styles.categoryBtn}}
              >
                <View style={styles.categoryBtnImgCon}
                >
                  <Image source={category.image} style={{height:'20px', width:'20px', resizeMode: 'cover'}} />
                </View>
                <Text style={{fontSize:'15px',
                 fontWeight:'bold', 
                 marginLeft:'10px',
                 color:selectedCategory == index 
                 ? Color.white
                 :Color.primary,
                 }}
                >
                  {category.name}
                </Text>
              </View>
          </TouchableHighlight>
        ))}
      </ScrollView>
    );
  };
 
  const Card =({food}) =>{
    return(
      <TouchableHighlight underlayColor={Color.white}
        activeOpacity={0.9}
        onPress={()=>navigation.navigate('Information',food)}
      >
        <View style={styles.card}>
        <View style={{alignItems:'center', top: -20}}>
          <Image source={food.image} style={{height:120, width:120}} />
        </View>

        <View style={{marginHorizontal:20}}>
          <Text style={{fontSize:18, fontWeight:'bold'}}>
            {food.name}
          </Text>
          <Text style={{fontSize:14, color:'gray', marginTop:2}}>
            {food.ingredients}
          </Text>
        </View>
        <View style={{marginTop:20, 
          marginHorizontal:20,
          flexDirection:'row',
          justifyContent:'space-between'}}>
            <Text style={{fontSize:18, fontWeight:'bold'}} >
              R{food.Price}
            </Text>

            <View style={styles.addToCard}>+</View>
          </View>
        <View>
          </View>
        </View>

      </TouchableHighlight>
      
    )
   
  }
  return(

    <SafeAreaView style={styles.wrapper} >
  <View >
    <View style={styles.header}>
      <View>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:28, fontWeight:'bold',marginLeft:10}}>Nhlamulo</Text>
        </View>
        <Text style={{marginTop:5, fontSize:22,color:Color.grey}}>What would you like to order</Text>
      </View>
      <Image source={require('../Images/logo.jpg')} style={{height:70,width:70,borderRadius:50}}
         />
    </View>
    <View style={{marginTop:'40px',
    flexDirection:'row',
    paddingHorizontal:'20px'}}
    >
      <View style={styles.inputContainer}>
        <Icon name='search'
          size={29}
        />
        <TextInput 
          style={{flex:1, fontSize:'18px'}}
          placeholder='search for food'
        />
      </View>
    </View>

  </View>
  <View style={styles.ListCategories}>
    <ListCategories/>
  </View>
  <FlatList
    showsHorizontalScrollIndicator={false}
    numColumns={2}
    data={food}
    renderItem={({item})=> <Card food={item}/>}
  />
</SafeAreaView>
  )

}

const styles= StyleSheet.create({
  wrapper:{
    flex:1,
    height:'100%',
    backgroundColor:'green',
    paddingHorizontal:12
  
  },

  header:{
    marginTop:'20px',
    flexDirection:'row',
    justifyContent:'space-between'
  },

  inputContainer:{
    flex:1,
    height:'50px',
    borderRadius:'10px',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'lightgray'
  },

  contentContainerStyle:{
    paddingVertical:'30px',
    alignItems:'center',
    paddingHorizontal:'20px',
  },

  categoryBtn:{
    height:'45px',
    width:120,
    marginRight:'7px',
    borderRadius:'30px',
    alignItems:'center',
    paddingHorizontal:5,
    flexDirection:'row',
    padding:'20px'
  },
  ListCategories:{
    flex:1,  
    paddingTop:'30px',
    paddingHorizontal:"12px"
  },

  categoryBtnImgCon:{
    height:'35px',
    width:'35px',
    backgroundColor:'white',
    borderRadius:'30px',
    justifyContent:'center',
    alignItems:'center'
  },

  card:{
    flex:5,
    height:220,
    width:cardWidth,
    marginHorizontal:10,
    marginBottom:20,
    borderRadius:15,
    elevation:13,
    backgroundColor:'white'
  },

  addToCard:{
    height:30,
    width:30,
    borderRadius:20,
    backgroundColor:'blue',
    color:'white',
    justifyContent:'center',
    alignItems:'center'
  },


 
})

export default Home;