const cantidadAlumnos = 3; // Número de veces que repetiré el ciclo for.
const notaAprobada = 5; //Nota aprobada true.
const notaRegular = 3; //Nota desaprobada, regular.
const notaDesaprobada = 1; //Nota desaprobada, desaprobada.

for (let i = 1; i <= cantidadAlumnos; i++) { //Defino que i es igual a 1, y que se va a repetir hasta 3 veces, ya que hay 3 alumnos, sumandose de uno en uno.
    let nombreDeAlumnos = prompt("Ingrese el nombre del alumno para saber su nota: "); //Quiero que el nombre de los alumnos lo pueda ingresar por un Prompt.

    function mostrarNota(nombreDeAlumnos) { //En mi función quiero que se muestre la notas de mis alumnos, los voy a declarar en constantes, ya que el valor no va a cambiar.
        const nombreAgustin = "agustin";
        const nombreMarcos = "marcos";
        const nombreRobert = "robert";

        nombreDeAlumnos = nombreDeAlumnos.toLowerCase(); //Declaro toLowerCase para que cualquier caracter en mayúscula, pase a mnúscula.

        if (nombreDeAlumnos == nombreAgustin) { //Si nombre de Alumnos es igual a un nombre en especifico:
            return {                            //Me va a retornar lo siguiente:
                nota: notaRegular,
                aprobado: false
            };
        } else if (nombreDeAlumnos == nombreMarcos) { //Me va a retornar lo siguiente:
            return {
                nota: notaAprobada,
                aprobado: notaAprobada == notaAprobada
            };
        } else if (nombreDeAlumnos == nombreRobert) { //Me va a retornar lo siguiente:
            return {
                nota: notaDesaprobada,
                aprobado: false
            };
        } else {                                      //Si no hay un nombre asignado, me va a retornar lo siguiente:
            console.log("¿Quién te conoce papá?");
            return null;
        }
    }

    const resultado = mostrarNota(nombreDeAlumnos); //Acá declaro una constante que es resultado, para que me muestre la nota de los alumnos.

    if (resultado !== null) {                       //Si resultado es estrictamente distinto a null, el resultado será:
        console.log("La nota es:", resultado.nota); //En la consola me mostrará la nota.
        console.log("¿Aprobado?", resultado.aprobado); //En la consola me mostrará si está aprobado, false en caso de que sea negativo.
    }
}