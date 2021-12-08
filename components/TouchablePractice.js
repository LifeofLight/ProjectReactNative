import React,{ useState} from 'react';
import {Text,SafeAreaView,StyleSheet,TextInput,View,TouchableOpacity} from 'react-native'

const TextInputPractice1 = () => {

    const[inputEmail,setInputEmail]=useState('')
    const[inputPassword,setInputPassword]=useState('')

    const checkValue=()=>{
       
        alert('email: '+inputEmail+'\n'+'password: '+inputPassword)
    }
    return (
     <SafeAreaView style={{flex:1}}>
       <View style={styles.container}>
        <TextInput
        style={styles.textInputStyle}
        onChangeText={(inputEmail)=>{setInputEmail(inputEmail)}}
        placeholder='Email'
        />
        <TextInput
        style={styles.textInputStyle}
        onChangeText={(inputPassword)=>{setInputPassword(inputPassword)}}
        placeholder='Password'
        />
        
        <TouchableOpacity activeOpacity={0.5}
         onPress={checkValue}
         style={styles.buttonbg}
         >   
        <Text style={styles.Textstlye}>Submit</Text>
        </TouchableOpacity>
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
    buttonbg: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#156789',
        borderWidth: 0.75,
        borderColor: '#fff',
        height: 40,
        margin: 5,
        },
        Textstlye:{
            color:'#ffffff'
        }
    });