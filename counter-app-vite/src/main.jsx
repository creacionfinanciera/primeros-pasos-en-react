// instalamos la importación de React
import React from 'react';
import ReactDOM from 'react-dom/client';

// importamos nuestros "funcional components", que se encontrarán en otro archivo
import { CounterSubstractApp } from './CounterSubtractApp';
// import { FirstApp } from './FirstApp';

// imortamos tambien nuestro archivo de estilos CSS
import './styles.css';

// y finalmente renderizamos nuestra aplicación
// y esto lo que hace es buscar en el "index.html", la etiqueta que tiene el root
// render indica que vamos a renderizar la función App 
ReactDOM.createRoot(document.getElementById('root')).render(
    // se aconseja que siempre que rendericemos lo hagamos en el modo estricto
    <React.StrictMode>
        <CounterSubstractApp value={ 20 } />
        {/* <FirstApp title="Hola, Soy Goku" /> */}
    </React.StrictMode>

)
