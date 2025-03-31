import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { ProductData } from '../../data/ProductData';

export default function ProductDetails({ route }) {
  //getting route
  const [Details,setDetails]=useState({})
  const { Product } = route.params; // Extract full object
  // console.log("Received Product:", Product);
  
  useEffect(() => {
    if (!Product || !Product._id) {
      console.log("Error: Missing _id in Product object");
      return;
    }
  
    // console.log("Searching for product with _id:", Product._id);
  
    const getProduct = ProductData.find((p) => p._id === Number(Product._id));
  
    // console.log("Found Product:", getProduct);
  
    setDetails(getProduct || { message: "Product not found" });
  }, [Product]);
  
  return (
    <View>
      <Text>ProdutDetails</Text>
      <Text>{JSON.stringify(Details,null,4)}</Text>
      <Text> {Product._id}</Text>
     <Text>Name:{Product.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})