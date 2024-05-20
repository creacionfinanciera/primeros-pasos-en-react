import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => { 
    
    test('getSaludo debe retornar "Hola Fernando"', () => {     

        const name = 'Fernando';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }!!!`) 

    });   

});

// Si por ejemplo le pongo "!!!" al final nuestra prueba va a fallar, y el resultado nos va a mostrar lo que estabamos esperando y lo que recibimos

// Expected: "Hola Fernando!!!"
// Received: "Hola Fernando"

// Entonces nosotros empezamos a pensar: "Esto puede significar que estoy esperando los signos de admiración y no debería de venir, o que alguien intencionalmente o accidentalmente borró el código que hacía eso", es decir, que getSaludo tenía los signos de admiración y fueron removidos

// export function getSaludo(nombre) {
//     return 'Hola ' + nombre + '!!!';
// }

// Notemos que al poner los signos de admiración en la función original, en el archivo de javascript, inmediatamente la prueba pasa

// Esto es algo que nos va a ayudar a nosotros a que nuestro código funcione el día de mañana como nosotros lo estamos dejando el día de hoy

// Que hacer?, nosotros somos los únicos que podemos saber cual es la solución, porque fuimos nosotros quienes escribimos el código
