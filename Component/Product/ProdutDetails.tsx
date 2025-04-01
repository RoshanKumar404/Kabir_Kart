import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, InputAccessoryView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProductData } from '../../data/ProductData';
import Kart from '../../screens/bottomtabs/Kart';

export default function ProductDetails({ route,navigation }) {
  const [Details, setDetails] = useState(null);
  const [review,setReview]=useState('');
  const [remainingTime,setremainingTime]=useState(900);

  const { Product } = route.params;
useEffect(()=>{
  if(remainingTime <= 0)
    return;
  const timer=setInterval(() => {
    setremainingTime((prevTime)=>prevTime-1)
  }, 1000);
  return ()=>clearInterval(timer);
},[remainingTime]);


const minutes=Math.floor(remainingTime/60);
const seconds=remainingTime%60;

  useEffect(() => {
    if (!Product || Product._id === undefined) {
      console.log("Error: Missing _id in Product object");
      return;
    }

    const getProduct = ProductData.find((p) => p._id === Product._id);
    setDetails(getProduct || { message: "Product not found" });
  }, [Product]);

  if (!Details) return <Text style={styles.loading}>Loading...</Text>;

  // Handlers for buttons
  const handleBuyNow = () => {
    Alert.alert("Purchase", `You bought ${Product.name} for ₹${Product.Price}! 🎉`);
  };

  const handleAddToCart = () => {
    navigation.navigate("Kart");
    Alert.alert("Cart", `${Product.name} added to cart 🛒`);
  };

  const HandlePost=()=>{
    if (review.trim().length===0){
      Alert.alert("Review can not be empty")
      return;
    }
    Alert.alert(`Thank You for the Review ${review}`)
    setReview("")
  }
  return (
    <ScrollView style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={Product.img} />
      </View>

      {/* Product Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{Product.name}</Text>
        <Text style={styles.price}>₹{Product.Price}</Text>

        {/* Rating & Seller Info */}
        <View style={styles.row}>
          <Text style={styles.rating}>⭐ 4.5</Text>
          <Text style={styles.seller}>Seller: {Product.Company}</Text>
          <Text style={{fontSize:18,fontWeight:"bold",color:"#145s53"}}>  Offer ends in: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>
        </View>

        {/* Offers Section */}
        <View style={styles.offersContainer}>
          <Text style={styles.offerTitle}>Available Offers</Text>
          <Text style={styles.offer}> Customer Offer: Get 10% off for permanent customers</Text>
          <Text style={styles.offer}>💳 No Cost EMI available</Text>
          <Text style={styles.offer}>🚚 Free Delivery by Tomorrow</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{Product.Discription}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowBtn} onPress={handleBuyNow}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.reviewSection}>
      <Text style={{fontSize:24,fontWeight:"bold",padding:10}}>Reviews...</Text>

      <TextInput
        placeholder="Please share your experience with us..."
        numberOfLines={4}
        multiline
        textAlign="left"
        keyboardType="default"
        maxLength={200}
        value={review}
        onChangeText={setReview}
        style={styles.input}
      />

      <TouchableOpacity style={{padding:10,marginTop:10 ,alignContent:"center",backgroundColor:"#ff9f00",borderRadius:8,alignItems:"center"}} onPress={HandlePost}>
        <Text style={{fontSize:25,fontWeight:"bold",}}>Post</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  img: {
    height: 300,
    width: 300,
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e53935",
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#388e3c",
    backgroundColor: "#e8f5e9",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  seller: {
    fontSize: 14,
    color: "#555",
  },
  offersContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f1f8e9",
    borderRadius: 5,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  offer: {
    fontSize: 14,
    color: "#333",
    marginBottom: 3,
  },
  description: {
    fontSize: 18,
    color: "#555",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  addToCartBtn: {
    flex: 1,
    backgroundColor: "#ff9f00",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
  },
  buyNowBtn: {
    flex: 1,
    backgroundColor: "#fb641b",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    
  },
  loading: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  reviewSection:{
   // flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
   margin:20,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 3,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 5,
    fontSize:16,
  },
});
