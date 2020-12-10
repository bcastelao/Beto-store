import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
let App =() => {
  return(

  )
}
*/
/*let App = () => <h1 
                  style={{color:'#ff0000', fontSize:"20px"}} 
                  className="title"
                  onClick={()=>{console.log('Hola Mundo')}}>
                    Hola Que tal
                </h1>*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();