import { getByTestId, render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {

    test('debe de hacer match con el snapshot', () => {

        // render es una función que literalmente renderiza el componente en memoria
        // const title = 'Hola, soy Goku';
        // const { container } = render( <FirstApp title={ title }/> )
        // al ejecutar '.toMatchSnapshot' crear en VSC automaticamente una carpeta '__snapshots__' con el archivo 'FirstApp.test.jsx.snap'
        // la primera vez que se ejecuta el snapshot, toma una fotografia de ese componente y lo deja almacenado fisicamente ahí, en ese archivo
        // sirve para, si el dia de mañana alguien accidentalmente quita el título del componente, y grabo lo cambios la prueba va a fallar
        // si es correcto que el componente quede con ese cambio, le doy la techa "u" para que actualice el snapshot, y la prueba queda corriendo bien
        // si observamos el archivo del snapshot vemos que la etiqueta del título ya no esta
        // esta prueba se asegura de que mi componente el dia de mañana no vaya a fallar porque alguien lo manipuló o a alguien se le olvidó ponerle algo, y eso evalúa literalmente todo, si ustedes tienen clases, si ustedes añadieron atributos, propiedades, o cualquier cosa en el html, entonces el snapshot se va a encargar de evaluar el producto de su componente
        // expect( container ).toMatchSnapshot();

        // eventualmente nosotros querremos hacer la prueba del snapshot hasta que sepamos que el componente no va a recibir mas modificaciones, la idea es hacer la prueba del snapshot no al principio o si estamos en desarrollo, porque nos va a dar muchos dolores de cabeza

    });

    test('debe de mostrar el título en un h1', () => {

        const title = 'Hola, soy Goku';
        const { container, getByText } = render( <FirstApp title={ title }/> )
        
        // estaria esperando que busque algo que haga match con el texto que le estoy pasando con variable, en el elemento que estoy renderizando
        // esta prueba únic que esta haciendo es asegurarse que al renderizarse si exista este título
        expect( getByText(title) ).toBeTruthy();

        // ahora de esta manera si estoy asegurandome que este dentro de un h1
        const h1 = container.querySelector('h1');
        console.log(h1.innerHTML);
        expect(h1.innerHTML).toBe( title );
        // tambien lo podemos hacer asi
        expect(h1.innerHTML).toContain( title );

    });

    // ahora quiero evaluar especificamente el elemento que tiene el title, sin importar el tipo de etiqueta que sea, entonces lo que hacemos en nuestra aplicación es que le ponemos en la etiqueta el atributo 'data-testid'
    test('debe mostrar el título sin importar el tipo de etiqueta', () => {

        const title = 'Hola, soy Goku';
        const { container, getByTestId } = render( <FirstApp title={ title }/> )

        // esta me dice que existe, pero no estoy evaluando su contenido    
        expect( getByTestId('test-title') ).toBeTruthy()

        // esta evalúa que sean identicos, mismo tipo, mismos espacios, mismo caseing, todo igual 
        expect( getByTestId('test-title').innerHTML ).toBe(title)

        // en esta no me importa que hayan letras antes o después, solo tiene que contener esa palabra, y pasa la prueba
        expect( getByTestId('test-title').innerHTML ).toContain(title)

    });


    test('debe de mostrar el subtítulo enviado por props', () => {

        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );
        // 'getAllByText' va a regresar un arreglo de elementos HTML, por lo tanto uso el 'length' para saber cuantos elementos me esta regresando, como en este caso hay dos etiquetas de subtítulo, pasa la prueba
        expect( getAllByText(subTitle).length ).toBe(2);


    });


});
