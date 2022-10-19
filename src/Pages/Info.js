import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
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

            <Icon
                name="fa-doutone fa-cart-shopping" size={28}
            />
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
})