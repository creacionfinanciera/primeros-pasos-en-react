// // EVENTOS CLICK, COLOCAR UN BOTÓN

// import PropTypes from 'prop-types';

// // Se aconseja que si la función no tiene ninguna interacción, en este caso con el 'value', la función esté fuera del componente, pero en este caso la vamos a dejar adentro

// export const CounterApp = ({ value }) => {

//     // TIPO TRADICIONAL
//     // function handleAdd(event) {
//     //     console.log(event)
//     // }

//     // TIPO FLECHA
//     // const handleAdd = ( event ) => {
//     //     console.log(event)
//     // }

//     // FUNCION PARA TRATAR DE QUE EL CONTADOR FUNCIONE
//     // const handleAdd = () => {
//     //     console.log('+1');
//     //     value = 1000;
//     //     console.log(value);
//     // }

//     return (
//         <>
//             <h1>CounterApp</h1>
//             <h2> { value } </h2>
            
//             {/* normalmente la referencia a la función se mandaría así, adentro del onClick */}
//             {/* (event) => handleAdd(event) */}

//             {/* pero cuando tenemos el caso de que tenemos un argumento, y ese argumento para lo único que sirve es para pasarselo a una función, podemos obviar enviar la referencia al evento y solo enviamos la referencia a la función */}
//             {/* handleAdd */}

//             <button onClick={ handleAdd }>
//                 +1
//             </button>
//         </>
//     )
// }

// CounterApp.propTypes = {
//     value: PropTypes.number,
// }


// USE STATE - HOOK

// importamos nuestro primer hook
import { useState } from 'react';

import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    // INCORPORAMOS NUESTRA FUNCION
    // trabajamos con la desestructuración
    // el valor inicial quiero que sea '0'
    // counter es la variable con el valor inicial y setCounter es para cambiar el valor de 'counter'
    const [ counter, setCounter ] = useState( value );
    
    // esta es la función mediante la que le vamos a sumar 'uno'
    // const handleAdd = () => {
        // cuando nosotros llamamos un 'setCounter' lo que hacemos es decirle a React, el estado que tenemos en 'useState' cambió, por consecuencia tienes que volver a ejecutar la renderización del componente, pero el estado que teniamos en la desestructuración se mantiene
        // react es muy eficiente con todo este proceso, unicamente lo que se cambia es la etiqueta <h2>16</h2>, por ejemplo
        // setCounter( counter + 1 ); 
    // }

    // esta sería otra manera de plantear la función y trabaja bien
    const handleAdd = () => {
        setCounter( (c) => c + 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}