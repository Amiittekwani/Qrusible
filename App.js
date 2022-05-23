
import React from 'react';
import Signin from "./src/Screens/Signin"
import Signup from "./src/Screens/SignUp"
import Landing from "./src/Screens/Landing"
import forgotPassword from "./src/Screens/forgotPassword"
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import landing1 from './src/Screens/landing1';
import {StyleSheet} from 'react-native';



const App = () => {
  const Stack = createStackNavigator();
    return (
  
      <NavigationContainer>
                    <Stack.Navigator initialRouteName = {Landing}>
                    <Stack.Screen name = 'Landing' component = {Landing} options = {{headerShown: false}} />
                      <Stack.Screen name = 'Signin' component = {Signin} options = {{headerShown: false}} />
                      <Stack.Screen name = 'Register' component = {Signup} options = {{headerShown: true}} />
                      <Stack.Screen name = 'forgotPassword' component = {forgotPassword} options = {{headerShown: true}} />
                      <Stack.Screen name = 'landing1' component = {landing1} options = {{headerShown: true}} />
                      </Stack.Navigator>
     </NavigationContainer>
    );
  }  


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
