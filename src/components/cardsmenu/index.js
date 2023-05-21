import React from 'react';
import { Image,Text,TouchableOpacity } from 'react-native'
import '../../css/style.css'

export default function Card({imagem, nome, preco, categ, desc, ava}) {
    
    return(
        <TouchableOpacity className="card"> 
        <div className="column">
  
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={require(`../../img/${imagem}`)}/>
    </figure>
  </div>
      <div className="media-content">
        <p className="title is-4">{nome}</p>
        <p className="subtitle is-6">{categ}</p>
      
    

    <div className="card-content">
      <div className='content'>{desc}</div>
      <div className="content">{preco}
      <div className="content">{ava}</div></div>
    </div>
    </div>
    </div>
    </div>
        </TouchableOpacity>
    )
}