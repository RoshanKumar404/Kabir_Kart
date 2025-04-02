import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type PriceTableProps={
  title:string;
  price:number | string;
};
export default function Picetable({title,price}:PriceTableProps):React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        alignItems:'center',

    },
    text:{
      fontSize:18,
      color:'black'
    }
});
