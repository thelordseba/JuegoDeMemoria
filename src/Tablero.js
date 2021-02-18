import React, { Component } from 'react';
import './Tablero.css';
import Carta from './Carta';

export default class Tablero extends Component{
 
    render(){        
        return(
            <div className='tablero'>
                {
                    this.props.baraja.map((carta, index) => {
                        const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;             //En esta variable voy a calcular si la carta que viene del map esta en el array de parejaSeleccionada del estado de la app. Va a guardar un true o flase.                                                              
                        return <Carta 
                                key = {index}                                                              //Esto lo paso para evitar el warning que sale
                                icono = {carta.icono} 
                                estaSiendoComparada = {estaSiendoComparada}                                                                
                                seleccionarCarta = {()=> this.props.seleccionarCarta(carta)}
                                fueAdivinada = {carta.fueAdivinada}
                               />;
                    })
                }                
            </div>
        );
    }
}