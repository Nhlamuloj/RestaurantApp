import React,{useEffect,useState} from "react";
import { View,Text, FlatList,StyleSheet } from "react-native";
import { getProducts } from "../details/food";
import {Home} from '../Pages/Home';

export function List({navigation}){

    function renderProduct({item:food}){
        return(
            <Home
            {...food}
                onPress={()=>{
                    navigation.navigate('information',{itemId:food.id})
                }}
            />
        )
    }

    const [products, setProducts]= useState([]);

    useEffect(()=>{
        setProducts(getProducts())
    })

    return(
        <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        />
    )
}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });
  