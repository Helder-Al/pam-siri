import React,{Fragment} from 'react';
import { Image,Button,Alert,Text, View } from 'react-native';
import styles from './style.js';

export default function nvbar(){
    return(
        <Button style={styles.button}
        title='Home'
        color='black'
        onPress={() => Alert.alert('simples')}
        />
        
        
        
    );
}