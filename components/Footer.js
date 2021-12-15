import React ,{useState,useEffect}from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Footer = () => {

const users = [
    {id:1,name:'Ora'},
    {id:2,name:'Mina'}
]

const [count,setCount] = useState(0);//const count =0
const [title,setTitle]=useState('hello')
//update alway if re-render
useEffect (()=>{
    console.log('use effect1')
})
//work one time ex. call data from backend
useEffect (()=>{
    console.log('use effect2')
},[])
//if value in paramiter change it will render   paramiter in this->[]
useEffect (()=>{
    console.log('use effect3')
},[count])
    return (
        <View>
            <Text style={styles.title}>Thai nichi institute of technology {count}</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}>{index+1}. {user.name}</Text>
                })
            }
            <Button title='Press' onPress={ ()=>{setCount(count+1)

            }}/>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    title:{
        fontSize:25,
    }
})
