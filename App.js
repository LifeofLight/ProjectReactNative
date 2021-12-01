import React from 'react'
import { useState} from 'react';
import {Text,SafeAreaView,StyleSheet,TextInput,Button, View} from 'react-native'





const App=()=>{
  

  const[inputValue,setInputvalue]=useState('')

 
  const checkValue =()=>{
    if(isNaN(inputValue)){
      alert("IT is not a number")
    }else{
      alert("it's number")
    }
  }

  return(
    <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
        <TextInput
        placeholder ="EnterText"
        style={styles.textinput}
        onChangeText={(inputValue)=>{setInputvalue(inputValue)}}
        />
        <Button
        title="Check Value Is Number or Not"
        onPress={checkValue}
        />
       </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   alignItems:'center',
   marginTop:60
   },
   textinput: {
   textAlign :'center',
   width:'70%',
   marginBottom:10,
   borderColor :'red'
   }
   });
   export default App;

