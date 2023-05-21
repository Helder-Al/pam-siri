import React,{Fragment} from 'react';
import '../../css/style.css';


export default function bannerLoja(){
    return(
        <nav className='nav'>
            <div className='textframe'>
        <div className='textBanner'>Seja bem-vindo Marujo(a)</div>
        </div>
            <ul className="ul">
                    <a href="#index">Início</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#cardapio">Cardápio</a>
                    <a href="#devs">Desenvolvedores</a>
                    
            </ul>
        </nav>
        
        
        
    );
}