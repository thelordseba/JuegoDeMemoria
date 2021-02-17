import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Tablero from './Tablero';
import construirBaraja from './utils/construirBaraja';

const getEstadoInicial = ()=>{
  const baraja = construirBaraja();
  return {
    baraja : baraja
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
        <Tablero baraja={this.state.baraja}/>
      </div>
    );
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
