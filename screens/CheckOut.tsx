import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function CheckOut() {
  const route = useRoute();
  const grandtotal = route.params?.grandTotal || 0;
  console.log(grandtotal);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.PaymentHeading}>
        <Text style={styles.text}>Payment Options</Text>
        <Text style={{
    fontSize: 20,
    fontWeight:'bold',
    fontStyle:'normal',
    

  }}>the total amount is : ₹{grandtotal} </Text>
        <View  style={styles.card}>
          <TouchableOpacity >
            <Text style={{fontSize:20,padding:10,margin:10,fontWeight:'bold',
              borderRadius:15,backgroundColor:'#000000',color:'#ffffff'
            }} >Cash on Delihvery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize:20,padding:10,margin:10,
              borderRadius:15,backgroundColor:'#000000',color:'#ffffff',fontWeight:'bold'}}>UPI / DEBIT / CREDIT CARD</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 29,
    fontWeight:'bold',
    fontStyle:'normal',


  },
  PaymentHeading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    padding:30,
    marginTop:20,
    borderRadius:15,
    borderWidth:2,
    elevation:1,
    backgroundColor:'#F9F6EE',
    borderColor:'#F9F6EE'
  }


});