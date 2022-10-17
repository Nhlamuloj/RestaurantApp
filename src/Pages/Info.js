import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
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

    </SafeAreaView>
    
  )
}

export default Info

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white', 
        height: '100%',
    }
})