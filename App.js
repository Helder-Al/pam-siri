import { StatusBar } from 'expo-status-bar';
import {Text,ScrollView, View } from 'react-native';
import styles from './AppStyle.js';

//Componentes
import BannerLoja from './src/components/bannerloja/index.js';
import NavBar from './src/components/navbar/index.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar></NavBar>
      <ScrollView style={styles.scroller}>
      <BannerLoja></BannerLoja>
      </ScrollView>
      
      
    </View>
  );
}


