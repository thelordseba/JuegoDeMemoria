import React, { Component } from 'react';
import './Tablero.css';
import Carta from './Carta';

export default class Tablero extends Component{
 
    render(){
        const cartas = this.props.baraja;
        return(
            <div className='tablero'>
                {
                    cartas.map(carta => <Carta icono={carta.icono}/>)
                }                
            </div>
        );
    }
}