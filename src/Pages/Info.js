import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
 import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

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
                    <Text style={{fontSize:'23px', fontWeight:'bold'}}>{item.name}</Text>
                    <View style={styles.price}>
                        <Text style={{
                            marginLeft:'15px',
                            color:'white',
                            fontWeight:'bold',
                            fontSize:'18px',
                        }}>
                            R{item.price} 
                        </Text>
                    </View>
            </View>
            <View style={{paddingHorizontal:'20px', marginTop:'10px'}}>
                <Text style={{fontSize:'20px',fontWeight:'bold'}}>Ingredients</Text>
                <Text style={{color:'grey', lineHeight:'22px', marginTop:'20px',fontSize:'18px'}}>
                    {item.ingredients} 
                </Text>
                 <View>
                    <View style={styles.borderBtn}>
                        <TouchableOpacity style={styles.btnText}></TouchableOpacity>
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