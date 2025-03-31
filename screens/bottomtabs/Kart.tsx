import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Kart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Kart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
