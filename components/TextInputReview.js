import React,{ useState} from 'react';
import {Text,SafeAreaView,StyleSheet,TextInput, View} from 'react-native'

const TextInputReview = () => {

    const[inputValue,setInputvalue]=useState('')


    return (
     <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
         <Text style={styles.text}>{inputValue}</Text>
        <TextInput
        style={styles.input}
        onChangeText={(inputValue)=>{setInputvalue(inputValue)}}
        placeholder='?'
        />
       </View>

    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    justifyContent:'center',
    backgroundColor: '#e8e8e8',
    },
    input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#e8e8e8'
    },
    text:{
      color:'blue'
    }
    });

    export default TextInputReview