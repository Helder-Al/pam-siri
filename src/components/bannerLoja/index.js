import React,{Fragment} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './style.js';

export default function bannerLoja(){
    return(
        <>
        <Text style = {styles.textBanner}> Em Cartaz </Text>
        <Image style = {styles.bannerLoja} source = {require(`../../img/bannerLoja.jpg`)} />
        </>
    );
}