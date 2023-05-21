import { StatusBar } from 'expo-status-bar';
import {Text,ScrollView, View } from 'react-native';
import styles from './AppStyle.js';
import { FlatList } from 'react-native-web';
import './src/css/style.css'

//Componentes
import BannerLoja from './src/components/bannerloja/index.js';
import NavBar from './src/components/navbar/index.js'
import CarD from './src/components/cardsmenu/index.js';
import lanches from './src/data/lanches.js'
import Sobre from './src/components/sobre/index.js'
import Devs from './src/components/Devs/index.js';
import DevData from './src/data/devsdata.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavBar></NavBar>
      <ScrollView style={styles.scroller}>
      <BannerLoja></BannerLoja>
      <Sobre></Sobre>
      <section className="sobre" id='cardapio'> 
      <div className='container-right'>
      <div className="sobre-text">
        <h3> Cardápio</h3>   
        <p>Bem-vindo ao Siri Cascudo, o lendário restaurante da Fenda do Biquíni! Aqui, mergulhe em uma experiência gastronômica única, repleta de sabor e diversão. Preparamos com carinho um cardápio que combina o melhor da culinária submarina com a magia do universo. Nossos hambúrgueres de siri são a estrela do show, com receitas irresistíveis que irão encantar o seu paladar.
          </p>    
      </div>
      </div>
      </section>
      <FlatList
      horizontal={false}
      numColumns={5}
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
      <section className="sobre" id='devs'> 
      <div className='container'>
      <div className="sobre-text">
        <h3> Devs</h3>  
        <p>Bem-vindos, bravos desenvolvedores, assim como o lendário restaurante da Fenda do Biquíni, somos uma equipe unida, pronta para enfrentar desafios e criar soluções extraordinárias.

Neste local de trabalho único, você encontrará uma mistura de habilidades e talentos, assim como os ingredientes especiais que compõem nossos pratos deliciosos.

Assim como Bob Esponja com seu talento culinário, esses são os mestres da criação de códigos inovadores. Juntos, exploraremos novas tecnologias, desvendaremos problemas complexos e criaremos soluções que encantarão nossos clientes e usuários.
          </p>     
      </div>
      </div>
      </section>
      <FlatList
      horizontal={true}
      data={DevData}
      keyExtractor={(item) => item.id}
      renderItem = { ({item}) => (

      <Devs
        
        nome = {item.nome}
        vulgo={item.vulgo}
        
      />
      )}
      />
      </ScrollView>
      
      
    </View>
  );
}


