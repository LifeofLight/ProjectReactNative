import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreens = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Ionicons name='home' size={30} color='skyblue'/>
            <Text>หน้าหลัก</Text>
            <Button
            title="Go To About"
            onPress={()=>navigation.navigate('About',
            {
                email:'Boss135792468@gmail.com'
            
            })}
            />
        </View>
        
    )
}

export default HomeScreens

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})