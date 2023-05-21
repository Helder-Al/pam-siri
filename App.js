import { StatusBar } from 'expo-status-bar';
import {Text,ScrollView, View } from 'react-native';
import styles from './AppStyle.js';
import { FlatList } from 'react-native-web';

//Componentes
import BannerLoja from './src/components/bannerloja/index.js';
import NavBar from './src/components/navbar/index.js'
import CarD from './src/components/cardsmenu/index.js';
import lanches from './src/data/lanches.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar></NavBar>
      <ScrollView style={styles.scroller}>
      <BannerLoja></BannerLoja>
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={lanches}
      keyExtractor={(item) => item.id}
      renderItem = { ({item}) => (

      <CarD
        
        nome = {item.nome}
        preco = {item.preco}
        categ = {item.categ}
        desc= {item.desc}
        ava= {item.ava}
        imagem={item.imagem}
        
      />
      )}
      />
      </ScrollView>
      
      
    </View>
  );
}


