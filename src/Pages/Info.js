import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import food from '../details/food';

const Info = ({navigation, route}) => {
    const item = route.params;

  return (
    <SafeAreaView style={styles.container} >
        <View style= {styles.header}>
            <Icon
                name="chevron-left" size={28} 
                onPress={navigation.goBack}
            />

       
        </View>
        <View style={styles.imageContainer} >
            <Image style={{width:'70%', height: '70%', resizeMode: 'contain'}} source={ item.image}  />
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
})