import { signInWithEmailAndPassword } from "firebase/auth";
import React,{ useState} from "react";
import { KeyboardAvoidingView, StyleSheet,TextInput,TouchableOpacity, View,Text, } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import  { auth} from '../firebase/firebase';



const Login =({navigation}) => {
const [email,setEmail]=useState('');
const [ password , setPassword]=useState('');



const login = (()=>{
    signInWithEmailAndPassword(auth,email,password).then(()=>{
        navigation.push('Home');
     }).catch((err)=>{

        console.log(err);
    })
    
})

return(
    
    <KeyboardAvoidingView    style={{height:'100%'}}>
        <LinearGradient
            colors={['#222','#222','#111']}
            style={[styles.container,{height:'100%'}]}
        >
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.Login}>Login</Text>

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
           onPress={() => navigation.push('Forgot')}
            >
                <Text style={styles.fpText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.LoginBtn}

                onPress={login}
                >
                <Text style={styles.LoginTxt}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signUpTextView}>
                <Text style={styles.signUpTxt}>Don't have account?</Text>
                <TouchableOpacity
                    onPress={()=>navigation.push('Register')}
                >
                    <Text style={[styles.signUpTxt, {color:'#B53471'}]}>
                        {'Sign up'}
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </KeyboardAvoidingView>
)
}
export default Login

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

    fpText:{
        alignSelf:'flex-end',
        color:'white',
        fontWeight:'600',
        marginTop:10,
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
        justifyContent:'center'
    },

    signUpTxt:{
        color:'white',
        fontSize:20,
        fontWeight:'500'
    },



    
})
