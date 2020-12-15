import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
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
      <section>
        <div className="container">
          <ItemCount stock={5} initial={1} />
          <ItemCount stock={8} initial={1} />
          <ItemCount stock={3} initial={1} />
          <ItemCount stock={3} initial={1} />
        </div>
      </section>
      </>
    );
  }  
}
export default App;