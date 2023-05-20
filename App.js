import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, Button,View } from 'react-native';
import styles from './AppStyle.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Componentes
import BannerLoja from './src/components/bannerloja/index.js';
import NavBar from './src/components/navbar/index.js'


const Stack = createNativeStackNavigator();

//config das telas
function Home({navigation}){
  return(
    <View style={styles.container}>
      
        <NavBar></NavBar>
        <BannerLoja></BannerLoja>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Devs')}
      />
        <StatusBar style="auto" />

      </View>
      
    
    
  )
}

function Devs({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.container}>
        <NavBar></NavBar>
        <StatusBar style="auto" />
      </View>
      <Button 
        title='dev'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
    
  )
}

function App() {
  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Devs" component={Devs}/>
        </Stack.Navigator>
        
    </NavigationContainer>
  );

}


export default App;