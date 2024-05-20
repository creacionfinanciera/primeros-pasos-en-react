import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    // aqui vamos a evaluar que la información de un heroe en específico corresponda
    test('getHeroeById debe de retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        // usualmente lo que vamos a buscar es que las pruebas sean independientes, si las pruebas tienen alguna relación entre si, podemos tener tantos expect como queramos, y apenas llegue a un expect que no pasa, nos va a mostrar especificamente el error
        // expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        // expect( hero ).toEqual({ id: 2, name: 'Batman', owner: 'DC' });
        // expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    // ahora hagamos una evaluación de que que pidamos un heroe que no exista
    test('getHeroeById debe de retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById( id );
        console.log( hero );

        // esta es una forma corta de evaluar que esto sea null, undefined o false
        expect( hero ).toBeFalsy();

    });

    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado
    test('getHeroesByOwner debe de retornar héroes de DC', () => {

        const owner = 'DC';    
        const heroes = getHeroesByOwner( owner );
        const lengthDC = 3;
        console.log( heroes )
        console.log( lengthDC )

        // espero que la cantidad de Heroes de DC sea de 3
        expect( lengthDC ).toEqual( heroes.length );

    });

    test('getHeroesByOwner debe de retornar héroes de Marvel', () => {

        const owner = 'Marvel';    
        const heroes = getHeroesByOwner( owner );
        const lengthMarvel = 2;
        console.log( heroes )
        console.log( lengthMarvel )

        // espero que la cantidad de Heroes de DC sea de 3
        expect( lengthMarvel ).toEqual( heroes.length );

        

    });


    
    // Debe de retornar un arreglo con los héroes de Marvel
    // Length === 2





    

}); 