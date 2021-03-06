//12/8
// import React from 'react'
// import { Touchable } from 'react-native';
// import ImageWithTextInput from './components/ImageWithTextInput';
// import TextInputReview from './components/TextInputReview';
// import ButtonExample from './components/ButtonExample';
// import TextInputPractice1 from './components/TextInputPractice1'
// import TouchableExample from './components/TouchableExample';
// import TouchablePractice from './components/TouchablePractice';npx

// const App=()=>{
 

//   return(
//     <TextInputReview/>
//     <ImageWithTextInput/>
//     <ButtonExample/>
//     <TextInputPractice1/>
//     <TouchableExample/>
//     <TouchablePractice/>
//     )
// }

//   export default App;

//12/15  recap
//import React from 'react'
// import { StyleSheet, Text, View,Button } from 'react-native'
// import Logo from'./components/Logo'
// import Footer from './components/Footer'
// const App = () => {
//   const showData =()=>{
//     alert('hello code')
//   }
//   return (
//     <View>
//     <Logo/>
//     <Text>Hello React native</Text>
//     <Button title='Click' onPress={showData}/>
//     <Footer/>
//     </View>
    
//   )
// }

// export default App
// const styles = StyleSheet.create({})

/*
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//import AlertExample from './components/AlertExample'
//import ModelExample from './components/ModelExample'
//import WebViewExample from './components/WebViewExample'
import WebViewLoading from './components/WebViewLoading'
const App = () => {
  return (
    //<AlertExample/>
    //<ModelExample/>
   //<WebViewExample/>
   <WebViewLoading/> 
   )
}
export default App
const styles = StyleSheet.create({})
*/


import React from "react";
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreens from "./screen/HomeScreen"; 
import AboutScreen from "./screen/AboutScreen";
import FirstPage from"./screen/FirstPage";
import SecondPage from"./screen/SecondPage";

// HomeScreen/AboutScreen
const Stack =createNativeStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#135790',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreens} 
        options={{title:'????????????????????????'}}/>
        <Stack.Screen name="About" component={AboutScreen} 
        options={{title:'???????????????????????????'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App

// FirstPage/SecondPage
// const Stack =createNativeStackNavigator();

// const App=()=>{
//   return(
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="FirstPage"
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#135790',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//         <Stack.Screen name="FirstPage" component={FirstPage} 
//         options={{title:'FirstPage'}}/>
//         <Stack.Screen name="SecondPage" component={SecondPage} 
//         options={{title:'Second Page'}}/>

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
