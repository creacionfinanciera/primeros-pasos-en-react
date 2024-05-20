import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar un string y un número', () => {

        // Primero preparamos nuestro sujeto de pruebas, que sería el valor de retorno de mi función
        // const retorno = retornaArreglo();
        // console.log(retorno)
        
        // Cómo yo me quiero asegurar que esta función regresa strings al inicio y números al final, entonces podría hacer la desestructuración del arreglo
        const [ letters, numbers ] = retornaArreglo();
        console.log( letters );
        console.log( numbers );

        // Ahora hagamos los expect respectivos o las aserciones respectivas
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        // Otra forma de hacerlo
        console.log( typeof letters )
        console.log( typeof numbers )

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );

        // Un forma más de hacerlo
        expect( letters ).toEqual( expect.any(String) );


    });


});