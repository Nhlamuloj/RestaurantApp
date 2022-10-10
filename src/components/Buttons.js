import React from 'react';
import { StyleSheet,TouchableOpacity,View,Text } from 'react-native-web';
import Color from '../details/color';

const PrimaryBtn=({ttile, onPress =()=> {}}) =>{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={style.btnContainer}>
                <Text style={style.tile}>{title}</Text>
            </View>
        </TouchableOpacity>
    );    
};
const SecondaryBtn =({title, onPress=()=>{}})=>{
    return(
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={{...style.btnContainer, backgroundColor:Color.white}}>
                <Text style={{...style.title, color:Color.primary }}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
    btnContainer: {
      backgroundColor: COLORS.primary,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export {PrimaryBtn, SecondaryBtn};