import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const [search ,setsearch]=useState('');
  const handleSearch=()=>{
console.log(search);
setsearch('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search..." 
          style={styles.input} 
          multiline={true}
          numberOfLines={4}
          value={search}
          onChangeText={(text)=>setsearch(text)}
        />
        <TouchableOpacity style={styles.iconButton} onPress={handleSearch}>
          <Icon name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#CBC3E3",
    borderRadius:10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor: '#f1f1f1',
    paddingHorizontal: 10,
    width: '100%',
   
  },
  input: {
    flex: 1,
    height: "auto",
    paddingHorizontal: 10,
    fontSize:18,
    borderWidth:1,
    borderRadius:10,
    textAlignVertical:'top',
    backgroundColor: '#f1f1f1'

  },
  iconButton: {
    padding: 10,
  },
});

export default Header;
