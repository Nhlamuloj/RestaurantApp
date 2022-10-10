import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Pages/Home'
import { StatusBar } from 'react-native';
import Color from './src/details/color';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor={Color.white}/>
      <Stack.Navigator >
        <Stack.Screen  options={{headerShown:false}} name="Home" component={Home }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
