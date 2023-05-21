import React,{Fragment} from 'react';
import { Image,Button,Text, View } from 'react-native';
import '../../css/style.css';


export default function bannerLoja(){
    return(
        <nav className='nav'>
            <ul className="ul">
                    <a href="#index">Início</a>
                    <a href="#sobre">Cardápio</a>
                    <a href="#projetos">Desenvolvedores</a>
                    
            </ul>
        </nav>
        
        
        
    );
}