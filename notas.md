# PRIMEROS PASOS EN REACT

## ¿Qué son los componentes?
Un componente es una pequeña pieza de código encapsulada re-utilizable, que realiza un trabajo en específico, que puede tener estado o no, son como bloques de elementos para tener la aplicación más organizada.

![componentes](./img/Imagen-componentes.png)

![rutasComponentes](./img/imagen-rutas-componentes.png)

Enfoquemonos ahora en el cuadro verde que va a ser un formulario, cuando es mostrado o renderizado la primera vez, tiene un estado inicial, ese estado inicial es como se encuentra la información de ese componente la primera vez cuando se abre. Ese estado podriamos verlo como que el nombre, apellido y edad no tienen ningún valor, por consiguiente el componente despliega esta información en pantalla.

![estadoInicial](./img/imagen-estado-inicial.png)

Pero eventualemente nuestro usuario empieza a escribir, hace modificaciones, y ahora tenemos nuestro formulario ya con valores, cada vez que el usuario toco una tecla y nosotros cambiamos el HTML o mostramos a información en pantalla, eso cambia el estado.

![estadoSiguiente](./img/imagen-estado-siguiente.png)

Entonces en pocas palabras, pensemos que el estado es como se encuentra la información del componente en un punto determinado del tiempo.

## Primera aplicación de react
Hay dos formas mediante las cuales nosotros podemos trabajar aplicaciones de react que ya vengan preconfiguradas con todo lo que nosotros vamos a ocupar. Una de ellas es el "Create React App", que fue el que nosotros usamos en la sección anterior para crear la introducción de javascript, la cual es buena porque agiliza mucho la visualización de los archivos en el navegador, y es muy utilizada porque viene ya la configuración de pruebas hecha, variables de entorno, y es bastante util pero trabaja en base a "Webpacks", y no es que sea un problema, pero a diferencia de Webpack, "Vite" utiliza otra forma para hacer los cambios de módulo, lo cual es sorprendentemente más rápido, especialmente cuando el proyecto es más grande, VITE tiende a ser una experiencia de desarrollo super amigable, rápida, eficiente y es años luz de diferencia entre Create React App y Vite.

Para crear el proyecto con Vite:
- `yarn` para independencias locales
- `npm` para independencias globales

En este caso no me funcionó el comando `yarn`, entonces voy a proceder a trabajar con `npm`:

1. `npm create vite` => para comenzar a crear el proyecto
2. `counter-app` => me pide el nombre del proyecto y le doy el que yo considere
3. `react` => me pide que seleccione el framework a utilizar, en este caso react
4. `javascript` => me pide seleccionar una variante, y en este caso escogemos react con javascript
5. `counter-app-vite` => me posiciono en la carpeta del proyecto
6. `npm install` => para instalar las dependencias que se encuentran en ese proyecto
7. Observamos como se crean todas las carpetas y archivos del proyecto en visual studio code, en la capeta 'counter-app-vite'. Todos estos directorios los vamos a explicar en la siguiente clase.

Para crear el proyecto con Create React App:
1. `cd ..` => Nos salimos de la carpeta del proyecto creado con vite
2. `npx create-react-app`+`counter-app` => para comenzar a crear el proyecto
3. Observamos como se crean todas las carpetas y archivos del proyecto en visual studio code, en la carpeta 'counter-app'. Le cambiamos el nombre a 'counter-app-cra'.


