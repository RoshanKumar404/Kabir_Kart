import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Layout from '../Component/Layout/Layout'
import Category from '../Component/Layout/Category'
import Index from '../Component/Layout/Banner'
const Home = () => {
  return (
    <Layout> 
      <Category/>  
      <Index/> 
        <View >
      <Text style={{fontSize:100}}>Home</Text>
    </View>
    </Layout>

  )
}

const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"

}
})
export default Home