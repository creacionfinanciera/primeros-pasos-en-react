// todas las etiquetas siempre deben estar dentro de una etiqueta padre original, de lo contrario nos saldrá un error
// pero no tiene sentido usar un 'div' que no necesitamos, para eso React creo 'Fragment'
// y lo que hace es renderizar como agrupador en la consola, el 'div root'

// import { Fragment } from "react"

// export const FirstApp = () => {
//     return (
//         
//         <Fragment>
//             <h1>Luis Fernando</h1>
//             <p>Soy un subtítulo</p>   
//         </Fragment>
//     )
// }

// tambien se puede agrupar de esta manera <></> y funciona igual
// export const FirstApp = () => {
//     return (
//         // para incluir una expresión de javascript dentro de una etiqueta HTML, vamos a usar las llaves
//         // podemos incluir cualquier expresión, siempre y cuando no sea un objeto
//         <>
//             <h1> { 2 + 3 } </h1>
//             <p>Soy un subtitulo</p>
//         </>
//     )
// }

// algo mas que tiene React, es que si una variable no tiene incidencia dentro del código que se va a renderizar, se puede colocar afuera
// const newMessage = 'Luis';
// const newMessage = 123;
// const newMessage = true;
// const newMessage = [1,2,3,4,5,6,7,8,9,10];

// como no permite renderizar directamente un objeto, puedo tener acceso a sus atributos de la siguiente manera
// <h1> { newMessage.message } </h1>
// O puedo tener acceso a el convirtiendolo en formato JSON, y cambiando la etiqueta para verlo mejor
// <code> { JSON.stringify(newMessage) } </code>
// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Luis'
// };

// tambien podemos colocar funciones por fuera e imprimir el resultado de esas funciones
// pero debemos tener cuidado que la función no sea asincrona, porque las promesas se manejan como objetos, y React no puede renderizar objetos
// mientras sea posible, es mejor colocar las funciones por fuera, ya que ocupara menos espacio en memoria
// mientras que el comportamiento interno del componente no dependa de esa variable
// const getResult = (a, b) => {
//     return a + b;
// }

// export const FirstApp = () => {
//     return (
//         <>
//             <h1> { getResult(1, 10) } </h1>
//             <p>Soy un subtitulo</p>
//         </>
//     )
// };

// Colocar estilos de CSS
// export const FirstApp = () => {
//     return (
//         <>
//             <h1>Fernando</h1>
//             <p>Soy un subtítulo</p>
//         </>
//     )
// }

// Comunicación entre componentes props
// Es bien raro que veamos la palabra "props" ahí, usualmente la desestructuran, que es lo que vamos a seguir haciendo nosotros después de esta clase, pero lo importante es que recibimos como argumento las props, que son un objeto

//export const FirstApp = ( props ) => {
    
    // Estas properties, me permiten establecer un canal de comunicación entre el padre de mi 'FirstApp', que sería en el archivo 'main.jsx', la etiqueta del modo estricto, y el hijo, 'FirstApp'
    // Entonces, estas properties es información que fluye desde el componente padre, hacia este componente hijo
    // Podemos ir al navegador, en la consola, y la parte de 'Components', dando clic a 'FirstApp', y en props, definimos:
    // title: "Hola, Soy Goku!", damos enter, e inmediatamente se imprime en la consola
//    console.log(props);
    
//    return (
//        <>
//            <h1>{ props.title }</h1>
//            <p>Soy un subtítulo</p>
//        </>
//    )
//}

// de esta manera desestructurada es como nosotros lo vamos a trabajar, para acceder directamente a la propiedad que nosotros necesitamos
// export const FirstApp = ({ title }) => {
//     return (
//         <>
//             <h1>{ title }</h1>
//             <p>Soy un subtítulo</p>
//         </>
//     )
// }

// si yo quiero que si no me envian titulo, siempre me aparezca por defecto algo, y si me envian titulo tome el dato enviado
// export const FirstApp = ({ title = 'Hola, Soy Luis Fernando' }) => {
//     return (
//         <>
//             <h1>{ title }</h1>
//             <p>Soy un subtítulo</p>
//         </>
//     )
// }

// pero si yo quiero que siempre reciba un valor, me puedo ir a mi documento 'main.jsx', y cuando estoy llamando mi componente con la etiqueta, puedo definirlo así:
// <FirstApp title="Hola, soy Goku" subTitle={ 123 } /> 
// export const FirstApp = ({ title, subTitle }) => {
//     return (
//         <>
//             <h1>{ title }</h1>
//             <p>{ subTitle + 1 }</p>
//         </>
//     )
// }


// PROPTYPES, los tipos de las properties son una propiedad superpoderosa que se nos ofrece, si estamos trabajando con CRA ya lo trae por defecto, pero VITE no lo trae por defecto, hay que instalarlo
// Si no enviamos las properties en el archivo 'main.jsx' nos va a salir un error, y ahi es donde entran las proptypes
// Para que la siguiente importación funcione, ya tenemos que tener las proptypes instaladas para Vite
// npm install prop-types, dentro de la carpeta del proyecto en la terminal

// import PropTypes from 'prop-types';

// export const FirstApp = ({ title, subTitle }) => {
    
//     // al hacer esta condición en la consola me sale el error, pero esta forma de hacerlo es compleja y aumenta el código de mi componente innecesariamente
//     // if ( !title ) {
//     //     throw new Error('El title no existe')
//     // }

//     return (
//         <>
//             <h1>{ title }</h1>
//             <p>{ subTitle }</p>
//         </>
//     )
// }
// recordemos que las proptypes nos sirven para definirle el tipo a las properties
// y asi las definimos, con 'PropTypes' ya estoy utilizando el paquete que acabamos de instalar
// ahora, si enviamos la propertie con el tipo correcto, en el archivo 'main.jsx' la dejara pasar, de lo contrario sacara un error
// FirstApp.propTypes = {
//     title: PropTypes.string
// }
// Pero si quiero que sea obligatorio enviar la property, y que me salga un error en la consola ...
// Y según el tipo de dato que le ponga al enviar la property en el archivo 'main.jsx' me sacará el error
// FirstApp.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.number.isRequired,
// }

// DEFAULT PROPS, si queremos enviarle valores por defecto
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {
    
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Luis Cantor' 
}