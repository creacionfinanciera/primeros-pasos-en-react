// importamos el archivo de donde nos vamos a traer la función que queremos probar
import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

// escribimos la prueba
describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => {

        // quiero probar el valor de retorno de la función 'getUser', recordemos que para eso debo exportarla en el archivo de javascript, si no la exporto no la puedo tomar

        // creo una variable, y me traigo el objeto directamente de la función que quiero probar
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'    
        };

        // definimos una variable, llamando la función a evaluar
        const user = getUser(); 
        // si hacemos un console.log lo vamos a ver directamente en la terminal
        console.log(user);

        // ahora, hagamos la comparación de que 'testUser' debe ser igual a 'user'
        // expect( testUser ).toBe ( user );
        // la prueba falla y nos dice lo siguiente
        // If it should pass with deep equality, replace "toBe" with "toStrictEqual"
        // javascript funciona que aunque tengamos objetos con propiedades exactamente iguales, estan apuntando a valores de memoria diferentes, a diferencia de los primitivos donde se compara su valor
        // entonces vamos a cambiar el "toBe" por "toStrictEqual" o por "toEqual"
        expect( testUser ).toEqual( user );

    });

    // vamos a hacer otra prueba
    // recuerden que la función 'getUsuarioActivo' recibe el nombre cómo parametro, que es el argumento que le vamos a mandar aqui con la variable 'name', entonces yo estaría esperando un objeto en el cual tambien venga ese nombre, es decir, que si yo le mando a la función el 'name' que es igual a 'Luis', esta parte del 'name' tambien tiene que ser evaluada en el expect 
    test('getUsuarioActivo debe de retornar un objeto', () => {

        // 1. inicialización
        const name = 'Luis';

        // 2. estímulo
        const user = getUsuarioActivo( name );
        // hacemos el console.log como para verificar si esta trayendo a la terminal el objeto
        console.log(user)

        // 3. observar el comportamiento ... esperado
        // aqui vamos a comparar el name que se espera con el nombre que se recibe
        expect( user ).toEqual({
            uid: 'ABC567',
            username: name,
        });

    });


});
