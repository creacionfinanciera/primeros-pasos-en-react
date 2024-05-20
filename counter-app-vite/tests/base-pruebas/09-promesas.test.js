import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un heroe', ( done ) => {

        const id = 1;
        getHeroeByIdAsync( id )
            // como esta es una función asíncrona debemos usar el '.then'
            // por como funciona 'jest' y en general es que por defecto todas son "síncronas", es decir, empieza a ejecutar todo éste código en secuencia, y cuando encuentra una promesa simplemente ejecuta la promesa, y se queda ejecutandose en el fondo, pero luego sigue ejecutando todo el código
            // Llega al final, despues del parentesis de cierre del '.then', y dice todo salio bien porque no hay ningún error, y por eso por 1 segundo nosotros vemos que la prueba pasa, pero realmente nosotros tenemos que esperar la respuesta de nuestra promesa
            // Para eso enviamos 'done' como parametro, y lo usamos para decirle que ya terminó    
            .then( hero => {

                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                // aqui termina
                done();
            })

    })

    test('getHeroeByIdAsync debe de obtener un error si heroe no existe', ( done ) => {

        const id = 100;
        // cómo previamente sabemos que el 100 no existe, concluimos que nunca se va a llamar el then, y obviamente eso es lo que quiero evaluar
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toBeFalsy();
                done();    
            })
            .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el heroe ${ id }`);
                done();
            });

    })


});