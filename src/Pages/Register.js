import { createUserWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import { StyleSheet,KeyboardAvoidingView, View,TextInput, TouchableOpacity,Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
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
    
    <KeyboardAvoidingView    style={{height:'100%'}}>
        <LinearGradient
            colors={['#222','#222','#111']}
            style={[styles.container,{height:'100%'}]}
        >
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.Login}>Register</Text>

            <TextInput
                placeholder="Name"
                placeholderTextColor={'white'}
                style={styles.input}
               
            />

            <TextInput
                placeholder="Email Address"
                placeholderTextColor={'white'}
                style={styles.input}
                onChangeText={(email)=>setEmail(email)}
            />

            
            <TextInput
                placeholder="Password"
                placeholderTextColor={'white'}
                style={styles.input}
                secureTextEntry={true}
                onChangeText={(password)=>setPassword(password)}
            />
            <TouchableOpacity 
                style={styles.LoginBtn}

                onPress={register}
                >
                <Text style={styles.LoginTxt}>Register</Text>
            </TouchableOpacity>

            <View style={styles.signUpTextView}>
                <Text style={styles.signUpTxt}>Have an account</Text>
                <TouchableOpacity
                    onPress={()=>navigation.push('Login')}
                >
                    <Text style={[styles.signUpTxt, {color:'#B53471'}]}>
                        {'click here'}
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </KeyboardAvoidingView>
)
}
export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        paddingHorizontal:20,
    },

    welcome:{
        fontSize:30,
        fontWeight:900,
        color:'white',
        alignSelf:'center'
    },

    Login:{
        color:'white',
        fontSize:28,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10
    },

    input:{
        width:'100%',
        height:50,
        backgroundColor:'#333',
        borderRadius:6,
        marginTop:10,
        paddingHorizontal:10,
        fontSize:16,
        color:'#808e9b',
    },

    LoginBtn:{
        backgroundColor:'#833471',
        paddingVertical:12,
        borderRadius:6,
        marginTop:20
    },

    LoginTxt:{
        fontSize:20,
        fontWeight:500,
        color:'blue',
        alignSelf:'center'
    },

    signUpTextView:{
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    },

    signUpTxt:{
        color:'white',
        fontSize:20,
        fontWeight:'500'
    },



    
})
