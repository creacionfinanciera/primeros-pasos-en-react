// definimos nuestro funcional component, que basicamente es nuestra aplicación
// la primera letra del nombre de la función siempre deber ir con mayuscula
// En este archivo es dónde estará nuestra aplicación, pero estos compopnentes los vamos a importar desde el 'main.jsx'

// Anteponemos la palabra reservada "export"
// export function App() {
//     // equivalente a ... document.createElement()
//     return <h1>Hola Mundo</h1>;
// }

// Este seria con una función tipo flecha
// export const HelloWorldApp = () => {
//     return (
//         <h1>Hello World App</h1>
//     );
// }

// La anterior función flecha se podría simplificar de la siguiente manera, pero a veces es más sano conservar la estructura original para entender mejor el código
// export const HelloWorldApp = () => <h1>Arrow Function</h1>

// Volvemos a nuestra estructura original y la que vamos a trabajar
export const HelloWorldApp = () => {
    
    // Porque usualmente en este espacio van a ir más funciones
    
    return (
        <h1>Hello World App</h1>
    );
}



