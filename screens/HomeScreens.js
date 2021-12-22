import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const HomeScreens = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>หน้าหลัก</Text>
            <Button
            title="Go to About"
            onPress={()=>navigation.navigate('About')}
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
