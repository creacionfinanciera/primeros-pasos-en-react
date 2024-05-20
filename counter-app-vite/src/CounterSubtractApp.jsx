// CONTADOR CON RESTA y RESET
import { useState } from 'react';
import PropTypes from 'prop-types';

// IMPORTANTE!!
// Cada vez que hacemos clic en uno de los botones, React salta a la función respectiva, ej: 'handleSubtract', la ejecuta y sabe que hay un 'setCounter' que es una función atada a un estado del componente, ej: 'useState', y asi se da cuenta que hubo un cambio en el estado, y cuando llega al final de la función, entonces dispara la renderización del componente nuevamente
// Y cuando hace la renderización del componente de nuevo, vuelve a llamar todo por completo, como si fuera una especie de bucle 

export const CounterSubstractApp = ({ value }) => {

    // Con este console.log podemos evidenciar como se imprime doblemente el Render, entonces cuando cambia el estado, literalmente se vuelve a ejecutar el componente, y el 'useState' no cambia de valor, pero si tenemos otra función asincrona, cada vez qye cambie el state se va a volver a dispara
    console.log('Render');
    // API ... FETCH ....
    // Hay Hooks especializados en controlar esto, pero en este caso es muy importante que lo tengamos en cuenta, porque si estamos programando de una manera desordenada, podemos llegar a diparar efectos secundarios sin desearlo
    
    const [ counter, setCounter ] = useState( value );
    
    // Esta es la función para sumar
    const handleAdd = () => { 
        setCounter( counter + 1 ); 
    }

    // Esta es la función para restar
    const handleSubstract = () => { 
        setCounter( counter - 1 ); 
    }

    // Esta es la función para resetear
    const handleReset = () => { 
        setCounter( value ); 
    }

    return (
        <>
            <h1>CounterSubstractApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button aria-label="btn-reset" onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterSubstractApp.propTypes = {
    value: PropTypes.number,
}