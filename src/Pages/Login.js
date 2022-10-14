import { signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from "react";
import { KeyboardAvoidingView, StyleSheet,TextInput,TouchableOpacity, View,Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import  { auth} from '../firebase/firebase';



const Login =({navigation}) => {
const [email,setEmail]=useState('');
const [ password , setPassword]=useState('');


const login =(()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        navigation.push('Home');
    }).catch((error)=>{
        console.log(error)
    })
})
    return(

        <KeyboardAvoidingView
            style ={styles.container}
            behavior='padding' 
        >
        <View style={styles.inputContainer}>
         <View style={styles.Login}>
            <Icon
                color='black'
                name='envelope'
                 type='font-awesome'
                size={12}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
                onChangeText={(email)=>setEmail(email)}
            />
         </View>

         <View style={styles.Login}>
            <Icon
                color='black'
                name='lock'
                 type='font-awesome'
                size={17}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                onChangeText={(password)=>setPassword(password)}
            />
         </View>   
        </View>

        <View>
         <TouchableOpacity
          onPress={()=>navigation.navigate('Register')}
         >
            <Text styles={styles.dontHave}>Don't have Account click here</Text>
         </TouchableOpacity>

        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
             style={styles.button}
             onPress={login}
            >
                <Text style={styles.buttonText}>Login</Text>

            </TouchableOpacity>
        </View>

  
      </KeyboardAvoidingView>

    )

}
  

  
export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:30,
    },

    Login:{
        width:'100%',
        height:44,
        paddingHorizontal:10,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:'grey',
        borderBottomWidth:1,
        paddingHorizontal:2, 
    },

    input:{
       width:'100%',
       paddingLeft:'10px'
    },

    button:{
        backgroundColor:'blue',
        width:'100%',
        padding:15,
        borderRadius:'27px',
        alignItems:'center',
        fontSize:'bold',
        marginTop:'20px'
        
    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
    },

    


    
   
})
