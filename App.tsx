import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Glass from './screens/Glass';
import ProductDetails from './Component/Product/ProdutDetails';
import Kart from './screens/bottomtabs/Kart';
import Order from './screens/bottomtabs/Order';
import Profile from './screens/bottomtabs/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Glass' component={Glass} />
      <Stack.Screen name='ProductDetails' component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' component={HomeStackNavigator}
         options={{
          headerShown: false,
         //tabBarLabel: 'For You',
         tabBarIcon: ({ color, size }) => (
           <FontAwesome5 name="home" color={color} size={size} />
         ),
       }} />
        <Tab.Screen name='Kart' component={Kart}
         options={{
          headerShown: false,
         //tabBarLabel: 'For You',
         tabBarIcon: ({ color, size }) => (
           <FontAwesome5 name="shopping-cart" color={color} size={size} />
         ),
       }} />
        <Tab.Screen name='Order' component={Order}
         options={{
          headerShown: false,
         //tabBarLabel: 'For You',
         tabBarIcon: ({ color, size }) => (
           <FontAwesome5 name="box-open" color={color} size={size} />
         ),
       }} />
        <Tab.Screen name='Profile' component={Profile} options={{
             headerShown: false,
            //tabBarLabel: 'For You',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="person-booth" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
