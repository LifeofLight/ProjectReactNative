import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

//const AboutScreen = ({navigation}) => {
const AboutScreen = ({route}) => {
    const {email}=route.params;

    return (
        <View style={styles.container}>
            <Text>เกี่ยวกับ?_?</Text>
            <Text>Email: {email}</Text>
            {/* <Button
                title='Go to About Page again....'
                onPress={()=>navigation.push('About')}
            />
            <Button
                title='Go to Home Page'
                onPress={()=>navigation.push('Home')}

            />
            <Button
                title='Go back'
                onPress={()=>navigation.goBack()}

            />
            <Button
                title='Go back to first screen in stack'
                onPress={()=>navigation.popToTop()}
            /> */}
            
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