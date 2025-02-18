import React from 'react';
import { StyleSheet, View, Text,Dimensions, Image, Pressable, Alert } from 'react-native';
import Carousel, { Pagination } from 'react-native-x-carousel';
import { BannerData } from '../../data/BannerData';
import { Categorydata } from '../../data/CategoryData';


const {width}=Dimensions.get('window')
const Index = () => {
  const renderItem =( data )=> (
    <Pressable key={data._id} onPress={()=>{Alert.alert(` Id ${data._id} and  name ${data.name}`)}}>
    <View  style={styles.item}>
        
       <Image source={data.img} style={{  width:width, }}></Image>
       
      <Text>{data.name}</Text>
      
    </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
       
       <Carousel
        pagination={Pagination}
        renderItem={(data) => renderItem(data)} // ✅ Fixed renderItem call
        data={Categorydata}
        loop
        autoplay
      />
        
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: width,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dbf3fa',borderRadius:10
  },
});

export default Index;