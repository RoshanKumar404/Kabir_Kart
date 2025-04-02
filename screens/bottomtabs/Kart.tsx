import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ProductData } from '../../data/ProductData';
import Picetable from '../../Component/Picetable';

type KartProps = {};

export default function Kart({}: KartProps) {
  const [cartItems, setCartItems] = useState(ProductData);
  const [qty,setqty]=useState(0);
const addItem=()=>{
  if(qty===10)
    return  Alert.alert("You can not add more than 10 items ");
   setqty((prev)=>prev+1)
};;
const removeItem=()=>{
  if(qty<1) return Alert.alert("minimum number of order is 1 ");
setqty((prev)=>prev-1);
};
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {cartItems.length > 0 
          ? `You have ${cartItems.length} Product(s) in your cart.` 
          : "Oops! Your cart is empty."}
      </Text>
      {cartItems.length > 0 && (
        <>
        <View >
        
          <View style={styles.ButtonContaine}>
          <Text style={{fontSize:19,padding:8,fontWeight:'bold',}}>Add As much you want</Text>
          <TouchableOpacity style={styles.updater} onPress={removeItem}>
            <Text style={{fontSize:19,padding:8,fontWeight:'bold',borderRadius:9,borderWidth:3}} > - </Text>
          </TouchableOpacity>
          <Text  style={{fontSize:19,padding:8,fontWeight:'bold',borderRadius:9,borderWidth:3}}>{qty}</Text>
          <TouchableOpacity style={styles.updater} onPress={addItem}>
            <Text  style={{fontSize:19,padding:8,fontWeight:'bold',borderRadius:9,borderWidth:3}}> +</Text>
          </TouchableOpacity>
         
          </View>
        </View>
        <View style={styles.PriceTable}>
          <Picetable  title="Price" price={ 244} />
          <Picetable title="Tax" price={29} />
          <Picetable title="shipping Charges" price={29}/>
          </View>
          <View style={styles.Grandtotal}>
            <Picetable title="Grand Total" price={`${58+244*qty}`}/>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  PriceTable:{
    borderRadius:7,
    borderWidth:2,
    borderColor:'black',
    backgroundColor:'grey',
    padding:10,
    
  },
  Grandtotal:{
    padding:10,
    marginTop:10,
    borderWidth:2,
    borderColor:'black',
    borderRadius:9,
    
  },
  updater:{
    padding:3,
    fontSize:26,
    borderColor:'#C3C2BB',
    // borderWidth:3,

  },
  ButtonContaine:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
    marginVertical:20,
    borderWidth:3
  }
});
