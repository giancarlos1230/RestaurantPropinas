import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Propina from './src/components/Propina';

export default function App() {

  return (
    <View style={styles.containerFondo}>
      <View style={styles.container}>
        <Text style={styles.text}>Dividir Cuenta</Text>
      </View>
      <Propina></Propina>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:27,
    paddingVertical:40
  },
  text:{
   fontSize:40,
   fontWeight:'normal',
   color:'#034C50'
  },
  containerFondo:{
    backgroundColor:'#C0E3E6',
    flex:1,
    alignItems:'center'
  }

})