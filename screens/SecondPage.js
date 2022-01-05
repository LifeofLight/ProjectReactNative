import React,{ useState} from 'react'
import { StyleSheet, Text, View,Button,TextInput } from 'react-native'

const SecondPage = ({route}) => {
    const {Name}=route.params;

    return(
        <View style={styles.container}>
            <Text style={styles.heading}>React Native Pass Value From One Screen</Text>
            <Text style={styles.textstyle}>Values passed from First page : {Name}</Text>
        </View>
        
    )
}

export default SecondPage

const styles =
StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
padding: 20,
},
heading: {
fontSize: 25,
textAlign: 'center',
marginVertical: 10,
},
textStyle: {
textAlign: 'center',
fontSize: 16,
marginVertical: 10,
},

});