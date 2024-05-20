import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

// en este archivo lo que vamos a hacer es organizar el archivo de pruebas 'FirstApp.test.jsx' de tal manera que quede con código reutilizado y más limpio

describe('Pruebas en <FirstApp />', () => {

    // como vamos a usar esta constante en varias pruebas, la ponemos aqui arriba
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {

        
        render( <FirstApp title={ title } /> );
        // para tener referencia al objeto que esta generando el render puedo usar 'screen', pero antes me toca importarlo arriba
        // en pocas palabras, el screen es el objeto que nosotros estamos renderizando, y nos ayuda a hacer muchas limpiezas automáticas después de cada prueba
        // 'screen.debug' nos muestra todo el componente renderizado
        // screen.debug();

        // con esta prueba evaluamos que el titulo tiene que existir, y la prueba pasa
        expect( screen.getByText(title) ).toBeTruthy();
        // con esta prueba podemos evaluar que el título no exista
        // expect( screen.getByText(title) ).not.toBeTruthy();

    });

    test('debe de mostrar el titulo en un h1', () => {
        
        render( <FirstApp title={ title } /> );
        // vamos a obtenerlo por un rol con 'getByRole', es decir, etiquetas HTML
        // y quiero especificar el que tenga nivel 1, que sería el mismo 'h1'
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );  

    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        render(
            <FirstApp
                title={ title }
                subTitle={ subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });




});