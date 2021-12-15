import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const title ="TNI"
    const isTitle =false;

    const showData = ()=> <Text>hello world</Text>

    return (
        <View >
            <Text style={{color:'blue',fontSize:20}}>Thai-Land-dand</Text>
            {
                isTitle === true && <Text>{title}</Text>
            }
            {
                isTitle === true //กำหนดเงื่อนไช
                ?<Text>{title}</Text>//ถ้าเงื่อนไขเป็นจริง
                :<Text>wow solo</Text>//เป็นเท็จ
            }
            { showData()}
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({})
