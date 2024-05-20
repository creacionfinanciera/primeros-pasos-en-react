import { fireEvent, render, screen } from '@testing-library/react';
import { CounterSubstractApp } from '../src/CounterSubtractApp';

describe('Pruebas en <CounterSubstractApp />', () => {

    const initialValue = 10;
    
    test('debe de hacer match con el snapshot', () => {

        const { container } = render( <CounterSubstractApp value={ initialValue } /> )
        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar el valor inicial de 100 <CounterSubstractApp value={ 100 } />', () => {

        render( <CounterSubstractApp value={ 100 } /> );
        expect( screen.getByText(100) ).toBeTruthy();

    });

    // Con estas pruebas vamos a simular eventos Click
    test('debe de incrementar con el botón +1', () => {

        
        render( <CounterSubstractApp value={ initialValue } /> ); 
        // ahora vamos a simular el click en el botón +1, colocamos '+1' em getByText porque el botón objetivo tiene el texto +1 adentro, y solo ese +1 hay en el componente que estoy probando
        fireEvent.click( screen.getByText('+1') )
        // y validamos que después del clic, al sumar +1 a 10, nos de 11
        expect( screen.getByText('11') ).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () => {

        render( <CounterSubstractApp value={ initialValue } /> ); 
        fireEvent.click( screen.getByText('-1') )
        // recordemos que con este comando podemos ver como esta el screen en cada momento
        // screen.debug();
        expect( screen.getByText('9') ).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => {

        render( <CounterSubstractApp value={ 355 } /> ); 
        // aqui simulamos que se le da clic al boton de +1 tres veces
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // aqui simulamos que se le da clic al boton de reset
        // fireEvent.click( screen.getByText('Reset') );
        // vamos a simularlo de otra forma, para esto en la etiqueta del boton Reset en la aplicación, debo tener el atributo 'aria-label'
        // react-testing-library nos muestra todos nombres de los roles que tengo y me guía, siempre y cuando le coloque name: 'hola-mundo', que seria un name que no existe
        // tambien podria colocar el atributo name o el atributo id en el HTML, que son bastante comunes, name="btn-reset" o id="btn-reset"
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );

        // podemos visualizar como despues de subir a 13 el contador, después bajó a 10 nuevamente, al dar clic al boton de Reset
        screen.debug();

        expect( screen.getByText( 355 ) ).toBeTruthy();

    });




});