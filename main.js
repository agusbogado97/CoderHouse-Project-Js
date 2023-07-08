const cantidadAlumnos = 3;
const notaAprobada = 5;
const notaRegular = 3;
const notaDesaprobada = 1;

for (let i = 1; i < cantidadAlumnos; i++) {
    let nombreDeAlumnos = prompt("Ingrese el nombre del alumno para saber su nota: ");

    function mostrarNota(nombreDeAlumnos) {
        const nombreAgustin = "agustin";
        const nombreMarcos = "marcos";
        const nombreRobert = "robert";

        nombreDeAlumnos = nombreDeAlumnos.toLowerCase();

        if (nombreDeAlumnos == nombreAgustin) {
            return {
                nota: notaRegular,
                aprobado: false
            };
        } else if (nombreDeAlumnos == nombreMarcos) {
            return {
                nota: notaAprobada,
                aprobado: notaAprobada == notaAprobada
            };
        } else if (nombreDeAlumnos == nombreRobert) {
            return {
                nota: notaDesaprobada,
                aprobado: false
            };
        } else {
            console.log("¿Quién te conoce papá?");
            return null;
        }
    }

    const resultado = mostrarNota(nombreDeAlumnos);

    if (resultado !== null) {
        console.log("La nota es:", resultado.nota);
        console.log("¿Aprobado?", resultado.aprobado);
    }
}