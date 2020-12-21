import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//function App() {
  class App extends React.Component {
    /*
    manejo cambio estado en componentes tipo clase
    constructor(){
      super();
      this.state = {
          titulo : "Titulo de la Tienda enviado por props"
      }
    }
    cambiarTitulo =() =>{
      this.setState({ titulo: "Nuevo"  })
    }
    dentro del click llamamos a la funcion con this.cambiarTitulo
    */
    constructor(){
      super();
      this.state = {
          titulo : "Titulo de la Tienda enviado por props"
      }
    }
  render(){  
    return(
      <>
      <NavBar/>
      <ItemListContainer titulo={this.state.titulo}/>
      </>
    );
  }  
}
export default App;