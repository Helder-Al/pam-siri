import React,{Fragment} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './style.js';

export default function bannerLoja(){
    return(
        <>
        
        
        <Image style = {styles.bannerLoja} source = {require(`../../img/bannerLoja.jpg`)} />
        <Text style = {styles.textBanner}> Em Cartaz </Text>
        <View style = {styles.header}></View>
        
        </>
    );
}