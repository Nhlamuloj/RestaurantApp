import { createUserWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import { StyleSheet,KeyboardAvoidingView, View,TextInput, TouchableOpacity,Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import {auth} from '../firebase/firebase';

const Register =({navigation})=>{
const [email,setEmail]=useState('');
const[password, setPassword] =useState('');

const register =(()=>{
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
        navigation.push('Home');
    }).catch((error)=>{
        console.log(error)
    })
})
return(
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    >
        <View style={styles.inputContainer}>
            <View style={styles.register}>
                <Icon
                    color ='black'
                    name ='user'
                    type = 'font-awesome'
                    size= {12}
                />
                <TextInput
                    placeholder='Name'
                    style={styles.input}
                
                />
            </View>

            <View style={styles.register}>
                <Icon
                    color='black'
                    name ='envelope'
                    type ='font-awesome'
                    size ={12}
                />

                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={(email)=>setEmail(email)}
                />
            </View>

            <View style={styles.register}>
                <Icon
                    color='black'
                    name ='lock'
                    type ='font-awesome'
                    size ={12}
                />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    onChangeText={(password)=>setPassword(password)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.button}
                onPress={register}
                >
                    <Text style={styles.buttonText}>SigIn</Text>
                </TouchableOpacity>
            </View>
        </View>

    </KeyboardAvoidingView>
)
}

export default Register
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal:'30px',
    },

    register:{
        width:'100%',
        paddingHorizontal:'10px',
        display:'flex',
        flexDirection:'row',
        alignContent:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        paddingHorizontal:2,
    },
    input:{
        width:'100%',
        paddingLeft:'10px',
    },

    button:{
        backgroundColor:'blue',
        width:'100%',
        alignItems:'center',
        fontSize:'bold',
        padding:15,
        marginTop:'20px',
        borderRadius:'27px'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold'
    }
})