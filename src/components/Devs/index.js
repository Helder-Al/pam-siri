import React from 'react';
import { Image,Text,TouchableOpacity } from 'react-native'
import '../../css/style.css'

export default function Devs({imagem, nome, vulgo}) {
    
    return(
        <TouchableOpacity className="card"> 
        <section className='devs' id="devs">
        <div className="column">
  
        <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={(`../../img/${imagem}`)} alt='imagina uma foto incrível aqui'/>
    </figure>
  </div>
      <div className="media-content">
        <p className="title is-4">{nome}</p>
        <p className="subtitle is-6">{vulgo}</p>
    </div>
    </div>
    </div>
    </section>
        </TouchableOpacity>
    )
}