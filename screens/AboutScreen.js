import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text>เกี่ยวกับ?_?</Text>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

    }
})
