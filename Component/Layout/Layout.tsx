import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    
    

    <View>
     {children}
    </View>
   
    
    
  )
}
const styles=StyleSheet.create({
  footer:{
display:"flex"
,
flex:1,
justifyContent:"flex-end",
borderWidth:1,
zIndex:100,
position:"absolute",
bottom:0,
padding:15,
width:"100%",
borderColor:"#e6e7e8"  }
})

export default Layout