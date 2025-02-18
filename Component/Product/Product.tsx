import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react';
import { ProductData } from '../../data/ProductData';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Product() {
    const Navigation=useNavigation();
    const HandleButton=(id)=>{
        Navigation.navigate("ProductDetails" ,{_id:id})
    console.log(id);
    
    }
  return (
    <View style={styles.container}>
      {ProductData?.map((item) => (
        <View key={item._id} style={styles.card}>
          <Image source={item.img} style={styles.cardImage} />
          <View style={styles.detailsContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>₹{item.Price}</Text>
          </View>
          <Text style={styles.category}>{item.Category}</Text>
          <View style={styles.cardButtons}>
            <TouchableOpacity onPress={()=>HandleButton(item._id)} style={styles.btn}>
              <Text style={styles.btnText}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginVertical: 8,
    width: width / 2.2,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    height: 160,
    width: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    marginTop: 6,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 14,
    flexShrink: 1,
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4CAF50',
  },
  category: {
    fontSize: 12,
    color: '#757575',
    paddingHorizontal: 8,
    marginBottom: 6,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
  btn: {
    backgroundColor: '#FF5722',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
