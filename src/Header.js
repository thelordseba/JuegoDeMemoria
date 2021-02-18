import React, { Component } from 'react';
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <header>
                <div className='titulo'>Juego de coincidencias</div>
                <div>
                    <button className='boton-reiniciar' onClick={this.props.reiniciarJuego}>
                        Reiniciar
                    </button>
                </div>
                <div className='titulo'>Intentos: {this.props.intentos} </div>
            </header>
        );
    }
}