import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function CheckOut() {
  const route=useRoute();
  const grandtotal= route.params?.grandTotal || 0;
  console.log(grandtotal);
  
  return (
    <View>
      <Text style={styles.text}>Payment Options</Text>
      <Text>the total amount is : ₹{grandtotal} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:19,
    },
});