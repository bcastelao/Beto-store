import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer titulo="Titulo de la Tienda enviado por props"/>

    </>
  );
}
export default App;