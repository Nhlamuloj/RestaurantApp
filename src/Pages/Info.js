import React,{useEffect, useState,useContext} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { getProduct } from '../details/food';
import { CartContext } from "../../CartContext";


const Info = ({ route}) => {

    const productId = route.params;
    const[product,setFood]=useState({})

    useEffect(()=>{
        setFood(getProduct(productId)) 
    })

    const {addItemToCart}=useContext(CartContext)

    function onAddToCart(){
        addItemToCart( productId.id)
    }

    
  return (
    <SafeAreaView style={styles.container} >
        <View style= {styles.header}>
        
        </View>
        <View style={styles.imageContainer} >
            <Image style={{width:'70%', height: '70%', resizeMode: 'contain'}} source={ productId.image}  />
        </View>  

        <View style={styles.details}>
            <View style={{
                marginLeft:'20px',
                flexDirection:'row',
                alignItems:'flex-end',
            }}>
                <View style={styles.line}/>
                <Text style={{
                    fontSize:'18px', 
                    fontWeight:'bold'
                    }}>
                     Best choice
                </Text>
            </View>
            <View style={{
                marginLeft:'20px', 
                marginTop:'20px', 
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center'
                }} >
                    <Text style={{fontSize:'23px', fontWeight:'bold'}}>{productId.name}</Text>
                    <View style={styles.price}>
                        <Text style={{
                            marginLeft:'15px',
                            color:'white',
                            fontWeight:'bold',
                            fontSize:'18px',
                        }}>
                            R{productId.price} 
                        </Text>
                    </View>
            </View>
            <View style={{paddingHorizontal:'20px', marginTop:'10px'}}>
                <Text style={{fontSize:'20px',fontWeight:'bold'}}>Ingredients</Text>
                <Text style={{color:'grey', lineHeight:'22px', marginTop:'20px',fontSize:'18px'}}>
                    {productId.ingredients} 
                </Text>
                 <View>
                    <View style={styles.borderBtn}>
                        <TouchableOpacity style={styles.btnText}
                            onPress={onAddToCart}
                        >
                            <Text>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>

    </SafeAreaView>
    
  )
}

export default Info

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        height: '100%',
    },

    header:{
        paddingHorizontal:'20px',
        marginTop:'20px',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    imageContainer:{
        width:'100%',
        height:'100%',
        flex:0.45,
        marginTop:'20px',
        justifyContent:'center',
        alignItems:'center',
    },

    details:{
        flex:0.55,
        backgroundColor:'lightblue'
    },

    line:{
        width:'25%',
        height:'2%',
        backgroundColor:'blue',
        marginBottom:'5px',
        marginRight:'3px'
    },

    price:{
        backgroundColor:'blue',
        width:'30%',
        height:'70%',
        borderBottomLeftRadius:'60px',
    },

    btnText:{
        borderColor:'grey',
        borderWidth:'1px',
        borderRadius:'5px',
        height:40,
        width: 40

    },

    
})