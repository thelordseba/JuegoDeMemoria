import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tablero from './Tablero';
import construirBaraja from './utils/construirBaraja';

const getEstadoInicial = ()=>{
  const baraja = construirBaraja();
  return {
    baraja: baraja,
    parejaSeleccionada: [],                                              
    estaComparando: false
  }
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Tablero 
          baraja = {this.state.baraja} 
          parejaSeleccionada = {this.state.parejaSeleccionada}
          seleccionarCarta = {(carta)=> this.seleccionarCarta(carta)}                                 //Paso al tablero por props el método seleccionarCarta 
        />
      </div>
    );
  }

  seleccionarCarta(carta){
    if(this.state.estaComparando ||                                                        //Condiciones en las que el usuario no deberia seleccionar una carta
       this.state.parejaSeleccionada.indexOf(carta) > -1 || 
       carta.fueAdivinada){  
         return;
    }
    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta]; 
    this.setState({parejaSeleccionada});                                                    //Actualizo el estado

    if(parejaSeleccionada.length === 2){
      this.compararParejas(parejaSeleccionada);
    }
  }

  compararParejas(pareja){    
    this.setState({estaComparando: true});
    setTimeout(()=>{
      const [primeraCarta, segundaCarta] = pareja;                                         //Desctructring
      let baraja = this.state.baraja;

      if(primeraCarta.icono === segundaCarta.icono){
        baraja = baraja.map((carta)=>{          
          if(carta.icono !== primeraCarta.icono){
            return carta;
          }else{
            return {...carta, fueAdivinada: true};
          }
        });
      }

      this.setState({
        baraja: baraja,
        parejaSeleccionada: [],
        estaComparando: false        
      });

    }, 1000);
  }

  verificarGanador(){    
  }

}

export default App;






//Componente Funcional

// import './App.css';

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
