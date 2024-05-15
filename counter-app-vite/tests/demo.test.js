// Creamos nuestra primera prueba
// test('Esta prueba no debe fallar', () => {

//     if( 0 === 1 ) {
//         throw new Error('No puede dividir entre cero')
//     }

// })

// Jest nos ayuda para no tener que volver a escribir código de la anterior manera

// Se pueden hacer varios 'describe' en un mismo archivo de pruebas, pero se recomienda hacer uno solo por archivo
describe('Pruebas en <DemoComponent />', () => { 

    test('Esta prueba no debe fallar', () => {

        // 1. inicialización
        const message1 = 'Hola Mundo';
    
        // 2. estímulo
        const message2 = message1.trim();
    
        // 3. observar el comportamiento ... esperado
        expect( message1 ).toBe( message2 );
        
    });

});

