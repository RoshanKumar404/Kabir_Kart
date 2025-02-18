import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import Glass from './screens/Glass';
import ProductDetails from './Component/Product/ProdutDetails';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator  >
  <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }} />
  <Stack.Screen name='Glass' component={Glass}  />
  <Stack.Screen name='ProductDetails' component={ProductDetails}/>
</Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})