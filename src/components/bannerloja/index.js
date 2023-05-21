import React,{Fragment} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './style.js';

export default function bannerLoja(){
    return(
        <div id='index'>
            
        <Image style = {styles.bannerLoja} source = {require(`../../img/bannerLoja.jpg`)} />
        
        </div>
    );
}