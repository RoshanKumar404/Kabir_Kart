import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Categorydata } from '../../data/CategoryData'
import { useNavigation } from '@react-navigation/native'
import Glass from '../../screens/Glass';

const Category = () => {
  const Navigation=useNavigation();
  return (
    <ScrollView horizontal={true}>
      <View style={styles.Container}>
        {Categorydata?.map(item => (
          <View key={item._id}>
            <TouchableOpacity onPress={()=>Navigation.navigate(item.path)}>
              <View style={{
                alignItems: "center",
                marginHorizontal: 10, padding: 10,
              }}>
                <Image source={item.img} style={{ height: 40, width: 40, borderRadius: 5 }}></Image>
              </View>
              <Text style={{ marginHorizontal: 20 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",

  }
})

export default Category