import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator >
  <Stack.Screen name='Home' component={Home} headershown={false}/>
</Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})