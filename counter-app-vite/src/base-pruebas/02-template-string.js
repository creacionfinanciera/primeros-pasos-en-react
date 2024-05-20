// si nosotros queremos probar esta función en otro arhivo que no es este, debemos exportarla, nosotros no vamos a poder hacer una prueba de algo que no está siendo exportado

export function getSaludo(nombre) {
    return 'Hola ' + nombre + '!!!';
}

// const nombre = 'Pedro';

// vamos a dejar este console.log para ver que test literalmente va a ejecutar este archivo
// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );