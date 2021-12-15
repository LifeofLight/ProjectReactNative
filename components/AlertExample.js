
import React from 'react'
import { StyleSheet, Text, View,Alert,SafeAreaView,Button } from 'react-native'

const AlertExample = () => {

    const SimpleAlertHandler =()=>{
        alert('Hello Im simple')
    }
    const twoOption =()=>{
        //function to make two option alert
        Alert.alert(
            //title
            'Hello',
            //body
            'Im two option alert,Do you want to cancle me?',
            //text
            [
                {
                    text :'Yes',
                    onPress :()=>console.log('Yes Pressed')
                },
                {
                    text :'No',
                    onPress :()=>console.log('No Pressed')
                }
            ],
            {cancelable:false}
        )
    }
    const threeOption =()=>{
        Alert.alert(
            'Hello',
            'Im three option alert Do you want to cancle me?',
            [
                {
                    text :'MAY BE',
                    onPress :()=>console.log('MAYBE Pressed')
                },
                {
                    text :'Yes',
                    onPress :()=>console.log('YES Pressed')
                },
                {
                    text :'No',
                    onPress :()=>console.log('No Pressed')
                }
            ],
            {cancelable:true}
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <View style ={styles.container}>
                <Button
                 title='Simple Alert'
                 onPress={SimpleAlertHandler}
                />
                <Button
                title ='Aleart with Two Options'
                onPress={twoOption}
                />
                <Button
                title ='Aleart with Three Options'
                onPress={threeOption}
                />
            </View>
        </SafeAreaView>
    )
}

export default AlertExample

const styles = StyleSheet.create({
     container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#000000',
     },
    });