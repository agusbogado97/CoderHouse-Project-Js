let nombreDeAlumnos = prompt("Ingrese el nombre del alumno para saber su nota: ")
const notaAprobada = 5
const notaRegular = 3
const notaDesaprobada = 1

function mostrarNota(nombreDeAlumnos){
    const nombreAgustin = "agustin"
    const nombreMarcos = "marcos"
    const nombreRobert = "robert"

    if(nombreDeAlumnos == nombreAgustin){
        return "La nota es: " + notaRegular
    } else if(nombreDeAlumnos == nombreMarcos){
        return "La nota es: " + notaDesaprobada
    } else if(nombreDeAlumnos == nombreRobert){
        return "La nota es: " + notaAprobada
    } else;{
        return "¿Quién te conoce papá"
    }
}


console.log(mostrarNota(nombreDeAlumnos))
