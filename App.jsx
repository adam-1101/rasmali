import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LandingScreen from './src/screen/LandingScreen';
import SignupScreen from './src/screen/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen_first_step from './src/screen/SignupScreen_first_step';
import SignupScreen_two_step from './src/screen/SignupScreen_two_step';
import SignupScreen_three_step from './src/screen/SignupScreen_three_step';
import SignupScreen_four_step from './src/screen/SignupScreen_four_step';
import SignupScreen_five_step from './src/screen/SignupScreen_five_step';







const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Signup_first_step" component={SignupScreen_first_step} />
          <Stack.Screen name="Signup_two_step" component={SignupScreen_two_step} />
          <Stack.Screen name="Signup_three_step" component={SignupScreen_three_step} />
          <Stack.Screen name="Signup_four_step" component={SignupScreen_four_step} />
          <Stack.Screen name="Signup_five_step" component={SignupScreen_five_step} />
          <Stack.Screen name="Login" component={LoginScreen} />


        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})