
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Color from './src/details/color';
import Login from './src/Pages/Login';
import  Register from './src/Pages/Register';
import Home from './src/Pages/Home';
import Info from './src/Pages/Info'
import Forgot from './src/Pages/Forgot';
import Cart from './src/Pages/Cart';
import { CartIcon } from './src/components/CartIcon';
import { CartProvider } from './CartContext';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>

<NavigationContainer >
      
      <StatusBar backgroundColor={Color.white}/>
      <Stack.Navigator  initialRouteName='Login'>
        <Stack.Screen  options={{headerShown:false}} name="Register" component={Register}/>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen  name="Home" component={Home} />  
        <Stack.Screen  name="Information" component={Info} options={({navigation}) => ({  headerRight: () => <CartIcon navigation={navigation} />})} />    
        <Stack.Screen   name="Forgot" component={Forgot}  />
        <Stack.Screen   name="Cart" component={Cart} options={({navigation}) => ({  headerRight: () => <CartIcon navigation={navigation} />})}/>
      
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
 
  );
}

export default App;
