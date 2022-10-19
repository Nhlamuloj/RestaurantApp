
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Color from './src/details/color';
import Login from './src/Pages/Login';
import  Register from './src/Pages/Register';
import Home from './src/Pages/Home';
import Info from './src/Pages/Info'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      
      <StatusBar backgroundColor={Color.white}/>
      <Stack.Navigator  initialRouteName='Information'>
        <Stack.Screen  options={{headerShown:false}} name="Register" component={Register}/>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen  options={{headerShown:false}} name="Home" component={Home}/>
        <Stack.Screen  options={{headerShown:false}} name="Information" component={Info}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
