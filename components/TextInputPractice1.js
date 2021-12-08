import React,{ useState} from 'react';
import {SafeAreaView,StyleSheet,TextInput,Button, View} from 'react-native'

const TextInputPractice1 = () => {

    const[inputName,setInputName]=useState('')
    const[inputEmail,setInputEmail]=useState('')

    const checkValue=()=>{
        if(!inputName.trim()){
            alert('Please Enter name')
            return
        }
        if(!inputEmail.trim()){
            alert('Please Enter Email')
            return
        }
        alert('Success')
    }
    return (
     <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
        <TextInput
        style={styles.textInputStyle}
        onChangeText={(inputName)=>{setInputName(inputName)}}
        placeholder='Enter Name'
        />
        <TextInput
        style={styles.textInputStyle}
        onChangeText={(inputEmail)=>{setInputEmail(inputEmail)}}
        placeholder='Enter Email'
        />
        
        <View style={{marginTop: 15}}>
        <Button onPress={checkValue}
                title ="SUBMIT"
                color = "#784563"
                />
        </View>
</View>
       

    </SafeAreaView>
    )
}
export default TextInputPractice1

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 35,
    },
    textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    },
    });